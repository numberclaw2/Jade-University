# Jade University — Job-Ready Electronics Curriculum v1.0

## Governing curriculum rule

**Do not reinvent Alfred.** Jade is a compressed, employment-first route through teaching that already exists in Alfred University AU-ESET 301. Existing Alfred lessons, labs, media, glossary entries, CETa mappings, worked examples, and career sections are reused whenever they already teach the needed competency.

New Jade-only teaching should be written only when all three are true:
1. The skill matters for the target technician roles.
2. Alfred does not already teach it adequately.
3. The missing piece cannot be solved by resequencing or trimming an Alfred section.

## Curriculum architecture

- **Priorities 1–5 = Apply-Now Core.** These are the fastest high-value skills for electronics/test/hardware technician applications.
- **Priorities 6–8 = Embedded-Hardware Bridge.** These strengthen bench competence and build evidence that supports hardware test, validation, board bring-up, and eventual embedded-systems work.
- Jade does **not** require finishing the full track before applying for jobs.
- Alfred remains the broader long-form course and CETa-preparation system.

## Priority 1 — Bench-Safe DC Fundamentals

**Purpose:** Build the electrical foundation needed to measure and troubleshoot low-voltage electronics safely.

**Primary Alfred source weeks:** 1, 2

**Reuse from Alfred:**
- Voltage, current, resistance, charge, polarity, reference/ground
- Ohm’s law and electrical power
- SI prefixes / engineering notation
- Closed path, open circuit, short circuit
- Series/parallel essentials and voltage-divider intuition
- Bench-supply current limiting
- DMM mode/jack safety
- Pre-power inspection and stop conditions
- ESD distinction from shock protection

**Deliberately defer / leave in Alfred:**
- Broad field-safety material not needed for low-voltage bench work
- Motors/generators, magnetism, PLLs, wave-shaping breadth
- Deep AC/RLC analysis

**Existing Alfred career-section IDs to reuse:**
- `career-w01-meet-the-bench-before-you-use-it`
- `career-w01-voltage-resistance-and-current-modes-are-different-circuits`
- `career-w01-current-limiting-is-a-protective-boundary-and-a-diagnostic-clue`
- `career-w01-pre-power-inspection-creates-the-first-known-good-state`
- `career-w01-first-power-is-a-staged-observation-not-a-single-switch-action`
- `career-w02-a-schematic-is-a-prediction-map`

**Existing Alfred resources to carry over:**
- Electrical Quantities A — Voltage, Current, Resistance, and Charge (North Seattle Community College / All About Circuits)
- Electrical Quantities B — Ohm’s Law and Electrical Power (North Seattle Community College / All About Circuits)
- Technical Notation — Engineering Notation and SI Prefixes (North Seattle Community College / All About Circuits)
- How to Use a Multimeter — Comprehensive Guide (Fluke)
- Bench Power Supply Basics (Keysight Technologies)
- NASA-HDBK-8739.21 — ESD Control (NASA)

**Required hands-on evidence:**
- Predict and measure voltage/current in a simple resistor circuit
- Demonstrate open vs closed path
- Set a current limit before powering a low-voltage circuit
- Perform safe resistance/continuity checks on a de-energized circuit

**Gate:** Can explain the quantities physically, calculate basic DC values, and safely power/measure a low-voltage circuit.

## Priority 2 — Schematics, Circuit Tracing, and Expected-Value Thinking

**Purpose:** Turn schematics into a measurement plan instead of probing randomly.

**Primary Alfred source weeks:** 2, 13

**Reuse from Alfred:**
- Node identity and reference nodes
- Series/parallel topology
- KCL/KVL as diagnostic rules
- Expected node values and voltage dividers
- Reference designators and functional blocks
- Power path vs signal path
- Turn a schematic into a measurement plan
- Use functional boundaries and the first-bad-boundary idea

**Deliberately defer / leave in Alfred:**
- Formal root-cause reporting until Priority 4
- Advanced datasheet/application design details
- Broad component-domain material unrelated to immediate tracing

**Existing Alfred career-section IDs to reuse:**
- `career-w02-a-schematic-is-a-prediction-map`
- `career-w02-turn-a-schematic-into-a-measurement-plan`
- `career-w02-use-the-first-bad-boundary`
- `career-w02-different-faults-leave-different-signatures`
- `career-w13-choose-the-representation-that-answers-the-troubleshooting-question`
- `career-w13-divide-at-functional-boundaries`

**Existing Alfred resources to carry over:**
- Ohm’s Law, Kirchhoff’s Laws, and Power Equations (All About Circuits)
- Series Circuits — Part 1 (North Seattle Community College / All About Circuits)
- Parallel Circuits (North Seattle Community College / All About Circuits)
- Troubleshooting Series-Parallel Circuits (North Seattle Community College / All About Circuits)

