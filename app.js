
(()=> {
'use strict';
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const CUR=window.JADE_CURRICULUM||[];
const G=window.JADE_GLOSSARY||[];
const RES=window.JADE_RESOURCES||[];
const STORAGE='jadeUniversityState.v02';
const LEGACY_STORAGE='jadeUniversityState.v01';
const SCHEMA=2;

const defaultState=()=>({
  schema:SCHEMA,
  learn:{week:1,lesson:0,section:0},
  study:{week:1},
  completed:{},
  quiz:{},
  labs:{},
  labRecords:{},
  studyChecks:{},
  focusSeen:{},
  notes:{},
  migrationNotice:false,
  updatedAt:null
});

function safeParse(raw){try{return JSON.parse(raw)}catch{return null}}
function normalizeState(raw){
  const d=defaultState();
  if(!raw||typeof raw!=='object') return d;
  const s={...d,...raw};
  s.learn={...d.learn,...(raw.learn||{})};
  s.study={...d.study,...(raw.study||{})};
  for(const k of ['completed','quiz','labs','labRecords','studyChecks','focusSeen','notes']){
    if(!s[k]||typeof s[k]!=='object') s[k]={};
  }
  s.schema=SCHEMA;
  return s;
}
function migrateLegacy(){
  const old=safeParse(localStorage.getItem(LEGACY_STORAGE)||'');
  if(!old) return defaultState();
  const s=defaultState();
  // Curriculum identities changed in v0.2, so old completion/quiz/lab flags are intentionally
  // not migrated. Resume position and focus-prep history are safe to preserve.
  if(old.learn) s.learn={...s.learn,...old.learn};
  if(old.study) s.study={...s.study,...old.study};
  if(old.focusSeen&&typeof old.focusSeen==='object') s.focusSeen=old.focusSeen;
  if(old.notes&&typeof old.notes==='object') s.notes=old.notes;
  s.migrationNotice=true;
  return s;
}
function state(){
  const current=safeParse(localStorage.getItem(STORAGE)||'');
  if(current) return normalizeState(current);
  const migrated=migrateLegacy();
  localStorage.setItem(STORAGE,JSON.stringify(migrated));
  return migrated;
}
function save(s){
  s.schema=SCHEMA;
  s.updatedAt=new Date().toISOString();
  localStorage.setItem(STORAGE,JSON.stringify(s));
  refreshHomeProgress();
}
function key(w,l){return `w${w}l${l}`}
function sectionKey(w,l,s){return `${key(w,l)}s${s}`}
function weekObj(w){return CUR.find(x=>x.week===Number(w))}
function lessonObj(w,l){return weekObj(w)?.lessons?.[Number(l)]}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function clampNav(s){
  let w=Number(s.learn?.week)||1;
  if(!weekObj(w)) w=1;
  let l=Number(s.learn?.lesson)||0;
  if(!lessonObj(w,l)) l=0;
  let sec=Number(s.learn?.section)||0;
  const max=Math.max(0,(lessonObj(w,l)?.sections?.length||1)-1);
  sec=Math.max(0,Math.min(max,sec));
  s.learn={week:w,lesson:l,section:sec};
  if(!weekObj(Number(s.study?.week))) s.study={week:1};
  return s;
}
function showToast(msg){
  let t=$('#toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.hidden=true;document.body.appendChild(t)}
  t.textContent=msg;t.hidden=false;clearTimeout(t._timer);t._timer=setTimeout(()=>t.hidden=true,3000);
}
function initNav(){
  const b=$('.nav-toggle'),n=$('.main-nav');if(!b||!n)return;
  b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open))});
}
function pageName(){return document.body?.dataset?.page||''}

