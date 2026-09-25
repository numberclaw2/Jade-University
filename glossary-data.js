window.JADE_GLOSSARY = [
  {
    "slug": "voltage",
    "term": "Voltage",
    "definition": "Electrical potential difference between two points.",
    "unit": "V",
    "technical": "Always name or know the reference point for a voltage measurement."
  },
  {
    "slug": "current",
    "term": "Current",
    "definition": "Rate of electric charge flow through a path.",
    "unit": "A",
    "technical": "Current is measured through a branch, not across it."
  },
  {
    "slug": "resistance",
    "term": "Resistance",
    "definition": "Opposition to current through a path.",
    "unit": "Ω",
    "technical": "For a resistive DC path, V = I×R."
  },
  {
    "slug": "power",
    "term": "Electrical power",
    "definition": "Rate at which electrical energy is transferred.",
    "unit": "W",
    "technical": "For DC, P = V×I."
  },
  {
    "slug": "ground",
    "term": "Ground / reference",
    "definition": "Chosen zero-reference node used for voltage measurements and signal return.",
    "unit": "",
    "technical": "Circuit ground is not automatically earth ground."
  },
  {
    "slug": "node",
    "term": "Node",
    "definition": "Electrically common points that ideally share the same potential.",
    "unit": "",
    "technical": "A net on a schematic can represent one node across many physical locations."
  },
  {
    "slug": "net",
    "term": "Net",
    "definition": "Named electrical connection between component pins or nodes.",
    "unit": "",
    "technical": "Use net names to connect schematic locations that are not drawn together."
  },
  {
    "slug": "rail",
    "term": "Power rail",
    "definition": "Named supply-distribution node such as 12 V, 5 V, or 3.3 V.",
    "unit": "V",
    "technical": "Verify rails early in bring-up and troubleshooting."
  },
  {
    "slug": "open-circuit",
    "term": "Open circuit",
    "definition": "Broken current path that prevents steady current through that branch.",
    "unit": "",
    "technical": "Voltage can still exist across an open."
  },
  {
    "slug": "short-circuit",
    "term": "Short circuit",
    "definition": "Unintended very-low-resistance path between nodes.",
    "unit": "",
    "technical": "A short can cause excessive current or pull a signal/rail to the wrong level."
  },
  {
    "slug": "series",
    "term": "Series circuit",
    "definition": "Components sharing a single current path.",
    "unit": "",
    "technical": "Series elements carry the same branch current."
  },
  {
    "slug": "parallel",
    "term": "Parallel circuit",
    "definition": "Branches connected across the same two nodes.",
    "unit": "",
    "technical": "Parallel elements share the same voltage."
  },
  {
    "slug": "ohms-law",
    "term": "Ohm’s law",
    "definition": "Relationship V = I×R for a resistive element or network condition.",
    "unit": "",
    "technical": "Use consistent units."
  },
  {
    "slug": "kcl",
    "term": "Kirchhoff’s Current Law (KCL)",
    "definition": "Current entering a node equals current leaving it.",
    "unit": "",
    "technical": "Useful for reasoning about current paths and branches."
  },
  {
    "slug": "kvl",
    "term": "Kirchhoff’s Voltage Law (KVL)",
    "definition": "Signed voltage changes around a closed loop sum to zero.",
    "unit": "",
    "technical": "Useful for predicting voltage drops."
  },
  {
    "slug": "si-prefix",
    "term": "SI prefix",
    "definition": "Multiplier attached to a unit, such as milli, micro, kilo, or mega.",
    "unit": "",
    "technical": "A prefix error can change a value by factors of 1,000 or more."
  },
  {
    "slug": "dmm",
    "term": "Digital multimeter (DMM)",
    "definition": "Instrument for electrical measurements such as voltage, resistance, continuity, diode test, and current.",
    "unit": "",
    "technical": "Confirm function, jack, and connection before probing."
  },
  {
    "slug": "continuity",
    "term": "Continuity",
    "definition": "Low-resistance electrical connection between two points.",
    "unit": "",
    "technical": "A beep does not prove a connection is healthy under load."
  },
  {
    "slug": "voltage-drop",
    "term": "Voltage drop",
    "definition": "Difference in voltage across a component or connection while current flows.",
    "unit": "V",
    "technical": "Unexpected drop across a connection can reveal unwanted resistance."
  },
  {
    "slug": "diode-test",
    "term": "Diode test",
    "definition": "DMM mode that applies a small test current and displays junction forward voltage.",
    "unit": "V",
    "technical": "In-circuit paths can affect the result."
  },
  {
    "slug": "bench-supply",
    "term": "Bench power supply",
    "definition": "Adjustable DC source with controllable voltage and usually current limiting.",
    "unit": "",
    "technical": "Set voltage/current limit before enabling output."
  },
  {
    "slug": "current-limit",
    "term": "Current limit",
    "definition": "Maximum current boundary configured on a power supply.",
    "unit": "A",
    "technical": "A current limit is a ceiling, not a target."
  },
  {
    "slug": "constant-voltage",
    "term": "Constant voltage (CV)",
    "definition": "Supply mode where the supply holds its voltage setpoint because load current is below the limit.",
    "unit": "",
    "technical": "Normal for many healthy low-voltage loads."
  },
  {
    "slug": "constant-current",
    "term": "Constant current (CC)",
    "definition": "Supply mode where the supply limits current and reduces voltage as needed.",
    "unit": "",
    "technical": "Unexpected CC operation can be a fault clue."
  },
  {
    "slug": "schematic",
    "term": "Schematic",
    "definition": "Diagram of electrical relationships rather than physical placement.",
    "unit": "",
    "technical": "Use it to predict nodes, paths, and test points."
  },
  {
    "slug": "reference-designator",
    "term": "Reference designator",
    "definition": "Label such as R17, C3, U2, or J1 that identifies a component in documentation.",
    "unit": "",
    "technical": "Use designators to tie board, schematic, and repair records together."
  },
  {
    "slug": "test-point",
    "term": "Test point",
    "definition": "Location intended or selected for electrical measurement.",
    "unit": "",
    "technical": "Choose points that answer a specific troubleshooting question."
  },
  {
    "slug": "functional-boundary",
    "term": "Functional boundary",
    "definition": "Interface between circuit blocks used to divide a troubleshooting problem.",
    "unit": "",
    "technical": "Testing boundaries helps shrink the fault space."
  },
  {
    "slug": "pcb",
    "term": "Printed circuit board (PCB)",
    "definition": "Board that mechanically supports and electrically connects components through copper conductors.",
    "unit": "",
    "technical": "PCBs can be multi-layer and hide internal routing."
  },
  {
    "slug": "pad",
    "term": "Pad",
    "definition": "Copper area intended for soldering a component lead or terminal.",
    "unit": "",
    "technical": "Inspect pad wetting and damage during rework."
  },
  {
    "slug": "trace",
    "term": "Trace",
    "definition": "Copper conductor on a PCB connecting points.",
    "unit": "",
    "technical": "A trace can be open, shorted, damaged, or hidden on another layer."
  },
  {
    "slug": "via",
    "term": "Via",
    "definition": "Plated hole or structure connecting copper between PCB layers.",
    "unit": "",
    "technical": "Vias can be useful continuity points when accessible."
  },
  {
    "slug": "plane",
    "term": "Copper plane",
    "definition": "Large copper region commonly used for power or ground distribution.",
    "unit": "",
    "technical": "Planes can make resistance/continuity readings look different from simple point-to-point wiring."
  },
  {
    "slug": "pin-1",
    "term": "Pin 1",
    "definition": "Package reference pin used to orient an IC or connector pinout.",
    "unit": "",
    "technical": "Confirm with exact package/datasheet markings."
  },
  {
    "slug": "datasheet",
    "term": "Datasheet",
    "definition": "Manufacturer technical document defining pinout, ratings, electrical limits, timing, and behavior.",
    "unit": "",
    "technical": "Use it by question rather than reading front-to-back."
  },
  {
    "slug": "absolute-maximum",
    "term": "Absolute maximum rating",
    "definition": "Stress limit beyond which device damage may occur.",
    "unit": "",
    "technical": "Not a normal operating target."
  },
  {
    "slug": "recommended-operating",
    "term": "Recommended operating condition",
    "definition": "Range where a device is specified to operate as intended.",
    "unit": "",
    "technical": "Prefer these limits when establishing acceptance expectations."
  },
  {
    "slug": "resistor",
    "term": "Resistor",
    "definition": "Component used to provide resistance for current limiting, biasing, division, timing, and other functions.",
    "unit": "Ω",
    "technical": "Check value, tolerance, power rating, and circuit role."
  },
  {
    "slug": "capacitor",
    "term": "Capacitor",
    "definition": "Component that stores charge/energy in an electric field and is used for filtering, decoupling, timing, and coupling.",
    "unit": "F",
    "technical": "Some capacitor types are polarized."
  },
  {
    "slug": "diode",
    "term": "Diode",
    "definition": "Semiconductor junction intended to conduct primarily in one direction.",
    "unit": "",
    "technical": "Check polarity and diode-test behavior."
  },
  {
    "slug": "led",
    "term": "LED",
    "definition": "Light-emitting diode.",
    "unit": "",
    "technical": "Requires correct polarity and current limiting."
  },
  {
    "slug": "transistor",
    "term": "Transistor",
    "definition": "Semiconductor device commonly used for switching or amplification.",
    "unit": "",
    "technical": "Identify device type and terminals before testing."
  },
  {
    "slug": "mosfet",
    "term": "MOSFET",
    "definition": "Field-effect transistor often used as an electronic switch.",
    "unit": "",
    "technical": "Gate, drain, and source behavior depends on device type and circuit."
  },
  {
    "slug": "regulator",
    "term": "Voltage regulator",
    "definition": "Circuit/device that produces a controlled supply voltage.",
    "unit": "",
    "technical": "Check input, output, ground, enable, and load conditions."
  },
  {
    "slug": "ic",
    "term": "Integrated circuit (IC)",
    "definition": "Device containing many electronic functions in one package.",
    "unit": "",
    "technical": "Start troubleshooting with power, ground, enable/reset, inputs, and outputs."
  },
  {
    "slug": "connector",
    "term": "Connector",
    "definition": "Detachable electrical/mechanical interface between circuits, cables, or assemblies.",
    "unit": "",
    "technical": "Inspect retention, keying, pins, contamination, and contact quality."
  },
  {
    "slug": "harness",
    "term": "Wire harness",
    "definition": "Organized set of wires/cables and terminations connecting components or assemblies.",
    "unit": "",
    "technical": "Document pin mapping, orientation, strain relief, and continuity."
  },
  {
    "slug": "crimp",
    "term": "Crimp",
    "definition": "Solderless mechanical/electrical termination formed by compressing a terminal onto a conductor.",
    "unit": "",
    "technical": "Correct tool, terminal, conductor preparation, and inspection matter."
  },
  {
    "slug": "strain-relief",
    "term": "Strain relief",
    "definition": "Mechanical feature that prevents wire/cable stress from being transferred to the electrical termination.",
    "unit": "",
    "technical": "Poor strain relief can create intermittent faults."
  },
  {
    "slug": "esd",
    "term": "Electrostatic discharge (ESD)",
    "definition": "Sudden static-charge transfer that can damage electronic devices.",
    "unit": "",
    "technical": "ESD control is separate from shock protection."
  },
  {
    "slug": "solder-joint",
    "term": "Solder joint",
    "definition": "Electrical/mechanical connection formed when solder wets joined metal surfaces.",
    "unit": "",
    "technical": "Inspect wetting, bridges, heat damage, and orientation."
  },
  {
    "slug": "wetting",
    "term": "Wetting",
    "definition": "Ability of molten solder to flow and bond to a clean metal surface.",
    "unit": "",
    "technical": "Poor wetting is a workmanship defect."
  },
  {
    "slug": "solder-bridge",
    "term": "Solder bridge",
    "definition": "Unintended solder connection between conductors.",
    "unit": "",
    "technical": "Can create a short between adjacent pads/pins."
  },
  {
    "slug": "cold-joint",
    "term": "Cold/disturbed solder joint",
    "definition": "Poor solder joint caused by inadequate heating or movement during solidification.",
    "unit": "",
    "technical": "Can be intermittent even if it sometimes passes continuity."
  },
  {
    "slug": "rework",
    "term": "Rework",
    "definition": "Controlled removal, replacement, or correction of assembled hardware.",
    "unit": "",
    "technical": "Document before/after condition and verify function."
  },
  {
    "slug": "smd",
    "term": "Surface-mount device (SMD)",
    "definition": "Component mounted on PCB surface pads rather than through holes.",
    "unit": "",
    "technical": "Beginner rework should avoid fine-pitch/BGA until trained."
  },
  {
    "slug": "oscilloscope",
    "term": "Oscilloscope",
    "definition": "Instrument that displays voltage versus time.",
    "unit": "",
    "technical": "Use for waveform shape, timing, ripple, transients, and signal integrity."
  },
  {
    "slug": "probe",
    "term": "Oscilloscope probe",
    "definition": "Measurement accessory connecting a scope input to a circuit.",
    "unit": "",
    "technical": "Probe attenuation, compensation, loading, and reference connection matter."
  },
  {
    "slug": "attenuation",
    "term": "Probe attenuation",
    "definition": "Ratio such as 1× or 10× describing how a probe scales the measured signal.",
    "unit": "",
    "technical": "Scope and probe settings must agree."
  },
  {
    "slug": "trigger",
    "term": "Trigger",
    "definition": "Condition that determines when an oscilloscope starts an acquisition.",
    "unit": "",
    "technical": "Proper triggering stabilizes repeating waveforms."
  },
  {
    "slug": "timebase",
    "term": "Timebase",
    "definition": "Oscilloscope horizontal scale, commonly time per division.",
    "unit": "s/div",
    "technical": "Set it so relevant waveform timing is visible."
  },
  {
    "slug": "volts-per-division",
    "term": "Volts per division",
    "definition": "Oscilloscope vertical scale.",
    "unit": "V/div",
    "technical": "Use enough vertical resolution without clipping."
  },
  {
    "slug": "frequency",
    "term": "Frequency",
    "definition": "Number of cycles per second.",
    "unit": "Hz",
    "technical": "f = 1/T."
  },
  {
    "slug": "period",
    "term": "Period",
    "definition": "Time for one complete cycle.",
    "unit": "s",
    "technical": "T = 1/f."
  },
  {
    "slug": "duty-cycle",
    "term": "Duty cycle",
    "definition": "Percentage of a period spent in an active state.",
    "unit": "%",
    "technical": "Common for clocks and PWM."
  },
  {
    "slug": "function-generator",
    "term": "Function generator",
    "definition": "Instrument that produces controlled test waveforms.",
    "unit": "",
    "technical": "Verify amplitude/frequency/offset before applying a stimulus to a DUT."
  },
  {
    "slug": "dut",
    "term": "Device under test (DUT)",
    "definition": "Hardware being evaluated by a test or procedure.",
    "unit": "",
    "technical": "Record exact DUT identity and configuration."
  },
  {
    "slug": "acceptance-criteria",
    "term": "Acceptance criteria",
    "definition": "Defined limits/conditions used to assign a test verdict.",
    "unit": "",
    "technical": "Do not invent a tolerance after seeing the measurement."
  },
  {
    "slug": "pass",
    "term": "PASS",
    "definition": "Verdict meaning the valid test result satisfies stated acceptance criteria.",
    "unit": "",
    "technical": "PASS applies to a requirement, not to the entire product automatically."
  },
  {
    "slug": "fail",
    "term": "FAIL",
    "definition": "Verdict meaning a valid test result does not satisfy stated criteria.",
    "unit": "",
    "technical": "Keep DUT failure separate from test-system error."
  },
  {
    "slug": "test-error",
    "term": "Test/setup error",
    "definition": "Condition where the test itself did not produce valid evidence.",
    "unit": "",
    "technical": "Examples include disconnected probes, fixture faults, or invalid configuration."
  },
  {
    "slug": "calibration",
    "term": "Calibration",
    "definition": "Process establishing measurement relationship/accuracy against standards under a controlled system.",
    "unit": "",
    "technical": "Technicians should verify required calibration status rather than claim calibration they did not perform."
  },
  {
    "slug": "traceability",
    "term": "Traceability",
    "definition": "Ability to reconstruct configuration, measurement, change, and evidence history.",
    "unit": "",
    "technical": "Good records connect the physical item, setup, result, and corrective action."
  },
  {
    "slug": "root-cause",
    "term": "Root cause",
    "definition": "Underlying causal mechanism that explains the observed failure.",
    "unit": "",
    "technical": "A defensible root cause is supported by evidence and repeated verification."
  },
  {
    "slug": "hypothesis",
    "term": "Hypothesis",
    "definition": "Proposed explanation that predicts observable evidence.",
    "unit": "",
    "technical": "Useful hypotheses differ in what they predict."
  },
  {
    "slug": "fault-isolation",
    "term": "Fault isolation",
    "definition": "Process of narrowing a problem to the smallest practical faulty region/cause.",
    "unit": "",
    "technical": "Use boundaries and discriminating tests."
  },
  {
    "slug": "logic-level",
    "term": "Logic level",
    "definition": "Voltage range interpreted by digital hardware as LOW or HIGH.",
    "unit": "",
    "technical": "Compare against receiving-device thresholds."
  },
  {
    "slug": "pull-up",
    "term": "Pull-up resistor",
    "definition": "Resistor that biases a signal toward a positive supply when no device actively pulls it low.",
    "unit": "",
    "technical": "Common on digital inputs and I²C buses."
  },
  {
    "slug": "pull-down",
    "term": "Pull-down resistor",
    "definition": "Resistor that biases a signal toward ground when not actively driven.",
    "unit": "",
    "technical": "Creates a defined default LOW state."
  },
  {
    "slug": "floating-input",
    "term": "Floating input",
    "definition": "High-impedance input with no defined drive or bias.",
    "unit": "",
    "technical": "Can produce unpredictable logic state."
  },
  {
    "slug": "clock",
    "term": "Clock signal",
    "definition": "Periodic digital signal used to coordinate sampling or state changes.",
    "unit": "",
    "technical": "Clock presence alone does not prove correct timing or protocol."
  },
  {
    "slug": "edge",
    "term": "Signal edge",
    "definition": "Transition from LOW to HIGH or HIGH to LOW.",
    "unit": "",
    "technical": "Digital timing is often referenced to edges."
  },
  {
    "slug": "logic-analyzer",
    "term": "Logic analyzer",
    "definition": "Instrument that samples multiple digital channels and displays state versus time.",
    "unit": "",
    "technical": "Use for channel timing and protocol decoding."
  },
  {
    "slug": "sample-rate",
    "term": "Sample rate",
    "definition": "Number of samples an instrument takes per second.",
    "unit": "samples/s",
    "technical": "Too-low sample rate can miss transitions."
  },
  {
    "slug": "uart",
    "term": "UART",
    "definition": "Asynchronous serial interface commonly using TX and RX plus shared reference.",
    "unit": "",
    "technical": "Both ends must agree on baud/frame settings."
  },
  {
    "slug": "baud-rate",
    "term": "Baud rate",
    "definition": "Symbol rate setting commonly used to describe UART bit timing.",
    "unit": "baud",
    "technical": "Mismatch causes framing/decoded-data errors."
  },
  {
    "slug": "i2c",
    "term": "I²C",
    "definition": "Two-wire addressed serial bus using SDA and SCL with pull-ups/open-drain behavior.",
    "unit": "",
    "technical": "Common faults include missing pull-ups, stuck lines, wrong address, and NACK."
  },
  {
    "slug": "sda",
    "term": "SDA",
    "definition": "Serial Data line on I²C.",
    "unit": "",
    "technical": "Carries address/data bits."
  },
  {
    "slug": "scl",
    "term": "SCL",
    "definition": "Serial Clock line on I²C.",
    "unit": "",
    "technical": "Usually generated by the controller."
  },
  {
    "slug": "ack",
    "term": "ACK/NACK",
    "definition": "Acknowledge or not-acknowledge response used in I²C transactions.",
    "unit": "",
    "technical": "A NACK is a clue, not a root cause."
  },
  {
    "slug": "spi",
    "term": "SPI",
    "definition": "Synchronous serial interface using clock, chip select, and one or more data lines.",
    "unit": "",
    "technical": "Peripheral datasheet defines transaction format and timing mode."
  },
  {
    "slug": "chip-select",
    "term": "Chip select (CS)",
    "definition": "SPI signal that selects/enables a particular peripheral transaction.",
    "unit": "",
    "technical": "Often active low."
  },
  {
    "slug": "cpol-cpha",
    "term": "CPOL/CPHA",
    "definition": "SPI clock polarity and phase settings defining idle level and sampling edge.",
    "unit": "",
    "technical": "Controller and peripheral must agree."
  },
  {
    "slug": "swd",
    "term": "SWD",
    "definition": "Serial Wire Debug interface used on many Arm microcontrollers.",
    "unit": "",
    "technical": "Can help prove target detection, programming, and execution state."
  },
  {
    "slug": "bring-up",
    "term": "Board bring-up",
    "definition": "Controlled process of powering and proving hardware dependencies on a new/unknown board.",
    "unit": "",
    "technical": "Inspect → power/current → rails → reset/clock/activity → interfaces."
  },
  {
    "slug": "baseline",
    "term": "Known-good baseline",
    "definition": "Documented configuration and evidence showing a system in a working reference state.",
    "unit": "",
    "technical": "A useful baseline is reproducible."
  }
];