**Required hands-on evidence:**
- Annotate one schematic with source, ground, rails, load, signal path, and test points
- Create an expected-value table before measuring
- Trace one fault by moving across functional boundaries

**Gate:** Can read a simple electronic schematic and identify where and what to measure before touching the probes.

## Priority 3 — DMM Mastery and Measurement Planning

**Purpose:** Make the DMM a diagnostic instrument rather than a number display.

**Primary Alfred source weeks:** 1, 3, 9

**Reuse from Alfred:**
- Voltage measured across points; current measured through a path
- Resistance/continuity de-energized
- Correct lead jacks and function selection
- Voltage drop as evidence
- Continuity limitations
- Question-first instrument selection
- Loading, accuracy, resolution, and reference discipline
- Rail-by-rail verification

**Deliberately defer / leave in Alfred:**
- LCR/ESR/spectrum-analyzer breadth
- Advanced metrology
- Specialized AC service instruments

**Existing Alfred career-section IDs to reuse:**
- `career-w01-voltage-resistance-and-current-modes-are-different-circuits`
- `career-w03-start-with-a-measurable-question-not-with-a-probe`
- `career-w03-use-the-dmm-and-bench-supply-for-slow-or-static-evidence`
- `career-w03-preserve-uncertainty-and-context-in-the-evidence`
- `career-w09-use-rail-behavior-to-distinguish-source-regulator-and-load-faults`

**Existing Alfred resources to carry over:**
- How to Use a Multimeter — Comprehensive Guide (Fluke)
- THE BEST Multimeter tutorial (Afrotechmods) — supporting clarity resource
- NEETS Module 16 — Introduction to Test Equipment
- Bench Power Supply Basics — Constant Voltage and Constant Current Modes (Keysight)

**Required hands-on evidence:**
- Measure battery/source voltage, resistor value, continuity, and loaded voltage drop
- Compare in-circuit vs isolated resistance where appropriate
- Create a measurement record: point, expected, measured, unit, conclusion

**Gate:** Can choose the correct DMM mode, connect it safely, predict the reading, and explain what the result does and does not prove.

## Priority 4 — Systematic Troubleshooting and Root Cause

**Purpose:** Build the repeatable technician workflow employers actually need.

**Primary Alfred source weeks:** 5, 13, 28

**Reuse from Alfred:**
- Observable failure statement
- Freeze the symptom before changing anything
- Expected vs observed
- Competing hypotheses
- Divide-and-conquer / first-bad-boundary
- Choose a high-information measurement
- Change one variable at a time
- Repair and verify
- Root cause requires causal evidence
- Controlled reversal / reproduction
- Concise technician report

**Deliberately defer / leave in Alfred:**
- Full systems-engineering verification framework
- Service-business workflow
- Large formal fault-injection infrastructure

**Existing Alfred career-section IDs to reuse:**
- `career-w05-start-with-an-observable-failure-statement`
- `career-w05-let-each-measurement-shrink-the-fault-space`
- `career-w05-competing-hypotheses-make-measurements-useful`
- `career-w05-root-cause-requires-verification-after-the-fix`
- `career-w13-build-a-fault-model-before-probing`
- `career-w13-choose-a-high-information-test`
- `career-w13-root-cause-requires-a-causal-chain`
- `career-w28-root-cause-survives-controlled-reversal`

**Existing Alfred resources to carry over:**
- Troubleshooting Series-Parallel Circuits (North Seattle Community College / All About Circuits)
- Board Level Troubleshooting (Texas Instruments)
- NASA Systems Engineering Handbook — selected reasoning/reporting use

**Required hands-on evidence:**
- Diagnose at least two intentionally introduced low-voltage faults
- Document symptom → hypothesis → test → evidence → correction → retest
- Repeat the original symptom test after repair

**Gate:** Can isolate a fault systematically and defend the diagnosis with measurements rather than guesses.

## Priority 5 — Soldering, Rework, ESD, Connectors, and Harnesses

**Purpose:** Add the physical workmanship skills that distinguish electronics technicians from purely theoretical learners.

**Primary Alfred source weeks:** 12, 19, 29

**Reuse from Alfred:**
- ESD controls
- Through-hole soldering fundamentals
- Common solder defects
- Desoldering/rework with heat-damage awareness
- Before/after repair evidence
- Connector inspection and pin numbering/keying
- Crimp / strain relief / termination quality
- Continuity plus loaded voltage-drop reasoning
- Harness documentation
- Workmanship acceptance evidence

**Deliberately defer / leave in Alfred:**
- Git and command-line teaching from Alfred W12
- Audio/video/optical breadth from Alfred W19
- Portfolio packaging details until final block