function focusModal(kind){
  const s=state();
  const today=new Date().toISOString().slice(0,10);
  const token=`${kind}:${today}`;
  if(s.focusSeen[token])return;
  const m=document.createElement('div');m.className='focus-modal';
  m.innerHTML=`<div class="focus-panel" role="dialog" aria-modal="true" aria-labelledby="focus-title">
    <div class="eyebrow jade">Focus Prep</div><h2 id="focus-title">Set up before you study.</h2>
    <p>Thirty seconds now prevents ten minutes of restarting later.</p>
    <div class="focus-checklist">
      <label class="check-row"><input type="checkbox"> <span>Phone / distractions moved out of reach.</span></label>
      <label class="check-row"><input type="checkbox"> <span>Water, notebook, calculator, and required tools are ready.</span></label>
      <label class="check-row"><input type="checkbox"> <span>I know the one task I am starting with.</span></label>
      <label class="check-row"><input type="checkbox"> <span>Workspace is comfortable and safe enough to focus.</span></label>
    </div>
    <div class="hero-actions"><button class="button jade" id="focus-start">Start session</button><button class="button ghost" id="focus-skip">Skip for now</button></div>
  </div>`;
  document.body.appendChild(m);
  const close=()=>{s.focusSeen[token]=true;save(s);m.remove()};
  $('#focus-start',m).addEventListener('click',close);$('#focus-skip',m).addEventListener('click',close);
}

function totalSections(){return CUR.reduce((a,w)=>a+w.lessons.reduce((x,l)=>x+l.sections.length,0),0)}
function completedCount(){const s=state();return Object.values(s.completed||{}).filter(Boolean).length}
function lessonReady(s,w,l){
  const L=lessonObj(w,l); if(!L)return false;
  const sections=L.sections.every((_,si)=>!!s.completed[sectionKey(w,l,si)]);
  return sections && !!s.quiz[key(w,l)] && !!s.labs[key(w,l)];
}
function moduleReady(s,w){
  const W=weekObj(w);return !!W && W.lessons.every((_,li)=>lessonReady(s,w,li));
}
function refreshHomeProgress(){
  const pct=Math.round(100*completedCount()/Math.max(1,totalSections()));
  const el=$('#home-progress-percent');if(el)el.textContent=`${pct}%`;
  const ec=$('#home-progress-count');if(ec)ec.textContent=`${completedCount()} / ${totalSections()}`;
  const bar=$('#home-progress-bar');if(bar)bar.style.width=`${pct}%`;
  const s=clampNav(state());
  const rl=$('#resume-learn');if(rl)rl.href=`learn.html?w=${s.learn.week}&l=${s.learn.lesson}&s=${s.learn.section}`;
  const rs=$('#resume-study');if(rs)rs.href=`study.html?w=${s.study.week}`;
}

