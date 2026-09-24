
(()=> {
'use strict';
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const CUR=window.JADE_CURRICULUM||[];
const G=window.JADE_GLOSSARY||[];
const STORAGE='jadeUniversityState.v01';
const defaultState=()=>({learn:{week:1,lesson:0,section:0},study:{week:1},completed:{},quiz:{},labs:{},focusSeen:{},notes:{},updatedAt:null});
function state(){
  try{return Object.assign(defaultState(),JSON.parse(localStorage.getItem(STORAGE)||'{}'))}catch{return defaultState()}
}
function save(s){s.updatedAt=new Date().toISOString();localStorage.setItem(STORAGE,JSON.stringify(s));refreshHomeProgress()}
function key(w,l){return `w${w}l${l}`}
function sectionKey(w,l,s){return `${key(w,l)}s${s}`}
function lessonObj(w,l){return CUR.find(x=>x.week===Number(w))?.lessons?.[Number(l)]}
function weekObj(w){return CUR.find(x=>x.week===Number(w))}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function showToast(msg){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.hidden=true;document.body.appendChild(t)}t.textContent=msg;t.hidden=false;clearTimeout(t._timer);t._timer=setTimeout(()=>t.hidden=true,2500)}
function initNav(){const b=$('.nav-toggle'),n=$('.main-nav');if(!b||!n)return;b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open))})}
function pageName(){return document.body?.dataset?.page||''}