**Existing Alfred career-section IDs to reuse:**
- `career-w12-a-physical-change-needs-a-before-after-record`
- `career-w12-career-integration-solder-rework-workmanship-and-harness-evidence`
- `career-w12-i-do-create-a-known-good-baseline-before-a-rework`
- `career-w19-mechanical-workmanship-is-electrical-reliability`
- `career-w19-termination-quality-is-a-process-not-a-beep`
- `career-w19-use-end-to-end-and-sectional-tests-to-isolate-cable-faults`
- `career-w19-document-orientation-and-reference`

**Existing Alfred resources to carry over:**
- NASA-HDBK-8739.21 — ESD Control
- NASA-STD-8739.4 — Crimping, Cables, Harnesses, and Wiring
- Adafruit Guide to Excellent Soldering — Common Soldering Problems
- Chemtronics Soder-Wick rework demonstration

**Required hands-on evidence:**
- Solder and inspect a small set of joints
- Perform one controlled rework and verify electrically afterward
- Build or inspect a small connector/harness and map pins end-to-end
- Document workmanship with photos + electrical verification

**Gate:** APPLY-NOW CORE GATE: credible beginner hands-on evidence exists across Priorities 1–5. Job applications should be active; do not wait for Priorities 6–8.

## Priority 6 — Bench Supply and Oscilloscope Competency

**Purpose:** Move from static measurements to powered behavior and waveforms.

**Primary Alfred source weeks:** 3, 9, 29

**Reuse from Alfred:**
- Bench supply CV/CC behavior
- Safe current limiting
- Scope volts/div and time/div
- Triggering
- Probe/reference discipline
- Amplitude, DC offset, period, frequency, duty cycle
- Basic ripple/noise
- Known-waveform onboarding
- Preserve settings so evidence is reproducible

**Deliberately defer / leave in Alfred:**
- Spectrum analyzer
- Advanced bandwidth/probe theory beyond technician baseline
- Deep frequency-response work

**Existing Alfred career-section IDs to reuse:**
- `career-w03-learn-the-oscilloscope-on-a-known-waveform-first`
- `career-w03-reference-grounding-loading-and-bandwidth-can-change-the-result`
- `career-w03-i-do-configure-and-measure-a-known-square-wave`
- `career-w09-current-limiting-converts-catastrophic-faults-into-observable-evidence`
- `career-w24-first-power-is-a-controlled-experiment`

**Existing Alfred resources to carry over:**
- Bench Power Supply Basics (Keysight Technologies)
- Bench Power Supply Basics — Constant Voltage and Constant Current Modes (Keysight)
- How to Use an Oscilloscope and Probe — Step-by-Step Tutorial (Tektronix)

**Required hands-on evidence:**
- Power a low-voltage circuit with a deliberate current limit
- Capture a known square wave
- Record Vpp, frequency, period, duty cycle, trigger settings, volts/div, and time/div
- Measure one power rail for DC level and basic ripple

**Gate:** Can power a circuit safely and capture a stable, reproducible waveform with correct interpretation.

## Priority 7 — Digital Logic and Logic Analyzer

**Purpose:** Make digital signals physically understandable before protocol decoding.

**Primary Alfred source weeks:** 11, 18, 29

**Reuse from Alfred:**
- Binary/logic-state essentials
- Logic HIGH/LOW as voltage ranges
- Pull-up and pull-down resistors
- Floating inputs
- Clock/edge/timing basics
- Mechanical switch bounce/debounce
- Logic-analyzer sampling and channel labeling
- Capture known-good digital activity before decoding faults

**Deliberately defer / leave in Alfred:**
- Deep Boolean algebra
- Large combinational/sequential design curriculum
- Protocol specifics until Priority 8

**Existing Alfred career-section IDs to reuse:**
- `career-w11-a-logical-1-is-a-voltage-range-not-the-word-high`
- `career-w11-unconnected-inputs-do-not-have-a-reliable-state`
- `career-w11-pull-resistors-define-default-state-and-edge-behavior`
- `career-w11-debounce-is-a-time-domain-problem`
- `career-w18-learn-the-logic-analyzer-on-that-known-good-i2c-transaction`

**Existing Alfred resources to carry over:**
- Tektronix scope material already used in Alfred W11 for digital timing
- Saleae — Logic Analyzer Learning and Support
- Saleae STM32 Nucleo Board — Digital Signals

**Required hands-on evidence:**
- Observe a digital input with and without a defined pull state
- Capture switch bounce or another timing event
- Capture and label at least two digital channels
- Measure time between meaningful edges

**Gate:** Can interpret digital voltage/timing and create a labeled logic-analyzer capture tied back to a schematic or pinout.

## Priority 8 — UART, I²C, SPI, Board Bring-Up, and Job-Proof Capstone

**Purpose:** Connect the technician core to embedded hardware and produce evidence that can survive an interview.

