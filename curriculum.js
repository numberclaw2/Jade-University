
window.JADE_CURRICULUM = [
{
  week:1,
  title:"Electrical Foundations + Safe DMM Use",
  short:"Voltage, current, resistance, power, opens/shorts, measurement safety.",
  priority:"Apply-now core",
  ceta:["DC circuits","Electrical safety","Measurement"],
  outcomes:[
    "Explain voltage, current, resistance, power, ground/reference, open circuits, and short circuits in physical terms.",
    "Use Ohm’s law and power equations with correct units and SI prefixes.",
    "Measure DC voltage, resistance, and continuity safely with a DMM."
  ],
  lessons:[
    {
      id:"w1-l1", title:"What a Circuit Is Actually Doing",
      sections:[
        {title:"Charge, voltage, and current",text:`Electric circuits make more sense when you separate three ideas. <strong>Charge</strong> is a physical property carried by particles. <strong>Voltage</strong> is an energy difference per unit charge between two points. <strong>Current</strong> is the rate at which charge moves through a path. A meter reading is never “just a number”; it represents one of these physical quantities.`,remember:"Voltage is measured between two points. Current is measured through a path."},
        {title:"Resistance and why current changes",text:`<strong>Resistance</strong> describes how strongly a path opposes current. For a resistive DC circuit, Ohm’s law connects the quantities: V = I × R. If the same voltage is applied across a larger resistance, the current must be smaller.`,formula:"V = I × R   •   I = V/R   •   R = V/I",example:"A 9 V source across 3 kΩ produces I = 9/3000 = 0.003 A = 3 mA."},
        {title:"Open, closed, and short circuits",text:`A <strong>closed circuit</strong> has a complete current path. An <strong>open circuit</strong> breaks that path, so steady current becomes essentially zero. A <strong>short circuit</strong> is an unintended very-low-resistance path. Because I = V/R, a very small R can allow dangerously large current.`,remember:"An open stops current; a short can create excessive current."}
      ],
      check:{q:"A 6 V source is connected across 2 kΩ. What current should flow?",options:["0.003 A","3 A","12 A","0.0003 A"],answer:0,why:"I = V/R = 6/2000 = 0.003 A = 3 mA."},
      lab:"Build or simulate a resistor circuit. Predict current, then measure voltage and current. Record expected vs actual values and explain the difference."
    },
    {
      id:"w1-l2", title:"DMM Fundamentals That Employers Expect",
      sections:[
        {title:"Meter setup",text:`A digital multimeter changes role depending on the function and jack you select. Voltage measurements place the meter <strong>across</strong> two points. Current measurements require the meter to become part of the current path. Resistance and continuity are normally checked with the circuit de-energized.`,remember:"Wrong jack + wrong function can damage a fuse, meter, circuit, or you."},
        {title:"Voltage, continuity, resistance",text:`For DC voltage, choose the DC volts function, black lead to COM, red lead to V/Ω, and probe the two points of interest. Continuity is a quick low-resistance check. Resistance mode applies a small internal test stimulus, so it should not be used on an energized circuit.`},
        {title:"A technician’s sanity check",text:`Before trusting a reading, ask: Is the unit plausible? Is the reference point correct? Is the range correct? Is the meter lead in the correct jack? Does the reading match what the schematic predicts? Good technicians verify both the instrument and the interpretation.`}
      ],
      check:{q:"Which measurement normally requires the circuit to be de-energized?",options:["DC voltage","Resistance","Frequency on a powered oscillator","Supply ripple"],answer:1,why:"Resistance/continuity modes apply the meter’s own test signal and are normally used on de-energized circuits."},
      lab:"Practice five measurements: battery voltage, resistor resistance, continuity through a wire, continuity through an open switch, and voltage drop across a resistor."
    }
  ]
},
{
  week:2,
  title:"Schematics + Circuit Tracing",
  short:"Read symbols, find power and ground, trace signal paths, predict test points.",
  priority:"Highest ROI",
  ceta:["Schematics","Circuit analysis","Documentation"],
  outcomes:[
    "Read common schematic symbols and identify rails, ground, nodes, connectors, and reference designators.",
    "Trace a circuit from source to load and identify useful test points.",
    "Turn a schematic into a measurement plan."
  ],
  lessons:[
    {
      id:"w2-l1",title:"Reading a Schematic Without Guessing",
      sections:[
        {title:"A schematic is a map of relationships",text:`A schematic does not usually show physical placement. It shows electrical relationships. Reference designators such as R1, C4, D2, U3, and J1 identify components. Nets connect points that are electrically common.`},
        {title:"Power, ground, and rails",text:`Find the source first. Identify the expected rails such as 12 V, 5 V, or 3.3 V. Then identify the circuit’s reference or <strong>ground</strong>. Every voltage measurement needs a reference point, so this step prevents random probing.`},
        {title:"Trace from input to output",text:`Break the drawing into functional blocks. Ask what each block receives, what it should produce, and where you can test it. A technician should be able to point to a schematic and say, “If this node is correct but the next one is wrong, the fault is between them.”`,remember:"Power path + signal path + expected test points = troubleshooting map."}
      ],
      check:{q:"What should you usually identify first on an unfamiliar powered schematic?",options:["The most expensive IC","Power rails and ground/reference","Every capacitor value","The PCB color"],answer:1,why:"Power and reference points determine what voltages should exist everywhere else."},
      lab:"Take one simple regulator or sensor schematic and mark: source, ground, input, output, three test points, and expected readings."
    },
    {
      id:"w2-l2",title:"From Schematic to Test Plan",
      sections:[
        {title:"Expected values come before measurements",text:`Troubleshooting is faster when you predict what should be present before touching the probes. Use labels, component values, datasheets, and circuit equations to create an expected-value table.`},
        {title:"Divide and conquer",text:`Choose a test point near the middle of the suspected path. If the signal is correct there, move downstream. If it is wrong, move upstream. This binary-search mindset reduces unnecessary measurements.`},
        {title:"Document what changed",text:`Write down test point, expected value, measured value, instrument, and conclusion. That record becomes evidence you can discuss in an interview or include in a project portfolio.`}
      ],
      check:{q:"Why is a midpoint test point useful during troubleshooting?",options:["It makes the meter more accurate","It divides the possible fault region quickly","It avoids needing a schematic","It guarantees the component is bad"],answer:1,why:"A midpoint measurement can eliminate roughly half the path from suspicion."},
      lab:"Create a one-page troubleshooting sheet for a simple circuit: test point, expected, measured, pass/fail, next action."
    }
  ]
},
{
  week:3,
  title:"DMM Mastery + Component Testing",
  short:"Use measurements to identify faults instead of just collecting readings.",
  priority:"Apply-now core",
  ceta:["Test equipment","Passive components","Semiconductors"],
  outcomes:[
    "Use voltage-drop, resistance, continuity, and diode-test measurements deliberately.",
    "Check common passive components and basic diodes.",
    "Separate a measurement symptom from the actual failed component."
  ],
  lessons:[
    {
      id:"w3-l1",title:"Voltage Drop as a Troubleshooting Tool",
      sections:[
        {title:"Measure across, not at random",text:`Voltage drop tells you how much electrical potential changes across a component or connection. A connection that should behave almost like a wire should show very little drop. A large drop across an unintended resistance can reveal a bad connector, damaged trace, or corroded joint.`},
        {title:"Reference measurements",text:`A measurement from a node to ground tells you the node voltage. A measurement directly across a component tells you the component’s voltage drop. Both are useful, but they answer different questions.`},
        {title:"Interpret before replacing",text:`A strange voltage does not automatically mean the nearest component is defective. The cause may be upstream supply loss, an open return path, an overloaded output, or a control signal that never arrived.`}
      ],
      check:{q:"A connector that should act like a near-zero-ohm path shows a large voltage drop under load. What does that suggest?",options:["The connector may have unwanted resistance","The supply must be perfect","The load is definitely shorted","The DMM is always wrong"],answer:0,why:"Unexpected voltage drop across a connection is evidence of resistance in that path."},
      lab:"Create a loaded low-voltage circuit and compare voltage at the source, before a connector, after the connector, and at the load."
    },
    {
      id:"w3-l2",title:"Resistance, Continuity, and Diode Test",
      sections:[
        {title:"Resistance out of circuit vs in circuit",text:`An in-circuit resistance measurement can be affected by parallel paths. If a reading makes no sense, isolate one lead or remove the component before concluding it is bad.`},
        {title:"Continuity is not a complete diagnosis",text:`A continuity beep only means resistance is below the meter’s threshold. It does not prove a connection can carry current properly under load. Use voltage-drop testing when connection quality matters.`},
        {title:"Diode test",text:`Diode-test mode applies a small current and displays forward voltage. A normal silicon junction often shows a forward drop in one direction and open/over-range in the other, although in-circuit paths can alter the reading.`}
      ],
      check:{q:"Why can an in-circuit resistance reading be misleading?",options:["Meters cannot measure resistance","Parallel circuit paths can affect the reading","Resistance only exists in AC circuits","The resistor value changes to zero when installed"],answer:1,why:"Other components and paths can sit in parallel with the component being measured."},
      lab:"Measure five resistors, test two diodes in both directions, and document one example where an in-circuit reading differs from an isolated reading."
    }
  ]
},
{
  week:4,
  title:"Systematic Troubleshooting",
  short:"Symptom → inspect → power → ground → isolate → repair → retest → document.",
  priority:"Highest ROI",
  ceta:["Troubleshooting","Failure isolation","Corrective action"],
  outcomes:[
    "Use a repeatable troubleshooting sequence.",
    "Differentiate symptom, cause, and evidence.",
    "Isolate faults with minimum unnecessary probing."
  ],
  lessons:[
    {
      id:"w4-l1",title:"A Repeatable Fault-Isolation Method",
      sections:[
        {title:"Start with the symptom",text:`Write the symptom in observable terms. “Board dead” is vague. “Power LED off, 5 V rail measures 0.2 V, input is 12.1 V” is useful evidence.`},
        {title:"The technician loop",text:`Use the same sequence until it becomes automatic: <strong>symptom → visual inspection → verify source → verify ground/return → divide the circuit → measure → compare expected vs actual → isolate → repair → retest → document</strong>.`},
        {title:"Change one thing at a time",text:`When possible, avoid changing multiple components before retesting. Controlled troubleshooting preserves cause-and-effect information and makes your final conclusion defensible.`}
      ],
      check:{q:"Which is the strongest troubleshooting statement?",options:["The board seems bad","I replaced several parts and it worked","12 V input is present, 5 V regulator output is 0.1 V, and the rail measures 3 Ω to ground with power removed","It is probably firmware"],answer:2,why:"It states measurements and evidence without jumping beyond what is known."},
      lab:"Introduce one fault into a simple circuit and write a fault report showing each diagnostic decision and measurement."
    },
    {
      id:"w4-l2",title:"Fault Trees, Substitution, and Retest",
      sections:[
        {title:"Build hypotheses from evidence",text:`A good hypothesis explains the measurements already observed and predicts what the next measurement should show. If the next reading disagrees, revise the hypothesis instead of forcing the evidence to fit.`},
        {title:"Known-good substitution",text:`Swapping a known-good cable, sensor, module, or supply can be powerful when done deliberately. Record what the substitution proves and what it does not prove.`},
        {title:"Retest the original symptom",text:`A repair is not complete when a single reading becomes normal. Repeat the original functional test, verify related operating conditions, and document the final state.`}
      ],
      check:{q:"After replacing a failed component, what should happen before closing the repair?",options:["Assume success because the component is new","Repeat the original functional test and relevant measurements","Delete the troubleshooting notes","Change another component too"],answer:1,why:"The repair must be verified against the original symptom and operating conditions."},
      lab:"Create a two-branch fault tree for a 'no output' symptom, then use measurements to eliminate branches until one cause remains."
    }
  ]
},
{
  week:5,
  title:"Soldering, Rework, Connectors + ESD",
  short:"Workmanship skills that turn electrical experience into electronics experience.",
  priority:"Apply-now core",
  ceta:["Soldering","ESD","Interconnects"],
  outcomes:[
    "Explain good solder-joint characteristics and common defects.",
    "Perform basic through-hole soldering and controlled rework.",
    "Use ESD precautions and inspect connectors/harnesses."
  ],
  lessons:[
    {
      id:"w5-l1",title:"Soldering Fundamentals",
      sections:[
        {title:"Heat the joint, not just the solder",text:`A reliable joint forms when the component lead and pad reach the correct temperature and solder wets both surfaces. Feeding solder only onto the iron can create a blob without a reliable metallurgical bond.`},
        {title:"Recognize common defects",text:`Common problems include insufficient wetting, excess solder, solder bridges, disturbed joints, lifted pads, and heat-damaged parts. Inspection is part of the process, not an afterthought.`},
        {title:"Rework with a plan",text:`Before removing a component, identify pad risk, polarity/orientation, nearby components, and the correct heat/flux strategy. After rework, clean if required, inspect, continuity-check, and functionally test.`}
      ],
      check:{q:"What is the best description of a reliable soldering technique?",options:["Melt solder on the iron and drip it onto the pad","Heat the joint so solder wets the lead and pad","Use as much solder as possible","Hold heat indefinitely"],answer:1,why:"The pad and lead must reach soldering temperature so solder wets both surfaces."},
      lab:"Solder and inspect at least ten through-hole joints. Photograph acceptable and intentionally defective examples and label the defects."
    },
    {
      id:"w5-l2",title:"ESD, Connectors, and Harnesses",
      sections:[
        {title:"Why ESD matters",text:`Electrostatic discharge can damage semiconductor junctions at energy levels you may not feel. Use an ESD-safe work surface and grounding practice when handling sensitive electronics.`},
        {title:"Connector troubleshooting",text:`Inspect pin alignment, retention, corrosion, contamination, strain relief, crimp quality, and insertion. Use pinout documentation before probing. A visually intact cable can still contain an open, short, or high-resistance connection.`},
        {title:"Harness evidence",text:`For job readiness, document one small harness or connector exercise: pinout, wire identification, continuity map, crimp/termination method, and verification results.`}
      ],
      check:{q:"Why can a continuity test alone miss a bad connector under load?",options:["Continuity does not exist in wiring","A high-resistance connection may still beep but drop voltage under current","Connectors cannot be measured","Voltage drop only applies to AC"],answer:1,why:"A weak connection can pass a low-current continuity test while failing under operating current."},
      lab:"Create or inspect a small harness, map each pin end-to-end, and perform both continuity and a simple loaded voltage-drop check."
    }
  ]
},
{
  week:6,
  title:"Bench Supply + Oscilloscope",
  short:"Power circuits safely and see signals instead of guessing.",
  priority:"Bench-ready",
  ceta:["Oscilloscope","Power supply","Waveforms"],
  outcomes:[
    "Set voltage and current limit on a bench supply safely.",
    "Configure an oscilloscope for basic measurements.",
    "Measure amplitude, period, frequency, duty cycle, and basic ripple/noise."
  ],
  lessons:[
    {
      id:"w6-l1",title:"Bench Power Without Letting the Smoke Out",
      sections:[
        {title:"Voltage and current limit",text:`A bench supply regulates voltage while allowing current up to a configured limit. The current limit is a protection tool. Before connecting a new board, choose a safe voltage, set a conservative current limit, verify polarity, and watch startup current.`},
        {title:"Current draw is evidence",text:`A board that immediately hits current limit may contain a short or incorrect connection. A board that draws almost nothing may have an open path, disabled regulator, missing enable signal, or poor connection.`},
        {title:"Power-up checklist",text:`Inspect first, verify polarity, confirm expected input voltage, set current limit, connect ground/reference, power on while monitoring current, then verify rails in sequence.`}
      ],
      check:{q:"Why set a conservative current limit before first power-up?",options:["It increases signal frequency","It can limit damage if the circuit has a fault","It makes the schematic unnecessary","It calibrates the oscilloscope"],answer:1,why:"Current limiting can prevent a fault from drawing destructive current."},
      lab:"Power a low-voltage circuit from a bench supply. Record startup current, steady current, input voltage, and downstream rail voltages."
    },
    {
      id:"w6-l2",title:"Oscilloscope Fundamentals",
      sections:[
        {title:"Vertical and horizontal scales",text:`Volts/div controls how much voltage each vertical grid division represents. Time/div controls how much time each horizontal division represents. These two settings determine whether a waveform is visible and measurable.`},
        {title:"Triggering",text:`Triggering tells the scope where to begin each sweep. A stable trigger makes a repetitive waveform appear stationary instead of sliding across the display.`},
        {title:"What to measure",text:`For technician work, get comfortable with amplitude, DC offset, period, frequency, duty cycle, rise/fall behavior, and basic noise/ripple. Always know where the probe ground is connected.`}
      ],
      check:{q:"A waveform is drifting horizontally and will not appear stable. Which control is most directly related?",options:["Trigger","Probe color","Resistance range","Continuity buzzer"],answer:0,why:"A proper trigger locks repeated sweeps to a consistent event."},
      lab:"Measure a square wave. Record Vpp, frequency, period, duty cycle, and one screenshot or sketch with volts/div and time/div."
    }
  ]
},
{
  week:7,
  title:"Digital Electronics + Logic Analyzer",
  short:"Logic levels, clocks, pull-ups, gates, and capturing digital activity.",
  priority:"Embedded bridge",
  ceta:["Digital logic","Timing","Logic analysis"],
  outcomes:[
    "Interpret HIGH/LOW logic levels and digital timing.",
    "Explain pull-up and pull-down resistors.",
    "Capture and interpret basic digital waveforms with a logic analyzer."
  ],
  lessons:[
    {
      id:"w7-l1",title:"Logic Levels and Digital Inputs",
      sections:[
        {title:"HIGH and LOW are voltage ranges",text:`Digital logic is not magic 1s and 0s. Hardware interprets voltage ranges as logical states. The exact thresholds depend on the device and supply voltage, so a 3.3 V system and a 5 V system may not be directly interchangeable.`},
        {title:"Floating inputs",text:`An un-driven input can float to an unpredictable voltage. Pull-up and pull-down resistors establish a default state while still allowing another device to override that state.`},
        {title:"Clocks and edges",text:`Digital systems often coordinate work using clock edges or transitions. Timing problems can occur even when the average voltage looks correct, which is why a scope or logic analyzer is useful.`}
      ],
      check:{q:"What is the purpose of a pull-up resistor on a digital input?",options:["Increase processor speed","Provide a defined default HIGH state when nothing actively drives the line","Create an analog sine wave","Replace ground"],answer:1,why:"The resistor biases the input to a known logic state while allowing another device to pull it low."},
      lab:"Wire or simulate a digital input with and without a pull-up. Observe the default state and what changes when the input is driven."
    },
    {
      id:"w7-l2",title:"Using a Logic Analyzer",
      sections:[
        {title:"Digital capture",text:`A logic analyzer samples digital channels and displays state versus time. It is ideal for seeing transitions across multiple signals and decoding common serial protocols.`},
        {title:"Sampling rate",text:`The analyzer must sample fast enough to represent the signal transitions you care about. If the sampling rate is too low, edges and short pulses can be missed or misrepresented.`},
        {title:"Correlate logic with the schematic",text:`A captured transition only matters if you know which net it came from and what should have happened. Label channels using the schematic or pinout and save the capture with your notes.`}
      ],
      check:{q:"Why label logic-analyzer channels using the schematic or pinout?",options:["It changes the voltage","It ties captured activity to specific signals and expected behavior","It eliminates the need for probes","It increases memory"],answer:1,why:"Channel names create traceability between the capture and the circuit."},
      lab:"Capture at least two digital channels, label them, measure timing between edges, and save the capture as portfolio evidence."
    }
  ]
},
{
  week:8,
  title:"UART, I²C, SPI + Board Bring-Up Portfolio",
  short:"Protocol-level troubleshooting and one documented project you can defend in an interview.",
  priority:"Embedded bridge",
  ceta:["Serial interfaces","Microcontrollers","Documentation"],
  outcomes:[
    "Explain the basic electrical/topology differences between UART, I²C, and SPI.",
    "Use a logic analyzer to identify protocol activity and obvious faults.",
    "Complete one documented bring-up/troubleshooting project."
  ],
  lessons:[
    {
      id:"w8-l1",title:"UART, I²C, and SPI Without Hand-Waving",
      sections:[
        {title:"UART",text:`UART is typically point-to-point asynchronous serial communication using separate transmit and receive lines plus a shared reference. Both ends must agree on settings such as baud rate and frame format.`},
        {title:"I²C",text:`I²C uses a shared data line (SDA) and clock line (SCL), usually with pull-up resistors, and supports addressed devices on the same bus. Missing pull-ups, incorrect addresses, or a device holding a line low are common troubleshooting clues.`},
        {title:"SPI",text:`SPI typically uses a clock, separate controller-to-peripheral and peripheral-to-controller data lines, and one or more chip-select lines. It is synchronous and often faster, but uses more wires than I²C.`}
      ],
      check:{q:"Which interface commonly uses shared SDA and SCL lines with pull-up resistors?",options:["UART","I²C","SPI","Analog audio"],answer:1,why:"I²C uses SDA and SCL with open-drain/open-collector behavior and pull-ups."},
      lab:"Capture one UART or I²C exchange with a logic analyzer. Label lines, decode at least one transaction, and explain what a missing or stuck signal would look like."
    },
    {
      id:"w8-l2",title:"Board Bring-Up + Interview-Ready Evidence",
      sections:[
        {title:"Bring-up sequence",text:`A disciplined bring-up sequence reduces risk: inspect the board, verify shorts to ground, confirm supply settings, power with a current limit, verify rails, verify reset/enable, verify clocks, connect debugger or serial console, then test peripherals one at a time.`},
        {title:"Deliberate fault injection",text:`For learning, intentionally introduce safe faults such as a disconnected jumper, wrong pull-up, disabled peripheral, missing ground, or incorrect software setting. Use evidence to isolate each fault instead of guessing.`},
        {title:"Build the portfolio artifact",text:`Your final report should contain: schematic or block diagram, objective, equipment, expected behavior, measured evidence, fault symptoms, troubleshooting steps, corrective action, retest result, photos/captures, and what you learned. This is what turns studying into employable proof.`}
      ],
      check:{q:"What should happen before connecting a new board to full unrestricted power?",options:["Skip inspection to save time","Inspect, check for shorts, set safe voltage/current limit, and verify polarity","Install every peripheral first","Change firmware repeatedly"],answer:1,why:"Safe bring-up begins with physical inspection and controlled power."},
      lab:"Complete the Job-Ready Capstone: bring up a microcontroller or digital board, inject at least two safe faults, diagnose them using schematic + DMM + scope/logic analyzer, repair or correct them, and produce a two-page troubleshooting report."
    }
  ]
}
];
