window.JADE_LEARNING_ENHANCEMENTS = {
  "version": "0.4.0",
  "sections": {
    "w1l0s0": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "model": "Jade models a 3.3 V rail measurement: black lead on circuit ground, red lead on the rail. A 3.28 V reading means 3.28 V relative to that chosen reference; moving the black lead changes the voltage relationship being measured."
    },
    "w1l0s1": {
      "retrieve": "Without looking, state V = I×R and P = V×I, including the units for each quantity.",
      "guided": "A 12 V source is across 2.2 kΩ. Predict current before calculating it, then calculate the current in mA.",
      "challenge": "Change the resistor to 4.7 kΩ without changing the supply. Predict whether current rises or falls, then calculate the new value.",
      "requiredResources": [
        "aac-electrical-b",
        "aac-ohms-written"
      ],
      "figure": "series-parallel",
      "model": "Jade predicts before measuring: 5 V across 1 kΩ should produce 5 mA. Power is 5 V × 0.005 A = 25 mW, so a common 1/4 W resistor has ample margin for this simple example."
    },
    "w1l0s2": {
      "retrieve": "Describe one measurement signature of an open circuit and one of a short circuit.",
      "guided": "A load has 5 V on one side, 0 V on the other, and no current. List two path faults that could explain the symptom.",
      "challenge": "A current-limited supply collapses from 5 V to 0.8 V. Explain how that changes your next troubleshooting step.",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "figure": "series-parallel",
      "model": "Jade sees 5 V on the source side of a switch, 0 V on the load side, and no load current. That pattern is consistent with an open path at or before the switch; it does not justify replacing the load yet."
    },
    "w1l0s3": {
      "retrieve": "Without looking, state V = I×R and P = V×I, including the units for each quantity.",
      "guided": "A 12 V source is across 2.2 kΩ. Predict current before calculating it, then calculate the current in mA.",
      "challenge": "Change the resistor to 4.7 kΩ without changing the supply. Predict whether current rises or falls, then calculate the new value.",
      "requiredResources": [
        "keysight-psu",
        "aac-ohms-written"
      ],
      "model": "Before powering a small 5 V board, Jade sets 5.0 V with the output disabled and a conservative current limit. If the supply immediately enters CC mode and the rail collapses, Jade disables output and investigates instead of raising the limit."
    },
    "w1l1s0": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "model": "Jade reads R17 as 4.7 kΩ from its marking or schematic, then measures it de-energized. A much lower in-circuit reading may come from parallel paths, so Jade isolates one lead before calling the resistor bad."
    },
    "w1l1s1": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "model": "Jade tests a diode in both directions. A normal silicon junction may show a forward drop in one direction and open/over-range in reverse; conduction both ways or neither way is evidence to investigate, not a complete diagnosis by itself."
    },
    "w1l1s2": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "model": "Jade finds U3 on the schematic, checks its part number and pin 1 marker, then opens the datasheet before probing. The first questions are supply pin, ground pin, input/output role, and legal voltage range."
    },
    "w1l1s3": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "aac-electrical-a",
        "aac-ohms-written"
      ],
      "model": "A capacitor measures suspiciously low resistance in circuit. Jade does not immediately replace it; parallel paths can dominate the reading. Jade de-energizes, discharges safely, consults topology, and isolates the component if needed."
    },
    "w2l0s0": {
      "retrieve": "Without looking, state the difference between a schematic connection and physical placement on the PCB.",
      "guided": "Choose a simple source-to-load path and write three test points with an expected value at each.",
      "challenge": "Move one fault upstream or downstream of your midpoint test. Explain how the expected result changes.",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-schematic"
      ],
      "model": "On the schematic, R3 and C2 may be drawn far apart even when they sit beside each other on the PCB. Jade traces the net labels and node connections first, then uses the board layout only to locate the physical test points."
    },
    "w2l0s1": {
      "retrieve": "Without looking, state the difference between a schematic connection and physical placement on the PCB.",
      "guided": "Choose a simple source-to-load path and write three test points with an expected value at each.",
      "challenge": "Move one fault upstream or downstream of your midpoint test. Explain how the expected result changes.",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-schematic"
      ],
      "model": "For a divider with 10 kΩ over 10 kΩ from 5 V to ground, Jade predicts the midpoint near 2.5 V. That expected value becomes a test point; a measured 0 V or 5 V immediately changes the fault hypotheses."
    },
    "w2l0s2": {
      "retrieve": "Without looking, state the difference between a schematic connection and physical placement on the PCB.",
      "guided": "Choose a simple source-to-load path and write three test points with an expected value at each.",
      "challenge": "Move one fault upstream or downstream of your midpoint test. Explain how the expected result changes.",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-schematic"
      ],
      "model": "A board has correct 5 V input but no sensor output. Jade tests the regulator output at the boundary between power and sensor sections. A correct 3.3 V rail moves the search downstream; a missing rail keeps the search in the power section."
    },
    "w2l0s3": {
      "retrieve": "Without looking, state the difference between a schematic connection and physical placement on the PCB.",
      "guided": "Choose a simple source-to-load path and write three test points with an expected value at each.",
      "challenge": "Move one fault upstream or downstream of your midpoint test. Explain how the expected result changes.",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-schematic"
      ],
      "model": "Jade converts a schematic into a three-row test plan: TP1 input 5 V, TP2 regulator output 3.3 V, TP3 signal output expected to toggle. The plan exists before probing, so each result has a decision attached to it."
    },
    "w2l1s0": {
      "retrieve": "Point to or describe the PCB feature that electrically connects the next part of the path.",
      "guided": "Use a board photo or real PCB to locate one designator, one trace/path, one via or layer transition, and one connector pin.",
      "challenge": "If the schematic is correct but the PCB measurement is not, list two physical-layout causes you would inspect next.",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-pcb"
      ],
      "figure": "vias",
      "model": "Jade follows a trace from a connector pad through a via to a component pad on another layer. A labeled test point on that net is safer and easier to probe than trying to touch a fine-pitch IC pin."
    },
    "w2l1s1": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "aac-kcl-kvl",
        "sparkfun-pcb"
      ],
      "model": "Jade sees C12 marked with a polarity symbol and connector J4 with a keyed outline. Before replacing or reconnecting anything, Jade records pin 1/orientation so the repair cannot create a new fault."
    },
    "w2l1s2": {
      "retrieve": "Name the exact engineering question you would ask before opening a datasheet.",
      "guided": "Find a pinout, recommended supply range, and one absolute maximum rating for a real component. Keep recommended operation separate from stress limits.",
      "challenge": "A measured input is inside the absolute maximum but outside the recommended range. Explain why 'not damaged' is not the same as 'valid operation.'",
      "requiredResources": [
        "digikey-datasheet-video",
        "sparkfun-schematic"
      ],
      "model": "The question is “Can this IC accept 5 V on its input?” Jade goes directly to the datasheet absolute-maximum and recommended-operating tables rather than reading every page. If 5 V exceeds the allowed input range, probing strategy changes immediately."
    },
    "w2l1s3": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "digikey-datasheet-video",
        "sparkfun-schematic"
      ],
      "model": "The schematic says U2 pin 3 is 3V3_OUT; the PCB identifies U2 and pin 1; the datasheet confirms the package pinout. Jade cross-checks all three before declaring which physical pad should measure 3.3 V."
    },
    "w3l0s0": {
      "retrieve": "Say quantity → meter mode → jack → connection → energized/de-energized state before touching the probes.",
      "guided": "Choose one symptom and write a measurement question with test point, reference, expected range, and decision rule.",
      "challenge": "Your continuity beeper says a connector is connected, but the load fails. State the next loaded measurement and what it can reveal.",
      "requiredResources": [
        "tek-scope-webinar",
        "tektronix-scope"
      ],
      "figure": "multimeter",
      "model": "Instead of “check the board,” Jade asks: “With the board powered at 5 V, is TP4 between 3.20 V and 3.40 V relative to ground?” That question determines the DMM, reference point, operating condition, and pass/fail interpretation."
    },
    "w3l0s1": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "keysight-psu",
        "fluke-dmm"
      ],
      "figure": "multimeter",
      "model": "To measure a rail, Jade uses COM and V/Ω with the meter in DC volts and probes in parallel. To measure resistance, Jade removes power first. Current mode would require opening the path and inserting the meter in series."
    },
    "w3l0s2": {
      "retrieve": "Say quantity → meter mode → jack → connection → energized/de-energized state before touching the probes.",
      "guided": "Choose one symptom and write a measurement question with test point, reference, expected range, and decision rule.",
      "challenge": "Your continuity beeper says a connector is connected, but the load fails. State the next loaded measurement and what it can reveal.",
      "requiredResources": [
        "keysight-psu",
        "fluke-dmm"
      ],
      "model": "A connector beeps in continuity mode but the load is weak. Under load, Jade measures 0.9 V across the connector. That voltage drop is strong evidence of excessive connection resistance that a low-current continuity beep could miss."
    },
    "w3l0s3": {
      "retrieve": "Recite the first-power order: inspection → settings → current observation → rails → signals.",
      "guided": "You expect about 25 mA from a 5 V board. Choose a sensible initial current limit and state your stop conditions.",
      "challenge": "The board draws 4 mA instead of 25 mA but rails are correct. Name two hypotheses and the next measurement for each.",
      "requiredResources": [
        "keysight-psu",
        "fluke-dmm"
      ],
      "model": "A healthy board normally draws 80 mA at 5 V. On first power Jade sees 300 mA and CC mode. The supply readback is diagnostic evidence, so Jade stops and investigates the abnormal load before signal probing."
    },
    "w3l1s0": {
      "retrieve": "Name the vertical, horizontal, and trigger settings you must understand before trusting a scope capture.",
      "guided": "For a 1 kHz, 0–3.3 V square wave, predict period and choose reasonable starting volts/div and time/div values.",
      "challenge": "The same waveform now has a 1.0 V DC offset and 2 Vpp amplitude. State the expected top and bottom voltages before measuring.",
      "requiredResources": [
        "tek-scope-webinar",
        "tektronix-scope"
      ],
      "figure": "scope",
      "model": "Jade starts with a known 1 kHz, 0–3.3 V square wave. Expected period is 1 ms. After setting vertical scale, timebase, and an edge trigger, a stable trace near 3.3 Vpp and 1 ms period confirms the basic scope setup."
    },
    "w3l1s1": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "tek-scope-webinar",
        "tektronix-scope"
      ],
      "model": "Before probing an unknown node, Jade confirms 10× probe setting and compensation on a known square wave. Jade also verifies where the scope ground is electrically connected, because a grounded bench scope can short an inappropriate node to earth."
    },
    "w3l1s2": {
      "retrieve": "Name the vertical, horizontal, and trigger settings you must understand before trusting a scope capture.",
      "guided": "For a 1 kHz, 0–3.3 V square wave, predict period and choose reasonable starting volts/div and time/div values.",
      "challenge": "The same waveform now has a 1.0 V DC offset and 2 Vpp amplitude. State the expected top and bottom voltages before measuring.",
      "requiredResources": [
        "tek-scope-webinar",
        "tektronix-scope"
      ],
      "figure": "scope",
      "model": "A scope shows a pulse train with 2.0 ms period. Jade calculates frequency as 1/0.002 s = 500 Hz. If the signal is high for 0.5 ms, duty cycle is 0.5/2.0 = 25%."
    },
    "w3l1s3": {
      "retrieve": "Name the vertical, horizontal, and trigger settings you must understand before trusting a scope capture.",
      "guided": "For a 1 kHz, 0–3.3 V square wave, predict period and choose reasonable starting volts/div and time/div values.",
      "challenge": "The same waveform now has a 1.0 V DC offset and 2 Vpp amplitude. State the expected top and bottom voltages before measuring.",
      "requiredResources": [
        "tek-scope-webinar",
        "tektronix-scope"
      ],
      "model": "Jade expects a filter output to respond to a 1 kHz input. A function generator supplies a known 1 kHz sine wave at a safe amplitude; the scope compares input and output. The known stimulus turns “nothing happens” into a measurable transfer problem."
    },
    "w4l0s0": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "aac-troubleshoot",
        "aac-troubleshooting-tips"
      ],
      "model": "“Board is broken” is not testable. Jade rewrites the symptom as: “At 5.0 V input, LED D1 never illuminates and TP3 remains 0.02 V instead of the expected 3.3 V.” Now the failure has configuration, location, and measurable evidence."
    },
    "w4l0s1": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "aac-troubleshoot",
        "aac-troubleshooting-specific"
      ],
      "model": "For “no output,” Jade lists three hypotheses: missing local rail, open signal path, failed output stage. Each predicts different evidence. The hypotheses exist before the first new measurement so probing is not random."
    },
    "w4l0s2": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "aac-troubleshoot",
        "aac-troubleshooting-specific"
      ],
      "model": "Jade measures the output of the power block before checking individual downstream parts. If the rail is wrong, a large portion of the downstream circuit can be removed from suspicion; that makes the measurement high-information."
    },
    "w4l0s3": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "aac-troubleshoot",
        "aac-troubleshooting-specific"
      ],
      "model": "After repairing an open connector pin, Jade repeats the original failing test and one nearby load condition. The repair is accepted only when the expected behavior returns under the same conditions that previously failed."
    },
    "w4l1s0": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "ti-board",
        "aac-troubleshooting-tips"
      ],
      "model": "Jade writes a procedure step as: “Set supply to 5.00 V, limit 150 mA, output OFF; connect DUT; enable output; record TP2 relative to GND.” Another technician can reproduce that setup without guessing what “check voltage” meant."
    },
    "w4l1s1": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "ti-board",
        "aac-troubleshooting-tips"
      ],
      "model": "A test requirement says TP5 must be 3.20–3.40 V at room temperature with the stated load. A 3.31 V reading is PASS; 3.05 V is FAIL. A disconnected probe is ERROR/invalid setup, not a device FAIL."
    },
    "w4l1s2": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "ti-board",
        "aac-troubleshooting-tips"
      ],
      "model": "Jade records meter ID/status, mode, range, probe setup, test point, reference, and units with the measurement. If the instrument is out of calibration or its status is unknown where calibration matters, the result is not silently treated as authoritative."
    },
    "w4l1s3": {
      "retrieve": "State the troubleshooting chain without looking: symptom → expectation → hypotheses → discriminating test → correction → retest.",
      "guided": "Write two competing hypotheses for a 'no output' symptom and one measurement whose possible results separate them.",
      "challenge": "Your repair makes the symptom disappear once. What additional repeat or boundary test would make the root-cause claim stronger?",
      "requiredResources": [
        "ti-board",
        "aac-troubleshooting-tips"
      ],
      "model": "Jade’s report says: condition, expected 3.3 V, measured 0.4 V, hypothesis, test performed, root cause, correction, and retest at 3.29 V. The report makes the decision reconstructable instead of leaving only a photo or number."
    },
    "w5l0s0": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "adafruit-defects"
      ],
      "figure": "solder-good",
      "model": "Jade heats the pad and component lead together, then feeds solder into the heated joint. The accepted joint shows smooth wetting to both surfaces rather than a ball of solder sitting on one conductor."
    },
    "w5l0s1": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "adafruit-defects"
      ],
      "figure": "solder-bad",
      "model": "Jade compares two joints: one has smooth wetting and a clean fillet; another is dull/lumpy with poor wetting. The second joint is flagged for rework because the visible defect suggests an unreliable metallurgical connection."
    },
    "w5l0s2": {
      "retrieve": "Name the component property, polarity/orientation clue, or terminal information that matters most before testing this part.",
      "guided": "Pick one component in front of you or in a schematic. Identify its designator, value/part number, and one safe first-pass check.",
      "challenge": "Give one meter result that would be suggestive but not sufficient to condemn the component, and explain why.",
      "requiredResources": [
        "digikey-solder-video",
        "adafruit-defects"
      ],
      "model": "Before removing a through-hole component, Jade records orientation, applies flux if appropriate, uses braid or a controlled removal method, minimizes dwell time, then inspects for lifted pads or heat damage before installing the replacement."
    },
    "w5l0s3": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "nasa-harness"
      ],
      "model": "Jade uses an ESD-controlled bench for a static-sensitive IC but still removes electrical energy before resistance checks or rework. The wrist strap controls static charge; it is not permission to work on hazardous energized equipment."
    },
    "w5l1s0": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "nasa-harness"
      ],
      "model": "A crimp passes a quick tug and visual inspection, then is verified electrically. Jade checks conductor position, insulation support, strain relief, and contact seating because mechanical quality directly affects electrical reliability."
    },
    "w5l1s1": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "nasa-harness"
      ],
      "model": "Before testing a harness, Jade documents connector view and pin-numbering convention. “Pin 1” must mean the same physical cavity to both technicians; otherwise a correct continuity reading can be assigned to the wrong conductor."
    },
    "w5l1s2": {
      "retrieve": "Say quantity → meter mode → jack → connection → energized/de-energized state before touching the probes.",
      "guided": "Choose one symptom and write a measurement question with test point, reference, expected range, and decision rule.",
      "challenge": "Your continuity beeper says a connector is connected, but the load fails. State the next loaded measurement and what it can reveal.",
      "requiredResources": [
        "digikey-solder-video",
        "nasa-harness"
      ],
      "model": "A harness passes continuity with no load, but a device resets under load. Jade measures voltage across the suspect connection while current flows; a large drop identifies a resistive connection that continuity alone did not expose."
    },
    "w5l1s3": {
      "retrieve": "Name the visual or electrical evidence you would use to accept, rework, or escalate this physical connection.",
      "guided": "Inspect a real or photographed joint/connector and record one visible observation plus one electrical verification step.",
      "challenge": "A joint looks acceptable but develops 0.8 V drop under load. Explain why appearance alone did not prove workmanship.",
      "requiredResources": [
        "digikey-solder-video",
        "nasa-harness"
      ],
      "model": "Before replacing a damaged connector, Jade records the symptom, pinout, orientation, and baseline measurements. After repair, Jade photographs the new workmanship and repeats continuity, short checks, and the original functional test."
    },
    "w6l0s0": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "aac-logic-video",
        "aac-logic-levels"
      ],
      "model": "A 3.3 V MCU input datasheet might define LOW below one threshold and HIGH above another, leaving an undefined region between. Jade compares the measured voltage with the actual VIH/VIL limits instead of assuming every digital signal is exactly 0 V or 3.3 V."
    },
    "w6l0s1": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "aac-logic-video",
        "aac-cmos-pulls"
      ],
      "figure": "pullup",
      "model": "A disconnected CMOS input changes randomly when a hand approaches. Jade adds the intended pull-up or pull-down so the input has a defined state when no active device is driving it."
    },
    "w6l0s2": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "aac-logic-video",
        "aac-logic-levels"
      ],
      "model": "A clock has a 10 µs period, so its frequency is 100 kHz. Jade also checks edge timing and pulse width because a signal can have the correct average frequency yet still violate the receiver’s timing requirements."
    },
    "w6l0s3": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "ti-debounce-video",
        "aac-cmos-pulls"
      ],
      "model": "A pushbutton press creates several fast transitions instead of one clean edge. Jade captures the raw waveform, measures the bounce interval, and then evaluates whether hardware or software debounce produces one intended event."
    },
    "w6l1s0": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "saleae-capture-video",
        "saleae-digital"
      ],
      "model": "Jade connects a logic analyzer to two known digital lines plus a common reference, captures transitions, and treats each channel as a thresholded voltage-over-time record. It can reveal timing and logic state, but not analog signal shape."
    },
    "w6l1s1": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "saleae-capture-video",
        "saleae-digital"
      ],
      "model": "For a 100 kHz digital clock, Jade chooses a sample rate comfortably above the signal transition rate, sets the proper voltage threshold, and labels channels from the schematic before capturing. Unlabeled channels turn a good capture into weak evidence."
    },
    "w6l1s2": {
      "retrieve": "Explain the idea in your own words without using the lesson wording, and name the physical quantity you would measure to verify it.",
      "guided": "Choose one real node or signal and state its expected value relative to a named reference.",
      "challenge": "If the reference point were changed or the expected logic family were different, what part of your interpretation would need to change?",
      "requiredResources": [
        "saleae-capture-video",
        "saleae-digital"
      ],
      "model": "Jade saves one known-good startup capture with channel names and timing. When a later board fails, the same setup is repeated so differences in sequence can be compared against an actual baseline instead of memory."
    },
    "w6l1s3": {
      "retrieve": "Explain 'Compare sequence before explaining cause' from memory in two or three sentences.",
      "guided": "Use one real circuit, board, or measurement to demonstrate the central idea: When comparing healthy and faulted captures, first describe the observable difference: line stuck low, missing clock, missing response, extra edge, wrong timing, or decoder error.",
      "challenge": "Change one condition in the example and explain how your expected evidence should change before you measure it.",
      "requiredResources": [
        "aac-logic-video",
        "aac-logic-levels"
      ],
      "model": "A failing capture shows one enable line arriving 8 ms late compared with known-good. Jade reports the sequence difference first; only then does Jade investigate why. Observed timing is evidence, not yet a root-cause claim."
    },
    "w7l0s0": {
      "retrieve": "Name the physical signal lines and one framing/timing rule for this interface without using the decoder as your answer.",
      "guided": "Draw or describe the smallest known-good transaction, including idle state, start/select condition, data direction, and completion condition.",
      "challenge": "A decoder says 'NACK' or shows corrupt bytes. List the electrical checks you would make before blaming firmware.",
      "requiredResources": [
        "ti-uart-video",
        "sparkfun-i2c"
      ],
      "figure": "uart",
      "model": "For UART, Jade verifies common reference, TX-to-RX wiring, baud rate, data bits, parity, and stop bits. A decoder showing garbage can result from the wrong framing settings even when electrical transitions are present."
    },
    "w7l0s1": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-i2c"
      ],
      "figure": "i2c",
      "model": "Jade expects I²C SDA and SCL to idle HIGH because pull-up resistors release both open-drain lines upward. A line stuck LOW before traffic points toward wiring, a held device, or another electrical problem before decoding even begins."
    },
    "w7l0s2": {
      "retrieve": "Name the exact engineering question you would ask before opening a datasheet.",
      "guided": "Find a pinout, recommended supply range, and one absolute maximum rating for a real component. Keep recommended operation separate from stress limits.",
      "challenge": "A measured input is inside the absolute maximum but outside the recommended range. Explain why 'not damaged' is not the same as 'valid operation.'",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-i2c"
      ],
      "figure": "i2c",
      "model": "From an I²C sensor datasheet, Jade extracts supply voltage, SDA/SCL pins, address, required pull-ups, target register, and read sequence. Those items become the wiring and transaction contract before code or decoder settings are blamed."
    },
    "w7l0s3": {
      "retrieve": "Name the physical signal lines and one framing/timing rule for this interface without using the decoder as your answer.",
      "guided": "Draw or describe the smallest known-good transaction, including idle state, start/select condition, data direction, and completion condition.",
      "challenge": "A decoder says 'NACK' or shows corrupt bytes. List the electrical checks you would make before blaming firmware.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-i2c"
      ],
      "figure": "i2c",
      "model": "The analyzer shows START and an address byte followed by NACK. Jade checks layer by layer: electrical levels/pull-ups, wiring and address, device power/reset, then software transaction. The NACK narrows the problem but does not name the cause by itself."
    },
    "w7l1s0": {
      "retrieve": "Name the physical signal lines and one framing/timing rule for this interface without using the decoder as your answer.",
      "guided": "Draw or describe the smallest known-good transaction, including idle state, start/select condition, data direction, and completion condition.",
      "challenge": "A decoder says 'NACK' or shows corrupt bytes. List the electrical checks you would make before blaming firmware.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-spi"
      ],
      "figure": "spi",
      "model": "Jade identifies SCLK, MOSI, MISO, and chip-select from the schematic and datasheet. A transfer is meaningful only while the intended device is selected; correct-looking clock activity alone does not prove the target received the transaction."
    },
    "w7l1s1": {
      "retrieve": "Explain how a voltage-over-time signal becomes a digital 0/1 decision in the measurement tool.",
      "guided": "Choose a digital signal and state expected voltage levels, sample-rate requirement, and channel label before capturing it.",
      "challenge": "The decoder reports errors but the raw edges look noisy. Name one acquisition/setup cause and one circuit cause to investigate separately.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-spi"
      ],
      "figure": "spi",
      "model": "A datasheet specifies SPI mode 0. Jade translates that to CPOL=0 and CPHA=0, then checks which edge launches data and which edge samples it. The analyzer decoder is configured to match the same contract."
    },
    "w7l1s2": {
      "retrieve": "Name the physical signal lines and one framing/timing rule for this interface without using the decoder as your answer.",
      "guided": "Draw or describe the smallest known-good transaction, including idle state, start/select condition, data direction, and completion condition.",
      "challenge": "A decoder says 'NACK' or shows corrupt bytes. List the electrical checks you would make before blaming firmware.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-spi"
      ],
      "figure": "spi",
      "model": "Jade first captures a successful device-ID read and saves the raw edges plus decoded bytes. When testing a fault, Jade repeats the same transfer and compares clock, select, data direction, and decoded response against that baseline."
    },
    "w7l1s3": {
      "retrieve": "Name the physical signal lines and one framing/timing rule for this interface without using the decoder as your answer.",
      "guided": "Draw or describe the smallest known-good transaction, including idle state, start/select condition, data direction, and completion condition.",
      "challenge": "A decoder says 'NACK' or shows corrupt bytes. List the electrical checks you would make before blaming firmware.",
      "requiredResources": [
        "saleae-protocol-video",
        "sparkfun-i2c"
      ],
      "model": "A decoder reports unexpected bytes. Jade zooms into the raw lines first: are voltage levels valid, is chip select active, are edges present, and is timing plausible? Protocol text is interpreted only after the electrical evidence makes sense."
    },
    "w8l0s0": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "Before first power, Jade identifies the board revision, input power, main rails, ground, reset/boot controls, MCU/processor, debug connector, and one communication path. Those landmarks define where bring-up evidence will be collected."
    },
    "w8l0s1": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "Jade proves bring-up in dependency order: safe input/current → rails → reset/boot → clock/execution → GPIO/debug → peripheral communication. If a 3.3 V rail is absent, debugging I²C traffic is premature."
    },
    "w8l0s2": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "Programming succeeds, but the board still does not run. Jade separates proofs: flash operation proves programming access, reset proves reset behavior, run proves execution, and a debugger breakpoint/register view proves a deeper level of execution state."
    },
    "w8l0s3": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "After achieving a known-good state, Jade records supply settings, rail values, firmware/build identity, and one working signal/capture plus a recovery method. That baseline makes deliberate fault testing reversible and interpretable."
    },
    "w8l1s0": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "Jade chooses a small MCU/sensor board because it exposes power rails, a debug path, and a serial bus. The project is intentionally small enough that every important expected state can be measured and explained in an interview."
    },
    "w8l1s1": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "Jade introduces a safe reversible fault such as disconnecting a signal jumper or selecting a wrong known configuration—not a destructive short. Before applying it, Jade predicts the signature, captures the fault, restores the baseline, and retests."
    },
    "w8l1s2": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "A sensor stops responding. Jade confirms the power rail with a DMM, checks signal timing with a logic analyzer/scope, and compares software-visible status or decoded traffic. Agreement across independent evidence makes the diagnosis stronger."
    },
    "w8l1s3": {
      "retrieve": "Recite the bring-up ladder from power integrity toward function, and name what each rung proves.",
      "guided": "Write the next three checks for an unknown board that powers up but produces no expected activity.",
      "challenge": "Choose one reversible fault and predict its DMM, scope, or logic-analyzer signature before introducing it.",
      "requiredResources": [
        "st-training",
        "saleae-digital"
      ],
      "model": "The final artifact contains a block/schematic view, expected behavior, setup, measured results with units, captures/photos, fault-isolation reasoning, correction, and retest. In an interview, Jade can explain the decision chain rather than simply showing a finished board."
    }
  },
  "lessons": {
    "w1l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Electrical Quantities, Current Paths, and Safe First Power' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL REQUIRED"
    },
    "w1l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Recognize the Parts Before You Troubleshoot Them' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w2l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Read the Schematic as a Prediction Map' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w2l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'PCB Anatomy and Datasheet Lookups' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w3l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'DMM and Bench Supply as Diagnostic Instruments' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL REQUIRED"
    },
    "w3l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Oscilloscope and Function Generator Fundamentals' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL REQUIRED"
    },
    "w4l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Fault Isolation Without Guessing' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w4l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Test Procedures, Acceptance Criteria, and Measurement Traceability' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w5l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Soldering, Inspection, and Rework' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL REQUIRED"
    },
    "w5l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Connectors, Crimps, Harnesses, and Repair Evidence' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL REQUIRED"
    },
    "w6l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Digital Signals Are Voltages Over Time' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w6l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Use a Logic Analyzer on Known-Good Activity First' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w7l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'UART and I²C: Know the Electrical Contract' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "SIMULATION ACCEPTABLE"
    },
    "w7l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'SPI and Protocol-Level Fault Isolation' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "SIMULATION ACCEPTABLE"
    },
    "w8l0": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Bring-Up Is a Ladder of Proofs' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    },
    "w8l1": {
      "constructed": "In 2–5 sentences, explain the most important technician decision from 'Capstone: Fault Isolation and Interview-Ready Evidence' and cite one measurement, expected value, or physical observation that would support your decision.",
      "route": "PHYSICAL PREFERRED / SIMULATION ALLOWED"
    }
  },
  "figures": {
    "series-parallel": {
      "title": "Series and parallel resistor circuits",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Series_and_parallel_circuits.svg/960px-Series_and_parallel_circuits.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:Series_and_parallel_circuits.svg",
      "credit": "Xyzzy n / Wikimedia Commons",
      "license": "CC BY-SA 3.0 / GFDL",
      "alt": "Side-by-side series and parallel resistor circuits powered by batteries."
    },
    "multimeter": {
      "title": "Multimeter voltage-range and jack layout",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Multimeter-voltage.svg/960px-Multimeter-voltage.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:Multimeter-voltage.svg",
      "credit": "rones / MikeRun / Wikimedia Commons",
      "license": "CC BY-SA 3.0",
      "alt": "Digital multimeter face showing DC and AC voltage ranges, COM and voltage input jacks."
    },
    "vias": {
      "title": "PCB via types",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Via_Types.svg/960px-Via_Types.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:Via_Types.svg",
      "credit": "M adler / Wikimedia Commons",
      "license": "CC BY 3.0 / GFDL",
      "alt": "Cross-section showing through-hole, blind, and buried PCB vias."
    },
    "pullup": {
      "title": "Pull-up resistor and switch",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Pullup_Resistor_Diagram.png",
      "source": "https://commons.wikimedia.org/wiki/File:Pullup_Resistor_Diagram.png",
      "credit": "Tombob51 / Wikimedia Commons",
      "license": "CC0",
      "alt": "Pull-up resistor from Vin to a logic input with a switch to ground."
    },
    "i2c": {
      "title": "I²C data transfer timing",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/I2C_data_transfer.svg/960px-I2C_data_transfer.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:I2C_data_transfer.svg",
      "credit": "Marcin Floryan / Wikimedia Commons",
      "license": "Public domain",
      "alt": "I2C timing sequence showing start, data bits, and stop condition."
    },
    "spi": {
      "title": "SPI timing relationship",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/SPI_timing_diagram.svg/960px-SPI_timing_diagram.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:SPI_timing_diagram.svg",
      "credit": "Cburnett / Wikimedia Commons",
      "license": "CC BY-SA 3.0 / GFDL",
      "alt": "SPI timing diagram showing clock and data sampling relationships."
    },
    "uart": {
      "title": "UART frame timing",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/UART_timing_diagram.svg/960px-UART_timing_diagram.svg.png",
      "source": "https://commons.wikimedia.org/wiki/File:UART_timing_diagram.svg",
      "credit": "IngenieroLoco / Wikimedia Commons",
      "license": "CC BY-SA 4.0",
      "alt": "UART timing diagram showing framed serial data."
    },
    "scope": {
      "title": "Oscilloscope trace",
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Oscilloscope_screen.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Oscilloscope_screen.jpg",
      "credit": "Peterglen / Wikimedia Commons",
      "license": "Public domain",
      "alt": "Oscilloscope display showing a periodic waveform on a graticule."
    },
    "solder-good": {
      "title": "Acceptable through-hole solder geometry",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Soldering-PCB-good.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-good.jpg",
      "credit": "Tlapicka / Wikimedia Commons",
      "license": "CC BY-SA 3.0",
      "alt": "Two through-hole solder joints with cone-shaped wetted solder."
    },
    "solder-bad": {
      "title": "Poor solder-joint geometry",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Soldering-PCB-bad.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Soldering-PCB-bad.jpg",
      "credit": "Tlapicka / Wikimedia Commons",
      "license": "CC BY-SA 3.0",
      "alt": "A poor solder joint with ball-shaped solder and weak wetting."
    }
  }
};