let glossTip=null,lastAnchor=null,lastAt=0;
function closeGloss(){if(glossTip){glossTip.remove();glossTip=null}}
function openGloss(anchor,e){
  closeGloss();const t=document.createElement('aside');t.className='glossary-tip';t.setAttribute('role','tooltip');
  t.innerHTML=`<div class="eyebrow jade">${esc(e.unit||'Glossary')}</div><h3>${esc(e.term)}</h3><p>${esc(e.definition)}</p><p>${esc(e.technical||'')}</p><p class="hint">Double-click this term for the full Glossary entry.</p>`;
  document.body.appendChild(t);glossTip=t;
  const r=anchor.getBoundingClientRect(),tr=t.getBoundingClientRect();
  let left=Math.max(12,Math.min(innerWidth-tr.width-12,r.left+r.width/2-tr.width/2));
  let top=r.bottom+10;if(top+tr.height>innerHeight-12)top=Math.max(12,r.top-tr.height-10);
  t.style.left=`${left}px`;t.style.top=`${top}px`;
}
function decorateGlossary(scope){
  if(!scope||!G.length)return;
  const variants=G.map(e=>({e,text:e.term})).sort((a,b)=>b.text.length-a.text.length),seen=new Set();
  const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT,{acceptNode(n){
    const p=n.parentElement;if(!p||!n.nodeValue.trim())return NodeFilter.FILTER_REJECT;
    if(p.closest('a,button,code,pre,input,select,textarea,.glossary-term,[data-no-glossary]'))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  const nodes=[];let n;while(n=walker.nextNode())nodes.push(n);
  for(const node of nodes){
    const txt=node.nodeValue;
    for(const v of variants){
      if(seen.has(v.e.slug))continue;
      const re=new RegExp(`\\b${v.text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'i'),m=txt.match(re);if(!m)continue;
      const start=m.index,end=start+m[0].length;
      const before=document.createTextNode(txt.slice(0,start)),after=document.createTextNode(txt.slice(end));
      const a=document.createElement('a');a.className='glossary-term';a.href=`glossary.html#${v.e.slug}`;a.textContent=m[0];a.dataset.slug=v.e.slug;
      a.addEventListener('click',ev=>{
        ev.preventDefault();const now=performance.now();
        if(lastAnchor===a&&now-lastAt<500){location.href=a.href;return}
        lastAnchor=a;lastAt=now;openGloss(a,v.e);
      });
      node.parentNode.insertBefore(before,node);node.parentNode.insertBefore(a,node);node.parentNode.insertBefore(after,node);node.remove();seen.add(v.e.slug);break;
    }
  }
}
document.addEventListener('click',e=>{if(glossTip&&!e.target.closest('.glossary-term,.glossary-tip'))closeGloss()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGloss()});

function resourceById(id){return RES.find(r=>r.id===id)}
function resourceCard(id){
  const r=resourceById(id);if(!r)return'';
  return `<div class="resource-card"><div class="resource-kind">${r.type==='Video'?'▶':'R'}</div><div>
    <strong>${esc(r.title)}</strong><p>${esc(r.provider)} · ${esc(r.status)}</p>
    <p>${esc(r.focus)}</p><div class="hero-actions"><a class="button ghost" href="${esc(r.url)}" target="_blank" rel="noopener">Open resource ↗</a></div>
  </div></div>`;
}

function initHome(){
  refreshHomeProgress();
  const core=$('#core-competency-grid');if(core)core.innerHTML=CUR.map(w=>`<div class="card">
    <div class="eyebrow ${w.week<=5?'jade':'purple'}">${w.week<=5?'Core':'Extension'} ${w.week}</div>
    <h3>${esc(w.title)}</h3><p>${esc(w.short)}</p>
    <span class="badge ${w.week>5?'purple':''}">${esc(w.priority)}</span>
  </div>`).join('');
  const s=state();
  if(s.migrationNotice){
    const holder=$('#migration-notice');
    if(holder){holder.hidden=false;holder.innerHTML='<strong>v0.2 curriculum reset:</strong> the curriculum structure changed, so old page-view completion flags were not carried forward. Your resume position and focus-prep history were preserved.'}
  }
}

function populateWeekSelect(sel,current){
  if(!sel)return;
  sel.innerHTML=CUR.map(w=>`<option value="${w.week}" ${w.week===Number(current)?'selected':''}>${w.week<=5?'Core':'Extension'} ${w.week}: ${esc(w.title)}</option>`).join('');
}

function renderLab(L,w,l,host,onChange){
  const labObj=L.lab;if(!labObj)return;
  const k=key(w,l),s=state(),record=s.labRecords[k]||{};
  host.innerHTML=`<section class="lab-panel">
    <div class="eyebrow purple">Required practical evidence</div><h3>${esc(labObj.title)}</h3>
    <div class="lab-grid">
      <div><h4>Equipment</h4><ul>${labObj.equipment.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
      <div><h4>Safety / stop conditions</h4><ul>${labObj.safety.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
    </div>
    <div class="callout jade"><strong>Setup</strong><p>${esc(labObj.setup)}</p></div>
    <h4>Procedure</h4><ol>${labObj.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
    <h4>Expected evidence</h4><ul>${labObj.expected.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    <h4>Record your evidence</h4><div class="evidence-fields" id="evidence-fields"></div>
    <h4>Acceptance criteria</h4><ul>${labObj.acceptance.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    <label class="check-row lab-attest"><input type="checkbox" id="lab-attest" ${s.labs[k]?'checked':''}> <span>I performed this practical on real hardware or an explicitly allowed simulator/training dataset and the record above reflects what I observed.</span></label>
    <div class="hero-actions"><button class="button purple" id="save-lab">${s.labs[k]?'Update lab record':'Save evidence + complete lab'}</button><span id="lab-status" class="answer-feedback ${s.labs[k]?'correct':''}">${s.labs[k]?'Lab evidence complete ✓':''}</span></div>
  </section>`;
  const fields=$('#evidence-fields',host);
  labObj.evidence.forEach((label,i)=>{
    const wrap=document.createElement('label');wrap.className='evidence-field';
    const span=document.createElement('span');span.textContent=label;
    const ta=document.createElement('textarea');ta.rows=2;ta.dataset.evidence=String(i);ta.value=record[String(i)]||'';
    wrap.append(span,ta);fields.appendChild(wrap);
  });
  $('#save-lab',host).addEventListener('click',()=>{
    const vals={};let missing=false;
    $$('textarea[data-evidence]',host).forEach(ta=>{vals[ta.dataset.evidence]=ta.value.trim();if(!ta.value.trim())missing=true});
    const attest=$('#lab-attest',host).checked,st=state();st.labRecords[k]=vals;
    const status=$('#lab-status',host);
    if(missing||!attest){
      st.labs[k]=false;save(st);status.className='answer-feedback incorrect';status.textContent='Complete every evidence field and the attestation before marking the lab complete.';onChange();return;
    }
    st.labs[k]=true;save(st);status.className='answer-feedback correct';status.textContent='Lab evidence complete ✓';showToast('Lab evidence saved');onChange();
  });
}

function renderCheck(L,w,l,host,onChange){
  const k=key(w,l),qs=L.check?.questions||[];
  host.innerHTML=`<section class="question" id="check-${k}">
    <div class="eyebrow purple">Required knowledge check</div><h3>Pass every question to complete this lesson.</h3>
    <div id="quiz-items"></div>
    <div class="hero-actions"><button class="button purple" id="check-answer">Check answers</button><span id="quiz-summary" class="answer-feedback ${state().quiz[k]?'correct':''}">${state().quiz[k]?'Knowledge check passed ✓':''}</span></div>
  </section>`;
  const items=$('#quiz-items',host);
  qs.forEach((qq,qi)=>{
    const d=document.createElement('div');d.className='quiz-item';d.dataset.q=String(qi);
    d.innerHTML=`<h4>${qi+1}. ${esc(qq.q)}</h4>${qq.options.map((o,oi)=>`<label><input type="radio" name="q-${qi}" value="${oi}"> ${esc(o)}</label>`).join('')}<div class="answer-feedback" id="qf-${qi}"></div>`;
    items.appendChild(d);
  });
  $('#check-answer',host).addEventListener('click',()=>{
    let all=true,answered=true,firstReview=null;
    qs.forEach((qq,qi)=>{
      const picked=$(`input[name="q-${qi}"]:checked`,host),fb=$(`#qf-${qi}`,host);
      if(!picked){answered=false;all=false;fb.className='answer-feedback incorrect';fb.textContent='Choose an answer.';return}
      const ok=Number(picked.value)===Number(qq.answer);all=all&&ok;
      fb.className=`answer-feedback ${ok?'correct':'incorrect'}`;
      fb.textContent=`${ok?'Correct.':'Not yet.'} ${qq.why}`;
      if(!ok&&firstReview===null)firstReview=qq.reviewSection??0;
    });
    const st=state();st.quiz[k]=all&&answered;save(st);
    const sum=$('#quiz-summary',host);
    if(all&&answered){sum.className='answer-feedback correct';sum.textContent='Knowledge check passed ✓';showToast('Knowledge check passed')}
    else {sum.className='answer-feedback incorrect';sum.innerHTML=`Review the teaching and try again.${firstReview!==null?` <a href="learn.html?w=${w}&l=${l}&s=${firstReview}">Go to the first relevant teaching page</a>`:''}`;}
    onChange();
  });
}

function initLearn(){
  focusModal('learn');
  const params=new URLSearchParams(location.search),stored=clampNav(state());
  let w=Number(params.get('w')||stored.learn.week||1),l=Number(params.get('l')??stored.learn.lesson??0),sec=Number(params.get('s')??stored.learn.section??0);
  if(!weekObj(w))w=1;if(!lessonObj(w,l))l=0;
  sec=Math.max(0,Math.min((lessonObj(w,l)?.sections.length||1)-1,sec));
  const weekSel=$('#learn-week'),lessonSel=$('#learn-lesson'),sectionSel=$('#learn-section');

  function renderSelectors(){
    populateWeekSelect(weekSel,w);
    const W=weekObj(w);lessonSel.innerHTML=W.lessons.map((x,i)=>`<option value="${i}" ${i===l?'selected':''}>Lesson ${i+1}: ${esc(x.title)}</option>`).join('');
    const L=lessonObj(w,l);sectionSel.innerHTML=L.sections.map((x,i)=>`<option value="${i}" ${i===sec?'selected':''}>Page ${i+1} of ${L.sections.length}: ${esc(x.title)}</option>`).join('');
  }
  function rebuildRail(){
    const L=lessonObj(w,l),st=state();
    $('#stage-list').innerHTML=L.sections.map((x,i)=>`<button type="button" data-s="${i}" class="${st.completed[sectionKey(w,l,i)]?'complete':''}">Page ${i+1}: ${esc(x.title)}</button>`).join('');
    $$('#stage-list button').forEach(b=>b.addEventListener('click',()=>{sec=Number(b.dataset.s);render()}));
  }
  function currentCanAdvance(){
    const L=lessonObj(w,l),st=state();
    if(!st.completed[sectionKey(w,l,sec)])return false;
    if(sec===L.sections.length-1)return !!st.quiz[key(w,l)]&&!!st.labs[key(w,l)];
    return true;
  }
  function updateNav(){
    const L=lessonObj(w,l),W=weekObj(w),st=state();
    $$('.stage-list button').forEach(b=>{b.classList.toggle('active',Number(b.dataset.s)===sec);b.classList.toggle('complete',!!st.completed[sectionKey(w,l,Number(b.dataset.s))])});
    $('#prev-section').disabled=sec===0&&l===0&&w===1;
    const next=$('#next-section'),ok=currentCanAdvance();
    next.disabled=!ok;
    const last=sec===L.sections.length-1&&l===W.lessons.length-1&&w===CUR.length;
    next.textContent=last?'Finish track':(ok?'Continue':'Complete requirements to continue');
  }
  function render(){
    const W=weekObj(w),L=lessonObj(w,l),S=L.sections[sec];renderSelectors();
    $('#learn-title').textContent=`${w<=5?'Core':'Extension'} ${W.week}: ${W.title}`;
    $('#learn-subtitle').textContent=W.short;
    $('#lesson-title').textContent=L.title;
    $('#lesson-badges').innerHTML=`<span class="badge">${esc(W.priority)}</span><span class="badge purple">Alfred source: ${W.sourceWeeks.map(x=>'W'+x).join(' · ')}</span>`;
    $('#lesson-page-label').textContent=`Page ${sec+1} of ${L.sections.length}`;
    const body=$('#lesson-body');
    body.innerHTML=`<section class="teaching-section" id="teaching-${sec}">
      <div class="eyebrow jade">Teaching section</div><h3>${esc(S.title)}</h3><p>${S.text}</p>
      ${S.formula?`<div class="formula">${esc(S.formula)}</div>`:''}
      ${S.example?`<div class="callout jade"><strong>Worked example</strong><p>${esc(S.example)}</p></div>`:''}
      ${S.remember?`<div class="callout"><strong>Remember</strong><p>${esc(S.remember)}</p></div>`:''}
      ${(S.resources||[]).map(resourceCard).join('')}
      <div class="section-complete-box"><button class="button ${state().completed[sectionKey(w,l,sec)]?'ghost':'jade'}" id="mark-section">${state().completed[sectionKey(w,l,sec)]?'Section complete ✓':'Mark this teaching section complete'}</button><p class="hint">Opening a page does not count as completion.</p></div>
    </section>`;
    decorateGlossary(body);
    $('#mark-section').addEventListener('click',()=>{
      const st=state();st.completed[sectionKey(w,l,sec)]=true;st.learn={week:w,lesson:l,section:sec};save(st);showToast('Teaching section completed');rebuildRail();render();
    });

    const qHost=$('#lesson-check');qHost.innerHTML='';
    const labHost=$('#lesson-lab');labHost.innerHTML='';
    if(sec===L.sections.length-1){
      renderCheck(L,w,l,qHost,updateNav);
      renderLab(L,w,l,labHost,updateNav);
    }
    const st=state();st.learn={week:w,lesson:l,section:sec};save(st);
    history.replaceState(null,'',`learn.html?w=${w}&l=${l}&s=${sec}`);
    updateNav();
  }

  weekSel.addEventListener('change',()=>{w=Number(weekSel.value);l=0;sec=0;rebuildRail();render()});
  lessonSel.addEventListener('change',()=>{l=Number(lessonSel.value);sec=0;rebuildRail();render()});
  sectionSel.addEventListener('change',()=>{sec=Number(sectionSel.value);render()});
  $('#prev-section').addEventListener('click',()=>{
    if(sec>0)sec--;else if(l>0){l--;sec=lessonObj(w,l).sections.length-1;rebuildRail()}else if(w>1){w--;l=weekObj(w).lessons.length-1;sec=lessonObj(w,l).sections.length-1;rebuildRail()}render()
  });
  $('#next-section').addEventListener('click',()=>{
    if(!currentCanAdvance())return;
    const L=lessonObj(w,l),W=weekObj(w);
    if(sec<L.sections.length-1)sec++;
    else if(l<W.lessons.length-1){l++;sec=0;rebuildRail()}
    else if(w<CUR.length){w++;l=0;sec=0;rebuildRail()}
    else{location.href='progress.html';return}
    render();
  });
  rebuildRail();render();
}

function initStudy(){
  focusModal('study');
  const p=new URLSearchParams(location.search),s=state();let w=Number(p.get('w')||s.study.week||1);if(!weekObj(w))w=1;
  const sel=$('#study-week');populateWeekSelect(sel,w);
  function render(){
    const W=weekObj(w),st=state();st.study.week=w;st.studyChecks[w]=st.studyChecks[w]||{};save(st);history.replaceState(null,'',`study.html?w=${w}`);
    $('#study-title').textContent=`Study ${w<=5?'Core':'Extension'} ${w}: ${W.title}`;
    const cards=[];
    W.lessons.forEach((L,li)=>L.sections.forEach((S,si)=>cards.push(`<div class="card">
      <div class="eyebrow jade">Lesson ${li+1} · Page ${si+1}</div><h3>${esc(S.title)}</h3>
      <p>${esc(S.remember||S.text.replace(/<[^>]+>/g,'').slice(0,320))}</p>
      <div class="hero-actions"><a class="button outline" href="learn.html?w=${w}&l=${li}&s=${si}">Open teaching</a></div>
    </div>`)));
    $('#study-concepts').innerHTML=cards.join('');
    const checks=$('#study-checklist');checks.innerHTML='';
    W.outcomes.forEach((x,i)=>{
      const lab=document.createElement('label');lab.className='check-row';
      lab.innerHTML=`<input type="checkbox" data-study="${i}" ${st.studyChecks[w][i]?'checked':''}> <span>${esc(x)}</span>`;
      checks.appendChild(lab);
    });
    $$('input[data-study]',checks).forEach(cb=>cb.addEventListener('change',()=>{
      const st2=state();st2.studyChecks[w]=st2.studyChecks[w]||{};st2.studyChecks[w][cb.dataset.study]=cb.checked;save(st2);
    }));
    $('#study-labs').innerHTML=W.lessons.map((L,i)=>`<div class="card"><div class="eyebrow purple">Practical ${i+1}</div><h3>${esc(L.lab.title)}</h3>
      <p>${esc(L.lab.setup)}</p><span class="badge ${st.labs[key(w,i)]?'':'gold'}">${st.labs[key(w,i)]?'Evidence complete':'Evidence not complete'}</span>
      <div class="hero-actions"><a class="button outline" href="learn.html?w=${w}&l=${i}&s=${L.sections.length-1}">Open practical</a></div></div>`).join('');
    const related=RES.filter(r=>r.week===w);
    const rr=$('#study-resources');if(rr)rr.innerHTML=related.map(resourceCard).join('')||'<p>No additional required external resources for this block.</p>';
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

function initResources(){
  const body=$('#resource-body'),week=$('#resource-week'),type=$('#resource-type'),q=$('#resource-search');
  populateWeekSelect(week,1);week.insertAdjacentHTML('afterbegin','<option value="all">All blocks</option>');week.value='all';
  function render(){
    const wf=week.value,tf=type.value,query=q.value.trim().toLowerCase();
    const rows=RES.filter(r=>(wf==='all'||r.week===Number(wf))&&(tf==='all'||r.type===tf)&&(!query||Object.values(r).join(' ').toLowerCase().includes(query)));
    body.innerHTML=rows.map(r=>`<tr><td>${r.week}</td><td><span class="badge ${r.type==='Video'?'purple':''}">${esc(r.type)}</span></td>
      <td><strong><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)} ↗</a></strong><br><small>${esc(r.provider)} · ${esc(r.status)}</small></td>
      <td>${esc(r.focus)}</td><td>${esc(r.action)}</td></tr>`).join('');
  }
  [week,type,q].forEach(el=>el.addEventListener(el===q?'input':'change',render));render();
}

function initPractice(){
  const list=$('#practice-list'),s=state(),rows=[];
  CUR.forEach(w=>w.lessons.forEach((L,li)=>{
    const incompleteSections=L.sections.filter((_,si)=>!s.completed[sectionKey(w.week,li,si)]).length;
    const quiz=!!s.quiz[key(w.week,li)],lab=!!s.labs[key(w.week,li)];
    if(incompleteSections||!quiz||!lab)rows.push({w:w.week,L,li,incompleteSections,quiz,lab});
  }));
  list.innerHTML=rows.length?rows.slice(0,12).map(r=>`<div class="card">
    <div class="eyebrow ${r.w<=5?'jade':'purple'}">${r.w<=5?'Core':'Extension'} ${r.w}</div><h3>${esc(r.L.title)}</h3>
    <p>${r.incompleteSections?`${r.incompleteSections} teaching page(s) not deliberately completed. `:''}${!r.quiz?'Knowledge check not passed. ':''}${!r.lab?'Practical evidence not complete.':''}</p>
    <a class="button jade" href="learn.html?w=${r.w}&l=${r.li}&s=${Math.max(0,r.L.sections.length-1)}">Work this gap</a></div>`).join(''):
    `<div class="card"><h3>No required gaps right now.</h3><p>All current teaching pages, knowledge checks, and practical evidence are complete.</p></div>`;
}

function exportProgress(){
  const payload=JSON.stringify(state(),null,2),blob=new Blob([payload],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=`jade-university-progress-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
function importProgress(file){
  const reader=new FileReader();
  reader.onload=()=>{
    const raw=safeParse(String(reader.result||''));
    if(!raw||typeof raw!=='object'){showToast('That file is not a valid Jade progress backup.');return}
    const s=normalizeState(raw);localStorage.setItem(STORAGE,JSON.stringify(s));showToast('Progress backup restored');setTimeout(()=>location.reload(),500);
  };
  reader.readAsText(file);
}
function initProgress(){
  const s=state(),total=totalSections(),done=completedCount(),pct=Math.round(100*done/Math.max(1,total));
  $('#progress-percent').textContent=`${pct}%`;$('#progress-bar').style.width=`${pct}%`;$('#progress-count').textContent=`${done} / ${total} teaching sections`;
  $('#progress-body').innerHTML=CUR.map(w=>{
    const secTotal=w.lessons.reduce((n,L)=>n+L.sections.length,0),secDone=w.lessons.reduce((n,L,li)=>n+L.sections.filter((_,si)=>s.completed[sectionKey(w.week,li,si)]).length,0);
    const qDone=w.lessons.filter((_,li)=>s.quiz[key(w.week,li)]).length,lDone=w.lessons.filter((_,li)=>s.labs[key(w.week,li)]).length,ready=moduleReady(s,w.week);
    return `<tr><td>${w.week<=5?'Core':'Extension'} ${w.week}</td><td><strong>${esc(w.title)}</strong></td><td>${secDone}/${secTotal}</td><td>${qDone}/${w.lessons.length}</td><td>${lDone}/${w.lessons.length}</td><td><span class="badge ${ready?'':'gold'}">${ready?'Demonstrated':'In progress'}</span></td></tr>`;
  }).join('');
  const core=CUR.filter(w=>w.week<=5).every(w=>moduleReady(s,w.week));
  $('#apply-status').innerHTML=core?`<span class="badge">Core technician skills demonstrated</span><h3>The five job-readiness blocks are complete.</h3>
    <p>This is an internal learning milestone, not a certification or hiring guarantee. Keep the evidence records and continue applying while using Extensions 6–8 to strengthen digital/embedded test capability.</p>`:
    `<span class="badge gold">Core gate in progress</span><h3>Finish Core 1–5 with real practical evidence.</h3><p>The core now includes DMM, bench supply, oscilloscope, schematic/PCB/datasheet literacy, troubleshooting/test procedure work, and workmanship.</p>`;
  const exportBtn=$('#export-progress');if(exportBtn)exportBtn.addEventListener('click',exportProgress);
  const importInput=$('#import-progress');if(importInput)importInput.addEventListener('change',()=>{const f=importInput.files?.[0];if(f)importProgress(f)});
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
