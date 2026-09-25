window.JADE_CURRICULUM = [
  {
    "week": 1,
    "title": "DC Fundamentals + Component Recognition",
    "short": "Only the electrical and component knowledge needed to power, inspect, measure, and troubleshoot low-voltage electronics.",
    "priority": "Apply-Now Core",
    "sourceWeeks": [
      1,
      2,
      7,
      8,
      9
    ],
    "outcomes": [
      "Explain voltage, current, resistance, power, reference/ground, open circuits, and short circuits in physical terms.",
      "Use Ohm’s law, power equations, SI prefixes, and simple series/parallel reasoning.",
      "Recognize common PCB components and identify polarity/orientation before measurement or replacement.",
      "Perform safe first-pass checks on resistors and diodes without overclaiming what a meter reading proves."
    ],
    "lessons": [
      {
        "id": "w1-l1",
        "title": "Electrical Quantities, Current Paths, and Safe First Power",
        "sourceNote": "Reuses Alfred Weeks 1–2: electrical quantities, current path, Ohm/power, bench supply, pre-power inspection, and first-power workflow.",
        "sections": [
          {
            "title": "Voltage, current, resistance, and reference",
            "text": "Voltage is an electrical potential difference between two points; it is not a substance flowing through a wire. Current is the rate of charge flow through a complete path. Resistance describes how strongly a path opposes current. A circuit reference or ground is the node you choose as the zero point for voltage measurements. Because voltage is always a difference, “3.3 V” really means “3.3 V relative to the stated reference.” Keep the measurement geometry straight: voltage is measured across two points; current is measured through a path. Before doing arithmetic, say which quantity you are talking about, its unit, and where it exists physically in the circuit.",
            "remember": "Voltage is across two points; current is through a path; every voltage needs a reference.",
            "resources": [
              "aac-electrical-a",
              "aac-ground-reference"
            ]
          },
          {
            "title": "Ohm’s law, power, and SI prefixes",
            "text": "For a resistive DC path, Ohm’s law connects voltage, current, and resistance: V = I × R. The relationship is useful only if the units are handled correctly. A 1 kΩ resistor is 1,000 Ω; 3 mA is 0.003 A; 5 µA is 0.000005 A. Electrical power is the rate of energy transfer. For DC work, P = V × I is the most direct form; using Ohm’s law also gives P = I²R and P = V²/R for resistors. A technician should predict the direction of change before calculating: at fixed voltage, higher resistance means lower current; at fixed resistance, higher voltage means higher current. That prediction is a fast sanity check against calculator mistakes.",
            "formula": "V = I × R   •   P = V × I   •   1 kΩ = 1000 Ω   •   1 mA = 0.001 A",
            "example": "A 5 V source across 1 kΩ gives I = 5/1000 = 0.005 A = 5 mA. The resistor dissipates P = 5 V × 0.005 A = 0.025 W = 25 mW.",
            "resources": [
              "aac-electrical-b",
              "aac-notation"
            ]
          },
          {
            "title": "Open circuits, short circuits, and complete paths",
            "text": "Current requires a closed path from the source, through the load, and back to the source. An open circuit breaks that path, so steady current in that branch becomes essentially zero even though voltage may still appear across the break. A short circuit is an unintended very-low-resistance path. Because I = V/R, lowering resistance dramatically can increase current and heating. “Open” and “short” describe circuit conditions, not automatically failed components. A connector can be open, a trace can be shorted to ground, or a solder bridge can short two nets. During troubleshooting, translate the symptom into the path that would have to be open, shorted, or otherwise altered to produce the measurement.",
            "remember": "An open interrupts a path; a short creates an unintended low-resistance path.",
            "resources": [
              "aac-current-path"
            ]
          },
          {
            "title": "Bench power and first-power discipline",
            "text": "A bench power supply is an adjustable source used to energize low-voltage electronics under controlled conditions. Its voltage setting is the target voltage; its current limit is a ceiling. Predict a reasonable current before power-up, set the correct voltage, and choose a conservative limit. With power off, inspect polarity, connector orientation, polarized components, loose strands, solder bridges, and obvious shorts. Connect the supply with output disabled, re-check polarity, then enable power while watching current. If the supply immediately enters current limit, a rail collapses, heat or odor appears, or any stated stop condition is violated, disable power and investigate. First power should proceed in order: source/current → rails → signals.",
            "remember": "A current limit is a protective boundary and a diagnostic clue, not a target current.",
            "resources": [
              "keysight-psu",
              "keysight-cvcc"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "A 5 V source is connected across a 1 kΩ resistor. What current should flow?",
              "options": [
                "0.005 A (5 mA)",
                "5 A",
                "0.0005 A",
                "1000 A"
              ],
              "answer": 0,
              "why": "I = V/R = 5/1000 = 0.005 A = 5 mA.",
              "reviewSection": 1
            },
            {
              "q": "During first power, the supply immediately enters current-limit mode and the voltage collapses. What is the best next action?",
              "options": [
                "Raise the current limit until it works",
                "Disable power and investigate the load/wiring",
                "Switch the DMM to current mode across the supply",
                "Ignore it if nothing is smoking"
              ],
              "answer": 1,
              "why": "Unexpected current-limit behavior is evidence of abnormal load current. Stop and investigate before increasing available energy.",
              "reviewSection": 3
            }
          ]
        },
        "lab": {
          "title": "Controlled first power of a simple resistor/LED load",
          "equipment": [
            "Low-voltage bench supply or battery holder",
            "DMM",
            "1 kΩ resistor or an LED + suitable series resistor",
            "Breadboard or training board",
            "Notebook/test record"
          ],
          "safety": [
            "Use only low-voltage DC for this exercise.",
            "Output stays disabled while wiring or moving components.",
            "If using an LED, verify polarity and calculate a safe series resistor before power."
          ],
          "setup": "Build a simple load powered from 5 V. If using a 1 kΩ resistor, expected current is about 5 mA. If using an LED, calculate expected current from source voltage, approximate LED drop, and series resistance.",
          "steps": [
            "Inspect wiring and polarity with power off.",
            "Write the expected current and resistor power before enabling power.",
            "Set 5 V and a conservative current limit above the expected current.",
            "Enable power while watching supply current.",
            "Measure source voltage and the voltage across the load with the DMM.",
            "Disable power and compare measured vs expected values."
          ],
          "expected": [
            "Supply remains in normal voltage-regulation mode for the healthy load.",
            "Measured current is reasonably close to the calculated value within component/instrument tolerance.",
            "No stop condition is triggered."
          ],
          "evidence": [
            "Expected current (mA)",
            "Measured current (mA)",
            "Measured source voltage (V)",
            "Explain one reason measured and calculated values can differ"
          ],
          "acceptance": [
            "Prediction is recorded before power-up.",
            "No unsafe meter connection is used.",
            "Measured values include units.",
            "Learner can explain why the result is consistent or inconsistent with the model."
          ]
        }
      },
      {
        "id": "w1-l2",
        "title": "Recognize the Parts Before You Troubleshoot Them",
        "sourceNote": "Compresses only the component-recognition and first-pass test material needed from Alfred’s component/power-supply sequence.",
        "sections": [
          {
            "title": "Resistors and capacitors",
            "text": "A resistor deliberately limits current, divides voltage, biases a device, or sets timing/gain with other components. On a schematic it usually appears as R followed by a number such as R17. A capacitor stores energy in an electric field and is commonly used for decoupling, filtering, timing, and coupling; it is usually C followed by a number. Resistors have resistance and power ratings. Capacitors have capacitance and voltage ratings, and some types are polarized. For technician work, the first question is not “what equation can I use?” but “what role is this part playing in this circuit, what value should it be, and what failure would its open/short/leakage behavior produce?”",
            "remember": "Identify the reference designator, value/rating, and circuit role before deciding a component is bad."
          },
          {
            "title": "Diodes, LEDs, and polarity",
            "text": "A diode conducts much more easily in one direction than the other. LEDs are light-emitting diodes and are also polarized. Schematics and boards use polarity markings; the physical package and datasheet determine which terminal is which. DMM diode-test mode can provide a useful first-pass junction check, but in-circuit parallel paths can distort the reading. A normal silicon junction often shows a forward voltage in one direction and open/over-range in the other, but the exact result depends on the device. Never replace a diode solely because an in-circuit reading looks unusual; isolate the part or compare with a known-good point when necessary.",
            "remember": "Polarity mistakes can create the fault you are trying to diagnose."
          },
          {
            "title": "Transistors, MOSFETs, regulators, ICs, and connectors",
            "text": "Transistors and MOSFETs are commonly used as switches or amplifying/control devices. Voltage regulators create a controlled supply rail from another source. Integrated circuits (ICs) package many functions into one device, so troubleshooting them often begins with their power pins, ground, enable/reset, inputs, and outputs—not with replacing the IC. Connectors are part of the circuit too: bent pins, poor crimps, contamination, strain, mis-keying, or high contact resistance can create intermittent faults that look like electronics failures. Learn to recognize reference designators such as Q for transistor, U for IC, D for diode, J/P for connectors, and always confirm the project’s own naming convention.",
            "remember": "Power, ground, enable, input, output, and connector integrity are often higher-value checks than replacing an IC."
          },
          {
            "title": "First-pass component checks without overclaiming",
            "text": "With power removed and stored energy safely discharged, resistance, continuity, and diode-test modes can quickly identify obvious opens, shorts, or abnormal junctions. But an in-circuit reading may include other components in parallel. Capacitors can also influence readings as they charge from the meter’s test current. A continuity beep only means the measured resistance is below the meter’s threshold; it does not prove a connection can carry operating current without excessive voltage drop. Treat each check as evidence. If the result conflicts with the schematic or expected behavior, isolate the component or choose a powered measurement that can separate the remaining possibilities.",
            "remember": "A meter check narrows the diagnosis; it rarely proves root cause by itself.",
            "resources": [
              "fluke-dmm"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "Which reference designator most commonly identifies an integrated circuit?",
              "options": [
                "R",
                "C",
                "U",
                "J"
              ],
              "answer": 2,
              "why": "U is commonly used for integrated circuits; always verify the project convention.",
              "reviewSection": 2
            },
            {
              "q": "A resistor measures much lower than its marked value while still in circuit. What is the best interpretation?",
              "options": [
                "The resistor is definitely shorted",
                "Parallel paths may be affecting the reading",
                "Resistance cannot be measured in circuit",
                "The board must be powered"
              ],
              "answer": 1,
              "why": "Other circuit paths can appear in parallel with the resistor. Isolate one lead or use other evidence before condemning it.",
              "reviewSection": 3
            }
          ]
        },
        "lab": {
          "title": "Component recognition and first-pass DMM checks",
          "equipment": [
            "DMM",
            "Assortment or board containing resistors, capacitors, diodes/LEDs, ICs, and connectors",
            "Datasheet or schematic if available",
            "Notebook/test record"
          ],
          "safety": [
            "Circuit must be de-energized for resistance, continuity, and diode checks.",
            "Discharge capacitors appropriately before resistance/diode testing.",
            "Do not force probes into connectors or damage fine-pitch pins."
          ],
          "setup": "Choose a training board or component assortment with at least six identifiable parts.",
          "steps": [
            "Identify six components by type and reference designator if present.",
            "Record each part’s marked value/part number or rating when visible.",
            "Measure at least two resistors; note whether they are in or out of circuit.",
            "Use diode mode on one diode or LED in both directions.",
            "Inspect one IC for pin-1 orientation and locate its datasheet pinout.",
            "Inspect one connector for keying, pin numbering, retention, and visible defects."
          ],
          "expected": [
            "Resistor readings are interpreted in context, not automatically accepted/rejected.",
            "Diode/LED shows direction-dependent behavior unless circuit paths interfere.",
            "Pin-1 and polarity/orientation are documented correctly."
          ],
          "evidence": [
            "List six components and their likely role",
            "Two resistor readings with in/out-of-circuit note",
            "Diode/LED forward and reverse readings",
            "IC part number + pin-1 method",
            "Connector inspection result"
          ],
          "acceptance": [
            "All evidence includes units where applicable.",
            "At least one reading is explained rather than merely recorded.",
            "No component is declared failed without enough evidence."
          ]
        }
      }
    ]
  },
  {
    "week": 2,
    "title": "Schematics + PCB + Datasheet Literacy",
    "short": "Read the documentation, locate the physical node, and decide what should be measured before touching the board.",
    "priority": "Apply-Now Core",
    "sourceWeeks": [
      2,
      7,
      13
    ],
    "outcomes": [
      "Read common schematic structure, reference designators, nets, rails, ground, and connectors.",
      "Relate schematic nodes to PCB pads, traces, vias, connectors, and test points.",
      "Use a datasheet to find pinout, supply limits, logic levels, polarity, and expected behavior.",
      "Turn documentation into an expected-value measurement plan."
    ],
    "lessons": [
      {
        "id": "w2-l1",
        "title": "Read the Schematic as a Prediction Map",
        "sourceNote": "Reuses Alfred Week 2 expected-node reasoning and Week 13 signal-flow/fault-boundary method.",
        "sections": [
          {
            "title": "A schematic shows electrical relationships, not physical placement",
            "text": "A schematic is a map of electrical relationships. Components that are far apart on the page may be physically adjacent on the PCB, and components drawn next to each other may be far apart. Reference designators identify parts; net labels identify electrically common nodes; power symbols identify supply rails and references. Start with the source and reference: where does power enter, what rails should exist, and what node is treated as ground/common? Then identify the load or output. The point of reading the drawing is to predict what should be present at each boundary—not to memorize symbols without a troubleshooting purpose.",
            "remember": "Source → rails/reference → functional blocks → load/output."
          },
          {
            "title": "Series, parallel, nodes, and expected values",
            "text": "Topology is determined by node connections, not by how the drawing looks. Components in series share a single current path. Parallel branches share the same two nodes and therefore the same voltage. Kirchhoff’s Current Law says current into a node must equal current out; Kirchhoff’s Voltage Law says signed voltage changes around a closed loop sum to zero. In technician work, these are diagnostic rules: if a node voltage is wrong, ask what source, drop, branch, or return path would have to change to create that reading. Write expected node voltages before measuring whenever the circuit is simple enough to predict them.",
            "formula": "KCL: ΣI into node = ΣI out   •   KVL: ΣV around loop = 0",
            "resources": [
              "aac-kcl-kvl"
            ]
          },
          {
            "title": "Divide the circuit at functional boundaries",
            "text": "Choose a boundary that can eliminate a large part of the system from suspicion. Confirm source and reference first, then test a midpoint or stage boundary. If the input to a stage is correct but its output is not, the search narrows to that stage and its support conditions. If both are wrong, move upstream. Useful boundaries include connectors, regulators, amplifier stages, buffers, logic gates, sensor interfaces, and power rails. Preserve the original fault long enough to capture evidence before reseating connectors or moving components, because an accidental “fix” can erase the symptom you needed to understand.",
            "remember": "Move from broad blocks to specific components, one evidence-supported step at a time.",
            "resources": [
              "aac-troubleshoot"
            ]
          },
          {
            "title": "Turn the drawing into a measurement plan",
            "text": "For each useful test point, write the node name, reference, operating condition, expected value or waveform, instrument, and what each possible result would mean. Do not probe a convenient pad simply because it is exposed. A good measurement is chosen because it can separate remaining hypotheses. Example: if 12 V is present at a regulator input but the 5 V rail is missing, the fault space is much smaller than “the whole board.” If the 5 V rail exists at the regulator but not at an IC supply pin, the connection between those points becomes the stronger suspect. This is how schematics turn troubleshooting into a sequence instead of a scavenger hunt.",
            "remember": "Every probe point should answer a question."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What should you usually identify first on an unfamiliar powered schematic?",
              "options": [
                "The most expensive IC",
                "Power rails and the reference/ground",
                "Every capacitor value",
                "The PCB color"
              ],
              "answer": 1,
              "why": "Power and reference define what voltages should exist elsewhere in the system.",
              "reviewSection": 0
            },
            {
              "q": "A stage input is correct but its output is wrong. What does that measurement most strongly suggest?",
              "options": [
                "The fault is definitely at the power connector",
                "The search can be narrowed to that stage and its support conditions",
                "The schematic is incorrect",
                "The DMM should be discarded"
              ],
              "answer": 1,
              "why": "A correct stage input and incorrect output moves the troubleshooting boundary into that stage.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "Schematic-to-measurement-plan exercise",
          "equipment": [
            "One simple regulator, sensor, or logic schematic",
            "Highlighter or annotation app",
            "DMM or simulator if hardware is available",
            "Test record"
          ],
          "safety": [
            "If using hardware, remain within the approved low-voltage setup.",
            "Do not probe powered hardware until the reference and expected values are identified."
          ],
          "setup": "Choose a schematic containing at least one source, one regulated rail or functional stage, a connector or input, and an output/load.",
          "steps": [
            "Mark source, reference/ground, rails, input, output, and functional blocks.",
            "Choose five test points that divide the signal/power path efficiently.",
            "For each point, write expected value, reference, instrument, and operating condition.",
            "Write what a normal and abnormal result would make you test next.",
            "If hardware is available, measure at least three points and compare with predictions."
          ],
          "expected": [
            "Each test point has a reason for being selected.",
            "Expected values are stated before measurement.",
            "Measured results are tied back to the schematic rather than treated as isolated numbers."
          ],
          "evidence": [
            "Annotated schematic or list of five test points",
            "Expected-value table",
            "At least three measured/simulated results if hardware is available",
            "One paragraph explaining the first-bad-boundary logic"
          ],
          "acceptance": [
            "The plan can be followed by another person.",
            "Values include units/reference.",
            "No measurement is included without a decision it supports."
          ]
        }
      },
      {
        "id": "w2-l2",
        "title": "PCB Anatomy and Datasheet Lookups",
        "sourceNote": "Keeps only the PCB/datasheet literacy needed from Alfred’s component, schematic, and troubleshooting work.",
        "sections": [
          {
            "title": "Pads, traces, vias, planes, and test points",
            "text": "The schematic tells you what should connect; the PCB tells you where those connections physically exist. A pad is the copper area where a component lead or terminal is soldered. A trace is a copper conductor between points. A via connects copper between layers. Planes are larger copper regions commonly used for ground or power. Test points are deliberate probe locations, although any accessible pad or pin can sometimes serve as a measurement point if it is safe to contact. Multi-layer boards hide many connections, so never assume two visible points are disconnected just because you cannot see a surface trace. Use the schematic, board markings, continuity with power removed, and documentation together.",
            "remember": "Schematic connectivity is logical; PCB copper is the physical implementation."
          },
          {
            "title": "Reference designators, pin 1, polarity, and connectors",
            "text": "Board silkscreen markings help link the physical board to documentation. R, C, D, Q, U, J/P, L, and F commonly identify resistors, capacitors, diodes, transistors, ICs, connectors, inductors, and fuses, but conventions can vary. IC pin 1 may be marked by a dot, notch, bevel, or silkscreen cue; the datasheet/package drawing is the authority. Polarized capacitors, diodes, LEDs, connectors, batteries, and many IC packages have orientation requirements. Before replacing or probing anything, record orientation. For connectors, identify the pin-number convention and keying rather than counting from memory.",
            "remember": "Package markings plus datasheet plus board documentation—not guesswork—establish orientation."
          },
          {
            "title": "Use a datasheet by engineering question",
            "text": "Do not read a 100-page datasheet front to back. Start with the question you need answered. For a technician, the highest-value lookups are usually: absolute maximum ratings, recommended operating voltage, pinout/package, power and ground pins, enable/reset pins, input/output logic levels, typical operating current, timing/interface requirements, and diagnostic/status behavior. “Absolute maximum” is a damage boundary, not a normal operating target. When troubleshooting, record the exact part number and package because pinouts or ratings can differ between related devices. If the board uses a regulator, sensor, ADC, memory device, or interface IC, the datasheet can define what “healthy” should look like.",
            "remember": "Datasheets answer specific questions: pin, rating, expected state, timing, or interface."
          },
          {
            "title": "Cross-reference the schematic, PCB, and datasheet",
            "text": "The strongest troubleshooting picture comes from all three views together. The schematic says U3 pin 8 should receive 5 V. The datasheet says pin 8 is VCC and the device operates from 4.5–5.5 V. The PCB tells you where U3 pin 8 is physically accessible. Now the measurement has context: expected 5 V at U3 pin 8 relative to the board reference, under the stated operating condition. If the rail is correct at the regulator but absent at U3, the problem is not “U3 is bad”; the connection path, connector, protection element, or local damage becomes more likely. Documentation prevents component-swapping by intuition.",
            "remember": "Schematic says what connects; datasheet says what the device expects; PCB says where to measure."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What is a via on a PCB?",
              "options": [
                "A software variable",
                "A connection between copper layers",
                "A type of fuse",
                "The same thing as a connector"
              ],
              "answer": 1,
              "why": "A via is a plated connection that electrically links copper between PCB layers.",
              "reviewSection": 0
            },
            {
              "q": "Where should you look to confirm an IC’s pin 1 and supply pins?",
              "options": [
                "Only the board color",
                "The exact device datasheet/package drawing",
                "A generic pinout for a similar chip",
                "The resistor color code"
              ],
              "answer": 1,
              "why": "The exact part/package datasheet is the authoritative source for pinout and package orientation.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "PCB + datasheet traceability exercise",
          "equipment": [
            "One populated low-voltage PCB or development board",
            "Board schematic or pinout",
            "Datasheet for one IC on the board",
            "DMM",
            "Test record"
          ],
          "safety": [
            "Power off before continuity checks.",
            "Use fine probes carefully around adjacent IC pins.",
            "Do not assume exposed metal is ground without confirming it."
          ],
          "setup": "Pick one IC or regulator that has an accessible datasheet and at least one nearby testable rail.",
          "steps": [
            "Find the device on the schematic and physical board.",
            "Identify pin 1, power pin(s), ground pin(s), and one signal/input/output pin from the datasheet.",
            "Identify at least two pads/vias/test points connected to relevant nets.",
            "With power off, use continuity only where appropriate to confirm one physical connection.",
            "If safe hardware is available, power the board and measure the supply pin relative to the documented reference."
          ],
          "expected": [
            "Physical orientation matches the datasheet/package drawing.",
            "Measured supply is within the recommended operating range for the chosen device.",
            "Any continuity measurement is interpreted using the schematic topology."
          ],
          "evidence": [
            "Part number and package",
            "Pin 1 identification method",
            "Supply pin + expected operating range",
            "Two physical PCB points and their net/function",
            "Measured supply voltage or simulator result"
          ],
          "acceptance": [
            "The part number is exact.",
            "The expected range is sourced from the datasheet.",
            "Board and schematic locations are cross-referenced correctly."
          ]
        }
      }
    ]
  },
  {
    "week": 3,
    "title": "DMM + Bench Supply + Oscilloscope + Function Generator",
    "short": "The standard bench instruments needed before calling yourself ready for electronics/test work.",
    "priority": "Apply-Now Core",
    "sourceWeeks": [
      1,
      3,
      9,
      29
    ],
    "outcomes": [
      "Select the correct instrument from the measurement question.",
      "Use DMM voltage, resistance, continuity, diode, and current modes safely.",
      "Use bench-supply voltage/current-limit controls and interpret CV/CC behavior.",
      "Capture a stable waveform with an oscilloscope and generate a simple known stimulus."
    ],
    "lessons": [
      {
        "id": "w3-l1",
        "title": "DMM and Bench Supply as Diagnostic Instruments",
        "sourceNote": "Reuses Alfred Weeks 1 and 3 almost directly: question-first measurement, DMM connection rules, controlled power, and evidence context.",
        "sections": [
          {
            "title": "Start with a measurable question, not with a probe",
            "text": "A technician measurement should answer a question. “Check the board” is too vague. “Is the 3.3 V rail within 3.20–3.40 V during steady operation?” or “Does this test point produce a 0–3.3 V square wave near 1 kHz?” is actionable. A useful question names the quantity, node/test point, electrical reference, operating condition, expected result, and stop condition. Only after those are written should you choose the instrument. This prevents random probing and makes the result interpretable even if it is unexpected.",
            "remember": "Write the expected result and decision rule before touching the instrument."
          },
          {
            "title": "Voltage, resistance, continuity, diode, and current modes",
            "text": "A digital multimeter is several instruments sharing one display. In voltage mode, connect it in parallel across two points. Resistance, continuity, capacitance, and diode-test functions normally use the meter’s own stimulus, so the circuit should be de-energized and stored energy discharged before use. Current mode is different: the meter becomes part of the current path and presents a low resistance. That usually requires opening the circuit and inserting the meter in series. Leaving the red lead in a high-current jack and then probing across a source can create a near-short. Before every measurement, confirm quantity, function, jack, connection, reference, and expected range.",
            "remember": "Quantity → function → jack → connection → reference → expected reading.",
            "resources": [
              "fluke-dmm"
            ]
          },
          {
            "title": "Voltage drop and continuity answer different questions",
            "text": "Continuity is a fast unpowered check for a low-resistance connection, but a beep does not prove the path is healthy under load. A damaged connector or crimp may still read low enough to beep while developing a large voltage drop when current flows. Powered voltage-drop testing measures the potential difference across a connection while it is carrying current. A connection that should act nearly like a wire should normally have very little drop. The stronger the load current, the more a hidden resistance can reveal itself. Use continuity to find opens and obvious shorts; use voltage drop when you need to judge connection quality under operating conditions.",
            "remember": "Continuity proves a low-resistance path exists; loaded voltage drop tests how well that path carries current."
          },
          {
            "title": "The bench supply is part of the measurement setup",
            "text": "During bring-up, the bench supply is also an instrument. Output voltage, current draw, and CV/current-limit state can reveal an abnormal load before any signal probing. Set the intended voltage with the output disabled. Choose a conservative current limit based on expected load current. After enabling output, watch current immediately. If current is much higher than predicted or the supply enters current-limit mode unexpectedly, stop and investigate. Record the supply voltage, limit, observed current, and operating state because they define the test condition. A later measurement cannot be reproduced if the power conditions are unknown.",
            "remember": "Supply settings and current draw are evidence, not background details.",
            "resources": [
              "keysight-psu",
              "keysight-cvcc"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "Which DMM mode normally requires opening the circuit and inserting the meter in series?",
              "options": [
                "DC voltage",
                "Resistance",
                "Current",
                "Continuity"
              ],
              "answer": 2,
              "why": "Current mode places the meter in the current path.",
              "reviewSection": 1
            },
            {
              "q": "A harness passes continuity but shows a large voltage drop across one connector while loaded. What does that suggest?",
              "options": [
                "The connector may have unwanted resistance",
                "The load must be open",
                "The meter cannot measure connectors",
                "Continuity proves the connector is perfect"
              ],
              "answer": 0,
              "why": "A high-resistance connection can pass a low-current continuity test yet drop voltage under load.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "DMM measurement discipline and loaded connection test",
          "equipment": [
            "DMM",
            "Low-voltage source",
            "Resistor/load",
            "Breadboard or training harness with a connector/jumper",
            "Test record"
          ],
          "safety": [
            "Resistance/continuity checks are performed with power off.",
            "Verify the red lead is returned to the voltage/resistance jack after any current measurement.",
            "Use only low-voltage DC."
          ],
          "setup": "Build a simple load path containing at least one removable connection between source and load.",
          "steps": [
            "Write the expected source voltage and load current.",
            "With power off, check continuity through the connection.",
            "Power the circuit and measure source voltage to reference.",
            "Measure voltage on each side of the connection to reference.",
            "Measure directly across the connection to obtain loaded voltage drop.",
            "If safe and appropriate, create a deliberately poor/high-resistance connection using a training method, then repeat the voltage-drop measurement."
          ],
          "expected": [
            "Healthy connection has a small drop compared with supply voltage.",
            "A deliberately resistive connection produces a larger drop under load.",
            "Readings remain consistent with the circuit and load current."
          ],
          "evidence": [
            "Expected source voltage",
            "Measured source voltage",
            "Continuity result",
            "Healthy connection voltage drop",
            "Faulted connection voltage drop",
            "Explain why continuity alone was insufficient"
          ],
          "acceptance": [
            "All measurements include units and reference/connection description.",
            "The learner distinguishes node voltage from voltage drop.",
            "No powered resistance/continuity measurement is performed."
          ]
        }
      },
      {
        "id": "w3-l2",
        "title": "Oscilloscope and Function Generator Fundamentals",
        "sourceNote": "Reuses Alfred Week 3 oscilloscope onboarding and adds only the basic known-stimulus function-generator skill commonly expected in test roles.",
        "sections": [
          {
            "title": "Learn the oscilloscope on a known waveform first",
            "text": "An oscilloscope displays voltage versus time. The vertical axis is voltage and the horizontal axis is time. A channel has an input probe and a reference/ground. Probe attenuation must agree with the scope setting. Vertical scale controls volts per division; timebase controls time per division; trigger defines the event that starts an acquisition so a repeating waveform can appear stable. Begin with a known square wave, adjust one control at a time, and explain what changed before using the scope on an unknown circuit. This separates instrument confusion from circuit uncertainty.",
            "remember": "Stable known waveform first; unknown troubleshooting second.",
            "resources": [
              "tektronix-scope"
            ]
          },
          {
            "title": "Reference, grounding, loading, and probe compensation",
            "text": "A probe ground lead is an electrical connection, not a decorative clip. On many bench oscilloscopes it is tied to protective earth, so connecting it to the wrong node can short that node to earth. Stay within approved isolated low-voltage setups and know your instrument. Passive probes also load the circuit through finite resistance and capacitance. A 10× probe usually reduces loading compared with 1×. Before accurate work, match the probe attenuation setting and compensate a passive probe using the scope’s reference square wave if the probe/scope requires it. Poor compensation can make edges look rounded or peaked even when the circuit is fine.",
            "remember": "The measurement system includes circuit + reference + probe + scope settings."
          },
          {
            "title": "Amplitude, offset, period, frequency, and duty cycle",
            "text": "The most useful beginner measurements are peak-to-peak amplitude (Vpp), DC offset or average level, period, frequency, and duty cycle. Period is the time for one cycle; frequency is the number of cycles per second, so f = 1/T. Duty cycle is the percentage of each period spent in the active state. A 1 kHz waveform has a 1 ms period. If it is high for 0.25 ms and low for 0.75 ms, the duty cycle is 25%. Automated scope measurements are useful, but manually estimating these quantities from the grid helps catch wrong scale, trigger, or probe settings.",
            "formula": "f = 1/T   •   T = 1/f   •   duty cycle = active time / period × 100%",
            "example": "1 kHz → T = 1/1000 s = 1 ms. High for 0.5 ms → 50% duty cycle."
          },
          {
            "title": "Use a function generator as a known stimulus",
            "text": "A function generator creates a controlled waveform so you can test how a circuit responds. For technician-level use, know how to choose waveform type, frequency, amplitude, and DC offset, and confirm that the generator’s output specification matches the circuit. Start with a simple low-voltage sine or square wave and verify the actual output on the oscilloscope before connecting it to an unknown circuit. Then apply the stimulus at a documented input and trace whether the expected waveform appears at later test points. Do not use a generator to force a signal into a node that is already being actively driven unless the procedure explicitly permits it.",
            "remember": "Known stimulus → known input condition → trace the response."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "A repeating waveform slides across the screen instead of appearing stable. Which control is most directly related?",
              "options": [
                "Trigger",
                "DMM continuity",
                "Current limit",
                "Resistance range"
              ],
              "answer": 0,
              "why": "Triggering synchronizes the acquisition to a recurring event.",
              "reviewSection": 0
            },
            {
              "q": "What should you do before using a function generator to troubleshoot an unknown signal path?",
              "options": [
                "Set maximum amplitude",
                "Verify the generator output on the scope and document the intended stimulus",
                "Connect it to every node",
                "Disable the circuit ground"
              ],
              "answer": 1,
              "why": "A known, verified stimulus is useful only when its amplitude/frequency/reference are controlled.",
              "reviewSection": 3
            }
          ]
        },
        "lab": {
          "title": "Known waveform capture + known stimulus",
          "equipment": [
            "Oscilloscope with passive probe",
            "Scope probe-compensation output or low-voltage function generator",
            "Function generator if available",
            "Test record / screenshot capability"
          ],
          "safety": [
            "Use only low-voltage signals.",
            "Connect probe ground only to the documented circuit reference.",
            "Verify generator amplitude/offset before applying it to a DUT."
          ],
          "setup": "Use the scope’s calibration square wave or a function generator set to a known low-voltage square wave (for example ~1 kHz).",
          "steps": [
            "Set probe attenuation correctly in both probe and scope.",
            "Connect to the known reference waveform and obtain a stable trace.",
            "Adjust volts/div and time/div so multiple clean cycles are visible.",
            "Record Vpp, period, frequency, and duty cycle.",
            "If using a generator, change frequency to a second known value and verify the scope measurement follows.",
            "Save a screenshot/photo that includes enough settings to reproduce the capture."
          ],
          "expected": [
            "Trace is stable and not clipped.",
            "Measured frequency/period agree with the known source within reasonable instrument tolerance.",
            "Probe compensation is acceptable for the training probe/scope."
          ],
          "evidence": [
            "Probe attenuation",
            "Volts/div",
            "Time/div",
            "Trigger source/level",
            "Measured Vpp",
            "Measured frequency",
            "Measured period",
            "Measured duty cycle",
            "Screenshot filename or short description"
          ],
          "acceptance": [
            "A stable trace is captured.",
            "Settings and units are recorded.",
            "Learner can explain what changing volts/div, time/div, and trigger does."
          ]
        }
      }
    ]
  },
  {
    "week": 4,
    "title": "Systematic Troubleshooting + Test Procedures",
    "short": "Diagnose from evidence, execute a test repeatably, and document a defensible result.",
    "priority": "Apply-Now Core",
    "sourceWeeks": [
      5,
      12,
      13,
      20,
      22,
      27,
      28
    ],
    "outcomes": [
      "Convert a symptom into competing hypotheses and discriminating tests.",
      "Use divide-and-conquer, first-bad-boundary, controlled substitution, and retest.",
      "Follow or write a basic test procedure with setup, stimulus, acquisition, evaluation, cleanup, and verdict.",
      "Record configuration, measurement context, calibration/status awareness, and PASS/FAIL without hiding uncertainty."
    ],
    "lessons": [
      {
        "id": "w4-l1",
        "title": "Fault Isolation Without Guessing",
        "sourceNote": "Reuses Alfred Weeks 5 and 13: reproduce → predict → measure → isolate → correct → verify.",
        "sections": [
          {
            "title": "Start with an observable failure statement",
            "text": "Write the symptom in terms another technician could reproduce. “Board dead” is weak. “With 12.0 V applied at J1 and current limit set to 0.5 A, power LED is off and the 5 V rail measures 0.18 V” is useful. Freeze the configuration before changing anything: source, firmware/configuration if relevant, cables, switches, load, and operating state. Visual inspection comes early because obvious reversed connectors, contamination, damaged parts, loose hardware, or solder bridges are cheap to find. But inspection is not a substitute for electrical evidence. The first goal is to preserve and describe the failure accurately enough that the next measurement has meaning.",
            "remember": "A symptom is what happened under a defined condition—not your guess about why."
          },
          {
            "title": "Build competing hypotheses before probing",
            "text": "A hypothesis is useful only when it predicts evidence that could differ from another hypothesis. Group plausible causes by functional layer: source, power, connection, component, control, signal path, load, and instrument/setup. For each hypothesis, write one or two observations you would expect if it were true. Example: a missing local rail could explain a dead output; an open signal path could produce normal rails but no changing input; a shorted load could pull a normally good regulator into current limit. The goal is not to guess the failed part. It is to create competing explanations that a measurement can separate.",
            "remember": "Write competing causes and their predicted evidence before probing."
          },
          {
            "title": "Choose a high-information test and divide at boundaries",
            "text": "A high-information test has possible outcomes that separate the remaining hypotheses. Confirm source/reference first, then choose a functional boundary that can eliminate a large region. If a stage input is correct but output is wrong, stay in that stage and its support conditions. If both are wrong, move upstream. A supply-current measurement can separate overload from open-path behavior; a midpoint voltage can divide upstream from downstream; a known stimulus can make signal tracing meaningful. Prefer the safest test that rules out the most possibilities without changing several variables at once.",
            "remember": "The best next test is the one that shrinks the fault space the most.",
            "resources": [
              "aac-troubleshoot",
              "ti-board"
            ]
          },
          {
            "title": "Root cause requires correction and repeated verification",
            "text": "A root-cause claim must explain the symptom, be supported by evidence, and predict what will happen when the cause is corrected. “Bad board” is not a cause. “Open conductor between the 3.3 V rail and U4 supply pin removed power from the stage; repairing the conductor restored the rail and output” is a causal statement. After correction, repeat the original failing condition, not just a convenient quick check. Then run at least one nearby regression check so the repair did not create another problem. If the evidence supports only a probable cause, state that uncertainty rather than upgrading it to certainty.",
            "remember": "Symptom → evidence → cause mechanism → correction → repeated verification."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "Which troubleshooting statement is strongest?",
              "options": [
                "The board seems bad",
                "I think the IC died",
                "With 12.0 V input, the 5 V rail is 0.2 V and the supply is current-limiting at 0.5 A",
                "It worked after I moved some wires"
              ],
              "answer": 2,
              "why": "It states configuration and measured evidence without pretending the cause is already known.",
              "reviewSection": 0
            },
            {
              "q": "What makes a test 'high-information'?",
              "options": [
                "It uses the most expensive instrument",
                "Its possible results separate the remaining plausible causes",
                "It produces the largest number",
                "It is always taken at the output"
              ],
              "answer": 1,
              "why": "A useful test is chosen because different hypotheses predict different results.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "Two-fault diagnostic exercise",
          "equipment": [
            "A simple low-voltage training circuit or simulator",
            "Schematic",
            "DMM; oscilloscope if relevant",
            "Two safe, reversible fault methods",
            "Fault report template"
          ],
          "safety": [
            "Only inject low-energy faults that are safe for the training circuit.",
            "Power off before rewiring, opening connections, or changing components.",
            "Do not create uncontrolled shorts across a supply."
          ],
          "setup": "Start from a known-good circuit and verify its baseline values. Introduce one safe fault without changing anything else.",
          "steps": [
            "Record the known-good baseline and exact faulted symptom.",
            "Write at least three plausible hypotheses.",
            "Choose the first measurement and explain why it separates hypotheses.",
            "Take measurements until the fault region is isolated.",
            "Correct or reverse the fault and repeat the original test.",
            "Repeat the process with a second fault of a different type."
          ],
          "expected": [
            "Each measurement changes the next decision.",
            "The final root-cause statement describes a mechanism, not a vague label.",
            "Original function is restored after correction."
          ],
          "evidence": [
            "Fault 1 symptom + setup",
            "Fault 1 hypotheses",
            "Fault 1 measurement sequence",
            "Fault 1 root cause + retest result",
            "Fault 2 symptom + setup",
            "Fault 2 measurement sequence",
            "Fault 2 root cause + retest result"
          ],
          "acceptance": [
            "Both faults are isolated from evidence.",
            "No more than one variable is intentionally changed at a time.",
            "Reports preserve expected vs actual values and units."
          ]
        }
      },
      {
        "id": "w4-l2",
        "title": "Test Procedures, Acceptance Criteria, and Measurement Traceability",
        "sourceNote": "Compresses Alfred Weeks 12, 22, 27, and 28 into the technician essentials for procedure-driven test work.",
        "sections": [
          {
            "title": "A test procedure makes the setup reproducible",
            "text": "A professional test is more than “measure this.” A basic test case has setup, stimulus or operating condition, acquisition/measurement, evaluation, cleanup/reset, and report. State the unit under test (DUT), required equipment, cable/fixture configuration, power settings, instrument settings, environmental or operating condition if relevant, and the exact points to measure. If a test depends on firmware or configuration, record the version. Another trained person should be able to reproduce the test without relying on your memory. Procedure-driven work is common in manufacturing, acceptance test, aerospace, and repair environments because repeatability matters as much as technical intuition.",
            "remember": "Setup → stimulus → measure → evaluate → cleanup → report."
          },
          {
            "title": "Acceptance criteria create PASS/FAIL boundaries",
            "text": "A measurement becomes a test result only when it is compared with a criterion. “Measured 3.31 V” is data. “Requirement: 3.20–3.40 V; measured 3.31 V; PASS” is a verdict. Criteria may come from a drawing, specification, datasheet, test procedure, or engineering requirement. Do not invent a tolerance just to create a PASS. Keep FAIL separate from ERROR: a DUT can fail a valid test, while a broken fixture, disconnected instrument, timeout, or invalid measurement may mean the test itself did not complete correctly. If evidence is ambiguous, use an explicit inconclusive/needs-investigation status rather than forcing a verdict.",
            "remember": "Data + criterion = verdict."
          },
          {
            "title": "Calibration/status awareness and instrument context",
            "text": "Technicians are often expected to use equipment whose calibration or verification status is controlled by the organization. You do not need to become a metrologist, but you must understand the principle: if a test requires calibrated equipment, verify the instrument is within its approved calibration/verification interval and use the required asset ID or record. Record the instrument, probe/lead configuration, key settings, and units. If the instrument is out of calibration or the setup is outside its rating, the result may not be acceptable evidence even if the number looks reasonable. Never alter calibration labels or claim a calibration you did not perform.",
            "remember": "A trustworthy measurement includes instrument identity/status and setup context."
          },
          {
            "title": "A test report turns evidence into a decision",
            "text": "A useful technician report states objective, DUT/configuration, equipment, method, expected result or acceptance criteria, measured evidence with units, verdict, anomalies, corrective action if any, and retest result. A screenshot alone is not a report because it may omit test point, reference, scale, configuration, or criterion. Separate facts from hypotheses: “TP4 = 0.18 V” is a fact; “U2 may be overloaded” is a hypothesis. If escalating to engineering, include what has already been checked and the specific decision or help you need so the next person does not have to repeat the same work.",
            "remember": "Conditions + method + evidence + criterion + conclusion.",
            "resources": [
              "ti-board"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "A requirement says a rail must be 3.20–3.40 V. You measure 3.31 V using the approved setup. What is the appropriate result?",
              "options": [
                "PASS",
                "FAIL",
                "ERROR",
                "Unknown because voltage cannot be tested"
              ],
              "answer": 0,
              "why": "3.31 V falls within the stated acceptance range.",
              "reviewSection": 1
            },
            {
              "q": "The DUT reading cannot be collected because the scope probe is disconnected. What is the best classification?",
              "options": [
                "DUT FAIL",
                "PASS",
                "Test/setup ERROR or invalid test",
                "Root cause confirmed"
              ],
              "answer": 2,
              "why": "The test system did not successfully acquire valid evidence, so it should not be reported as a DUT failure.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "Write and execute a repeatable bench test procedure",
          "equipment": [
            "One low-voltage circuit or development board",
            "DMM and/or oscilloscope",
            "Existing schematic/datasheet",
            "Test procedure template"
          ],
          "safety": [
            "Use only safe low-voltage work.",
            "Verify instrument ratings and required calibration/verification status for the environment.",
            "Do not invent acceptance limits; source them or clearly label a training limit."
          ],
          "setup": "Choose a simple requirement such as a supply rail range or square-wave amplitude/frequency.",
          "steps": [
            "Write DUT identity/configuration and equipment list.",
            "Write setup and instrument settings.",
            "State the operating condition/stimulus.",
            "State the expected result and acceptance criterion.",
            "Execute the test and record raw measurements.",
            "Assign PASS/FAIL/ERROR as appropriate.",
            "Reset/cleanup the setup and write the conclusion."
          ],
          "expected": [
            "Another person could repeat the procedure.",
            "Verdict follows the stated criterion.",
            "Raw data remain visible even when a verdict is assigned."
          ],
          "evidence": [
            "DUT/configuration",
            "Instrument identity/status note",
            "Procedure steps",
            "Acceptance criterion + source",
            "Measured value(s)",
            "Verdict",
            "Anomaly/corrective action/retest if needed"
          ],
          "acceptance": [
            "Procedure is complete enough to reproduce.",
            "Criterion exists before the verdict.",
            "Facts and interpretations are distinguishable."
          ]
        }
      }
    ]
  },
  {
    "week": 5,
    "title": "Soldering + Rework + ESD + Connectors/Harnesses",
    "short": "The physical workmanship skills that convert electronics knowledge into credible technician evidence.",
    "priority": "Apply-Now Core",
    "sourceWeeks": [
      12,
      19,
      29
    ],
    "outcomes": [
      "Recognize acceptable and defective solder joints and perform basic through-hole/SMD rework on training hardware.",
      "Use ESD controls appropriately and distinguish them from shock protection.",
      "Inspect and troubleshoot connectors, crimps, strain relief, and harness continuity.",
      "Document before/after physical changes and verify the repair electrically."
    ],
    "lessons": [
      {
        "id": "w5-l1",
        "title": "Soldering, Inspection, and Rework",
        "sourceNote": "Reuses Alfred Week 12/29 workmanship logic and the same external soldering references.",
        "sections": [
          {
            "title": "A solder joint must wet both conductors",
            "text": "A reliable solder joint is both an electrical connection and a mechanical connection. Heat the pad and component lead/pin together, then feed solder into the heated joint so it wets both surfaces. The goal is not to melt solder onto the iron and drip it onto the board. Flux helps remove oxides and improve wetting; excessive heat and dwell time can damage pads, components, insulation, and laminate. Let the joint cool without movement. On a training board, inspection should become a habit: look for evidence that solder flowed onto both surfaces, not just a shiny blob that happens to touch them.",
            "remember": "Heat the joint; let solder flow onto the joined surfaces.",
            "resources": [
              "adafruit-solder"
            ]
          },
          {
            "title": "Common defects are observable",
            "text": "Defects include disturbed/cold joints, insufficient wetting, excess or insufficient solder, solder bridges, overheated joints, lifted pads, damaged insulation, stray solder, and incorrect component orientation. Surface-mount work adds risks such as bridged fine-pitch leads, tombstoned parts, or pads that did not wet. Appearance alone cannot prove every electrical property, but workmanship criteria give you a repeatable inspection language. If a pad is lifted, laminate is carbonized, an inner-layer connection may be damaged, or repair would exceed your training, stop and escalate rather than improvising a fragile jumper as if it were normal production work.",
            "remember": "Inspect against observable workmanship criteria, not “looks good to me.”",
            "resources": [
              "adafruit-defects"
            ]
          },
          {
            "title": "Basic rework is controlled removal + controlled replacement",
            "text": "Before rework, record the reference designator, part/value/orientation, board revision, symptom, and known-good or faulted measurements. De-energize, discharge stored energy, and establish ESD controls where required. Use the appropriate iron tip, temperature, flux, solder wick or suction tool, and minimize dwell time. Protect adjacent parts. After removal, inspect the pad/trace condition before installing the replacement. After replacement, inspect for bridges/wetting/orientation, then perform continuity or resistance checks with power removed followed by a functional retest. The rework is not complete because the new part is physically attached; it is complete when the original function has been verified.",
            "remember": "Before state → controlled change → inspection → electrical verification → functional retest."
          },
          {
            "title": "ESD control protects devices; it is not shock protection",
            "text": "Electrostatic discharge can damage semiconductor junctions at energy levels you may not feel. Use the organization’s approved ESD-safe work surface, grounding, storage, and handling process for sensitive devices. Keep ESD precautions conceptually separate from electrical shock protection: an ESD wrist strap is not permission to work on hazardous energized circuits. Jade’s practical work stays in low-voltage electronics. Handle boards by appropriate edges, avoid unnecessary contact with contacts/pins, keep static-sensitive devices in suitable packaging, and follow the device/workplace requirement rather than inventing a grounding method.",
            "remember": "ESD controls protect hardware from static; safe-work rules protect people from electrical hazards.",
            "resources": [
              "nasa-esd"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What is the best description of a good soldering technique?",
              "options": [
                "Melt solder on the iron and drip it onto the board",
                "Heat the joined surfaces and let solder wet both",
                "Use as much solder as possible",
                "Keep the iron on the pad until the board changes color"
              ],
              "answer": 1,
              "why": "The pad and lead/pin must reach soldering temperature so solder wets both surfaces.",
              "reviewSection": 0
            },
            {
              "q": "What should happen immediately after a component is reworked?",
              "options": [
                "Assume the repair is complete",
                "Inspect workmanship, perform appropriate unpowered checks, then functionally retest",
                "Increase supply voltage",
                "Delete the original fault notes"
              ],
              "answer": 1,
              "why": "Rework needs inspection and electrical/functional verification before acceptance.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "Workmanship sample + controlled rework",
          "equipment": [
            "Temperature-controlled soldering iron",
            "Solder and appropriate flux",
            "Training PCB / solder practice board",
            "Solder wick or suction tool",
            "DMM",
            "Magnification if available",
            "ESD setup as appropriate"
          ],
          "safety": [
            "Use eye protection and ventilation appropriate to soldering.",
            "Use only a sacrificial/training board for intentional defect practice.",
            "Power must be removed during soldering/rework."
          ],
          "setup": "Use a training PCB with through-hole pads and, if available, beginner-size SMD parts such as 0805/1206 or SOIC—not fine-pitch/BGA.",
          "steps": [
            "Create at least five acceptable through-hole joints.",
            "Inspect and photograph/describe the joints.",
            "On training hardware, identify or intentionally create one safe workmanship defect such as excess solder or a bridge.",
            "Remove/rework the defect using controlled heat and wick/suction.",
            "If available, perform one beginner SMD removal/replacement on a practice board.",
            "With power off, verify no unintended short exists; then perform a functional or continuity retest."
          ],
          "expected": [
            "Acceptable joints show wetting without bridges or heat damage.",
            "Reworked area remains mechanically/electrically intact.",
            "No lifted pad, damaged trace, or unresolved bridge remains."
          ],
          "evidence": [
            "Photo/description of acceptable joint",
            "Defect type identified",
            "Rework method used",
            "Post-rework continuity/resistance result",
            "Functional retest result",
            "One workmanship lesson learned"
          ],
          "acceptance": [
            "Evidence shows before/after condition.",
            "At least one defect is correctly identified and corrected.",
            "Damage beyond training is explicitly escalated rather than hidden."
          ]
        }
      },
      {
        "id": "w5-l2",
        "title": "Connectors, Crimps, Harnesses, and Repair Evidence",
        "sourceNote": "Reuses Alfred Weeks 12, 19, and 29 while leaving broad cable/media theory in Alfred.",
        "sections": [
          {
            "title": "Mechanical workmanship becomes electrical reliability",
            "text": "Many electronics failures are interconnect failures. Inspect connector housings, pin alignment, retention, keying, contamination, strain relief, cable damage, insulation, and the transition from wire to terminal. A crimp is not merely a squeezed piece of metal; it must produce a reliable mechanical and electrical connection without cutting strands, leaving loose conductors, or placing stress where the wire exits the terminal. Use the applicable drawing/work instruction or workmanship standard. If you do not have the correct crimp tool, terminal, or inspection method, do not improvise a production-quality claim.",
            "remember": "A connector/harness is part of the circuit, not just packaging.",
            "resources": [
              "nasa-harness"
            ]
          },
          {
            "title": "Pin numbering and orientation must be explicit",
            "text": "Before continuity testing a harness, establish the connector view and pin-numbering convention. “Pin 1 on the left” is meaningless if one drawing is a mating-face view and another is a wire-side view. Use keying, labels, connector documentation, and pinout drawings. Mark both ends of the harness in the record. For a repair, record original pin/cavity, wire color or identifier, gauge if relevant, terminal type, and destination. Mis-pinning can create a perfect continuity result on the wrong circuit, which is why documentation is as important as the beep.",
            "remember": "Always state which connector view and pin numbering you are using."
          },
          {
            "title": "Continuity finds opens; loaded voltage drop finds weak connections",
            "text": "End-to-end continuity is useful for opens and gross shorts. Sectional testing can isolate which cable segment or connector contains a fault. But continuity uses very little current, so a corroded or poorly crimped connection may still beep. If the circuit can be safely powered under a known load, compare voltage on both sides of the suspect connection or measure directly across it. An unexpected drop across a connection that should be nearly zero resistance is evidence of unwanted resistance. For intermittent problems, controlled flexing or strain may be allowed by a procedure, but do not randomly move wiring before the original fault is documented.",
            "remember": "Continuity is a map check; voltage drop is a quality check under load."
          },
          {
            "title": "A physical change needs a before/after record",
            "text": "Before rework or harness changes, record the board or assembly revision, reference designator or connector/pin, observed condition, reason for change, and the verification you expect afterward. Photograph or annotate the original state when useful. After the change, record part/value/orientation or terminal/wire details, workmanship result, continuity or functional checks, and any remaining risk. A photograph cannot prove electrical performance, and a meter reading cannot show every workmanship defect. Link physical evidence and electrical evidence so another technician can reconstruct what changed and why the repair was accepted.",
            "remember": "Traceability means another person can reconstruct the work without relying on your memory."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "Why can a harness pass continuity yet fail in operation?",
              "options": [
                "Continuity mode uses low test current and may not expose a high-resistance connection under load",
                "Continuity never works on wire",
                "The connector is always good if it beeps",
                "Voltage drop only exists in AC circuits"
              ],
              "answer": 0,
              "why": "A weak connection can appear continuous yet develop substantial voltage drop at operating current.",
              "reviewSection": 2
            },
            {
              "q": "Before testing connector pins, what must be established?",
              "options": [
                "The wire color only",
                "Connector view/orientation and pin-number convention",
                "The newest oscilloscope firmware",
                "A random starting pin"
              ],
              "answer": 1,
              "why": "Pin numbering is ambiguous unless mating/wire-side view and orientation are defined.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "Harness map, inspection, and loaded connection check",
          "equipment": [
            "Small training harness or connector pair",
            "Pinout/drawing",
            "DMM",
            "Low-voltage source + resistor/load if appropriate",
            "Inspection light/magnification",
            "Test record"
          ],
          "safety": [
            "Power off during continuity mapping.",
            "Do not probe in a way that spreads/damages contacts.",
            "Use only low-voltage load testing."
          ],
          "setup": "Choose a harness with at least three conductors and documented pin numbers.",
          "steps": [
            "Record connector orientation/view at both ends.",
            "Inspect terminals, retention, strain relief, and insulation.",
            "Map each conductor end-to-end with continuity and record resistance if useful.",
            "Check for unintended cross-shorts between selected pins.",
            "If safe, pass a small load current and measure voltage drop across one complete connection path.",
            "Document any fault, repair, and retest."
          ],
          "expected": [
            "Every conductor maps to the intended pin.",
            "No unintended short is found.",
            "Loaded drop is consistent with a healthy low-resistance interconnect for the training setup."
          ],
          "evidence": [
            "Connector A/B view description",
            "Pin-to-pin continuity table",
            "Visual inspection result",
            "Loaded voltage-drop result",
            "Any repair + retest"
          ],
          "acceptance": [
            "Pin mapping is complete and unambiguous.",
            "Visual and electrical evidence are both recorded.",
            "Any defect is tied to a corrective action or explicit escalation."
          ]
        }
      }
    ]
  },
  {
    "week": 6,
    "title": "Digital Logic + Logic Analyzer",
    "short": "Enough digital hardware to recognize states, timing faults, and capture real activity—without turning Jade into a digital-design course.",
    "priority": "Embedded/Test Extension",
    "sourceWeeks": [
      11,
      18,
      29
    ],
    "outcomes": [
      "Interpret digital HIGH/LOW as voltage ranges rather than abstract labels.",
      "Explain floating inputs, pull-up/pull-down resistors, clocks, edges, and basic debounce.",
      "Configure a logic analyzer with appropriate sample rate and channel mapping.",
      "Capture known-good digital behavior and compare a faulted capture."
    ],
    "lessons": [
      {
        "id": "w6-l1",
        "title": "Digital Signals Are Voltages Over Time",
        "sourceNote": "Condenses Alfred Week 11 digital logic into only the physical concepts needed for test work.",
        "sections": [
          {
            "title": "Logic 0 and logic 1 are voltage ranges",
            "text": "A digital “1” is not a magic word. An input interprets a voltage range as HIGH and another range as LOW. The exact thresholds come from the device datasheet and supply conditions. A 3.3 V logic device may not tolerate a 5 V signal, and two devices can disagree about what counts as a valid HIGH if their logic families or supply voltages differ. During troubleshooting, measure the actual voltage at the receiver pin and compare it with the receiver’s guaranteed input thresholds—not only the transmitter’s nominal output. A signal sitting in the undefined region can cause intermittent behavior that looks like software failure.",
            "remember": "Digital states are electrical contracts between transmitter and receiver."
          },
          {
            "title": "Floating inputs need a defined default state",
            "text": "An un-driven high-impedance input can float to an unpredictable voltage and react to leakage or noise. Pull-up and pull-down resistors provide a weak default state while still allowing another device or switch to override it. Pull-ups are especially important on interfaces such as I²C, whose devices normally pull a line low rather than actively driving it high. When an input behaves randomly, verify whether it has a defined bias and whether the measured idle voltage agrees with the intended state. A missing pull resistor, broken connection, or wrong value can make an otherwise functional circuit appear unstable.",
            "remember": "If nobody drives an input, something still needs to define its default state."
          },
          {
            "title": "Edges, clocks, pulse width, and timing",
            "text": "Digital systems communicate through transitions in time. A rising edge goes from LOW toward HIGH; a falling edge goes from HIGH toward LOW. Clocked interfaces use an edge to tell the receiver when data should be sampled. Pulse width and period matter because a signal that reaches the correct voltage but changes too quickly, too slowly, or at the wrong moment can still fail. The oscilloscope is the right tool when analog waveform shape, ringing, voltage margin, or edge quality matters. The logic analyzer is the right tool when you need to see many digital state transitions and decode their sequence.",
            "remember": "A correct voltage at the wrong time is still a digital failure."
          },
          {
            "title": "Switch bounce is a time-domain problem",
            "text": "Mechanical contacts do not always transition cleanly once. When a button or switch closes, the contacts can physically bounce, producing several rapid transitions before settling. A DMM may show only the final average/steady state, while a scope or logic analyzer reveals the burst of edges. Debounce can be implemented with hardware, software, or both. For a technician, the key lesson is diagnostic: if one physical event causes multiple digital events, capture the time behavior before blaming the controller or application. The same principle applies to noisy connectors and intermittent digital lines.",
            "remember": "Use a time-domain tool when the symptom depends on transitions."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What determines whether a voltage is interpreted as a valid digital HIGH?",
              "options": [
                "The word HIGH on the schematic",
                "The receiving device’s input thresholds and conditions",
                "Any voltage above 0 V",
                "The DMM brand"
              ],
              "answer": 1,
              "why": "Digital input thresholds are electrical specifications of the receiving device.",
              "reviewSection": 0
            },
            {
              "q": "Why is a pull-up resistor used on a digital input or I²C line?",
              "options": [
                "To create a default HIGH state while allowing the line to be pulled low",
                "To increase CPU clock speed",
                "To replace ground",
                "To measure current"
              ],
              "answer": 0,
              "why": "The resistor biases the line high but can be overridden by a device pulling the line low.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "Logic level and pull-resistor observation",
          "equipment": [
            "Low-voltage development board or simulator",
            "DMM and oscilloscope or logic analyzer",
            "Pushbutton/jumper or digital output",
            "Pull-up resistor if not built in",
            "Test record"
          ],
          "safety": [
            "Stay within the board’s logic-voltage limits.",
            "Do not connect a 5 V source to a 3.3 V-only input unless the hardware explicitly supports it.",
            "Power off before changing wiring."
          ],
          "setup": "Use a digital input that can be observed with a known pull-up or pull-down.",
          "steps": [
            "Record the input supply voltage and datasheet logic thresholds if available.",
            "Observe idle voltage with the intended pull resistor present.",
            "Change the input state and observe the voltage transition.",
            "If safe on training hardware, remove/disable the pull resistor and observe whether the input becomes unstable or undefined.",
            "Restore the known-good condition and confirm behavior."
          ],
          "expected": [
            "Defined state sits comfortably within a valid logic range.",
            "The restored pulled input returns to predictable behavior.",
            "Any floating behavior is described as evidence, not as a guaranteed value."
          ],
          "evidence": [
            "Supply voltage",
            "Relevant logic thresholds",
            "Idle voltage with pull",
            "Active voltage",
            "Observation without pull",
            "Restored-state result"
          ],
          "acceptance": [
            "Logic states are connected to measured voltages.",
            "The learner can explain the role of the pull resistor.",
            "No logic-level rating is exceeded."
          ]
        }
      },
      {
        "id": "w6-l2",
        "title": "Use a Logic Analyzer on Known-Good Activity First",
        "sourceNote": "Reuses Alfred Week 18’s rule: learn threshold, sample rate, channel mapping, and decoder setup on a known-good signal before diagnosing a fault.",
        "sections": [
          {
            "title": "What a logic analyzer measures",
            "text": "A logic analyzer samples one or more digital channels and records whether each channel is above or below a threshold at each sample time. It is excellent for seeing relationships among clocks, data, chip select, interrupt lines, and serial buses. Unlike an oscilloscope, it usually does not show the detailed analog shape of the voltage. That tradeoff gives you many channels and long captures. Use the scope if you need signal integrity; use the logic analyzer if you need state sequence, timing relationships, or protocol decoding. In many troubleshooting sessions both instruments answer different layers of the same question.",
            "remember": "Scope = analog shape; logic analyzer = digital state sequence."
          },
          {
            "title": "Sample rate, threshold, and channel mapping",
            "text": "The analyzer must sample fast enough to observe the transitions of interest. If the sample rate is too low, short pulses can be missed and edge timing can be inaccurate. Set the digital threshold appropriately for the logic voltage. Then map channels from the physical probe to exact signal names from the schematic/pinout—SCL, SDA, TX, RX, CS, IRQ, and so on. A capture labeled CH0/CH1 without a wiring record is weak evidence. Before using a protocol decoder, verify the raw transitions make sense and the channel assignment is correct.",
            "remember": "Bad threshold, bad sample rate, or wrong channel mapping can manufacture a fake fault.",
            "resources": [
              "saleae-digital"
            ]
          },
          {
            "title": "Known-good capture becomes a reference",
            "text": "Start with a circuit or board that is known to work. Capture the relevant channels under a repeatable action and save the setup: board revision, logic voltage, channel mapping, sample rate, trigger condition, operating action, and decoder settings. Mark one event that matters—for example a button edge followed by a response pulse. That known-good capture becomes a comparison artifact. Later, a faulted capture can be evaluated against the actual timing and sequence that worked rather than against memory or a generic expectation.",
            "remember": "Known-good evidence is a troubleshooting asset."
          },
          {
            "title": "Compare sequence before explaining cause",
            "text": "When comparing healthy and faulted captures, first describe the observable difference: line stuck low, missing clock, missing response, extra edge, wrong timing, or decoder error. Do not jump directly to “firmware bug” or “bad IC.” The physical cause could be a missing pull-up, open trace, short, wrong configuration, wrong address, or incorrect logic voltage. Use the capture to choose the next electrical check. A decoder can speed interpretation, but always be willing to inspect the underlying raw signals when the decoded result is surprising.",
            "remember": "Capture the difference first; diagnose the cause second."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "When should you prefer a logic analyzer over an oscilloscope?",
              "options": [
                "When you need detailed analog edge shape",
                "When you need multi-channel digital state sequence or protocol timing",
                "When measuring resistance",
                "When setting a bench-supply current limit"
              ],
              "answer": 1,
              "why": "Logic analyzers specialize in digital states and timing across many channels.",
              "reviewSection": 0
            },
            {
              "q": "A protocol decoder shows nonsense. What should you verify before blaming the DUT?",
              "options": [
                "Channel mapping, threshold, sample rate, and decoder settings",
                "Only the PCB color",
                "Whether the DMM battery is full",
                "The soldering iron temperature"
              ],
              "answer": 0,
              "why": "A wrong acquisition setup can create invalid decoded data even when the DUT is healthy.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "Known-good digital capture",
          "equipment": [
            "Logic analyzer",
            "Low-voltage board with at least two digital signals",
            "Schematic/pinout",
            "Test record"
          ],
          "safety": [
            "Connect analyzer ground to the documented circuit reference.",
            "Stay within analyzer input ratings.",
            "Power off before attaching/removing clips if there is a risk of shorting adjacent pins."
          ],
          "setup": "Choose two related signals such as clock/data, button/output, or TX/activity.",
          "steps": [
            "Map each analyzer channel to the exact physical signal.",
            "Record logic voltage/threshold and sample rate.",
            "Capture a known-good event.",
            "Measure timing between at least two edges.",
            "Save or describe the capture with settings.",
            "If a safe fault can be introduced, repeat and identify the first observable difference."
          ],
          "expected": [
            "Healthy capture is repeatable.",
            "Channel names match the schematic/pinout.",
            "Fault comparison is described before assigning cause."
          ],
          "evidence": [
            "Channel map",
            "Threshold/logic voltage",
            "Sample rate",
            "Trigger or capture condition",
            "Measured timing",
            "Known-good capture filename/description",
            "Fault difference if performed"
          ],
          "acceptance": [
            "Capture can be reproduced.",
            "At least one timing relationship is measured.",
            "Evidence is tied back to exact signals."
          ]
        }
      }
    ]
  },
  {
    "week": 7,
    "title": "UART + I²C + SPI for Test Technicians",
    "short": "Recognize the buses you are likely to probe, capture, and fault-isolate—without making programming a prerequisite.",
    "priority": "Embedded/Test Extension",
    "sourceWeeks": [
      17,
      18
    ],
    "outcomes": [
      "Explain the electrical/topology differences among UART, I²C, and SPI.",
      "Identify key signals and expected idle/activity patterns.",
      "Use a logic analyzer to decode a known-good transaction.",
      "Use layer-by-layer checks to isolate missing pull-ups, wrong addressing, wiring, clock/data, and configuration faults."
    ],
    "lessons": [
      {
        "id": "w7-l1",
        "title": "UART and I²C: Know the Electrical Contract",
        "sourceNote": "Reuses Alfred Weeks 17–18 but keeps only the protocol knowledge needed to test hardware.",
        "sections": [
          {
            "title": "UART is asynchronous point-to-point serial",
            "text": "UART commonly uses separate transmit (TX) and receive (RX) lines plus a shared reference. There is no shared clock line, so both ends must agree on parameters such as baud rate, data bits, parity if used, and stop bits. TX from one device connects to RX on the other. A scope can verify voltage levels and bit timing; a logic analyzer can decode frames. If text looks like garbage, check logic-level compatibility, reference/ground, crossed TX/RX wiring, baud rate, and frame settings before assuming the application data is wrong. Some “serial” interfaces use different electrical standards such as RS-232 or RS-485, so do not connect them directly to MCU-level UART pins without understanding the transceiver layer.",
            "remember": "UART has timing agreement but no shared clock wire."
          },
          {
            "title": "I²C uses shared SDA and SCL with pull-ups",
            "text": "I²C uses serial data (SDA) and serial clock (SCL). Devices normally use open-drain/open-collector behavior: they pull a line low but depend on pull-up resistors to return it high. That electrical detail explains common faults. Missing or incorrect pull-ups can keep edges slow or lines from reaching a valid HIGH. A device or short can hold SDA/SCL low. The controller sends an address and the addressed peripheral acknowledges when appropriate. Multiple devices can share the same two lines if their addressing and electrical requirements are compatible. Before decoding data, verify the bus has a valid idle state and correct logic voltage.",
            "remember": "I²C faults often begin with the physical lines: pull-ups, idle state, address, ACK/NACK.",
            "resources": [
              "sparkfun-i2c"
            ]
          },
          {
            "title": "Translate one I²C datasheet into a wiring/transaction contract",
            "text": "Before connecting a sensor or peripheral, use its datasheet to write the contract: supply voltage, ground, SDA/SCL pins, I/O voltage constraints, pull-up requirements, 7-bit address, register address if relevant, and the simplest transaction that proves communication. A strong first proof is often an identity or status register read because the expected response is known. Record the exact board and device. This is the same discipline Alfred uses: datasheet → wiring → expected transaction → capture → result. Do not begin by writing a large application that can fail in many unrelated ways.",
            "remember": "Prove the smallest meaningful transaction first."
          },
          {
            "title": "Diagnose an I²C NACK by layer",
            "text": "If the analyzer shows an address followed by NACK, do not jump straight to firmware. Check layers in order: is power correct at the peripheral? Is ground/reference shared? Are SDA/SCL wired to the intended pins? Do both lines idle high? Are pull-ups present and to the correct voltage? Is the 7-bit address correct, including address-pin configuration? Is the controller actually generating the expected clock and address? Only after the electrical and addressing layers are proven should you dig deeper into register/configuration behavior. A layer-by-layer sequence keeps the diagnosis bounded and avoids changing software and wiring at the same time.",
            "remember": "Power → reference → wiring → idle levels/pull-ups → address → transaction details.",
            "resources": [
              "saleae-i2c"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "Which UART wiring relationship is normally correct between two devices?",
              "options": [
                "TX to TX and RX to RX",
                "TX to RX and RX to TX, plus a compatible reference",
                "Only one wire with no reference",
                "SDA to SCL"
              ],
              "answer": 1,
              "why": "UART transmit from one endpoint normally connects to receive on the other.",
              "reviewSection": 0
            },
            {
              "q": "An I²C SDA line never rises above 0 V even when the bus should be idle. What should you investigate early?",
              "options": [
                "Pull-up/wiring/short or a device holding the line low",
                "The SPI clock phase",
                "Oscilloscope duty cycle only",
                "The solder wire alloy"
              ],
              "answer": 0,
              "why": "I²C relies on pull-ups for HIGH and a stuck-low line is a physical-layer clue.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "Decode a known-good UART or I²C exchange",
          "equipment": [
            "Logic analyzer",
            "Low-voltage development board/peripheral",
            "Pinout/datasheet",
            "Test record"
          ],
          "safety": [
            "Respect logic analyzer input voltage limits.",
            "Connect ground/reference correctly.",
            "Power off before moving clips on dense headers."
          ],
          "setup": "Use a working UART console or I²C peripheral with a documented simple transaction.",
          "steps": [
            "Identify and label all relevant signals from the pinout.",
            "Record voltage level and protocol settings/address.",
            "Capture one known-good exchange.",
            "Decode one meaningful frame/transaction.",
            "Compare decoded information with the expected data/register/address.",
            "If practical, introduce one safe configuration/wiring fault and identify its signature."
          ],
          "expected": [
            "Decoder agrees with the known settings and raw signals.",
            "Expected address/bytes or UART frame are visible.",
            "Fault signature is described without immediately assuming root cause."
          ],
          "evidence": [
            "Protocol selected",
            "Channel map",
            "Settings/address",
            "Decoded transaction",
            "Expected vs observed",
            "Fault signature if performed"
          ],
          "acceptance": [
            "One complete known-good transaction is saved/described.",
            "The learner can explain why the capture is valid.",
            "Evidence remains tied to exact wiring/settings."
          ]
        }
      },
      {
        "id": "w7-l2",
        "title": "SPI and Protocol-Level Fault Isolation",
        "sourceNote": "Reuses Alfred Week 18’s 'I²C first, then generalize to SPI/UART' approach.",
        "sections": [
          {
            "title": "SPI uses clock, data, and chip select",
            "text": "SPI is synchronous: the controller provides a clock and exchanges data with one or more peripherals. Typical signals are SCK/CLK, controller-out/peripheral-in (often MOSI/PICO), peripheral-out/controller-in (often MISO/POCI), and chip select (CS). CS tells a specific peripheral when a transaction belongs to it. Unlike I²C, SPI does not normally include a standardized address/ACK layer. The device datasheet defines transaction length, command format, maximum clock rate, bit order, and when data should be sampled. Because several lines must coordinate correctly, channel mapping and a known-good capture are especially valuable.",
            "remember": "SPI behavior is defined heavily by the peripheral datasheet.",
            "resources": [
              "sparkfun-spi"
            ]
          },
          {
            "title": "CPOL/CPHA and clock edges",
            "text": "SPI devices can use different clock polarity and phase combinations. You do not need to memorize every mode number to be useful as a technician, but you do need to recognize the problem: the controller and peripheral must agree about the idle clock level and which clock edge is used to sample/change data. If the wrong mode is configured, the signals can look active while decoded data is wrong. Use the device datasheet and analyzer decoder settings to confirm the expected mode. Also verify the clock frequency does not exceed the peripheral’s limit.",
            "remember": "Active signals do not prove correct SPI timing."
          },
          {
            "title": "Known-good SPI capture before fault diagnosis",
            "text": "Map SCK, data lines, and CS to the exact pins, then capture a simple known-good transaction. Verify that CS asserts around the intended transfer, clock activity appears only when expected, and data changes in a way consistent with the datasheet. Save decoder settings and raw capture. When a fault occurs, compare sequence: missing CS, no clock, only one data direction active, unexpected frame length, wrong timing mode, or data that no longer matches the command/response contract. Use that difference to choose the next physical/configuration check.",
            "remember": "Reference captures turn “it looks weird” into a specific sequence difference.",
            "resources": [
              "saleae-spi"
            ]
          },
          {
            "title": "Do not let protocol decoding replace electrical troubleshooting",
            "text": "A decoder is an interpretation layer. If the raw voltage never reaches a valid HIGH, if the reference is wrong, if a pull-up is missing, if a connector is open, or if the clock is badly distorted, decoded output may be incomplete or misleading. Work from the bottom up: power/reference → physical wiring → voltage levels → timing → protocol configuration → payload meaning. Use the oscilloscope when analog integrity matters and the logic analyzer when sequence/decoding matters. This layered thinking is more transferable than memorizing protocol-specific error messages.",
            "remember": "Electrical layer first; decoded meaning later."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What does SPI chip select (CS) primarily do?",
              "options": [
                "Provides the analog reference voltage",
                "Selects which peripheral a transaction is intended for",
                "Sets DMM resistance range",
                "Replaces the clock"
              ],
              "answer": 1,
              "why": "CS identifies/enables the intended peripheral for a transaction.",
              "reviewSection": 0
            },
            {
              "q": "SPI has clock and data activity but decoded bytes are wrong. Which should be checked?",
              "options": [
                "CPOL/CPHA, bit order, clock rate, channel mapping, and datasheet transaction format",
                "Only the power LED",
                "Only continuity across the battery",
                "Nothing; activity means it is correct"
              ],
              "answer": 0,
              "why": "SPI can be electrically active yet sampled/configured incorrectly.",
              "reviewSection": 1
            }
          ]
        },
        "lab": {
          "title": "SPI comparison capture",
          "equipment": [
            "Logic analyzer",
            "SPI-capable training board/peripheral or simulator",
            "Peripheral datasheet",
            "Test record"
          ],
          "safety": [
            "Stay within logic-level limits.",
            "Verify common reference.",
            "Attach/remove analyzer probes carefully."
          ],
          "setup": "Use a working SPI transaction if available. If hardware is unavailable, use an approved simulation/captured training dataset.",
          "steps": [
            "Identify SCK, CS, controller-to-peripheral data, and peripheral-to-controller data.",
            "Record expected clock rate and mode from the datasheet.",
            "Capture a known-good transaction.",
            "Verify CS framing and clock activity.",
            "Decode one command/response if supported.",
            "Change one safe configuration such as decoder mode (not DUT hardware) to see how wrong settings distort interpretation, then restore the correct configuration."
          ],
          "expected": [
            "Correct decoder settings produce data consistent with the known transaction.",
            "CS/clock/data relationship can be explained.",
            "Wrong decoder configuration is recognized as a test-setup issue."
          ],
          "evidence": [
            "Channel map",
            "Clock rate",
            "SPI mode/edge description",
            "Known-good decoded data",
            "Observation with wrong decoder setting",
            "Restored result"
          ],
          "acceptance": [
            "Known-good capture is reproducible.",
            "Learner can distinguish DUT evidence from decoder/setup error."
          ]
        }
      }
    ]
  },
  {
    "week": 8,
    "title": "Board Bring-Up + Job-Proof Capstone",
    "short": "One complete hardware story: inspect, power, verify, capture, fault-isolate, correct, retest, and document.",
    "priority": "Capstone",
    "sourceWeeks": [
      16,
      24,
      25,
      28,
      29
    ],
    "outcomes": [
      "Bring up a low-voltage digital/MCU board in dependency order.",
      "Use rails, reset/enable, clock/debug or activity evidence to establish a known-good baseline.",
      "Inject safe faults and isolate them with schematic + DMM + scope/logic analyzer evidence.",
      "Produce a concise technician report and artifact set that can be defended in an interview."
    ],
    "lessons": [
      {
        "id": "w8-l1",
        "title": "Bring-Up Is a Ladder of Proofs",
        "sourceNote": "Reuses Alfred Week 16/24 bring-up logic while making firmware development optional rather than a technician prerequisite.",
        "sections": [
          {
            "title": "Identify the board, power path, and debug/communication path first",
            "text": "Before powering a digital board, identify the exact board/revision, expected input supply, major regulated rails, reference/ground, key connectors, reset/enable signals, and any available debug or serial interface. If it is an MCU development board, identify the target MCU and on-board debugger/interface such as ST-LINK or another probe. You do not need to become a firmware developer for Jade’s technician goal. You do need to know which physical path proves the board is receiving power, which path can reset/start it, and which interface can provide activity or diagnostic evidence. Record the baseline configuration before changing jumpers, firmware, or peripherals.",
            "remember": "Know the physical board and its proof points before adding complexity."
          },
          {
            "title": "Bring-up dependencies in order",
            "text": "A strong bring-up sequence proves lower-level dependencies before higher-level function: inspect unpowered hardware → check for obvious shorts where appropriate → set controlled supply voltage/current limit → power while watching current → verify primary and secondary rails → verify reset/enable state → verify a clock or known digital activity when relevant → verify one simple output or communication path → only then add peripherals or complex behavior. Each proof reduces ambiguity. If 3.3 V is missing, debugging UART data is premature. If rails and reset are correct but the MCU never shows expected activity, the boundary moves deeper.",
            "remember": "Power → rails → reset/enable → clock/activity → simple I/O → interfaces → application."
          },
          {
            "title": "Flash, reset, run, and debug prove different things",
            "text": "On a microcontroller board, successfully connecting a debug probe does not prove the application runs; successfully flashing firmware does not prove the board reaches main application behavior; a reset does not prove clocks/peripherals are configured correctly. Treat each action as a separate proof. If using SWD/JTAG or an on-board debugger, record whether the target is detected, whether code can be programmed, whether execution reaches a known point, and whether a physical output such as GPIO/UART activity agrees. For technician roles, this is valuable because it separates programming/configuration failures from power, wiring, and hardware failures.",
            "remember": "Connect, program, reset, run, and functional I/O are separate checkpoints."
          },
          {
            "title": "Known-good baseline includes recovery",
            "text": "A baseline is more than “it worked once.” Record board identity, power settings, current draw, rail measurements, jumpers/cables, firmware/configuration identity if relevant, one known-good functional proof, and how to return the board to that state. Save scope or logic-analyzer captures when timing/communication matters. If later troubleshooting changes a cable, part, setting, or firmware image, you can compare against the baseline rather than guessing what changed. A recovery path also prevents a training fault from permanently derailing the project.",
            "remember": "A known-good state is useful only if you can reproduce it.",
            "resources": [
              "st-training",
              "st-cubemx"
            ]
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What is the best order for initial board bring-up?",
              "options": [
                "Protocol decoder → application feature → power rails",
                "Inspect → controlled power/current → rails → reset/enable → activity/I/O → interfaces",
                "Replace the MCU first",
                "Connect every peripheral before first power"
              ],
              "answer": 1,
              "why": "Bring-up should prove lower-level dependencies before higher-level functions.",
              "reviewSection": 1
            },
            {
              "q": "Successfully flashing firmware proves what?",
              "options": [
                "The entire board is healthy",
                "Only that the programming path completed; run-time hardware/function still needs proof",
                "All peripherals work",
                "The power supply is calibrated"
              ],
              "answer": 1,
              "why": "Flash/program, run, and functional behavior are separate proofs.",
              "reviewSection": 2
            }
          ]
        },
        "lab": {
          "title": "Known-good board baseline",
          "equipment": [
            "Low-voltage development board or training digital board",
            "Board schematic/pinout",
            "DMM",
            "Bench supply if the board supports external supply; otherwise documented USB supply",
            "Oscilloscope and/or logic analyzer",
            "Test record"
          ],
          "safety": [
            "Follow the board manufacturer’s power requirements.",
            "Do not back-power or connect multiple power sources unless documentation permits it.",
            "Use only safe low-voltage work."
          ],
          "setup": "Choose a board with documented power rails and at least one observable output/interface.",
          "steps": [
            "Record exact board/revision and power method.",
            "Inspect connectors, jumpers, orientation, and visible condition.",
            "Check appropriate unpowered resistance/continuity points for obvious shorts.",
            "Power under controlled conditions and record current if measurable.",
            "Verify major rail(s).",
            "Verify one reset/enable or startup indicator if accessible.",
            "Capture one known-good output/activity signal.",
            "Record the recovery/reset procedure."
          ],
          "expected": [
            "Board powers without violating stop conditions.",
            "Major rails are within documented range.",
            "At least one functional/activity proof is captured."
          ],
          "evidence": [
            "Board/revision",
            "Power setting/current",
            "Rail measurements",
            "Reset/enable observation",
            "Known-good waveform/capture",
            "Recovery procedure"
          ],
          "acceptance": [
            "Baseline is reproducible.",
            "Measurements and capture include context/settings.",
            "No higher-level claim exceeds the evidence collected."
          ]
        }
      },
      {
        "id": "w8-l2",
        "title": "Capstone: Fault Isolation and Interview-Ready Evidence",
        "sourceNote": "Compresses Alfred Weeks 25, 28, and 29 into one technician evidence project rather than a second large embedded project.",
        "sections": [
          {
            "title": "Choose a small project that exposes real test points",
            "text": "The capstone should be small enough to understand end to end. Good choices are a microcontroller/development board plus one sensor or digital peripheral, a simple regulator + logic load board, or another low-voltage circuit with accessible schematic/pinout and test points. Avoid projects whose success depends mainly on writing lots of software. The artifact should demonstrate the technician core: documentation reading, controlled power, DMM measurements, scope evidence, optional logic-analyzer/protocol evidence, troubleshooting, workmanship if relevant, and clear reporting. Define the known-good behavior and required evidence before introducing any fault.",
            "remember": "The project exists to prove test/troubleshooting skill, not project size."
          },
          {
            "title": "Inject only safe, reversible faults",
            "text": "Training fault injection should create useful diagnostic evidence without risking high energy or permanent damage. Examples include a disconnected jumper, wrong but safe configuration, missing pull-up on a training circuit, disconnected signal wire, intentionally open connection, swapped low-voltage connector on a keyed training setup only when safe, or a decoder/configuration mismatch. Do not create direct supply shorts, overvoltage devices, bypass protection, or intentionally overheat hardware. One fault at a time. Record the baseline first, then the fault condition, then reproduce the symptom before troubleshooting.",
            "remember": "Fault injection validates your diagnostic process; it is not permission to damage hardware."
          },
          {
            "title": "Use independent evidence to triangulate the fault",
            "text": "The strongest diagnosis often combines more than one evidence type. A DMM can verify a rail, the scope can show whether a clock or pulse exists, and the logic analyzer can show whether a digital transaction is missing or malformed. The schematic explains where each measurement belongs. If two independent measurements point to the same boundary, confidence increases. Do not collect every possible screenshot; collect the smallest set that proves the reasoning chain. Your report should show why each test was chosen, what it ruled in or out, and how the correction changed the evidence.",
            "remember": "Use the minimum evidence set that makes the reasoning defensible."
          },
          {
            "title": "Package the artifact for a technician interview",
            "text": "A concise two- to three-page artifact is enough: objective and system block/schematic, equipment/setup, expected behavior, known-good baseline, fault symptom, hypotheses, measurement sequence, root cause, corrective action, retest, and key photos/captures. Add a short 60–90 second explanation you can give verbally: “Here was the symptom, here were my hypotheses, this measurement narrowed the fault, this evidence confirmed the cause, and this retest proved the correction.” Do not inflate scope. If you only performed training-board rework or simulated one condition, say so. Credibility comes from traceable evidence and reasoning, not from pretending the project was more complex than it was.",
            "remember": "Every skill claim should point to evidence."
          }
        ],
        "check": {
          "questions": [
            {
              "q": "What is the best capstone fault for Jade?",
              "options": [
                "A safe, reversible fault that produces a real diagnostic signature",
                "A direct short across a high-current supply",
                "Deliberate overvoltage until a part fails",
                "Anything that makes smoke"
              ],
              "answer": 0,
              "why": "Training faults should be controlled, reversible, and safe while still requiring real diagnostic reasoning.",
              "reviewSection": 1
            },
            {
              "q": "What makes a capstone artifact credible in an interview?",
              "options": [
                "Many screenshots with no explanation",
                "A traceable symptom → hypothesis → measurement → root cause → correction → retest chain",
                "A claim that everything worked first try",
                "Using the most expensive board available"
              ],
              "answer": 1,
              "why": "A defensible reasoning chain tied to real evidence demonstrates technician skill.",
              "reviewSection": 3
            }
          ]
        },
        "lab": {
          "title": "Job-Proof Technician Capstone",
          "equipment": [
            "Low-voltage board/circuit with documentation",
            "DMM",
            "Oscilloscope",
            "Logic analyzer if digital activity is present",
            "Bench supply if appropriate",
            "Soldering/rework tools only if the chosen project needs them",
            "Report template"
          ],
          "safety": [
            "Low-voltage only.",
            "Use one safe reversible fault at a time.",
            "Do not create destructive shorts, overvoltage, or thermal damage.",
            "Return the system to a known-good state after each fault."
          ],
          "setup": "Start with the known-good baseline from Lesson 8.1 or create an equivalent documented baseline.",
          "steps": [
            "Define normal behavior and acceptance evidence.",
            "Capture the known-good measurements.",
            "Introduce Fault A and reproduce/document the symptom.",
            "Write competing hypotheses and isolate the fault using chosen instruments.",
            "Correct/reverse Fault A and retest.",
            "Repeat with Fault B of a different type.",
            "Create the final concise report and a 60–90 second verbal explanation."
          ],
          "expected": [
            "Both faults are diagnosed from evidence rather than revealed in advance.",
            "System returns to the known-good baseline after correction.",
            "Report can be understood without the learner present."
          ],
          "evidence": [
            "Project/block diagram or schematic reference",
            "Known-good baseline table",
            "Fault A reasoning + evidence + retest",
            "Fault B reasoning + evidence + retest",
            "Key scope/logic capture descriptions",
            "Final report filename/link",
            "60–90 second project explanation"
          ],
          "acceptance": [
            "Two safe faults are completed.",
            "At least one DMM measurement and one time-domain capture are used.",
            "All conclusions are supported by evidence.",
            "Final artifact is concise, truthful, and interview-defensible."
          ]
        }
      }
    ]
  }
];
