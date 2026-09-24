window.JADE_GLOSSARY = [
  {
    "slug": "voltage",
    "term": "Voltage",
    "definition": "Energy difference per unit charge between two points.",
    "unit": "V",
    "technical": "Measure between two points with a voltmeter/DMM."
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
    "definition": "Opposition to current in a circuit path.",
    "unit": "\u03a9",
    "technical": "For a resistor, V = I\u00d7R."
  },
  {
    "slug": "power",
    "term": "Electrical power",
    "definition": "Rate of electrical energy transfer.",
    "unit": "W",
    "technical": "P = V\u00d7I."
  },
  {
    "slug": "ground",
    "term": "Ground / reference",
    "definition": "A chosen reference potential used for voltage measurements and signal return.",
    "unit": "",
    "technical": "Ground is not automatically the same as earth ground."
  },
  {
    "slug": "open-circuit",
    "term": "Open circuit",
    "definition": "A broken current path that prevents steady current through that branch.",
    "unit": "",
    "technical": "Voltage can still exist across an open."
  },
  {
    "slug": "short-circuit",
    "term": "Short circuit",
    "definition": "An unintended very-low-resistance path.",
    "unit": "",
    "technical": "Low resistance can allow very high current."
  },
  {
    "slug": "dmm",
    "term": "Digital multimeter (DMM)",
    "definition": "Instrument used for measurements such as voltage, resistance, continuity, and current.",
    "unit": "",
    "technical": "Use the correct jack and function before probing."
  },
  {
    "slug": "continuity",
    "term": "Continuity",
    "definition": "A low-resistance electrical connection between two points.",
    "unit": "",
    "technical": "A continuity beep does not prove a connection is good under load."
  },
  {
    "slug": "voltage-drop",
    "term": "Voltage drop",
    "definition": "Difference in electrical potential across a component or connection.",
    "unit": "V",
    "technical": "Unexpected drop across a connection can reveal unwanted resistance."
  },
  {
    "slug": "schematic",
    "term": "Schematic",
    "definition": "Diagram that represents electrical relationships and connectivity rather than physical placement.",
    "unit": "",
    "technical": "Use it to identify power, ground, signal paths, and test points."
  },
  {
    "slug": "node",
    "term": "Node",
    "definition": "A set of electrically connected points that share the same potential in the idealized circuit.",
    "unit": "",
    "technical": "A node may appear in multiple places on a schematic."
  },
  {
    "slug": "rail",
    "term": "Power rail",
    "definition": "Named supply distribution net such as 5 V or 3.3 V.",
    "unit": "",
    "technical": "Verify rails early in troubleshooting."
  },
  {
    "slug": "test-point",
    "term": "Test point",
    "definition": "A location intended or chosen for electrical measurement.",
    "unit": "",
    "technical": "A useful test point has a clear expected value."
  },
  {
    "slug": "esd",
    "term": "Electrostatic discharge (ESD)",
    "definition": "Sudden transfer of static charge that can damage electronic components.",
    "unit": "",
    "technical": "Use ESD-safe handling for sensitive devices."
  },
  {
    "slug": "solder-joint",
    "term": "Solder joint",
    "definition": "Electrical and mechanical connection formed by solder wetting conductors and pads.",
    "unit": "",
    "technical": "Inspect for wetting, bridges, cracks, and pad damage."
  },
  {
    "slug": "bench-supply",
    "term": "Bench power supply",
    "definition": "Adjustable DC source often providing voltage and current-limit control.",
    "unit": "",
    "technical": "Set safe voltage and current limit before first power."
  },
  {
    "slug": "oscilloscope",
    "term": "Oscilloscope",
    "definition": "Instrument that displays voltage versus time.",
    "unit": "",
    "technical": "Used to see waveform shape, amplitude, timing, ripple, and noise."
  },
  {
    "slug": "trigger",
    "term": "Trigger",
    "definition": "Condition that tells an oscilloscope when to start a sweep or acquisition.",
    "unit": "",
    "technical": "A good trigger stabilizes repetitive waveforms."
  },
  {
    "slug": "frequency",
    "term": "Frequency",
    "definition": "Number of waveform cycles per second.",
    "unit": "Hz",
    "technical": "f = 1/T."
  },
  {
    "slug": "period",
    "term": "Period",
    "definition": "Time required for one complete waveform cycle.",
    "unit": "s",
    "technical": "T = 1/f."
  },
  {
    "slug": "duty-cycle",
    "term": "Duty cycle",
    "definition": "Percentage of a repetitive cycle spent in the active state.",
    "unit": "%",
    "technical": "Commonly used for PWM and clocks."
  },
  {
    "slug": "logic-level",
    "term": "Logic level",
    "definition": "Voltage range interpreted by digital hardware as a logical LOW or HIGH.",
    "unit": "",
    "technical": "Thresholds depend on the device and supply."
  },
  {
    "slug": "pull-up",
    "term": "Pull-up resistor",
    "definition": "Resistor that biases a node toward a positive supply when no device actively drives it.",
    "unit": "",
    "technical": "Common on digital inputs and I\u00b2C buses."
  },
  {
    "slug": "logic-analyzer",
    "term": "Logic analyzer",
    "definition": "Instrument that samples and displays digital states across one or more channels.",
    "unit": "",
    "technical": "Useful for protocol capture and timing."
  },
  {
    "slug": "uart",
    "term": "UART",
    "definition": "Asynchronous serial interface commonly using TX and RX lines plus a shared reference.",
    "unit": "",
    "technical": "Both ends must agree on communication settings."
  },
  {
    "slug": "i2c",
    "term": "I\u00b2C",
    "definition": "Two-wire addressed serial bus using SDA and SCL, commonly with pull-up resistors.",
    "unit": "",
    "technical": "Multiple devices can share the same bus."
  },
  {
    "slug": "spi",
    "term": "SPI",
    "definition": "Synchronous serial interface using clock, data lines, and chip-select signals.",
    "unit": "",
    "technical": "Usually uses more wires than I\u00b2C."
  },
  {
    "slug": "board-bring-up",
    "term": "Board bring-up",
    "definition": "Initial controlled process of powering, verifying, and debugging a new electronic board.",
    "unit": "",
    "technical": "Inspect, power safely, verify rails, reset, clocks, then peripherals."
  },
  {
    "slug": "fault-isolation",
    "term": "Fault isolation",
    "definition": "Process of narrowing a problem to the smallest practical faulty region or cause.",
    "unit": "",
    "technical": "Use expected values and strategic measurements."
  },
  {
    "slug": "root-cause",
    "term": "Root cause",
    "definition": "Underlying reason a failure occurred, not merely the visible symptom.",
    "unit": "",
    "technical": "Evidence should support the conclusion."
  }
];
