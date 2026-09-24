window.JADE_CURRICULUM_SOURCE_MAP = {
  "version": "1.0",
  "principle": "Reuse Alfred first; resequence and trim before creating new teaching.",
  "applyNowCore": [
    1,
    2,
    3,
    4,
    5
  ],
  "embeddedBridge": [
    6,
    7,
    8
  ],
  "modules": [
    {
      "priority": 1,
      "title": "Bench-Safe DC Fundamentals",
      "purpose": "Build the electrical foundation needed to measure and troubleshoot low-voltage electronics safely.",
      "alfred_weeks": [
        1,
        2
      ],
      "primary_sources": [
        "Alfred W1 \u2014 Electricity, Safety, Ohm\u2019s Law, and Power",
        "Alfred W2 \u2014 selected DC-network material only"
      ],
      "retain": [
        "Voltage, current, resistance, charge, polarity, reference/ground",
        "Ohm\u2019s law and electrical power",
        "SI prefixes / engineering notation",
        "Closed path, open circuit, short circuit",
        "Series/parallel essentials and voltage-divider intuition",
        "Bench-supply current limiting",
        "DMM mode/jack safety",
        "Pre-power inspection and stop conditions",
        "ESD distinction from shock protection"
      ],
      "defer": [
        "Broad field-safety material not needed for low-voltage bench work",
        "Motors/generators, magnetism, PLLs, wave-shaping breadth",
        "Deep AC/RLC analysis"
      ],
      "career_sections": [
        "career-w01-meet-the-bench-before-you-use-it",
        "career-w01-voltage-resistance-and-current-modes-are-different-circuits",
        "career-w01-current-limiting-is-a-protective-boundary-and-a-diagnostic-clue",
        "career-w01-pre-power-inspection-creates-the-first-known-good-state",
        "career-w01-first-power-is-a-staged-observation-not-a-single-switch-action",
        "career-w02-a-schematic-is-a-prediction-map"
      ],
      "required_resources": [
        "Electrical Quantities A \u2014 Voltage, Current, Resistance, and Charge (North Seattle Community College / All About Circuits)",
        "Electrical Quantities B \u2014 Ohm\u2019s Law and Electrical Power (North Seattle Community College / All About Circuits)",
        "Technical Notation \u2014 Engineering Notation and SI Prefixes (North Seattle Community College / All About Circuits)",
        "How to Use a Multimeter \u2014 Comprehensive Guide (Fluke)",
        "Bench Power Supply Basics (Keysight Technologies)",
        "NASA-HDBK-8739.21 \u2014 ESD Control (NASA)"
      ],
      "hands_on": [
        "Predict and measure voltage/current in a simple resistor circuit",
        "Demonstrate open vs closed path",
        "Set a current limit before powering a low-voltage circuit",
        "Perform safe resistance/continuity checks on a de-energized circuit"
      ],
      "gate": "Can explain the quantities physically, calculate basic DC values, and safely power/measure a low-voltage circuit."
    },
    {
      "priority": 2,
      "title": "Schematics, Circuit Tracing, and Expected-Value Thinking",
      "purpose": "Turn schematics into a measurement plan instead of probing randomly.",
      "alfred_weeks": [
        2,
        13
      ],
      "primary_sources": [
        "Alfred W2 \u2014 DC Networks, Kirchhoff\u2019s Laws, and Voltage Dividers",
        "Alfred W13 \u2014 selected schematic/signal-flow sections"
      ],
      "retain": [
        "Node identity and reference nodes",
        "Series/parallel topology",
        "KCL/KVL as diagnostic rules",
        "Expected node values and voltage dividers",
        "Reference designators and functional blocks",
        "Power path vs signal path",
        "Turn a schematic into a measurement plan",
        "Use functional boundaries and the first-bad-boundary idea"
      ],
      "defer": [
        "Formal root-cause reporting until Priority 4",
        "Advanced datasheet/application design details",
        "Broad component-domain material unrelated to immediate tracing"
      ],
      "career_sections": [
        "career-w02-a-schematic-is-a-prediction-map",
        "career-w02-turn-a-schematic-into-a-measurement-plan",
        "career-w02-use-the-first-bad-boundary",
        "career-w02-different-faults-leave-different-signatures",
        "career-w13-choose-the-representation-that-answers-the-troubleshooting-question",
        "career-w13-divide-at-functional-boundaries"
      ],
      "required_resources": [
        "Ohm\u2019s Law, Kirchhoff\u2019s Laws, and Power Equations (All About Circuits)",
        "Series Circuits \u2014 Part 1 (North Seattle Community College / All About Circuits)",
        "Parallel Circuits (North Seattle Community College / All About Circuits)",
        "Troubleshooting Series-Parallel Circuits (North Seattle Community College / All About Circuits)"
      ],
      "hands_on": [
        "Annotate one schematic with source, ground, rails, load, signal path, and test points",
        "Create an expected-value table before measuring",
        "Trace one fault by moving across functional boundaries"
      ],
      "gate": "Can read a simple electronic schematic and identify where and what to measure before touching the probes."
    },
    {
      "priority": 3,
      "title": "DMM Mastery and Measurement Planning",
      "purpose": "Make the DMM a diagnostic instrument rather than a number display.",
      "alfred_weeks": [
        1,
        3,
        9
      ],
      "primary_sources": [
        "Alfred W1 \u2014 DMM modes/jacks and safety",
        "Alfred W3 \u2014 DMM / bench-supply measurement workflow",
        "Alfred W9 \u2014 selected rail and power-fault measurements"
      ],
      "retain": [
        "Voltage measured across points; current measured through a path",
        "Resistance/continuity de-energized",
        "Correct lead jacks and function selection",
        "Voltage drop as evidence",
        "Continuity limitations",
        "Question-first instrument selection",
        "Loading, accuracy, resolution, and reference discipline",
        "Rail-by-rail verification"
      ],
      "defer": [
        "LCR/ESR/spectrum-analyzer breadth",
        "Advanced metrology",
        "Specialized AC service instruments"
      ],
      "career_sections": [
        "career-w01-voltage-resistance-and-current-modes-are-different-circuits",
        "career-w03-start-with-a-measurable-question-not-with-a-probe",
        "career-w03-use-the-dmm-and-bench-supply-for-slow-or-static-evidence",
        "career-w03-preserve-uncertainty-and-context-in-the-evidence",
        "career-w09-use-rail-behavior-to-distinguish-source-regulator-and-load-faults"
      ],
      "required_resources": [
        "How to Use a Multimeter \u2014 Comprehensive Guide (Fluke)",
        "THE BEST Multimeter tutorial (Afrotechmods) \u2014 supporting clarity resource",
        "NEETS Module 16 \u2014 Introduction to Test Equipment",
        "Bench Power Supply Basics \u2014 Constant Voltage and Constant Current Modes (Keysight)"
      ],
      "hands_on": [
        "Measure battery/source voltage, resistor value, continuity, and loaded voltage drop",
        "Compare in-circuit vs isolated resistance where appropriate",
        "Create a measurement record: point, expected, measured, unit, conclusion"
      ],
      "gate": "Can choose the correct DMM mode, connect it safely, predict the reading, and explain what the result does and does not prove."
    },
    {
      "priority": 4,
      "title": "Systematic Troubleshooting and Root Cause",
      "purpose": "Build the repeatable technician workflow employers actually need.",
      "alfred_weeks": [
        5,
        13,
        28
      ],
      "primary_sources": [
        "Alfred W5 \u2014 complete practical fault-isolation loop",
        "Alfred W13 \u2014 hypothesis / high-information test / root-cause reasoning",
        "Alfred W28 \u2014 selected controlled-fault and verification concepts"
      ],
      "retain": [
        "Observable failure statement",
        "Freeze the symptom before changing anything",
        "Expected vs observed",
        "Competing hypotheses",
        "Divide-and-conquer / first-bad-boundary",
        "Choose a high-information measurement",
        "Change one variable at a time",
        "Repair and verify",
        "Root cause requires causal evidence",
        "Controlled reversal / reproduction",
        "Concise technician report"
      ],
      "defer": [
        "Full systems-engineering verification framework",
        "Service-business workflow",
        "Large formal fault-injection infrastructure"
      ],
      "career_sections": [
        "career-w05-start-with-an-observable-failure-statement",
        "career-w05-let-each-measurement-shrink-the-fault-space",
        "career-w05-competing-hypotheses-make-measurements-useful",
        "career-w05-root-cause-requires-verification-after-the-fix",
        "career-w13-build-a-fault-model-before-probing",
        "career-w13-choose-a-high-information-test",
        "career-w13-root-cause-requires-a-causal-chain",
        "career-w28-root-cause-survives-controlled-reversal"
      ],
      "required_resources": [
        "Troubleshooting Series-Parallel Circuits (North Seattle Community College / All About Circuits)",
        "Board Level Troubleshooting (Texas Instruments)",
        "NASA Systems Engineering Handbook \u2014 selected reasoning/reporting use"
      ],
      "hands_on": [
        "Diagnose at least two intentionally introduced low-voltage faults",
        "Document symptom \u2192 hypothesis \u2192 test \u2192 evidence \u2192 correction \u2192 retest",
        "Repeat the original symptom test after repair"
      ],
      "gate": "Can isolate a fault systematically and defend the diagnosis with measurements rather than guesses."
    },
    {
      "priority": 5,
      "title": "Soldering, Rework, ESD, Connectors, and Harnesses",
      "purpose": "Add the physical workmanship skills that distinguish electronics technicians from purely theoretical learners.",
      "alfred_weeks": [
        12,
        19,
        29
      ],
      "primary_sources": [
        "Alfred W12 \u2014 solder/rework/ESD/workmanship only",
        "Alfred W19 \u2014 connectors, pinning, continuity, segment isolation",
        "Alfred W29 \u2014 workmanship verification and role-proof evidence"
      ],
      "retain": [
        "ESD controls",
        "Through-hole soldering fundamentals",
        "Common solder defects",
        "Desoldering/rework with heat-damage awareness",
        "Before/after repair evidence",
        "Connector inspection and pin numbering/keying",
        "Crimp / strain relief / termination quality",
        "Continuity plus loaded voltage-drop reasoning",
        "Harness documentation",
        "Workmanship acceptance evidence"
      ],
      "defer": [
        "Git and command-line teaching from Alfred W12",
        "Audio/video/optical breadth from Alfred W19",
        "Portfolio packaging details until final block"
      ],
      "career_sections": [
        "career-w12-a-physical-change-needs-a-before-after-record",
        "career-w12-career-integration-solder-rework-workmanship-and-harness-evidence",
        "career-w12-i-do-create-a-known-good-baseline-before-a-rework",
        "career-w19-mechanical-workmanship-is-electrical-reliability",
        "career-w19-termination-quality-is-a-process-not-a-beep",
        "career-w19-use-end-to-end-and-sectional-tests-to-isolate-cable-faults",
        "career-w19-document-orientation-and-reference"
      ],
      "required_resources": [
        "NASA-HDBK-8739.21 \u2014 ESD Control",
        "NASA-STD-8739.4 \u2014 Crimping, Cables, Harnesses, and Wiring",
        "Adafruit Guide to Excellent Soldering \u2014 Common Soldering Problems",
        "Chemtronics Soder-Wick rework demonstration"
      ],
      "hands_on": [
        "Solder and inspect a small set of joints",
        "Perform one controlled rework and verify electrically afterward",
        "Build or inspect a small connector/harness and map pins end-to-end",
        "Document workmanship with photos + electrical verification"
      ],
      "gate": "APPLY-NOW CORE GATE: credible beginner hands-on evidence exists across Priorities 1\u20135. Job applications should be active; do not wait for Priorities 6\u20138."
    },
    {
      "priority": 6,
      "title": "Bench Supply and Oscilloscope Competency",
      "purpose": "Move from static measurements to powered behavior and waveforms.",
      "alfred_weeks": [
        3,
        9,
        29
      ],
      "primary_sources": [
        "Alfred W3 \u2014 scope / supply onboarding and question-first measurement",
        "Alfred W9 \u2014 selected power-rail behavior",
        "Alfred W29 \u2014 reproducible instrument evidence"
      ],
      "retain": [
        "Bench supply CV/CC behavior",
        "Safe current limiting",
        "Scope volts/div and time/div",
        "Triggering",
        "Probe/reference discipline",
        "Amplitude, DC offset, period, frequency, duty cycle",
        "Basic ripple/noise",
        "Known-waveform onboarding",
        "Preserve settings so evidence is reproducible"
      ],
      "defer": [
        "Spectrum analyzer",
        "Advanced bandwidth/probe theory beyond technician baseline",
        "Deep frequency-response work"
      ],
      "career_sections": [
        "career-w03-learn-the-oscilloscope-on-a-known-waveform-first",
        "career-w03-reference-grounding-loading-and-bandwidth-can-change-the-result",
        "career-w03-i-do-configure-and-measure-a-known-square-wave",
        "career-w09-current-limiting-converts-catastrophic-faults-into-observable-evidence",
        "career-w24-first-power-is-a-controlled-experiment"
      ],
      "required_resources": [
        "Bench Power Supply Basics (Keysight Technologies)",
        "Bench Power Supply Basics \u2014 Constant Voltage and Constant Current Modes (Keysight)",
        "How to Use an Oscilloscope and Probe \u2014 Step-by-Step Tutorial (Tektronix)"
      ],
      "hands_on": [
        "Power a low-voltage circuit with a deliberate current limit",
        "Capture a known square wave",
        "Record Vpp, frequency, period, duty cycle, trigger settings, volts/div, and time/div",
        "Measure one power rail for DC level and basic ripple"
      ],
      "gate": "Can power a circuit safely and capture a stable, reproducible waveform with correct interpretation."
    },
    {
      "priority": 7,
      "title": "Digital Logic and Logic Analyzer",
      "purpose": "Make digital signals physically understandable before protocol decoding.",
      "alfred_weeks": [
        11,
        18,
        29
      ],
      "primary_sources": [
        "Alfred W11 \u2014 logic levels, pull resistors, bounce/debounce",
        "Alfred W18 \u2014 logic-analyzer onboarding on known-good traffic",
        "Alfred W29 \u2014 evidence quality"
      ],
      "retain": [
        "Binary/logic-state essentials",
        "Logic HIGH/LOW as voltage ranges",
        "Pull-up and pull-down resistors",
        "Floating inputs",
        "Clock/edge/timing basics",
        "Mechanical switch bounce/debounce",
        "Logic-analyzer sampling and channel labeling",
        "Capture known-good digital activity before decoding faults"
      ],
      "defer": [
        "Deep Boolean algebra",
        "Large combinational/sequential design curriculum",
        "Protocol specifics until Priority 8"
      ],
      "career_sections": [
        "career-w11-a-logical-1-is-a-voltage-range-not-the-word-high",
        "career-w11-unconnected-inputs-do-not-have-a-reliable-state",
        "career-w11-pull-resistors-define-default-state-and-edge-behavior",
        "career-w11-debounce-is-a-time-domain-problem",
        "career-w18-learn-the-logic-analyzer-on-that-known-good-i2c-transaction"
      ],
      "required_resources": [
        "Tektronix scope material already used in Alfred W11 for digital timing",
        "Saleae \u2014 Logic Analyzer Learning and Support",
        "Saleae STM32 Nucleo Board \u2014 Digital Signals"
      ],
      "hands_on": [
        "Observe a digital input with and without a defined pull state",
        "Capture switch bounce or another timing event",
        "Capture and label at least two digital channels",
        "Measure time between meaningful edges"
      ],
      "gate": "Can interpret digital voltage/timing and create a labeled logic-analyzer capture tied back to a schematic or pinout."
    },
    {
      "priority": 8,
      "title": "UART, I\u00b2C, SPI, Board Bring-Up, and Job-Proof Capstone",
      "purpose": "Connect the technician core to embedded hardware and produce evidence that can survive an interview.",
      "alfred_weeks": [
        16,
        17,
        18,
        24,
        25,
        27,
        28,
        29
      ],
      "primary_sources": [
        "Alfred W16 \u2014 board identity, flash/reset/run, SWD, bring-up ladder",
        "Alfred W17 \u2014 UART contract and optional Python/pySerial evidence logger",
        "Alfred W18 \u2014 I\u00b2C-first protocol integration + logic analysis + SPI comparison",
        "Alfred W24 \u2014 controlled first power / known-good baseline",
        "Alfred W25 \u2014 one complete peripheral vertical slice",
        "Alfred W28 \u2014 deliberate fault injection + report",
        "Alfred W29 \u2014 employer-facing evidence dossier"
      ],
      "retain": [
        "Board/MCU identity",
        "Power \u2192 rails \u2192 reset \u2192 clocks \u2192 GPIO/debug sequence",
        "SWD/ST-LINK as a bring-up/debug tool",
        "UART electrical/framing model",
        "I\u00b2C SDA/SCL, pull-ups, addressing, ACK/NACK, stuck-line clues",
        "SPI clock/data/chip-select and CPOL/CPHA awareness",
        "Logic-analyzer protocol evidence",
        "One known-good peripheral transaction",
        "One safe protocol fault",
        "Bring-up checklist",
        "Controlled fault injection",
        "Two-page troubleshooting / bring-up report",
        "Evidence packaging for job interviews"
      ],
      "defer": [
        "Full C programming course from Alfred W14",
        "Full embedded architecture course from Alfred W15",
        "Full Python curriculum from W17 unless needed for the chosen capstone",
        "Full automated-test architecture from W27; keep as an optional differentiation extension",
        "Advanced firmware architecture from W26"
      ],
      "career_sections": [
        "career-w16-identify-the-physical-board-target-mcu-and-debug-path-first",
        "career-w16-flash-reset-and-run-prove-different-things",
        "career-w16-swd-debugging-lets-you-inspect-execution-state",
        "career-w16-bring-up-is-a-ladder-of-proofs",
        "career-w17-define-the-serial-contract-before-writing-the-client",
        "career-w17-use-pyserial-as-a-visible-port-bytes-message-pipeline",
        "career-w18-translate-one-i2c-datasheet-into-a-wiring-and-transaction-contract",
        "career-w18-bring-up-the-smallest-meaningful-i2c-transaction",
        "career-w18-learn-the-logic-analyzer-on-that-known-good-i2c-transaction",
        "career-w18-we-do-diagnose-an-i2c-address-nack-by-layer",
        "career-w18-only-now-generalize-the-model-to-spi",
        "career-w24-bring-up-dependencies-in-order",
        "career-w24-first-power-is-a-controlled-experiment",
        "career-w25-build-a-thin-end-to-end-slice-first",
        "career-w25-triangulate-with-independent-evidence",
        "career-w28-controlled-fault-injection-needs-a-known-good-baseline",
        "career-w28-the-report-should-show-the-reasoning-chain",
        "career-w29-every-skill-claim-should-point-to-evidence"
      ],
      "required_resources": [
        "STM32 Online Training (STMicroelectronics)",
        "STM32CubeMX and STM32Cube HAL Basics (STMicroelectronics)",
        "Saleae STM32 Nucleo Board \u2014 Analyzing I2C",
        "Saleae STM32 Nucleo Board \u2014 Analyzing SPI",
        "SparkFun I2C / SPI references already used in Alfred",
        "Board Level Troubleshooting (Texas Instruments)",
        "NASA Systems Engineering Handbook \u2014 selected reporting/verification guidance"
      ],
      "hands_on": [
        "Bring up one MCU/digital board from an unpowered state using a checklist",
        "Verify rails, reset/boot, and at least one digital function",
        "Capture one UART or I\u00b2C transaction",
        "Introduce at least two safe faults and diagnose them from evidence",
        "Produce a concise project report with schematic/block diagram, expected behavior, measurements/captures, fault isolation, correction, and retest",
        "Optional differentiator: Python/pySerial test logger or simple automated verification"
      ],
      "gate": "JOB-PROOF CAPSTONE: can explain and defend one complete hardware bring-up/troubleshooting story with real measurements, captures, and corrective action."
    }
  ]
};