**Primary Alfred source weeks:** 16, 17, 18, 24, 25, 27, 28, 29

**Reuse from Alfred:**
- Board/MCU identity
- Power → rails → reset → clocks → GPIO/debug sequence
- SWD/ST-LINK as a bring-up/debug tool
- UART electrical/framing model
- I²C SDA/SCL, pull-ups, addressing, ACK/NACK, stuck-line clues
- SPI clock/data/chip-select and CPOL/CPHA awareness
- Logic-analyzer protocol evidence
- One known-good peripheral transaction
- One safe protocol fault
- Bring-up checklist
- Controlled fault injection
- Two-page troubleshooting / bring-up report
- Evidence packaging for job interviews

**Deliberately defer / leave in Alfred:**
- Full C programming course from Alfred W14
- Full embedded architecture course from Alfred W15
- Full Python curriculum from W17 unless needed for the chosen capstone
- Full automated-test architecture from W27; keep as an optional differentiation extension
- Advanced firmware architecture from W26

**Existing Alfred career-section IDs to reuse:**
- `career-w16-identify-the-physical-board-target-mcu-and-debug-path-first`
- `career-w16-flash-reset-and-run-prove-different-things`
- `career-w16-swd-debugging-lets-you-inspect-execution-state`
- `career-w16-bring-up-is-a-ladder-of-proofs`
- `career-w17-define-the-serial-contract-before-writing-the-client`
- `career-w17-use-pyserial-as-a-visible-port-bytes-message-pipeline`
- `career-w18-translate-one-i2c-datasheet-into-a-wiring-and-transaction-contract`
- `career-w18-bring-up-the-smallest-meaningful-i2c-transaction`
- `career-w18-learn-the-logic-analyzer-on-that-known-good-i2c-transaction`
- `career-w18-we-do-diagnose-an-i2c-address-nack-by-layer`
- `career-w18-only-now-generalize-the-model-to-spi`
- `career-w24-bring-up-dependencies-in-order`
- `career-w24-first-power-is-a-controlled-experiment`
- `career-w25-build-a-thin-end-to-end-slice-first`
- `career-w25-triangulate-with-independent-evidence`
- `career-w28-controlled-fault-injection-needs-a-known-good-baseline`
- `career-w28-the-report-should-show-the-reasoning-chain`
- `career-w29-every-skill-claim-should-point-to-evidence`

**Existing Alfred resources to carry over:**
- STM32 Online Training (STMicroelectronics)
- STM32CubeMX and STM32Cube HAL Basics (STMicroelectronics)
- Saleae STM32 Nucleo Board — Analyzing I2C
- Saleae STM32 Nucleo Board — Analyzing SPI
- SparkFun I2C / SPI references already used in Alfred
- Board Level Troubleshooting (Texas Instruments)
- NASA Systems Engineering Handbook — selected reporting/verification guidance

**Required hands-on evidence:**
- Bring up one MCU/digital board from an unpowered state using a checklist
- Verify rails, reset/boot, and at least one digital function
- Capture one UART or I²C transaction
- Introduce at least two safe faults and diagnose them from evidence
- Produce a concise project report with schematic/block diagram, expected behavior, measurements/captures, fault isolation, correction, and retest
- Optional differentiator: Python/pySerial test logger or simple automated verification

**Gate:** JOB-PROOF CAPSTONE: can explain and defend one complete hardware bring-up/troubleshooting story with real measurements, captures, and corrective action.

## What is intentionally NOT in the Jade core

These remain valuable in Alfred, but they should not delay the job-readiness route:
- Deep AC/RLC/resonance analysis
- Broad magnetism/motors/generators coverage
- RF/telecommunications/spectrum-analysis breadth
- Full analog amplifier/op-amp sequence
- Full C programming curriculum
- Full embedded-firmware architecture curriculum
- Full Python-from-zero curriculum
- Full CETa breadth review and 100-question exam readiness
- Utility/power-engineering material

## Resource policy

Jade inherits Alfred's current media rule: every substantive teaching section should have one strong first-pass video resource and one strong first-pass written resource when those media exist. Extra explanations belong in Study rather than multiplying required resources.

## Instructional policy inherited from Alfred

- Teach from true ground zero; do not assume hidden prerequisites.
- Explain physical meaning, units, prefixes, why, worked examples, calculations, and expected measurements.
- Reuse Alfred glossary behavior and field-specific vocabulary coverage.
- Preserve Focus Prep, Learn/Study separation, resume state, direct page navigation, question-to-teaching routing, and progress tracking.
- Use real/cited technical diagrams and images; do not substitute decorative AI diagrams for instructional visuals.
- Required lab work must produce observable evidence, not only a checkbox.
- Every job-readiness skill claim should be traceable to an artifact, measurement, capture, repair, or report.