function focusModal(kind){
  const s=state();
  const today=new Date().toISOString().slice(0,10);
  const token=`${kind}:${today}`;
  if(s.focusSeen[token])return;
  const m=document.createElement('div');m.className='focus-modal';
  m.innerHTML=`<div class="focus-panel" role="dialog" aria-modal="true" aria-labelledby="focus-title">
    <div class="eyebrow jade">Focus Prep</div><h2 id="focus-title">Set up before you study.</h2>
    <p>This takes about 30 seconds and helps keep the session deliberate.</p>
    <div class="focus-checklist">
      <label class="check-row"><input type="checkbox"> <span>Phone / distractions moved out of reach.</span></label>
      <label class="check-row"><input type="checkbox"> <span>Water, notebook, calculator, and needed tools are ready.</span></label>
      <label class="check-row"><input type="checkbox"> <span>I know the one task I am starting with.</span></label>
      <label class="check-row"><input type="checkbox"> <span>Workspace is comfortable enough to focus.</span></label>
    </div>
    <div class="hero-actions"><button class="button jade" id="focus-start">Start session</button><button class="button ghost" id="focus-skip">Skip for now</button></div>
  </div>`;
  document.body.appendChild(m);
  const close=()=>{s.focusSeen[token]=true;save(s);m.remove()};
  $('#focus-start',m).addEventListener('click',close);$('#focus-skip',m).addEventListener('click',close);
}
function completedCount(){
  const s=state();return Object.values(s.completed||{}).filter(Boolean).length
}
function totalSections(){
  return CUR.reduce((a,w)=>a+w.lessons.reduce((x,l)=>x+l.sections.length,0),0)
}
function refreshHomeProgress(){
  const pct=Math.round(100*completedCount()/Math.max(1,totalSections()));
  const el=$('#home-progress-percent');if(el)el.textContent=`${pct}%`;
  const ec=$('#home-progress-count');if(ec)ec.textContent=`${completedCount()} / ${totalSections()}`;
  const bar=$('#home-progress-bar');if(bar)bar.style.width=`${pct}%`;
  const s=state();
  const resumeLearn=$('#resume-learn');if(resumeLearn)resumeLearn.href=`learn.html?w=${s.learn.week}&l=${s.learn.lesson}&s=${s.learn.section}`;
  const resumeStudy=$('#resume-study');if(resumeStudy)resumeStudy.href=`study.html?w=${s.study.week}`;
}
function glossaryEntryByTerm(term){
  const low=term.toLowerCase();
  return G.find(g=>g.term.toLowerCase()===low||g.slug===low);
}
let glossTip=null,lastAnchor=null,lastAt=0;
function closeGloss(){if(glossTip){glossTip.remove();glossTip=null}}
function openGloss(anchor,e){
  closeGloss();
  const t=document.createElement('aside');t.className='glossary-tip';t.setAttribute('role','tooltip');
  t.innerHTML=`<div class="eyebrow jade">${esc(e.unit||'Glossary')}</div><h3>${esc(e.term)}</h3><p>${esc(e.definition)}</p><p>${esc(e.technical||'')}</p><p class="hint">Double-click this term for the full Glossary entry.</p>`;
  document.body.appendChild(t);glossTip=t;
  const r=anchor.getBoundingClientRect();const tr=t.getBoundingClientRect();
  let left=Math.max(12,Math.min(innerWidth-tr.width-12,r.left+r.width/2-tr.width/2));
  let top=r.bottom+10;if(top+tr.height>innerHeight-12)top=Math.max(12,r.top-tr.height-10);
  t.style.left=`${left}px`;t.style.top=`${top}px`;
}
function decorateGlossary(scope){
  if(!scope||!G.length)return;
  const variants=G.map(e=>({e,text:e.term})).sort((a,b)=>b.text.length-a.text.length);
  const seen=new Set();
  const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode(n){
    const p=n.parentElement;if(!p||!n.nodeValue.trim())return NodeFilter.FILTER_REJECT;
    if(p.closest('a,button,code,pre,input,select,textarea,.glossary-term,[data-no-glossary]'))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  const nodes=[];let n;while(n=walker.nextNode())nodes.push(n);
  for(const node of nodes){
    let txt=node.nodeValue;
    for(const v of variants){
      if(seen.has(v.e.slug))continue;
      const re=new RegExp(`\\b${v.text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'i');
      const m=txt.match(re);if(!m)continue;
      const start=m.index,end=start+m[0].length;
      const before=document.createTextNode(txt.slice(0,start)),after=document.createTextNode(txt.slice(end));
      const a=document.createElement('a');a.className='glossary-term';a.href=`glossary.html#${v.e.slug}`;a.textContent=m[0];a.dataset.slug=v.e.slug;
      a.addEventListener('click',ev=>{
        ev.preventDefault();const now=performance.now();
        if(lastAnchor===a && now-lastAt<500){location.href=a.href;return}
        lastAnchor=a;lastAt=now;openGloss(a,v.e);
      });
      node.parentNode.insertBefore(before,node);node.parentNode.insertBefore(a,node);node.parentNode.insertBefore(after,node);node.remove();
      seen.add(v.e.slug);break;
    }
  }
}
document.addEventListener('click',e=>{if(glossTip&&!e.target.closest('.glossary-term,.glossary-tip'))closeGloss()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGloss()});

function initHome(){
  refreshHomeProgress();
  const core=$('#core-competency-grid');if(core){
    core.innerHTML=CUR.map(w=>`<div class="card"><div class="eyebrow ${w.week%2?'jade':'purple'}">Priority ${w.week}</div><h3>${esc(w.title)}</h3><p>${esc(w.short)}</p><span class="badge ${w.week>5?'purple':''}">${esc(w.priority)}</span></div>`).join('');
  }
}
function populateWeekSelect(sel,current){
  if(!sel)return;sel.innerHTML=CUR.map(w=>`<option value="${w.week}" ${w.week===Number(current)?'selected':''}>Priority ${w.week}: ${esc(w.title)}</option>`).join('');
}
function initLearn(){
  focusModal('learn');
  const params=new URLSearchParams(location.search),s=state();
  let w=Number(params.get('w')||s.learn.week||1), l=Number(params.get('l')??s.learn.lesson??0), sec=Number(params.get('s')??s.learn.section??0);
  const weekSel=$('#learn-week'),lessonSel=$('#learn-lesson'),sectionSel=$('#learn-section');
  function renderSelectors(){
    populateWeekSelect(weekSel,w);
    const W=weekObj(w);lessonSel.innerHTML=W.lessons.map((x,i)=>`<option value="${i}" ${i===l?'selected':''}>Lesson ${i+1}: ${esc(x.title)}</option>`).join('');
    const L=lessonObj(w,l);sectionSel.innerHTML=L.sections.map((x,i)=>`<option value="${i}" ${i===sec?'selected':''}>Page ${i+1} of ${L.sections.length}: ${esc(x.title)}</option>`).join('');
  }
  function render(){
    const W=weekObj(w),L=lessonObj(w,l),S=L.sections[sec];renderSelectors();
    $('#learn-title').textContent=`Priority ${W.week}: ${W.title}`;
    $('#learn-subtitle').textContent=W.short;
    $('#lesson-title').textContent=L.title;
    $('#lesson-badges').innerHTML=`<span class="badge">${esc(W.priority)}</span>${W.ceta.map(x=>`<span class="badge purple">CETa: ${esc(x)}</span>`).join('')}`;
    $('#lesson-page-label').textContent=`Page ${sec+1} of ${L.sections.length}`;
    const body=$('#lesson-body');
    body.innerHTML=`<section class="teaching-section" id="teaching-${sec}">
      <div class="eyebrow jade">Teaching section</div><h3>${esc(S.title)}</h3><p>${S.text}</p>
      ${S.formula?`<div class="formula">${esc(S.formula)}</div>`:''}
      ${S.example?`<div class="callout jade"><strong>Worked example</strong><p>${esc(S.example)}</p></div>`:''}
      ${S.remember?`<div class="callout"><strong>Remember</strong><p>${esc(S.remember)}</p></div>`:''}
      <div class="resource-card"><div class="resource-kind">R</div><div><strong>Related learning</strong><p>Required: review the matching concept card in Study after this section. Use Library for the curated video/written resource pair.</p></div></div>
    </section>`;
    decorateGlossary(body);
    const q=$('#lesson-check');q.innerHTML='';
    if(sec===L.sections.length-1){
      q.innerHTML=`<div class="question" id="check-${key(w,l)}"><div class="eyebrow purple">Required check</div><h3>${esc(L.check.q)}</h3>
      ${L.check.options.map((o,i)=>`<label><input type="radio" name="q" value="${i}"> ${esc(o)}</label>`).join('')}
      <button class="button purple" id="check-answer">Check answer</button>
      <a class="button ghost" href="#teaching-${sec}">Review teaching section</a><div class="answer-feedback" id="feedback"></div></div>
      <div class="callout jade"><strong>Hands-on lab</strong><p>${esc(L.lab)}</p><button class="button outline" id="lab-complete">${state().labs[key(w,l)]?'Lab complete ✓':'Mark lab complete'}</button></div>`;
      $('#check-answer').addEventListener('click',()=>{
        const picked=$('input[name="q"]:checked',q),fb=$('#feedback');if(!picked){fb.textContent='Choose an answer first.';return}
        const ok=Number(picked.value)===L.check.answer;fb.className=`answer-feedback ${ok?'correct':'incorrect'}`;fb.innerHTML=`${ok?'Correct.':'Not yet.'} ${esc(L.check.why)} ${ok?'':`<a href="#teaching-${sec}">Back to teaching</a>`}`;
        const st=state();st.quiz[key(w,l)]=ok;save(st);
      });
      $('#lab-complete').addEventListener('click',()=>{const st=state();st.labs[key(w,l)]=true;save(st);render()});
    }
    const st=state();st.learn={week:w,lesson:l,section:sec};st.completed[sectionKey(w,l,sec)]=true;save(st);
    $$('.stage-list button').forEach(b=>{b.classList.toggle('active',Number(b.dataset.s)===sec);b.classList.toggle('complete',!!state().completed[sectionKey(w,l,Number(b.dataset.s))])});
    $('#prev-section').disabled=sec===0&&l===0&&w===1;
    const last=sec===L.sections.length-1&&l===W.lessons.length-1&&w===CUR.length;
    $('#next-section').textContent=last?'Finish track':'Continue';
    history.replaceState(null,'',`learn.html?w=${w}&l=${l}&s=${sec}`);
  }
  function rebuildRail(){
    const L=lessonObj(w,l);
    $('#stage-list').innerHTML=L.sections.map((x,i)=>`<button type="button" data-s="${i}">Page ${i+1}: ${esc(x.title)}</button>`).join('');
    $$('#stage-list button').forEach(b=>b.addEventListener('click',()=>{sec=Number(b.dataset.s);render()}));
  }
  weekSel.addEventListener('change',()=>{w=Number(weekSel.value);l=0;sec=0;rebuildRail();render()});
  lessonSel.addEventListener('change',()=>{l=Number(lessonSel.value);sec=0;rebuildRail();render()});
  sectionSel.addEventListener('change',()=>{sec=Number(sectionSel.value);render()});
  $('#prev-section').addEventListener('click',()=>{if(sec>0)sec--;else if(l>0){l--;sec=lessonObj(w,l).sections.length-1;rebuildRail()}else if(w>1){w--;l=weekObj(w).lessons.length-1;sec=lessonObj(w,l).sections.length-1;rebuildRail()}render()});
  $('#next-section').addEventListener('click',()=>{const L=lessonObj(w,l),W=weekObj(w);if(sec<L.sections.length-1)sec++;else if(l<W.lessons.length-1){l++;sec=0;rebuildRail()}else if(w<CUR.length){w++;l=0;sec=0;rebuildRail()}else{location.href='progress.html';return}render()});
  rebuildRail();render();
}
function initStudy(){
  focusModal('study');
  const p=new URLSearchParams(location.search),s=state();let w=Number(p.get('w')||s.study.week||1);
  const sel=$('#study-week');populateWeekSelect(sel,w);
  function render(){
    const W=weekObj(w),st=state();st.study.week=w;save(st);history.replaceState(null,'',`study.html?w=${w}`);
    $('#study-title').textContent=`Study Priority ${w}: ${W.title}`;
    const cards=[];
    W.lessons.forEach((L,li)=>L.sections.forEach((S,si)=>cards.push(`<div class="card"><div class="eyebrow jade">Lesson ${li+1} · Concept ${si+1}</div><h3>${esc(S.title)}</h3><p>${S.remember||S.text.replace(/<[^>]+>/g,'').slice(0,260)}</p><div class="hero-actions"><a class="button outline" href="learn.html?w=${w}&l=${li}&s=${si}">Open teaching</a></div></div>`)));
    $('#study-concepts').innerHTML=cards.join('');
    $('#study-checklist').innerHTML=W.outcomes.map(x=>`<label class="check-row"><input type="checkbox"> <span>${esc(x)}</span></label>`).join('');
    $('#study-labs').innerHTML=W.lessons.map((L,i)=>`<div class="card"><div class="eyebrow purple">Lab ${i+1}</div><h3>${esc(L.title)}</h3><p>${esc(L.lab)}</p><span class="badge ${st.labs[key(w,i)]?'':'gold'}">${st.labs[key(w,i)]?'Completed':'Not yet completed'}</span></div>`).join('');
  }
  sel.addEventListener('change',()=>{w=Number(sel.value);render()});render();
}
function initGlossary(){
  const list=$('#glossary-list'),search=$('#glossary-search');
  function render(){
    const q=(search.value||'').trim().toLowerCase();
    list.innerHTML=G.filter(e=>!q||`${e.term} ${e.definition} ${e.technical}`.toLowerCase().includes(q))
      .map(e=>`<article class="glossary-entry" id="${esc(e.slug)}"><div class="eyebrow jade">${esc(e.unit||'Technical vocabulary')}</div><h3>${esc(e.term)}</h3><p>${esc(e.definition)}</p><p><strong>Technician context:</strong> ${esc(e.technical)}</p></article>`).join('');
  }
  search.addEventListener('input',render);render();
}
function resources(){
 return [
 {week:1,type:"Video",status:"Required",title:"DMM fundamentals and safe measurement practice",provider:"Curated video slot",focus:"Voltage, resistance, continuity, current setup",action:"Perform the Week 1 DMM lab immediately afterward."},
 {week:1,type:"Written",status:"Required",title:"Digital multimeter safety and measurement guide",provider:"Curated literature slot",focus:"Meter categories, jacks, ranges, safe resistance testing",action:"Add a pre-measurement checklist to your notes."},
 {week:2,type:"Video",status:"Required",title:"How to read electronic schematics",provider:"Curated video slot",focus:"Symbols, nets, rails, reference designators",action:"Annotate the Week 2 practice schematic."},
 {week:2,type:"Written",status:"Required",title:"Schematic-reading reference",provider:"Curated literature slot",focus:"Power path, signal path, test points",action:"Create an expected-value table."},
 {week:3,type:"Video",status:"Required",title:"Voltage-drop troubleshooting",provider:"Curated video slot",focus:"Connections, load, reference measurements",action:"Run the loaded-connection exercise."},
 {week:3,type:"Written",status:"Required",title:"Component testing with a DMM",provider:"Curated literature slot",focus:"Resistance, diode test, continuity limitations",action:"Document isolated vs in-circuit readings."},
 {week:4,type:"Video",status:"Required",title:"Systematic electronic troubleshooting",provider:"Curated video slot",focus:"Fault isolation, divide-and-conquer",action:"Complete one fault report."},
 {week:4,type:"Written",status:"Required",title:"Troubleshooting workflow and root-cause notes",provider:"Curated literature slot",focus:"Evidence, hypothesis, retest",action:"Use the template on an actual fault."},
 {week:5,type:"Video",status:"Required",title:"Through-hole soldering and rework basics",provider:"Curated video slot",focus:"Wetting, heat, common defects",action:"Solder ten joints and inspect them."},
 {week:5,type:"Written",status:"Required",title:"ESD and workmanship reference",provider:"Curated literature slot",focus:"ESD handling, workmanship, connectors",action:"Set up your bench checklist."},
 {week:6,type:"Video",status:"Required",title:"Oscilloscope beginner workflow",provider:"Curated video slot",focus:"Volts/div, time/div, trigger",action:"Capture and measure a square wave."},
 {week:6,type:"Written",status:"Required",title:"Oscilloscope and bench-supply quick reference",provider:"Curated literature slot",focus:"Safe powering and waveform measurements",action:"Create a one-page instrument cheat sheet."},
 {week:7,type:"Video",status:"Required",title:"Logic analyzer fundamentals",provider:"Curated video slot",focus:"Digital capture, sampling, channel labels",action:"Save one annotated capture."},
 {week:7,type:"Written",status:"Required",title:"Digital logic levels and pull resistors",provider:"Curated literature slot",focus:"Thresholds, floating inputs, timing",action:"Test a pulled-up digital input."},
 {week:8,type:"Video",status:"Required",title:"UART, I²C, and SPI troubleshooting",provider:"Curated video slot",focus:"Protocol signals and failure clues",action:"Decode one captured transaction."},
 {week:8,type:"Written",status:"Required",title:"Board bring-up checklist",provider:"Curated literature slot",focus:"Rails, reset, clocks, peripherals",action:"Use it during the capstone."}
 ];
}
function initResources(){
 const data=resources(),body=$('#resource-body'),week=$('#resource-week'),type=$('#resource-type'),q=$('#resource-search');
 populateWeekSelect(week,1);week.insertAdjacentHTML('afterbegin','<option value="all">All priorities</option>');week.value='all';
 function render(){
  const wf=week.value,tf=type.value,query=q.value.trim().toLowerCase();
  const rows=data.filter(r=>(wf==='all'||r.week===Number(wf))&&(tf==='all'||r.type===tf)&&(!query||Object.values(r).join(' ').toLowerCase().includes(query)));
  body.innerHTML=rows.map(r=>`<tr><td>${r.week}</td><td><span class="badge ${r.type==='Video'?'purple':''}">${r.type}</span></td><td><strong>${esc(r.title)}</strong><br><small>${esc(r.provider)}</small></td><td>${esc(r.focus)}</td><td>${esc(r.action)}</td></tr>`).join('');
 }
 [week,type,q].forEach(el=>el.addEventListener(el===q?'input':'change',render));render();
}
function initPractice(){
  const list=$('#practice-list'),s=state();
  const rows=[];
  CUR.forEach(w=>w.lessons.forEach((L,li)=>{
    const quiz=!!s.quiz[key(w.week,li)],lab=!!s.labs[key(w.week,li)];
    if(!quiz||!lab)rows.push({w:w.week,L,li,quiz,lab});
  }));
  list.innerHTML=(rows.length?rows.slice(0,8).map(r=>`<div class="card"><div class="eyebrow ${r.quiz?'jade':'purple'}">Priority ${r.w}</div><h3>${esc(r.L.title)}</h3><p>${!r.quiz?'Required check not yet passed. ':''}${!r.lab?'Hands-on lab not yet marked complete.':''}</p><a class="button jade" href="learn.html?w=${r.w}&l=${r.li}&s=${r.L.sections.length-1}">Practice this</a></div>`).join(''):`<div class="card"><h3>Nothing is due.</h3><p>All current checks and labs are complete. Continue learning or revisit a weak skill deliberately.</p></div>`);
}
function initProgress(){
  const s=state(),total=totalSections(),done=completedCount(),pct=Math.round(100*done/Math.max(1,total));
  $('#progress-percent').textContent=`${pct}%`;$('#progress-bar').style.width=`${pct}%`;$('#progress-count').textContent=`${done} / ${total} teaching sections`;
  const rows=CUR.map(w=>{
    const sectionKeys=[];w.lessons.forEach((L,li)=>L.sections.forEach((_,si)=>sectionKeys.push(sectionKey(w.week,li,si))));
    const d=sectionKeys.filter(k=>s.completed[k]).length;
    const quizzes=w.lessons.filter((_,li)=>s.quiz[key(w.week,li)]).length;
    const labs=w.lessons.filter((_,li)=>s.labs[key(w.week,li)]).length;
    const ready=(d===sectionKeys.length&&quizzes===w.lessons.length&&labs===w.lessons.length);
    return `<tr><td>Priority ${w.week}</td><td><strong>${esc(w.title)}</strong></td><td>${d}/${sectionKeys.length}</td><td>${quizzes}/${w.lessons.length}</td><td>${labs}/${w.lessons.length}</td><td><span class="badge ${ready?'':'gold'}">${ready?'Complete':'In progress'}</span></td></tr>`;
  });
  $('#progress-body').innerHTML=rows.join('');
  const firstFive=CUR.slice(0,5).every(w=>w.lessons.every((L,li)=>s.quiz[key(w.week,li)]&&s.labs[key(w.week,li)]));
  $('#apply-status').innerHTML=firstFive?`<span class="badge">Core gate complete</span><h3>Apply aggressively while continuing the embedded bridge.</h3><p>You have completed the first five practical job-readiness priorities with required checks and labs.</p>`:`<span class="badge gold">Core gate in progress</span><h3>Build credible hands-on beginner evidence in Priorities 1–5.</h3><p>This site does not require you to finish all eight priorities before applying. The first five form the immediate technician-readiness core.</p>`;
}
function init(){
  initNav();
  const p=pageName();
  if(p==='home')initHome();
  if(p==='learn')initLearn();
  if(p==='study')initStudy();
  if(p==='glossary')initGlossary();
  if(p==='resources')initResources();
  if(p==='practice')initPractice();
  if(p==='progress')initProgress();
}
document.addEventListener('DOMContentLoaded',init);
})();
