import { Question, WeekQuestions, PracticeMode } from "../types";

export function getAllQuestions(mode: PracticeMode): Question[] {
  const weekQuestions: WeekQuestions = {
    week1: [
      {
        "question": "IoT stands for ____________.",
        "options": [
          "Internet of Tasks",
          "Internet of Tuples",
          "Internet of Things",
          "None of these"
        ],
        "explanation": "The full form of IoT is 'Internet of Things'. See lecture 1 (Introduction to IoT – Part - I) @ 1:30",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following technologies have unified and has resulted in the evolution of IoT?",
        "options": [
          "High-power embedded systems",
          "Super Computing",
          "Engine Technology",
          "None of these"
        ],
        "explanation": "Unification of technologies which has resulted in the advancement of IoT are – Low-power embedded systems, Cloud Computing, Big Data, Machine Learning, Networking. See lecture 1 (Introduction to IoT – Part - I) @ 5:54",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following are the enables of IoT?",
        "options": [
          "RFID",
          "Nanotechnology",
          "Sensors",
          "All of these"
        ],
        "explanation": "The enables of IoT are – RFID, Nanotechnology, Sensors, Smart Networks. See lecture 2 (Introduction to IoT – Part - I) @ 12:50",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is NOT a function of an IoT LAN?",
        "options": [
          "Long range communication, global",
          "World wide connections",
          "Both (a) and (b)",
          "Neither (a) Nor (b)"
        ],
        "explanation": "The functionalities of an IoT Gateway are – Local, short-range communication, Spreads across buildings or organization. See lecture 2 (Introduction to IoT – Part - II) @ 3:09",
        "correctAnswer": 2
      },
      {
        "question": "State whether the following statement is True or False. Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT. See lecture 2 (Introduction to IoT – Part - II) @ 02:35",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. Statement: 'In Multi-homing, a node/network is connected to a single network for improved reliability.'",
        "options": [
          "True",
          "False"
        ],
        "explanation": "In multi-homing, a node/network is connected to multiple networks for improved reliability. See lecture 2 (Introduction to IoT – Part - II) @ 15:22",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is/are the approach/approaches for multi-homing?",
        "options": [
          "Proxy-based approach",
          "Gateway-based approach",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "The following are the approaches for multi-homing – Proxy-based approach, Gateway-based approach. See lecture 2 (Introduction to IoT – Part - II) @ 16:10",
        "correctAnswer": 2
      },
      {
        "question": "IPv6 uses ____________ notation for its representation.",
        "options": [
          "Hexadecimal",
          "Binary",
          "Decimal",
          "None of these"
        ],
        "explanation": "IPv6 uses Hexadecimal notation for its representation. See lecture 2 (Introduction to IoT – Part - II) @ 17:00",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
        "options": [
          "False",
          "True"
        ],
        "explanation": "The parameters sensed by a sensor may be sent to the cloud for further processing. See lecture 3 (Sensing) @ 01:15",
        "correctAnswer": 1
      },
      {
        "question": "The IPv6 notation uses ___________________ number of bits to represent an address.",
        "options": [
          "64",
          "128",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "The IPv6 notation uses 128 bits to represent an address. See lecture 2 (Introduction to IoT – Part - II) @ 16:33",
        "correctAnswer": 1
      },
      {
        "question": "A sensor is -",
        "options": [
          "Only sensitive to the measured property",
          "Insensitive to any other property that what the sensor is made to sense",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "A sensor is: Only sensitive to the measured property, Insensitive to any other property that what the sensor is made to sense. See lecture 3 (Sensing) @ 12:30",
        "correctAnswer": 2
      },
      {
        "question": "We classify sensors based on -",
        "options": [
          "Output",
          "Data type",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "We classify sensors based on - Output, Data type. See lecture 3 (Sensing) @ 13:30",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is correct statement",
        "options": [
          "Controlling AC loads using low DC signals",
          "Relays are electromechanical",
          "Relays are actuators",
          "All of these"
        ],
        "explanation": "All the statements given are correct.",
        "correctAnswer": 3
      },
      {
        "question": "Based on the output, sensors are classified as _______________________.",
        "options": [
          "Analog",
          "Digital",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "Based on the output, sensors are classified as Digital and Analog. See lecture 3 (Sensing) @ 13:05",
        "correctAnswer": 2
      },
      {
        "question": "Soft actuators are -",
        "options": [
          "Polymer-based",
          "Mechanical",
          "Electromechanical",
          "None of these"
        ],
        "explanation": "Soft actuators are polymer based.",
        "correctAnswer": 0
      },
      {
        "question": "Which of the following is a building block of edge computing?",
        "options": [
          "Data ingestion and stream processing",
          "Centralized data centers",
          "High-bandwidth CDN",
          "Traditional three-tier architecture"
        ],
        "explanation": "Edge computing requires efficient data ingestion (e.g., using Kafka) and stream processing for real-time data analysis. These are key building blocks for processing data at the edge, as opposed to sending data to the cloud for processing.",
        "correctAnswer": 0
      }
    ],
    week2: [
      {
        "question": "Based on functionality, MQTT is a _______ protocol.",
        "options": [
          "Transport",
          "Data",
          "Semantic",
          "None of these"
        ],
        "explanation": "MQTT is a Data Protocol. See lecture 6 (Basics of IoT Networking – Part II) @ 01:30",
        "correctAnswer": 1
      },
      {
        "question": "MQTT is designed for -",
        "options": [
          "Remote connections",
          "Limited bandwidth",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "MQTT is designed for – Remote connections, Limited bandwidth. See lecture 6 (Basics of IoT Networking – Part II) @ 03:50",
        "correctAnswer": 2
      },
      {
        "question": "MQTT protocol follows _____________ paradigm for exchanging messages.",
        "options": [
          "Client-Server",
          "Publish-Subscribe",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "MQTT follows the Publish-Subscribe paradigm for exchanging messages. See lecture 6 (Basics of IoT Networking – Part II) @ 02:00",
        "correctAnswer": 1
      },
      {
        "question": "State True or False. Statement: \"In MQTT, the Subscribers are Lightweight Sensors.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "In MQTT, the Publishers are lightweight sensors, not the Subscribers. See lecture 6 (Basics of IoT Networking – Part II) @ 04:49",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is MQTT component?",
        "options": [
          "Middleman",
          "Mules",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "Components of MQTT are – Publishers, Subscribers, Brokers. See lecture 6 (Basics of IoT Networking – Part II) @ 04:50",
        "correctAnswer": 3
      },
      {
        "question": "State True or False. A topic in MQTT can only be numbers.",
        "options": [
          "False",
          "True"
        ],
        "explanation": "A topic in MQTT is a string. Book - Introduction to IoT, Authors – Sudip Misra, Anandarup Mukherjee, and Arijit Roy, Publisher – Cambridge University Press, Edition – 1 (2021)",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. There are only two methods specified by the MQTT protocol.",
        "options": [
          "False",
          "True"
        ],
        "explanation": "There are 5 number of methods in MQTT protocol. See lecture 6 (Basics of IoT Networking – Part II) @ 05:49",
        "correctAnswer": 0
      },
      {
        "question": "The Publish/Subscribe architecture in MQTT is _____________ driven.",
        "options": [
          "Event",
          "Pulse",
          "Sound",
          "None of these"
        ],
        "explanation": "Publish/Subscribe in MQTT is event-driven and enables messages to be pushed to clients. See lecture 6 (Basics of IoT Networking – Part II) @ 08:32",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. The topic is the routing information for the broker.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The topic is the routing information for the broker. See lecture 6 (Basics of IoT Networking – Part II) @ 08:30",
        "correctAnswer": 0
      },
      {
        "question": "CoAP is _____________ and ____________.",
        "options": [
          "Based on HTTP",
          "Is designed for M2M applications",
          "None of these",
          "Both (a) and (b)"
        ],
        "explanation": "CoAP is based on HTTP and is designed for M2M applications. See lecture 7 (Basics of IoT Networking – Part III) @ 00:49",
        "correctAnswer": 3
      },
      {
        "question": "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
        "options": [
          "UDP",
          "TCP",
          "IP",
          "XMP"
        ],
        "explanation": "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as UDP. See lecture 7 (Basics of IoT Networking – Part III) @ 00:50",
        "correctAnswer": 0
      },
      {
        "question": "What is the full form of AMQP?",
        "options": [
          "Advanced Message Querying Protocol",
          "Advanced Message Quality Protocol",
          "Advanced Message Queuing Protocol",
          "None of these"
        ],
        "explanation": "Advanced Message Queuing Protocol. See lecture 7 (Basics of IoT Networking – Part IV) @ 0:55",
        "correctAnswer": 2
      },
      {
        "question": "AMQP has _______ number of frame types.",
        "options": [
          "6",
          "3",
          "5",
          "9"
        ],
        "explanation": "In AMQP there are nine frame types. See lecture 8 (Basics of IoT Networking – Part IV) @ 07:20",
        "correctAnswer": 3
      },
      {
        "question": "State True or False. Statement: \"The OSI model has 7 layers.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The OSI model is a conceptual framework that divides any networked communication system into seven layers. See Page number – 10, Chapter - 1, Book - Introduction to IoT, Authors – Sudip Misra, Anandarup Mukherjee, and Arijit Roy, Publisher – Cambridge University Press, Edition – 1 (2021)",
        "correctAnswer": 0
      },
      {
        "question": "The \"Destination Address\" in the IPv4 packet represents which of the following?",
        "options": [
          "The source node address of the packet",
          "The intermediate hop in the network",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "The \"Destination Address\" in the IPv4 packet represents the address of the destination node in the network.",
        "correctAnswer": 3
      }
    ],
    week3: [
      {
        "question": "State True or False. Statement: \"WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "WirelessHART is the latest release of Highway Addressable Remote Transducer protocol. See lecture 11 (Connectivity Technologies-III) @ 01:42",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. Statement: \"Wired HART has a network layer.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Wired HART does not have a network layer. See lecture 11 (Connectivity Technologies-III) @ 04:25",
        "correctAnswer": 1
      },
      {
        "question": "State true or false: \"WirelessHART physical layer is derived from 802.15.2 protocol\"",
        "options": [
          "False",
          "True"
        ],
        "explanation": "WirelessHART physical layer is derived from 802.15.4 protocol. See lecture 11 (Connectivity Technologies-III) @ 06:00",
        "correctAnswer": 0
      },
      {
        "question": "WirelessHART operates only in __________ GHz ISM band.",
        "options": [
          "3.7",
          "4.8",
          "4.8",
          "2.4"
        ],
        "explanation": "HART operates only in the 2.4 GHz ISM band. See lecture 11 (Connectivity Technologies-III) @ 06:00",
        "correctAnswer": 3
      },
      {
        "question": "HART standard was developed from _____________ smart field devices.",
        "options": [
          "amplified",
          "diminished",
          "isolated",
          "networked"
        ],
        "explanation": "HART standard was developed for networked smart field devices. See lecture 11 (Connectivity Technologies-III) @ 02:36",
        "correctAnswer": 3
      },
      {
        "question": "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
        "options": [
          "Data link",
          "Network",
          "Transport",
          "None of these"
        ],
        "explanation": "Main difference between wired and unwired versions is in the physical, data link, and network layers. See lecture 11 (Connectivity Technologies-III) @ 05:05",
        "correctAnswer": 1
      },
      {
        "question": "State true or false: \"Collision free and deterministic communication is achieved in HART's data link layer.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Collision free and deterministic communication is achieved in HART's data link layer. See lecture 11 (Connectivity Technologies-III) @ 06:37",
        "correctAnswer": 0
      },
      {
        "question": "Channel hopping is incorporated in which layer of HART?",
        "options": [
          "Data link layer",
          "Physical layer",
          "Application layer",
          "Transport layer"
        ],
        "explanation": "Channel hopping is incorporated in the data link layer of HART. See lecture 11 (Connectivity Technologies-III) @ 08:21",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. \"The HART application layer is responsible for extracting commands from a message, executing it and generating responses.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The HART application layer is responsible for extracting commands from a message, executing it and generating responses. See lecture 11 (Connectivity Technologies-III) @ 10:26",
        "correctAnswer": 0
      },
      {
        "question": "NFC is designed for use by devices within ________________ to each other.",
        "options": [
          "Anywhere on the globe",
          "A small building",
          "Both (a) and (b)",
          "None of these"
        ],
        "explanation": "NFC is designed for use by devices within close proximity to each other. See lecture 11 (Connectivity Technologies-III) @ 17:47",
        "correctAnswer": 3
      },
      {
        "question": "Passive NFC devices ___________ information which is _____________ by other devices.",
        "options": [
          "contain, read",
          "read, contain",
          "contain, contain",
          "None of these"
        ],
        "explanation": "Passive NFC devices contain information which is read by other devices. See lecture 11 (Connectivity Technologies-III) @ 18:34",
        "correctAnswer": 0
      },
      {
        "question": "State True or False. \"NFC devices work on the principle of magnetic induction.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "NFC devices work on the principle of magnetic induction. See lecture 11 (Connectivity Technologies-III) @ 21:47",
        "correctAnswer": 0
      },
      {
        "question": "Bluetooth technology is based on _________________.",
        "options": [
          "HART",
          "ZigBee",
          "All of these",
          "None of these"
        ],
        "explanation": "Bluetooth technology is based on Ad-hoc piconets. See lecture 12 (Connectivity Technologies-IV) @ 02:30",
        "correctAnswer": 3
      },
      {
        "question": "State whether the following statement is true or false. Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The Link Manager Protocol in Bluetooth manages the establishment, authentication, link configuration. See Page number – 157, Chapter - 7, Book - Introduction to IoT, Authors – Sudip Misra, Anandarup Mukherjee, and Arijit Roy, Publisher – Cambridge University Press, Edition – 1 (2021)",
        "correctAnswer": 1
      },
      {
        "question": "Zigbee commonly uses __________data rate.",
        "options": [
          "260 bps",
          "260 kbps",
          "260 Mbps",
          "None of these"
        ],
        "explanation": "Zigbee commonly uses a 250-kbps data rate.",
        "correctAnswer": 3
      }
    ],

    week4: [
  {
    "question": "State whether the following statement is true or false. Statement: In \"AID\", a set of sensor nodes are deployed over an agricultural field.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "In \"AID\", a set of sensor nodes are deployed over a agricultural field. See lecture 16 (Sensor Networks-III) @ 13:16",
    "correctAnswer": 0
  },
  {
    "question": "State True or False. Statement: Ultrasonic sensor senses the distance at which an object is located.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Ultrasonic sensor senses the distance at which an object is located. See lecture 16 (Sensor Networks-III) @ 13:18",
    "correctAnswer": 0
  },
  {
    "question": "State true or false. In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem. See lecture 17 (Sensor Networks-IV) @ 07:11",
    "correctAnswer": 0
  },
  {
    "question": "State whether the following statement is true or false. Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "The objective of coverage in WSN is to use minimum number of sensors and maximize the network lifetime. See lecture 17 (Sensor Networks-IV) @ 08:47",
    "correctAnswer": 1
  },
  {
    "question": "State whether the following statement is true or false. Statement: \"A crossing is covered if it is in the interior of at least one node's coverage disk.\"",
    "options": [
      "True",
      "False"
    ],
    "explanation": "A crossing is covered if it is in the interior of at least one node's coverage disk. See lecture 17 (Sensor Networks-IV) @ 18:58",
    "correctAnswer": 0
  },
  {
    "question": "State which of the following is/are correct for stationary wireless sensor networks.",
    "options": [
      "Topology cannot be changed automatically.",
      "Node failure may result in partition of networks.",
      "Both (a) and (b)",
      "None of these"
    ],
    "explanation": "Topology cannot be changed automatically. And Node failure may result in partition of networks. Are correct. See lecture 18 (Sensor Networks-V) @ 00:43",
    "correctAnswer": 2
  },
  {
    "question": "Most problems in static WSN can be classified as -",
    "options": [
      "No coverage",
      "More coverage",
      "Both (a) and (b)",
      "None of these"
    ],
    "explanation": "Most problems in static WSN can be classified as - Area coverage, Point coverage, Barrier coverage. See lecture 18 (Sensor Networks-V) @ 11:30",
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is/are correct with respect UAV networks?",
    "options": [
      "Multi-tasking",
      "Large coverage area",
      "Both (a) and (b)",
      "None of these"
    ],
    "explanation": "Multi-tasking and Large coverage area are correct. See lecture 19 (Sensor Networks-V) @ 05:19",
    "correctAnswer": 2
  },
  {
    "question": "State True or False. Statement: UAV networks are scalable.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "UAV networks are scalable. See lecture 19 (UAV Networks-V) @ 09:00",
    "correctAnswer": 0
  },
  {
    "question": "In Mobile WSN, the Data Mules",
    "options": [
      "Collect the data from sensor nodes",
      "Goes to the sink and delivers the collected data",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "explanation": "In Mobile WSN, the Data Mules: Collect the data from sensor nodes, Goes to the sink and delivers the collected data. See lecture 18 (Sensor Networks-V) @ 07:15",
    "correctAnswer": 2
  },
  {
    "question": "The full form of AUV is -",
    "options": [
      "Antenna Used Vehicle",
      "Autonomous Underwater Vehicle",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "explanation": "Autonomous Underwater Vehicle (AUV). See lecture 18 (Sensor Networks-V) @ 08:35",
    "correctAnswer": 1
  },
  {
    "question": "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
    "options": [
      "Machine Centric Sensing",
      "Device Centric Sensing",
      "Human Centric Sensing",
      "None of these"
    ],
    "explanation": "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as Human Centric Sensing. See lecture 18 (Sensor Networks-V) @ 11:37",
    "correctAnswer": 2
  },
  {
    "question": "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Energy of Devices and Participant selection are not two major problems in Human Centric Sensing. See lecture 18 (Sensor Networks-V) @ 12:45",
    "correctAnswer": 1
  },
  {
    "question": "Which of the following network topologies is used in UAV networks?",
    "options": [
      "Bus",
      "Star",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "explanation": "UAV networks use the mesh and star network topologies. See lecture 19 (UAV Networks) @ 02:43",
    "correctAnswer": 1
  },
  {
    "question": "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
    "options": [
      "True",
      "False"
    ],
    "explanation": "The M2M Application Platform provides integrated services based on device collected data-sets.",
    "correctAnswer": 0
  }
],
    week5: [
      {
        "question": "Which of the following is/are current challenges in IoT?",
        "options": [
          "Large scale of co-operation",
          "Global heterogeneity",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "Large scale of co-operation and Global heterogeneity are current challenges in IoT. See lecture 21 (Interoperability in Internet of Things) @ 03:41.",
        "correctAnswer": 2
      },
      {
        "question": "State True or False. Statement: \"Interoperability is not a characteristic of a product or system.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Interoperability is a characteristic of a product or system. Refer Lecture 21@5:51",
        "correctAnswer": 1
      },
      {
        "question": "Interoperability is required because",
        "options": [
          "There are different programming languages",
          "There are different communication protocols",
          "Both (a) and (b)",
          "Neither (a) nor (b)"
        ],
        "explanation": "Interoperability is required because there are different programming languages and there are different communication protocols. Refer Lecture 21@08:30",
        "correctAnswer": 2
      },
      {
        "question": "State whether the following statement is true or false. Statement: \"Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.\"",
        "options": [
          "False",
          "True"
        ],
        "explanation": "Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability. (Please refer Lecture 21@09:12)",
        "correctAnswer": 1
      },
      {
        "question": "State True or False. Statement: \"The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.\"",
        "options": [
          "True",
          "False"
        ],
        "explanation": "The interoperability between devices and device users in terms of message formats is called Syntactic Interoperability. Refer Lecture 21@17:06.",
        "correctAnswer": 1
      },
      {
        "question": "What is the full form of UMB in IoT interoperability?",
        "options": [
          "Universal Meta Bridge",
          "Universal Main Bridge",
          "Universal Main Bracket",
          "None of these"
        ],
        "explanation": "UMB stands for Universal Middleware Bridge. Refer Lecture 21@22:16.",
        "correctAnswer": 3
      },
      {
        "question": "State true of false. Arduino is an open-source electronic programmable board.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "Arduino is an open-source electronic programmable board. Refer Lecture 22@05:17",
        "correctAnswer": 0
      },
      {
        "question": "State true or false. Additional electronic circuits are essential to load a program into the Arduino controller board.",
        "options": [
          "True",
          "False"
        ],
        "explanation": "No additional electronic circuits are essential to load a program into the Arduino controller board. Refer Lecture 22@05:17.",
        "correctAnswer": 1
      },
      {
        "question": "Arduino UNO has _________ number of Digital I/O pins.",
        "options": [
          "8",
          "13",
          "14",
          "None of these"
        ],
        "explanation": "Arduino UNO has 14 number of Digital I/O pins. Refer Lecture 22@07:08.",
        "correctAnswer": 2
      },
      {
        "question": "What does the following code do?\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}",
        "options": [
          "Blink 3 times with 1000ms ON and 500ms OFF",
          "Blink 3 times with 500ms ON and 500ms OFF",
          "Blink 3 times with 1000ms ON and 1000ms OFF",
          "Stay ON continuously"
        ],
        "explanation": "The LED is turned ON for 1000ms using delay(1000). The LED is turned OFF for 500ms using delay(500). This process repeats 3 times in the for loop. Thus, the LED blinks 3 times with 1000ms ON and 500ms OFF.",
        "correctAnswer": 0
      },
      {
        "question": "How many types of loops will you find in Arduino Programming?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "explanation": "Like C programming Arduino sketches also have 3 types of loops, for, while and do-while loops.",
        "correctAnswer": 2
      },
      {
        "question": "Choose the right option for if/conditional operator.",
        "options": [
          "Val = (condition)?(Statement 1):(Statement 2)",
          "Val = (condition)?(Statement 2):(Statement 1)",
          "Val = (condition):(Statement 1)?(Statement 2)",
          "Val = (condition):(Statement 2)?(Statement 1)"
        ],
        "explanation": "Conditional operator may also be written as Val = (condition)?(Statement 1):(Statement 2). (Please refer Lecture 23@2:01)",
        "correctAnswer": 0
      },
      {
        "question": "What is the purpose of calling dht.begin(); in the setup() function?",
        "options": [
          "To initialize the Serial Monitor",
          "To start communication with the DHT sensor",
          "To set the temperature and humidity values to zero",
          "To define the data pin for the sensor"
        ],
        "explanation": "Calling dht.begin(); in the setup() function starts communication with the DHT sensor. Refer Lecture 24@ 17:25.",
        "correctAnswer": 1
      },
      {
        "question": "What function is used to read the humidity value from the DHT sensor?",
        "options": [
          "dht.getHumidity();",
          "dht.readTemp();",
          "dht.readHumidity();",
          "dht.getTemperature();"
        ],
        "explanation": "dht.readHumidity(); function is used to read the humidity value from the DHT sensor. Lecture 24@17:25.",
        "correctAnswer": 2
      },
      {
        "question": "What function is used to set the servo motor to a specific angle?",
        "options": [
          "ServoDemo.move()",
          "ServoDemo.rotate()",
          "ServoDemo.write()",
          "ServoDemo.setAngle()"
        ],
        "explanation": "ServoDemo.write() function is used to set the servo motor to a specific angle.",
        "correctAnswer": 2
      }
    ],
    week6: [
      {
        question: "State True or False: Python is popular for embedded application development as it is a very lightweight programming language.",
        options: [
          "True",
          "False"
        ],
        explanation: "Python is popular for embedded application development as it is a very lightweight programming language. (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- I @ 1:22)",
        correctAnswer: 0,
      },
      {
        question: "State True or False: Adafruit provides a library to work with DHT22 Sensor.",
        options: [
          "True",
          "False"
        ],
        explanation: "Adafruit provides a library to work with DHT22 Sensor. (Please refer to lecture Implementation of IoT with Raspberry Pi- II @ 4:41)",
        correctAnswer: 0,
      },
      {
        question: "Consider the following piece of Python code. What is the output?\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])",
        options: [
          "5",
          "12",
          "Code",
          "&Code"
        ],
        explanation: "1. x = [4, 5, 6]: A list with three elements.\n2. y = [str(x[0] + 1), str(len(x) * 2) + '&Code']:\n   - x[0] is 4, so x[0] + 1 is 5, and str(x[0] + 1) becomes \"5\".\n   - len(x) is 3, so len(x) * 2 is 6, and str(len(x) * 2) + '&Code' becomes \"6&Code\".\n   - Therefore, y = [\"5\", \"6&Code\"].\n3. z = y[1].split('&'):\n   - y[1] is \"6&Code\".\n   - Splitting \"6&Code\" by '&' gives ['6', 'Code'].\n4. z[1] is 'Code'.\nThus, the print(z[1]) statement outputs Code.",
        correctAnswer: 2,
      },
      {
        question: "State True or False: To indicate different blocks of code, Python follows rigid indentation.",
        options: [
          "True",
          "False"
        ],
        explanation: "To indicate different blocks of code, Python follows rigid indentation. (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- I @ 7:29)",
        correctAnswer: 0,
      },
      {
        question: "What is the output of the following line of code in Python?\n>>> print \"Hi, Welcome to python!\"",
        options: [
          "Hi, Welcome to python!",
          "\"Hi, Welcome to python!\"",
          "Hi, Welcome to python",
          "None of these"
        ],
        explanation: "The output of the following line of code in Python - \n>>> print \"Hi, Welcome to python!\"\nOutput: Hi, Welcome to python! (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- II @ 07:31)",
        correctAnswer: 0,
      },
      {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: [
          "Only IP address of server",
          "Only port number",
          "Both server IP address and port number",
          "Client's IP address"
        ],
        explanation: "A client can communicate with a server only if both IP address and port numbers are known. (Please refer Lecture 31@14:13)",
        correctAnswer: 2,
      },
      {
        question: "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
        options: [
          "Correct",
          "Incorrect"
        ],
        explanation: "The command to install the PIL library is sudo pip install pillow. (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- II @ 17:40)",
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the \"w\" mode in the open() function in Python?",
        options: [
          "To read a file",
          "To write data to a file, overwriting existing content",
          "To append data to a file",
          "To open a file in read and write mode"
        ],
        explanation: "\"w\" mode is used to write data to a file, overwriting existing content. (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- II @05:05)",
        correctAnswer: 1,
      },
      {
        question: "What will be the output of the given Python program when reading from the file?\nwith open(\"PythonProgram.txt\", \"w\") as file:\nfile.write(\"Writing data\")\nwith open(\"PythonProgram.txt\", \"r\") as file:\nf = file.read()\nprint('Reading from the file\\n')\nprint(f)",
        options: [
          "Writing data",
          "Reading from the file\nWriting data",
          "Error: File not found",
          "None of the above"
        ],
        explanation: "Reading from the file\nWriting data (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING-II @05:05)",
        correctAnswer: 1,
      },
      {
        question: "Can we configure Raspberry Pi as a File Server?",
        options: [
          "Yes",
          "No"
        ],
        explanation: "We can configure Raspberry Pi as a File Server. (See lecture INTRODUCTION TO RASPBERRY PI-I @ 02:46)",
        correctAnswer: 0,
      },
      {
        question: "Which command is used to configure the Raspberry Pi for the camera module?",
        options: [
          "sudo camera-config",
          "sudo raspi-config",
          "sudo enable-camera",
          "sudo pi-setup"
        ],
        explanation: "sudo raspi-config is used to configure the Raspberry Pi for the camera module. (See lecture INTRODUCTION TO RASPBERRY PI-II @ 18:44)",
        correctAnswer: 1,
      },
      {
        question: "What is the final step after enabling the camera in the Raspberry Pi configuration?",
        options: [
          "Restart the camera service",
          "Run a camera test command",
          "Reboot the Raspberry Pi",
          "Reinstall the Raspberry Pi OS"
        ],
        explanation: "After enabling the camera in the Raspberry Pi configuration, reboot. (See lecture IMPLEMENTATION OF IOT WITH RASPBERRY PI-II @ 18:44)",
        correctAnswer: 2,
      },
      {
        question: "Which command Exits the nano editor?",
        options: [
          "Ctrl + X",
          "Ctrl + O",
          "Ctrl + K",
          "None of these"
        ],
        explanation: "Ctrl + X exits the nano editor. (See lecture IMPLEMENTATION OF IOT WITH RASPBERRY PI-II @ 10:20)",
        correctAnswer: 0,
      },
      {
        question: "In a temperature-controlled fan system using a relay, when should the fan turn on?",
        options: [
          "When the relay is manually triggered",
          "When the surrounding temperature is lower than a predefined threshold",
          "When the surrounding temperature exceeds a predefined threshold",
          "When the battery voltage drops below a certain level"
        ],
        explanation: "In a temperature-controlled fan system using a relay, the fan should turn on when the surrounding temperature exceeds a predefined threshold. (Please refer to lecture INTRODUCTION TO PYTHON PROGRAMMING- II @ 11:18)",
        correctAnswer: 2,
      },
      {
        question: "What does the following line of code do?\nraspistillcapture -o image.jpg",
        options: [
          "Captures video feed",
          "Captures still image",
          "Both (a) and (b)",
          "None of these"
        ],
        explanation: "Command is wrong.",
        correctAnswer: 3,
      },
     
    ],
    week7: [
      {
        question: "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
        options: [
          "SocketFamily",
          "SocketType",
          "SocketName",
          "SocketProtocol"
        ],
        explanation: "SOCK_STREAM refers to a type of SocketType, i.e either TCP socket or UDP socket. (Refer Lecture 31@6:27)",
        correctAnswer: 1,
      },
      {
        question: "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt",
        options: [
          "plt.show()",
          "plt.plot()",
          "plt.ylabel()",
          "plt.yaxis()"
        ],
        explanation: "plt.ylabel() is used to change the label of the Y-axis. (Refer Lecture 32@12:39)",
        correctAnswer: 2,
      },
      {
        question: "In Socket programming, the parameter AF_INET stands for ___________.",
        options: [
          "Unix protocols",
          "Internet Protocol (IP)",
          "File sharing",
          "Time slicing"
        ],
        explanation: "The AF_INET specifies the rules and standards of the Internet protocol, hence the socket acts as an IP socket. (Please refer Lecture 31@14:13)",
        correctAnswer: 1,
      },
      {
        question: "Suppose a Python server is receiving data from a socket as follows,\ndata, addr = sock.recvfrom(1024)\nWhat kind of socket 'sock' is being considered here.",
        options: [
          "TCP socket",
          "UDP socket",
          "TAP socket",
          "None of the given"
        ],
        explanation: "sock.recvfrom() is the form used to receive data from UDP sockets. Refer to any standard socket programming documentations.",
        correctAnswer: 1,
      },
      {
        question: "What is the use of the Mobi-Flow protocol?",
        options: [
          "Enabling static SDN",
          "Enabling SDN to incorporate mobility",
          "Enabling Odin Master",
          "Enabling traditional BGP"
        ],
        explanation: "Mobi-Flow protocol is used for enabling SDN to incorporate mobility. (Refer Lecture 34@14:41)",
        correctAnswer: 1,
      },
      {
        question: "During remote server access using socket programming what is the utility of the <socket_name>.listen() function?",
        options: [
          "To create a new socket",
          "To bind the socket to connection",
          "To wait for clients to connect",
          "To close the connection"
        ],
        explanation: "listen() function makes the server wait for incoming client connections (Refer Lecture 31 ppt no 13)",
        correctAnswer: 2,
      },
      {
        question: "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
        options: [
          "From controller to switch",
          "From switch to controller",
          "Between two switches",
          "Between two controllers"
        ],
        explanation: "PACKET_OUT messages are sent from switches to the controller upon receipt of new unknown packets. Refer lecture 33, ppt no 20.",
        correctAnswer: 0,
      },
      {
        question: "Which among the following is a limitation of the traditional non-SDN networks?",
        options: [
          "Switches do not possess routing table",
          "Switches are unable to forward traffic",
          "Switches do not have a global view of the network.",
          "All of the given"
        ],
        explanation: "Switches do not have a global view of the network is a limitation of traditional non-SDN networks. (Refer Lecture 33@6:53)",
        correctAnswer: 2,
      },
      {
        question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: [
          "Only IP address of server",
          "Only port number",
          "Both server IP address and port number",
          "Client's IP address"
        ],
        explanation: "A client can communicate with a server only if both IP address and port numbers are known. (Please refer Lecture 31@14:13)",
        correctAnswer: 2,
      },
      {
        question: "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
        options: [
          "Soft time-out > = hard time-out",
          "Hard time-out >= soft time-out",
          "Soft time-out = hard time-out always",
          "None of the given"
        ],
        explanation: "Hard time-outs of flow rules are always greater than soft time-outs, not the other way round. Refer lecture 33, OpenFlow Protocol III",
        correctAnswer: 1,
      },
      {
        question: "Which of the following is true?",
        options: [
          "Traditional Network: Routing Table, Software Defined Network: Routing Table",
          "Traditional Network: Flow Table, Software Defined Network: Routing Table",
          "Traditional Network: Routing Table, Software Defined Network: Flow Table",
          "Traditional Network: Flow Table, Software Defined Network: Flow Table"
        ],
        explanation: "All switches in traditional network have routing tables and those in Software Defined Network have flow tables (Please refer Lecture 33@17:15)",
        correctAnswer: 2,
      },
      {
        question: "Consider the following figure below. To which issue of SDN does this particular figure can be related to?",
        options: [
          "Controller placement issue",
          "Flow Rule placement issue",
          "Hardware placement issue",
          "Analysis placement issue"
        ],
        explanation: "The given figures shows the tabular structure of how flow rules are installed within SDN switches, so it pertains to flow rule placement issues. Refer Lecture 33@18:54, Rule Placement.",
        correctAnswer: 1,
      },
      {
        question: "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
        options: [
          "To communicate between the controller and switches",
          "To communicate among multiple controllers",
          "East-Westbound APIs do not exist",
          "To communicate between switches themselves."
        ],
        explanation: "East-Westbound APIs are used to communicate among multiple controllers. (Refer Lecture 34@2:10)",
        correctAnswer: 1,
      },
      {
        question: "Hierarchical SDN architecture is also known as __________ architecture.",
        options: [
          "Tree",
          "Flat",
          "Mesh",
          "Line"
        ],
        explanation: "Hierarchical SDN architecture is also known as Tree architecture. (Refer Lecture 34@6:12)",
        correctAnswer: 0,
      },
      {
        question: "Integrating SDN with IoT is not recommended and is not a suitable approach to follow",
        options: [
          "False",
          "True"
        ],
        explanation: "SDN integration with IoT is highly recommended for efficient delivery of services. Refer Lecture 35.",
        correctAnswer: 0,
      }
    ],
    week8: [
      {
        question: "What is Sensor Openflow?",
        options: ["A traditional routing protocol", "A queue management protocol", "An SDN protocol tailored for IoT devices", "A physical connectivity protocol"],
        explanation: "Sensor Openflow is an SDN protocol specifically designed for IoT devices. (Lecture 36@1:38)",
        correctAnswer: 2
      },
      {
        question: "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
        options: ["Mobi-Flow > Conventional", "Mobi-Flow < Conventional", "Mobi-Flow = Conventional", "None of the given"],
        explanation: "Mobi-Flow has less message overhead compared to conventional networking. (Lecture 36@16:08)",
        correctAnswer: 1
      },
      {
        question: "Virtual Machines came before Cloud Computing.",
        options: ["True", "False"],
        explanation: "Virtual Machines predated Cloud Computing. (Lecture 37@8:00)",
        correctAnswer: 0
      },
      {
        question: "Private cloud services cannot provide Software-as-a-Service (SaaS).",
        options: ["True", "False"],
        explanation: "Any cloud deployment model can provide any cloud service model, including SaaS. (Lecture 37@14:36)",
        correctAnswer: 1
      },
      {
        question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
        options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
        explanation: "Mobi-Flow has been proposed to provide a solution for mobility-aware flow rule placement. (Lecture 36@13:09)",
        correctAnswer: 2
      },
      {
        question: "An organization A wants to deploy a cloud infrastructure, whereby it wants to push majority of the data to a cloud whose servers can be situated anywhere within the globe, but it wants certain private data to be pushed only to cloud servers that are present on-premise and are accessible by only authenticated members of the organization. In this context which among the following deployment model should be used?",
        options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
        explanation: "Hybrid cloud deployment model supports both the features of public and private cloud. (Lecture 37, ppt No. 18)",
        correctAnswer: 2
      },
      {
        question: "Which among the following is the most on-premise cloud deployment model?",
        options: ["Private Cloud", "Public cloud", "IaaS", "PaaS"],
        explanation: "Private Cloud is the most on-premise deployment model. (Lecture 37@33:31)",
        correctAnswer: 0
      },
      {
        question: "Which of the following type of client requires constant communication/connection with the cloud server?",
        options: ["Thin client", "Thick client", "Both thin and thick clients", "None of these"],
        explanation: "A thin client is a network computer without a hard disk drive and high configurations. They act as simple terminals and require constant communication with the servers. (Lecture 37@20:00)",
        correctAnswer: 0
      },
      {
        question: "What does 'CIA' in cloud data security stand for?",
        options: ["Confidentiality, Integrity, Availability", "Confidentiality, Inheritance, Automation", "Congestion, Integrity, Authentication", "Criticality, Integrity, Accountability"],
        explanation: "'CIA' stands for 'Confidentiality, Integrity and Availability'. (Lecture 39@21:01)",
        correctAnswer: 0
      },
      {
        question: "When you are accessing Spotify online for listening to music from your browser without specifically installing them, which among the following cloud service models is the most appropriate one that you are using.",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        explanation: "This is an example of SaaS, since you are accessing a word/document processing software as a client over the network. The actual software itself runs on some remote cloud server. (Lecture 37@26:14 AND 38@13:16)",
        correctAnswer: 0
      },
      {
        question: "With respect to Cloud Computing security, which of the following are necessary",
        options: ["Network Level Security but not Host Level Security", "Application Level Security but not Host Level Security", "Host Level Security but not Network Level Security", "All of Network, Host and Application Level Security"],
        explanation: "All levels of security are necessary for cloud computing. (Lecture 39)",
        correctAnswer: 3
      },
      {
        question: "Data security and client authentication is an issue in which of the following cloud service models?",
        options: ["SaaS", "SaaS and PaaS", "IaaS", "All of them"],
        explanation: "Security is a pertinent issue in all of the cloud service models, which includes SaaS, PaaS and IaaS. (Lecture 39)",
        correctAnswer: 3
      },
      {
        question: "What is the role of a Hypervisor (most probable answer)?",
        options: ["To facilitate installation of a router", "To provide a platform for executing virtual machines", "To facilitate sensor fabrication", "To communicate between switches themselves"],
        explanation: "A hypervisor provides a platform for executing virtual machines. (Lecture 38@5:40)",
        correctAnswer: 1
      },
      {
        question: "Which of the following is a limitation of SaaS?",
        options: ["Remote software execution", "Platform independence", "Centralized control", "None of these"],
        explanation: "Centralized control is considered a limitation of SaaS. (Lecture 38@15:58)",
        correctAnswer: 2
      },
      {
        question: "Fill in the blank. ____________ means independent of device or location.",
        options: ["Scalable", "Reliability", "Agile", "Ubiquitous"],
        explanation: "Ubiquitous means independent of device or location. (Lecture 37@18:06)",
        correctAnswer: 3
      }
    ],
    week9:[
      {
        question: "Which of the following is/are the advantages of cloud computing?",
        options: ["Elasticity", "Pay-per-use", "Self Service", "All of the above"],
        explanation: "The advantages of cloud computing include Elasticity, Pay-per-use and Self-Service. (Lecture 42@6:45)",
        correctAnswer: 3
      },
      {
        question: "Fill in the blanks. Fog computing is an intermediate layer between __________ and _________.",
        options: ["Dew and devices", "Cloud and devices", "Cloud and server", "None of these"],
        explanation: "Fog computing is an intermediate layer between Cloud and devices. (Lecture 44@6:40)",
        correctAnswer: 1
      },
      {
        question: "The managerial role is played by __________ in sensor-cloud architecture.",
        options: ["End-users", "Sensor-Cloud Service Provider", "Neither a nor b", "Both a and b"],
        explanation: "Sensor-Cloud Service Provider plays the managerial role in sensor-cloud architecture. (Lecture 42@14:29)",
        correctAnswer: 1
      },
      {
        question: "Which of the following is not a component of OpenStack?",
        options: ["Suse", "Nova", "Swift", "All of these"],
        explanation: "Nova and Swift are two of the many components of OpenStack. Suse is not a component. (Lecture 41@3:18)",
        correctAnswer: 0
      },
      {
        question: "Who coined the term Fog computing?",
        options: ["IBM", "CISCO", "All of these", "None of these"],
        explanation: "CISCO coined the term Fog computing. (Lecture 44@4:18)",
        correctAnswer: 1
      },
      {
        question: "Fill in the blank. The concept of ________ enables physical hardware to be shared among multiple entities.",
        options: ["Hardware virtualization", "Software virtualization", "Module virtualization", "All of these"],
        explanation: "The concept of hardware virtualization enables physical hardware to be shared among multiple entities. (Page 262, Chapter 11, Introduction to IoT. S. Misra, A. Mukherjee, and A. Roy, 2020. Cambridge University Press.)",
        correctAnswer: 0
      },
      {
        question: "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications.",
        options: ["True", "False"],
        explanation: "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications. It can be downloaded and installed for free. (Lecture 41)",
        correctAnswer: 0
      },
      {
        question: "In IoT, temporal sensitivity of data DOES NOT play an important role",
        options: ["True", "False"],
        explanation: "IoT data can be classified into time sensitive data, less time sensitive data and data not sensitive to time. Hence time sensitivity plays a big role in IOT data classification. (Lecture 44 on Fog Computing)",
        correctAnswer: 1
      },
      {
        question: "Which among the following is NOT a component of OpenStack.",
        options: ["Horizon", "Heat", "Stellar", "Neutron"],
        explanation: "Stellar is not a component of OpenStack. The rest are various components, including Nova, Glance, Swift etc. (Lecture 41, ppt No. 4)",
        correctAnswer: 2
      },
      {
        question: "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
        options: ["Sensor monitoring", "Sensor instantiation", "Sensor virtualization", "Sensor collection"],
        explanation: "Sensor virtualization is the principal feature of sensor clouds and their utility. (Lecture 42 and 43 on Sensor cloud)",
        correctAnswer: 2
      },
      {
        question: "The optimal composition of __________ is a management issue in sensor-cloud.",
        options: ["Logistics", "Pricing", "Caching", "Virtual sensor nodes"],
        explanation: "The optimal composition of Virtual sensor nodes is a management issue in sensor-cloud. (Lecture 43@4:39)",
        correctAnswer: 3
      },
      {
        question: "How many different types of caching mechanism are there in sensor cloud?",
        options: ["1", "4", "2", "3"],
        explanation: "Internal Cache (IC) and External Cache (EC) are two different types of caching mechanisms used in sensor cloud. (Lecture 43, ppt No. 13)",
        correctAnswer: 2
      },
      {
        question: "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then a response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data transfer between the node and cloud is 10s and the data processing time at the cloud is 'x' seconds. It takes a total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing at the cloud. What is the value of x?",
        options: ["10s", "5s", "15s", "20s"],
        explanation: "Time taken for one-way data transfer between the node and cloud is 10s. Total time taken for the data transfer is 25s. So 25=10+x+10 (transfer from node to cloud+processing at cloud+transfer from cloud to node). Thus x=5s.",
        correctAnswer: 1
      },
      {
        question: "Which among the following is true?",
        options: ["Fog computing acts as a complement to cloud computing.", "Fog computing is a replacement for cloud computing.", "Fog computing and cloud computing are the same.", "Fog computing is more powerful than cloud computing (with respect to resources)."],
        explanation: "Fog computing and cloud computing are complementary technologies. Fog helps in bringing the cloud closer to the IoT devices. (Lecture 45@1:06)",
        correctAnswer: 0
      },
      {
        question: "Which component of OpenStack do you use to access all the other components?",
        options: ["Horizon", "Glance", "Neutron", "None of these"],
        explanation: "Horizon is the dashboard of OpenStack which provides the GUI and from where you can access all other components.",
        correctAnswer: 0
      }
    ],
    week10: [
      {
        question: "Which among the following are active connected entities in a holistic smart city environment?",
        options: ["Police station", "Banks", "Transport centers", "All of the above"],
        explanation: "Police stations, banks, and transport centers are all active connected entities in a holistic smart city environment. (Lecture 46@4:45)",
        correctAnswer: 3
      },
      {
        question: "With the help of ICT tools, it is possible to increase and improve citizen participation for a good governance based smart city",
        options: ["True", "False"],
        explanation: "ICT tools can increase and improve citizen participation for good governance in smart cities. (Lecture 46@11:20)",
        correctAnswer: 0
      },
      {
        question: "Which among the following is a possible challenge with respect to smart parking lots?",
        options: ["Efficient auto-routing of vehicles", "Locating current vacant spots", "Auto-charging of vehicles", "All of the given"],
        explanation: "All of these options represent potential challenges in smart parking lots. (Lecture 46@24:37)",
        correctAnswer: 3
      },
      {
        question: "What refers to combining information from multiple sensor sources?",
        options: ["Information Collection", "Multi-sensor deployment", "Multi-sensor dissemination", "Multi-sensor data fusion"],
        explanation: "Multi-sensor data fusion combines information from multiple sensor sources. (Lecture 47@6:52)",
        correctAnswer: 3
      },
      {
        question: "Which of the following is one of the theory of evidence-based mathematical methods of data fusion?",
        options: ["Belief function", "Bayesian analysis", "ANN", "None of these"],
        explanation: "Belief function is one of the theory of evidence-based mathematical methods of data fusion. (Lecture 47@11:49)",
        correctAnswer: 0
      },
      {
        question: "With respect to data fusion from multiple IoT sensors, does outlier data present with a challenge?",
        options: ["No", "Yes"],
        explanation: "Outlier data does present a challenge in data fusion from multiple IoT sensors. (Lecture 47@8:13)",
        correctAnswer: 1
      },
      {
        question: "Which of the following is a phase of ICV development?",
        options: ["Based on 2G", "Based on 4G LTE", "Vehicles connected to cloud", "All of these"],
        explanation: "The phases of ICV development include: Phase 1: Based on 2G, Phase 2: Based on 4G LTE, Phase 3: Vehicles connected to cloud. (Lecture 50@12:28)",
        correctAnswer: 3
      },
      {
        question: "With which of the following can the decision-making gap between the sensors and the actuators be bridged.",
        options: ["SDN", "OpenStack Horizon", "Artificial Intelligence (AI)", "Arduino IDE"],
        explanation: "Artificial Intelligence (AI) can bridge the decision-making gap between sensors and actuators. (Lecture 47@12:14)",
        correctAnswer: 2
      },
      {
        question: "Which of the following statements are true about the HAN standards? Statement I: Physical and MAC layers are defined by IEEE802.15.4. Statement II: Network layer is defined by Zigbee. Statement III: Application layer is defined by IEEE802.15.4",
        options: ["Statements I and II", "Statements I and III", "Statements II and III", "Statements I, II and III"],
        explanation: "Physical and MAC layers are defined by IEEE802.15.4. Network layer and Application layers are defined by Zigbee. (Lecture 48@16:11)",
        correctAnswer: 0
      },
      {
        question: "What is UPnP?",
        options: ["Uninterrupted Post-messaging", "Universal Pull Streaming", "Universal Plug and Play", "Unhindered Public Networking"],
        explanation: "UPnP stands for Universal Plug and Play. (Lecture 48@12:53)",
        correctAnswer: 2
      },
      {
        question: "What are the disadvantages of V2X communication?",
        options: ["Increased traffic safety", "Tracking of movement", "Efficient use of fuel", "None of these"],
        explanation: "Disadvantages of V2X communication includes tracking of movement, violation of privacy, loss of data control, etc. (Lecture 50@21:04)",
        correctAnswer: 1
      },
      {
        question: "Mobility of vehicles in a V2X environment limit which of the following that restricts the use of TCP/IP for V2X communication?",
        options: ["Communication between vehicular infrastructure", "Localization of data", "Backbone routing in IP core networks", "Human-vehicle interaction"],
        explanation: "TCP/IP works best with localized data, which is not present in V2X environments. This restricts the use of TCP/IP for V2X communication. (Lecture 49@12:33)",
        correctAnswer: 1
      },
      {
        question: "In VANET, link durations are long and easily scaled-up to include all the vehicles on the road?",
        options: ["True", "False"],
        explanation: "Link durations are short due to the highly dynamic nature of VANETs. (Lecture 49@18:00)",
        correctAnswer: 1
      },
      {
        question: "CCN is derived from ICN architecture.",
        options: ["True", "False"],
        explanation: "CCN (Content Centric Networking) is derived from Information Centric Networking (ICN). (Lecture 49@15:32)",
        correctAnswer: 0
      },
      {
        question: "In an ICV environment, efficient cooperation between different vehicles on a highway can lead to a safer scenario with respect to collision and avoiding incoming traffic.",
        options: ["True", "False"],
        explanation: "Efficient cooperation between vehicles in an ICV environment can lead to safer scenarios regarding collision avoidance and incoming traffic. (Lecture 50@2:00)",
        correctAnswer: 0
      }
    ],
    week11:[
      {
        question: "Which among the following is the most probable application scenario for a smart grid?",
        options: ["Home automation", "Hospital networks", "Intelligent power plants", "Crop monitoring"],
        explanation: "Intelligent power plants are the most probable application scenario for a smart grid. (Lecture 51@4:20)",
        correctAnswer: 2
      },
      {
        question: "With respect to a smart grid, which stakeholders are potentially benefitted?",
        options: ["Energy Service providers", "Energy consumers/customers", "Both energy service provides and consumers", "Neither energy service providers nor consumers"],
        explanation: "Both energy service providers and consumers benefit from smart grid technology. (Lecture 51@13:20)",
        correctAnswer: 2
      },
      {
        question: "It is not possible to perform load forecasting using a smart grid.",
        options: ["True", "False"],
        explanation: "Load forecasting is possible in a smart grid. (Lecture 51@22:00)",
        correctAnswer: 1
      },
      {
        question: "With respect to the Smart Grid architecture, which among the following is the most probable utility of the IP network?",
        options: ["IP network has no utility", "IP network is used to connect smart grid components globally for seamless data transfer", "IP network is used for multimedia video streaming only", "IP network is used to induce more congestion"],
        explanation: "IP network is used to connect smart grid components globally for seamless data transfer. (Lecture 51@23:00)",
        correctAnswer: 1
      },
      {
        question: "Smart Home is an isolated concept and is not integrable with smart grid?",
        options: ["False", "True"],
        explanation: "Smart Home is not an isolated concept and can be integrated with smart grid. (Lecture 51@28:01)",
        correctAnswer: 0
      },
      {
        question: "Which of the following is a cloud application of smart grid?",
        options: ["Information management", "Energy management", "Security", "All of these"],
        explanation: "Energy management, information management and security are all cloud applications in smart grid. (Lecture 52@21:55)",
        correctAnswer: 3
      },
      {
        question: "Which of the following is not a vulnerability of Smart Grid?",
        options: ["Integrity", "Physical threats", "Dynamic system attacks", "None of these"],
        explanation: "Integrity, physical threats and dynamic system attacks are all vulnerabilities of smart grids. (Lecture 52@16:56)",
        correctAnswer: 3
      },
      {
        question: "IIoT corresponds to which industrial revolution?",
        options: ["1st", "2nd", "3rd", "4th"],
        explanation: "IIoT (Industrial Internet of Things) corresponds to the 4th industrial revolution. (Lecture 53@10:00)",
        correctAnswer: 3
      },
      {
        question: "IIoT is inherently data intensive.",
        options: ["Yes", "No"],
        explanation: "In IIoT, big data analytics plays an important part, hence it is inherently data intensive. (Lecture 53@16:28)",
        correctAnswer: 0
      },
      {
        question: "Which among the following is one of the requirements and utility of IIoT?",
        options: ["Power plant interruption", "Power plant virtualization", "Power plant decentralization", "Power plant denotification"],
        explanation: "Power plant virtualization is one of the requirements and utilities of IIoT. (Lecture 53@20:17)",
        correctAnswer: 1
      },
      {
        question: "Smart Grid follows which type of flow of energy?",
        options: ["Bidirectional", "Unidirectional", "Both a and b", "Neither a nor b"],
        explanation: "Smart grid follows bidirectional flow of energy. (Lecture 51@5:41)",
        correctAnswer: 0
      },
      {
        question: "What is the Flow of data?",
        options: ["Acquisition>Generation>Storage>Analysis", "Generation>Storage>Analysis>Acquisition", "Generation>Acquisition>Storage>Analysis", "None of these"],
        explanation: "The flow of the data is Generation, Acquisition, Storage and Analysis. (Lecture 55@19:29)",
        correctAnswer: 2
      },
      {
        question: "Intelligent transport system is least likely to render which of the following connectivity?",
        options: ["Vehicle-to-vehicle connectivity", "Vehicle-to-sensor connectivity", "Vehicle-to-road infrastructure", "Vehicle-to-home connectivity"],
        explanation: "ITS provides Vehicle-to-vehicle connectivity, Vehicle-to-sensor connectivity, Vehicle-to-road infrastructure and Vehicle-to-internet connectivity, but is least likely to provide Vehicle-to-home connectivity. (Lecture 54@4:19)",
        correctAnswer: 3
      },
      {
        question: "Approximately around ________ of the total data available currently in the world is unstructured.",
        options: ["20 %", "40 %", "60 %", "80%"],
        explanation: "Unstructured data accounts for 80% of the total data available today in the world. (Lecture 55@9:23)",
        correctAnswer: 3
      },
      {
        question: "SQL manages ________________ data.",
        options: ["Unstructured", "Corrupt", "Structured", "Non-organized"],
        explanation: "SQL (Structured Query Language) manages structured data. (Lecture 55@8:56)",
        correctAnswer: 2
      }
    ],

    week12:[
      {
        question: "Qualitative analysis refers to the process by which numerical data is analyzed?",
        options: ["True", "False"],
        explanation: "Qualitative analysis does not refer to numerical data analysis, but rather to non-numerical data analysis. (Lecture 56@2:46)",
        correctAnswer: 1
      },
      {
        question: "Which of the following data analysis technique involve the use of study of difference of variance?",
        options: ["ARIMA", "ANOVA", "DNN", "OpenFlow"],
        explanation: "ANOVA (Analysis of Variance) involves studying the differences in variance. (Lecture 56@10:42)",
        correctAnswer: 1
      },
      {
        question: "Given that you have an independent variable and that you want to predict the dependent variable based on the relationship between the two variables. Which among the following technique would you use?",
        options: ["ANOVA", "ARIMA", "Regression Analysis", "Pre-analysis"],
        explanation: "Regression Analysis is used to predict a dependent variable based on its relationship with an independent variable. (Lecture 56@15:13)",
        correctAnswer: 2
      },
      {
        question: "With respect to AgriSens, how many logical layers are there in its architecture?",
        options: ["Perception Layer", "Processing Layer", "Application Layer", "All of the given"],
        explanation: "AgriSens architecture includes all three layers: Perception Layer, Processing Layer, and Application Layer. (Lecture 57@6:12)",
        correctAnswer: 3
      },
      {
        question: "AgriSens supports real-time monitoring of soil moisture conditions and instant reporting to a dashboard.",
        options: ["False", "True"],
        explanation: "AgriSens does support real-time monitoring of soil moisture conditions and instant reporting to a dashboard. (Lecture 57)",
        correctAnswer: 1
      },
      {
        question: "What is the data aggregator is also known as in the context of IoT in smart healthcare?",
        options: ["CPU", "LPU", "APU", "PPU"],
        explanation: "In the context of IoT in smart healthcare, the data aggregator is also known as LPU. (Lecture 58@9:23)",
        correctAnswer: 1
      },
      {
        question: "Fill in the blanks. The effect size for determining statistical significance is the standardized _________ difference between two groups.",
        options: ["Median", "Mean", "Inter quartile range", "None of the above"],
        explanation: "The effect size is the standardized mean difference between two groups. (Lecture: Data Handling and Analytics- Part II @ 17:15)",
        correctAnswer: 1
      },
      {
        question: "Processing the sensed data on the device itself is known as __________ approach.",
        options: ["Network based", "In-place", "Out of the place", "None of these"],
        explanation: "Processing the sensed data on the device itself is known as in-place approach. (Lecture: Activity monitoring Case Study - I @ 20:19)",
        correctAnswer: 1
      },
      {
        question: "Fill in the blank. Processing the handheld activity device data with artificial intelligence can be used for ________.",
        options: ["Fall detection", "Heart rate detection", "Vehicle detection", "All of these"],
        explanation: "Processing the handheld activity device data with artificial intelligence can be used for detecting sudden fall of a person. (Lecture 60@11:56)",
        correctAnswer: 0
      },
      {
        question: "Which of the following is an assumption of ANOVA?",
        options: ["Homogeneity of variances", "Normally distributed response variable", "Independence of observations", "All of these"],
        explanation: "ANOVA assumes homogeneity of variances, normally distributed response variable, and independence of observations. (Lecture 56 @ 12:30)",
        correctAnswer: 3
      },
      {
        question: "Select the statement(s) that denote the type of ANOVA.",
        options: ["Statement I", "Statement II", "Statements I, II, and III", "None of these"],
        explanation: "The types of ANOVA include One way analysis, Two way analysis and K-way analysis. (Lecture 56@11:57)",
        correctAnswer: 2
      },
      {
        question: "AmbuSense is a privacy-aware system",
        options: ["True", "False"],
        explanation: "The AmbuSense is a strictly privacy-aware system with patient-identity masking. (Lecture 58@24:12)",
        correctAnswer: 0
      },
      {
        question: "The two most relevant sensors directly used in agriculture are __________.",
        options: ["Soil moisture and ECG sensor", "Soil moisture and water level sensor", "ECG sensor and water level sensor", "All of these"],
        explanation: "Soil moisture and water level sensors are the necessary sensors generally used in agriculture. (Lecture 57@13:11)",
        correctAnswer: 1
      },
      {
        question: "Examples of dispersion measures include _______ and ______.",
        options: ["Discrete, categorical", "Continuous, quantitative", "Discrete, quantitative", "Range, Variance"],
        explanation: "Examples of dispersion measures include Range and Variance. (Lecture 56@13:51)",
        correctAnswer: 3
      },
      {
        question: "Suppose that your smartphone tilts by an angle of 15 degrees. Which among the following sensors will detect this tilt?",
        options: ["HC-SR04", "Gyroscope", "Accelerometer", "Monometer"],
        explanation: "A gyroscope sensor will detect the tilt angle of a smartphone. (Lecture 60@3:06)",
        correctAnswer: 1
      }
    ],
    assignment: [
      {
        question: "Which of the following is considered a key enabler of the Internet of Things (IoT)?",
        options: ["Smartphones", "RFID", "Wi-Fi Routers", "Blockchain"],
        explanation: "RFID is one of the early and fundamental technologies enabling IoT by allowing automatic identification and tracking of 'things'.",
        correctAnswer: 1
      }
,
{
  question: "What is the primary function of an actuator in an IoT system?",
  options: ["To detect changes in the environment", "To process data from sensors", "To convert energy into mechanical motion", "To provide internet connectivity"],
  explanation: "An actuator converts a control signal into mechanical motion, acting on the environment.",
  correctAnswer: 2
}
,
{
  question: "Which of the following sensors is a vector sensor?",
  options: ["Thermocouple", "Barometer", "Accelerometer", "Light Dependent Resistor"],
  explanation: "An accelerometer is a vector sensor as it measures acceleration in multiple directions (x, y, z).",
  correctAnswer: 2
}
,
{
  question: "Which addressing strategy helps avoid address wastage in large-scale IoT deployments?",
  options: ["IPv4 Static Allocation", "Broadcast Addressing", "Gateway Prefix Allotment", "Multicast DNS"],
  explanation: "Gateway prefix allotment allows local addresses within a gateway's domain to be reused in another domain, preventing address exhaustion.",
  correctAnswer: 2
}
,
{
  question: "What type of error occurs when a sensor’s output differs based on the input trend (increasing or decreasing)?",
  options: ["Drift", "Hysteresis", "Offset", "Quantization"],
  explanation: "Hysteresis error is observed when a sensor gives different readings for the same input based on its previous states.",
  correctAnswer: 1
}
,
{
  question: "Which of the following technologies is part of the IoT but with a narrower focus on device-to-device communication?",
  options: ["Web of Things", "Cyber-Physical Systems", "Machine-to-Machine (M2M)", "Smart Grid"],
  explanation: "M2M focuses specifically on machine-to-machine communication and is a subset of IoT.",
  correctAnswer: 2
}
,
{
  question: "Which actuator type is best suited for controlling water flow in response to electrical signals?",
  options: ["Thermal Actuator", "Electric Actuator", "Hydraulic Actuator", "Mechanical Actuator"],
  explanation: "Electric actuators are commonly used in solenoid valves to control water flow based on electrical input.",
  correctAnswer: 1
}
,
{
  question: "Why is IPv6 more suited to IoT than IPv4?",
  options: ["It supports wireless communication", "It is more secure by design", "It offers more address space", "It has faster data rates"],
  explanation: "IPv6 provides a vastly larger address space (2^128 addresses) compared to IPv4, making it ideal for billions of IoT devices.",
  correctAnswer: 2
}
,
{
  question: "Which of the following features does NOT apply to a sensor?",
  options: ["Sensitive to measured property", "Affects the measured property", "Insensitive to irrelevant properties", "Converts physical quantity to signal"],
  explanation: "A sensor should not influence or affect the measured property; it should only detect it.",
  correctAnswer: 1
}
,
{
  question: "Which sensor would be used to detect proximity using sound waves?",
  options: ["Piezoelectric Sensor", "Ultrasonic Sensor", "Photoresistor", "Accelerometer"],
  explanation: "Ultrasonic sensors use sound waves to measure distance and detect objects.",
  correctAnswer: 1
}
,

  {
    "question": "Which of the following protocols enables low-power devices to connect to the Internet using IPv6?",
    "options": ["MQTT", "6LoWPAN", "ZigBee", "CoAP"],
    "explanation": "6LoWPAN allows small, low-power devices to communicate using IPv6, making them Internet-accessible.",
    "correctAnswer": 1
  },
  {
    "question": "What type of addressing does 6LoWPAN support within a PAN domain?",
    "options": ["64-bit global and 32-bit dynamic", "64-bit global and 16-bit short", "128-bit only", "32-bit only"],
    "explanation": "6LoWPAN supports globally unique 64-bit addressing and 16-bit short addressing specific to a PAN.",
    "correctAnswer": 1
  },
  {
    "question": "Which routing protocol used in 6LoWPAN is derived from AODV?",
    "options": ["RIP", "OSPF", "LOADng", "RPL"],
    "explanation": "LOADng is a lightweight adaptation of AODV designed for low-power and lossy networks in IoT.",
    "correctAnswer": 2
  },
  {
    "question": "Which statement about passive RFID tags is correct?",
    "options": ["They contain an internal power supply", "They are powered inductively by the reader", "They are rarely used in IoT", "They actively broadcast signals"],
    "explanation": "Passive RFID tags do not have their own power source and are powered by the reader’s signal.",
    "correctAnswer": 1
  },
  {
    "question": "What messaging protocol does MQTT follow?",
    "options": ["Request/Response", "Push/Pull", "Publish/Subscribe", "Client/Server"],
    "explanation": "MQTT is a lightweight messaging protocol that follows a Publish/Subscribe architecture for IoT communications.",
    "correctAnswer": 2
  },
  {
    "question": "Which of the following CoAP message types is used when the server response is delayed and not part of the ACK?",
    "options": ["Confirmable", "Non-Confirmable", "Piggyback", "Separate"],
    "explanation": "The 'Separate' message type in CoAP allows a delayed server response separate from the acknowledgment.",
    "correctAnswer": 3
  },
  {
    "question": "Which messaging protocol is designed specifically for high security with broadcast encryption in IoT?",
    "options": ["MQTT", "SMQTT", "XMPP", "CoAP"],
    "explanation": "SMQTT is a secure version of MQTT using attribute-based encryption that supports broadcast encryption.",
    "correctAnswer": 1
  },
  {
    "question": "In AMQP, which frame type is responsible for initiating a new link?",
    "options": ["Open", "Attach", "Transfer", "Begin"],
    "explanation": "The 'Attach' frame type in AMQP is used to initiate a new communication link between peers.",
    "correctAnswer": 1
  },
  {
    "question": "What is the function of a ZigBee Coordinator (ZC) in a ZigBee network?",
    "options": ["Relays messages between nodes", "Provides external communication", "Initiates and manages the network", "Performs energy harvesting"],
    "explanation": "A ZigBee Coordinator forms and manages the network and acts as the root node and Trust Center.",
    "correctAnswer": 2
  },
  {
    "question": "Which of the following best describes the CoAP protocol?",
    "options": ["Binary publish-subscribe protocol", "RESTful protocol built over TCP", "Lightweight HTTP-like protocol over UDP", "XML-based messaging system"],
    "explanation": "CoAP is a lightweight application-layer protocol similar to HTTP but designed to run over UDP for constrained devices.",
    "correctAnswer": 2
  },
  
    {
      "question": "Which layer of the WirelessHART protocol ensures collision-free and deterministic communication?",
      "options": ["Network Layer", "Application Layer", "Data Link Layer", "Physical Layer"],
      "explanation": "The Data Link Layer in WirelessHART uses super-frames and TDMA to ensure collision-free and deterministic communication.",
      "correctAnswer": 2
    },
    {
      "question": "Which modulation technique is used by Z-Wave?",
      "options": ["QPSK", "GFSK", "BPSK", "OQPSK"],
      "explanation": "Z-Wave uses Gaussian Frequency Shift Keying (GFSK) modulation.",
      "correctAnswer": 1
    },
    {
      "question": "What is the maximum number of nodes supported in a Z-Wave network?",
      "options": ["64", "128", "232", "512"],
      "explanation": "Z-Wave networks can support up to 232 nodes, making it scalable for home automation.",
      "correctAnswer": 2
    },
    {
      "question": "What is the purpose of 'Healing' in Z-Wave networks?",
      "options": ["Encrypting transmissions", "Speeding up data", "Bypassing radio dead-spots", "Reducing power consumption"],
      "explanation": "Healing in Z-Wave refers to rerouting messages through different nodes to bypass obstructions or dead-spots.",
      "correctAnswer": 2
    },
    {
      "question": "Which protocol operates in the 2.4 GHz ISM band and employs channel hopping after each message?",
      "options": ["ZigBee", "Bluetooth", "WirelessHART", "ISA100.11a"],
      "explanation": "WirelessHART operates in the 2.4 GHz ISM band and switches channels after each message for better reliability.",
      "correctAnswer": 2
    },
    {
      "question": "What is the main difference between passive and active NFC devices?",
      "options": ["Data rate", "Range", "Power source", "Antenna design"],
      "explanation": "Active NFC devices have their own power source and can read/write, while passive ones rely on the reader's energy.",
      "correctAnswer": 2
    },
    {
      "question": "Which Bluetooth mode allows a device to wake up only at predefined intervals to save power?",
      "options": ["Sniff", "Active", "Hold", "Park"],
      "explanation": "Sniff mode in Bluetooth allows a device to listen at defined intervals, reducing power consumption.",
      "correctAnswer": 0
    },
    {
      "question": "What is the maximum number of slave devices that can connect to a Bluetooth master in a Piconet?",
      "options": ["5", "7", "10", "15"],
      "explanation": "A Bluetooth Piconet can support up to 7 active slave devices connected to one master.",
      "correctAnswer": 1
    },
    {
      "question": "Which topology allows Bluetooth devices from multiple Piconets to communicate through shared nodes?",
      "options": ["Piconet", "Tree", "Scatternet", "Star"],
      "explanation": "Scatternet is a network of interconnected Piconets where nodes act as bridges.",
      "correctAnswer": 2
    },
    {
      "question": "Which layer in Bluetooth is responsible for providing protocol multiplexing and connection services?",
      "options": ["Baseband", "RFCOMM", "L2CAP", "SDP"],
      "explanation": "L2CAP (Logical Link Control and Adaptation Protocol) supports multiplexing, segmentation/reassembly, and group abstractions.",
      "correctAnswer": 2
    }
    ,
    
      {
        "question": "In push-based target tracking, which structure is commonly used for communication among sensor nodes?",
        "options": ["Tree structure", "Mesh structure", "Cluster structure", "Face structure"],
        "explanation": "In push-based target tracking, a cluster structure is typically used where nodes compute and push data to the sink.",
        "correctAnswer": 2
      },
      {
        "question": "Which two sensors were used in the AID prototype for agricultural intrusion detection?",
        "options": ["Accelerometer and Gyroscope", "PIR and Ultrasonic", "Humidity and Temperature", "Magnetic and LDR"],
        "explanation": "The AID system used Passive Infrared (PIR) sensors to detect intrusions and Ultrasonic sensors to measure distance.",
        "correctAnswer": 1
      },
      {
        "question": "What type of sensors are scalar sensor (SS) nodes in Wireless Multimedia Sensor Networks (WMSNs)?",
        "options": ["High-power directional multimedia sensors", "Temperature and light sensors with omni-directional range", "Pressure and gas sensors with directional range", "Video and audio sensors"],
        "explanation": "Scalar sensor nodes sense temperature, light, vibration etc., with omni-directional sensing and low power.",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is a key challenge in underwater acoustic sensor networks (UASNs)?",
        "options": ["High data rate", "Electromagnetic interference", "Internal solitons affecting acoustic signal propagation", "Lack of sensor mobility"],
        "explanation": "Internal solitons significantly scatter underwater acoustic signals, degrading communication in UASNs.",
        "correctAnswer": 2
      },
      {
        "question": "Which algorithm was used for distributed topology management in WMSNs?",
        "options": ["Backoff Contention Algorithm", "Greedy Forwarding", "Coalition Formation Game", "Shortest Path Routing"],
        "explanation": "Coalition Formation Game was used between CS and SS nodes to manage coverage and connectivity in WMSNs.",
        "correctAnswer": 2
      },
      {
        "question": "Which localization scheme uses dead-reckoning and trilateration in underwater environments?",
        "options": ["OGDC", "MobiL", "HASL", "OGDC+"],
        "explanation": "HASL (High-Speed AUV-Based Silent Localization) uses GPS, dead-reckoning, and trilateration for position estimation.",
        "correctAnswer": 2
      },
      {
        "question": "In barrier coverage, what does '2-barrier coverage' imply?",
        "options": ["Each point is covered twice", "The region is divided into 2 sectors", "Each point is covered by at least 2 sensors", "Two sensors are deployed per line-of-sight"],
        "explanation": "2-barrier coverage means that each point on the barrier is covered by at least two sensors.",
        "correctAnswer": 2
      },
      {
        "question": "Which protocol architecture in FANETs ensures long-range, resilient communication using UAVs?",
        "options": ["StarNet", "SkyComm", "FANET", "ZigBee UAV"],
        "explanation": "FANETs (Flying Ad Hoc Networks) ensure resilient and long-range communication using a fleet of UAVs.",
        "correctAnswer": 2
      },
      {
        "question": "What is a significant constraint of UAV networks as mentioned in the notes?",
        "options": ["Low data rate", "Highly predictable mobility", "Frequent link breakages and environmental sensitivity", "Limited sensor deployment"],
        "explanation": "UAV networks suffer from frequent link breakages and are highly sensitive to environmental effects like wind and rain.",
        "correctAnswer": 2
      },
      {
        "question": "Which category of M2M nodes is most suitable for high-quality multimedia applications?",
        "options": ["Low-end nodes", "Mid-end nodes", "High-end nodes", "Passive RFID nodes"],
        "explanation": "High-end M2M nodes are capable of handling multimedia data and are used in applications like ITS and military.",
        "correctAnswer": 2
      }
        ,
        
          {
            "question": "Which challenge in IoT involves multiple devices using different configurations and standards?",
            "options": ["Security Threats", "Global Heterogeneity", "Limited Connectivity", "Power Constraints"],
            "explanation": "Global Heterogeneity refers to different IoT devices and protocols, making seamless communication difficult.",
            "correctAnswer": 1
          },
          {
            "question": "Which type of interoperability involves understanding the meaning of messages exchanged between devices?",
            "options": ["User Interoperability", "Device Interoperability", "Syntactic Interoperability", "Semantic Interoperability"],
            "explanation": "Semantic Interoperability ensures devices understand the meaning of exchanged messages.",
            "correctAnswer": 3
          },
          {
            "question": "Which of the following is used to uniquely identify IoT devices for discovery?",
            "options": ["MAC Address", "HTTP Header", "Electronic Product Code", "PIN Code"],
            "explanation": "Electronic Product Codes (EPCs) are used for unique identification of IoT devices during discovery.",
            "correctAnswer": 2
          },
          {
            "question": "Which tool provides a virtual abstraction layer for heterogeneous devices in home networks?",
            "options": ["Zigbee Hub", "Universal Device Translator", "Universal Middleware Bridge", "Protocol Adapter"],
            "explanation": "The Universal Middleware Bridge (UMB) allows seamless communication among heterogeneous devices.",
            "correctAnswer": 2
          },
          {
            "question": "Which Arduino function is used to set a pin as input or output?",
            "options": ["digitalWrite()", "pinMode()", "setup()", "loop()"],
            "explanation": "The pinMode() function configures a specified pin to behave either as an input or output.",
            "correctAnswer": 1
          },
          {
            "question": "Which Arduino IDE feature checks for compilation errors?",
            "options": ["Upload", "Verify", "Serial Monitor", "Sketch Analyzer"],
            "explanation": "The 'Verify' button checks the code for compilation errors before uploading to the board.",
            "correctAnswer": 1
          },
          {
            "question": "Which command generates a random number within a specified range in Arduino?",
            "options": ["randNum()", "generateRandom()", "random()", "setRandom()"],
            "explanation": "The random() function is used in Arduino to generate pseudo-random numbers within a range.",
            "correctAnswer": 2
          },
          {
            "question": "What kind of signal does a DHT sensor provide to the Arduino board?",
            "options": ["Analog", "Digital", "PWM", "Serial"],
            "explanation": "The DHT temperature and humidity sensor provides a digital signal to the Arduino.",
            "correctAnswer": 1
          },
          {
            "question": "In the Arduino Servo library, which function rotates the servo motor?",
            "options": ["rotate()", "setAngle()", "servoMove()", "write()"],
            "explanation": "The write() function is used to rotate the servo to a specified angle.",
            "correctAnswer": 3
          },
          {
            "question": "Which type of interoperability addresses message formatting between user and device?",
            "options": ["Semantic Interoperability", "Syntactic Interoperability", "Middleware Translation", "Universal Standardization"],
            "explanation": "Syntactic Interoperability ensures that the message formats are understood and executable by both user and device.",
            "correctAnswer": 1
          },

          
            {
              "question": "Which Python library is used to control Raspberry Pi GPIO pins?",
              "options": ["RPi.GPIO", "PiControl", "GPIOManager", "RPiControl"],
              "explanation": "RPi.GPIO is the standard Python library used to control GPIO pins on the Raspberry Pi.",
              "correctAnswer": 0
            },
            {
              "question": "Which data type in Python is immutable?",
              "options": ["List", "Tuple", "Dictionary", "Set"],
              "explanation": "Tuples in Python are immutable, meaning they cannot be changed after creation.",
              "correctAnswer": 1
            },
            {
              "question": "Which function is used to handle exceptions in Python?",
              "options": ["if-else", "try-except", "check-raise", "loop-catch"],
              "explanation": "The 'try-except' block is used to catch and handle exceptions in Python.",
              "correctAnswer": 1
            },
            {
              "question": "Which mode is used to open a file for both reading and writing in Python?",
              "options": ["r+", "rw", "w+", "ra"],
              "explanation": "The 'r+' mode in Python opens a file for both reading and writing.",
              "correctAnswer": 0
            },
            {
              "question": "Which Python function is used to resize an image using PIL?",
              "options": ["image.modify()", "image.scale()", "image.resize()", "image.changeSize()"],
              "explanation": "The 'resize()' method is used to change the dimensions of an image in PIL.",
              "correctAnswer": 2
            },
            {
              "question": "What is the output of: print('Python'[2:4])?",
              "options": ["Py", "th", "yt", "ho"],
              "explanation": "The slice [2:4] extracts characters at index 2 and 3, which are 't' and 'h'.",
              "correctAnswer": 1
            },
            {
              "question": "Which command is used to capture an image using the Pi camera from the terminal?",
              "options": ["picapture", "rpipic -o image.jpg", "raspistill -o image.jpg", "camera.sh"],
              "explanation": "'raspistill -o image.jpg' is the standard command to capture an image using the PiCam.",
              "correctAnswer": 2
            },
            {
              "question": "Which of the following is true about global variables in Python?",
              "options": ["They are only accessible inside functions", "They must be declared inside every function", "They are declared outside functions and accessible globally", "They can't be used with modules"],
              "explanation": "Global variables are declared outside any function and can be accessed from inside or outside functions.",
              "correctAnswer": 2
            },
            {
              "question": "Which Python function generates random integers between two values?",
              "options": ["random.integer()", "random.random()", "random.randint()", "random.number()"],
              "explanation": "'random.randint()' generates a random integer between the specified range.",
              "correctAnswer": 2
            },
            {
              "question": "Which protocol is used for network socket communication in Python?",
              "options": ["UDP", "HTTP", "TCP", "ICMP"],
              "explanation": "TCP is commonly used for reliable socket communication in Python using SOCK_STREAM.",
              "correctAnswer": 2
            },

            
              {
                "question": "Which Python function is used to read data from a DHT sensor using the Adafruit library?",
                "options": ["read_data()", "get_sensor()", "read_retry()", "fetch_data()"],
                "explanation": "The Adafruit_DHT.read_retry() function is used to read temperature and humidity from DHT sensors.",
                "correctAnswer": 2
              },
              {
                "question": "Which socket type is used for UDP communication in Python?",
                "options": ["SOCK_STREAM", "SOCK_RAW", "SOCK_SEQPACKET", "SOCK_DGRAM"],
                "explanation": "SOCK_DGRAM is used for UDP communication in socket programming.",
                "correctAnswer": 3
              },
              {
                "question": "Which Python library is used for 2D plotting of sensor data?",
                "options": ["NumPy", "SciPy", "matplotlib", "seaborn"],
                "explanation": "matplotlib is the commonly used Python library for 2D plotting.",
                "correctAnswer": 2
              },
              {
                "question": "Which protocol is used by OpenFlow to place flow-rules in SDN switches?",
                "options": ["HTTP", "TCP", "OpenFlow", "SNMP"],
                "explanation": "OpenFlow is the standard protocol used to communicate flow-rules in SDN.",
                "correctAnswer": 2
              },
              {
                "question": "What does the 'hard timeout' in OpenFlow specify?",
                "options": ["Timeout if packet is lost", "Timeout if no flow is received", "Time after which all flow-rules are deleted", "Time after which TCAM resets"],
                "explanation": "Hard timeout defines the total time after which flow-rules are deleted from the switch.",
                "correctAnswer": 2
              },
              {
                "question": "Which Python command is used to split string data received from sensors?",
                "options": ["splitdata()", "slice()", "separate()", "split()"],
                "explanation": "The split() method is used to divide strings based on a specified delimiter.",
                "correctAnswer": 3
              },
              {
                "question": "Which SDN controller is known for its high popularity and wide adoption?",
                "options": ["FloodLight", "Pox", "OpenDayLight", "ONOS"],
                "explanation": "OpenDayLight is one of the most popular SDN controllers used in industry and academia.",
                "correctAnswer": 2
              },
              {
                "question": "In SDN, what is the purpose of TCAM at the switch?",
                "options": ["Data encryption", "Power saving", "Fast packet matching", "Routing only multicast traffic"],
                "explanation": "TCAM is used in SDN switches for high-speed packet matching of flow rules.",
                "correctAnswer": 2
              },
              {
                "question": "What is the main feature of Soft-WSN in IoT environments?",
                "options": ["Packet compression", "Topology visualization", "Real-time sensor and delay management", "Static routing"],
                "explanation": "Soft-WSN allows real-time sensor, delay, and sleep-active management in WSNs.",
                "correctAnswer": 2
              },
              {
                "question": "What is the key role of Northbound APIs in SDN?",
                "options": ["Communicate with switches", "Forward packets", "Enable application-controller communication", "Enable switch-to-switch routing"],
                "explanation": "Northbound APIs are used for communication between the SDN controller and applications.",
                "correctAnswer": 2
              },

              
                {
                  "question": "Which component of SDN is responsible for communication with physical devices in ODIN architecture?",
                  "options": ["ODIN Master", "ODIN Agent", "OpenFlow Switch", "SDN Controller"],
                  "explanation": "ODIN Agent resides on access points and communicates with ODIN Master to manage device-level interactions.",
                  "correctAnswer": 1
                },
                {
                  "question": "Which technique is used by Mobi-Flow for predicting the next user location?",
                  "options": ["GPS Tracking", "Kalman Filter", "Order-K Markov Predictor", "Time Series Regression"],
                  "explanation": "Mobi-Flow uses an Order-K Markov Predictor which utilizes the last k location points to predict the next location.",
                  "correctAnswer": 2
                },
                {
                  "question": "Which characteristic is not part of NIST’s essential cloud computing characteristics?",
                  "options": ["On-demand self-service", "Limited network access", "Resource pooling", "Rapid elasticity"],
                  "explanation": "Limited network access is not one of the essential cloud computing characteristics defined by NIST.",
                  "correctAnswer": 1
                },
                {
                  "question": "Which service model allows consumers to control the deployed applications but not the cloud infrastructure?",
                  "options": ["IaaS", "PaaS", "SaaS", "DBaaS"],
                  "explanation": "In Platform-as-a-Service (PaaS), users can deploy and control their applications but not the underlying infrastructure.",
                  "correctAnswer": 1
                },
                {
                  "question": "What does CloudSim primarily simulate?",
                  "options": ["Cyber-attacks", "Sensor networks", "Cloud computing environments", "Blockchain systems"],
                  "explanation": "CloudSim is a simulation toolkit for modeling and simulating cloud computing infrastructure and services.",
                  "correctAnswer": 2
                },
                {
                  "question": "Which deployment model combines features of both private and public clouds?",
                  "options": ["Community Cloud", "Distributed Cloud", "Hybrid Cloud", "Multi-cloud"],
                  "explanation": "Hybrid Cloud is a combination of private and public clouds allowing data and application portability.",
                  "correctAnswer": 2
                },
                {
                  "question": "Which platform is considered as IaaS and offers virtual machine deployment and management?",
                  "options": ["Microsoft Azure", "OpenStack", "CloudAnalyst", "CloudSim"],
                  "explanation": "OpenStack is an open-source cloud platform that provides IaaS by enabling VM deployment and management.",
                  "correctAnswer": 1
                },
                {
                  "question": "Which of the following ensures that only authorized users can access cloud resources at the right time?",
                  "options": ["IAM", "Firewall", "VPN", "Data Provenance"],
                  "explanation": "Identity and Access Management (IAM) ensures that only authorized users can access resources at the right time.",
                  "correctAnswer": 0
                },
                {
                  "question": "Which type of flow in data centers uses wildcard rules due to its frequent and short nature?",
                  "options": ["Elephant Flow", "Hybrid Flow", "Mice Flow", "Control Flow"],
                  "explanation": "Mice Flows are frequent, short-lived flows that are best handled using wildcard rules for efficiency.",
                  "correctAnswer": 2
                },
                {
                  "question": "Which cloud simulator is an extension of NS2 and is focused on energy consumption?",
                  "options": ["GreenCloud", "CloudSim", "CloudAnalyst", "GroudSim"],
                  "explanation": "GreenCloud is a packet-level cloud simulator developed as an extension of NS2 with energy consumption monitoring.",
                  "correctAnswer": 0
                },

                
                  {
                    "question": "Which OpenStack component provides identity and authentication services?",
                    "options": ["Nova", "Glance", "Keystone", "Neutron"],
                    "explanation": "Keystone is the identity service in OpenStack responsible for authentication and authorization.",
                    "correctAnswer": 2
                  },
                  {
                    "question": "Which OpenStack component is used to launch and manage compute instances?",
                    "options": ["Cinder", "Swift", "Nova", "Ceilometer"],
                    "explanation": "Nova is the compute component of OpenStack that allows users to launch virtual machine instances.",
                    "correctAnswer": 2
                  },
                  {
                    "question": "What is the primary purpose of the Heat component in OpenStack?",
                    "options": ["Block storage", "Orchestration", "Monitoring", "Authentication"],
                    "explanation": "Heat provides orchestration in OpenStack and is used for automating cloud application deployment.",
                    "correctAnswer": 1
                  },
                  {
                    "question": "Which cloud computing service model provides the highest level of control to the end user?",
                    "options": ["SaaS", "PaaS", "IaaS", "DaaS"],
                    "explanation": "IaaS (Infrastructure-as-a-Service) provides the user control over OS, storage, and deployed applications.",
                    "correctAnswer": 2
                  },
                  {
                    "question": "What distinguishes Sensor-Cloud from traditional Wireless Sensor Networks (WSNs)?",
                    "options": ["Lower latency", "Virtualization and multi-user support", "Single application focus", "Direct internet access"],
                    "explanation": "Sensor-Cloud introduces virtualization, allowing a single sensor to serve multiple users and applications.",
                    "correctAnswer": 1
                  },
                  {
                    "question": "What is the main purpose of internal caching in Sensor-Cloud?",
                    "options": ["To store data permanently", "To reduce sensor access by reusing cached values", "To provide user authentication", "To compress data"],
                    "explanation": "Internal caching helps serve user requests without querying physical sensors repeatedly, reducing overhead.",
                    "correctAnswer": 1
                  },
                  {
                    "question": "In Fog computing, which type of data is processed at the nearest fog node?",
                    "options": ["Time-insensitive", "Low-priority", "Very time-sensitive", "Historical"],
                    "explanation": "Very time-sensitive data is processed at the nearest fog node to reduce latency and enable quick decisions.",
                    "correctAnswer": 2
                  },
                  {
                    "question": "Which of the following is a key advantage of Fog computing over Cloud computing?",
                    "options": ["Higher cost", "Slower processing", "Better support for mobility and real-time decision making", "Centralized storage only"],
                    "explanation": "Fog computing supports real-time decision making, mobility, and lower latency by operating closer to data sources.",
                    "correctAnswer": 2
                  },
                  {
                    "question": "Which pricing attribute in Sensor-Cloud is associated with the use of cloud infrastructure?",
                    "options": ["pH", "pI", "pC", "pS"],
                    "explanation": "pI refers to the pricing attributed to the infrastructure usage in a Sensor-Cloud environment.",
                    "correctAnswer": 1
                  },
                  {
                    "question": "What is a major challenge of Fog computing related to node failure?",
                    "options": ["Low bandwidth", "High cost", "Lack of sensors", "Fault tolerance"],
                    "explanation": "Fog computing must ensure that failure of one node does not affect the entire network, emphasizing fault tolerance.",
                    "correctAnswer": 3
                  },
                  
                    {
                      "question": "Which of the following best describes a smart city?",
                      "options": ["A city with advanced vehicles", "A city with only renewable energy", "A city using ICT to make infrastructure more efficient", "A city without pollution"],
                      "explanation": "A smart city uses Information and Communication Technology (ICT) to make infrastructure interactive and efficient.",
                      "correctAnswer": 2
                    },
                    {
                      "question": "In the smart city analogy, what do 'sensors and tags' represent?",
                      "options": ["Brain", "Nerves", "Skin", "Sensory Organs"],
                      "explanation": "In the human-to-smart city analogy, 'sensors and tags' are equivalent to sensory organs.",
                      "correctAnswer": 3
                    },
                    {
                      "question": "Which functional layer of smart parking includes sensors and crowd sensing?",
                      "options": ["Service Dissemination", "System Deployment", "Information Collection", "Pricing Strategies"],
                      "explanation": "The Information Collection layer includes sensors, parking meters, and crowd sensing for data gathering.",
                      "correctAnswer": 2
                    },
                    {
                      "question": "Which layer in the body and brain architecture of connected vehicles handles sensor control and monitoring?",
                      "options": ["Sense and Execution", "Decision Layer", "Transmission Layer", "Cognitive Layer"],
                      "explanation": "The Decision Layer manages the control and monitoring of sensors.",
                      "correctAnswer": 1
                    },
                    {
                      "question": "Which protocol is a key standard in DSRC for vehicular communication?",
                      "options": ["IEEE 802.11n", "IEEE 1609.3", "IEEE 802.15.4", "IEEE 1602.1"],
                      "explanation": "IEEE 1609.3 is part of the DSRC family that supports networking services in vehicular communication.",
                      "correctAnswer": 1
                    },
                    {
                      "question": "What is a key advantage of using Content Centric Networking (CCN) in VANETs?",
                      "options": ["Fixed routing paths", "Location-based addressing", "Efficient data dissemination via in-network caching", "Exclusive IP routing"],
                      "explanation": "CCN allows in-network caching and efficient dissemination of data based on content names rather than location.",
                      "correctAnswer": 2
                    },
                    {
                      "question": "Which energy management technique uses sun, wind, and RF for harvesting in smart cities?",
                      "options": ["Predictive modeling", "Ambient energy harvesting", "Low-power transceivers", "Scheduling optimization"],
                      "explanation": "Ambient energy harvesting uses natural sources like sunlight, wind, and RF signals to power IoT devices.",
                      "correctAnswer": 1
                    },
                    {
                      "question": "Which HAN standard uses the IEEE 802.15.4 standard for its physical and MAC layers?",
                      "options": ["X-10", "LonWorks", "ZigBee", "DLNA"],
                      "explanation": "ZigBee uses IEEE 802.15.4 for its Physical and MAC layers.",
                      "correctAnswer": 2
                    },
                    {
                      "question": "Which smart city application uses auto routing and service charging in real time?",
                      "options": ["Smart Health", "Smart Agriculture", "Smart Parking Lots", "Smart Energy"],
                      "explanation": "Smart Parking Lots include auto-routing of vehicles and auto-charging for services provided.",
                      "correctAnswer": 2
                    },
                    {
                      "question": "Which architecture enables the seamless integration of wired and wireless technologies in home automation?",
                      "options": ["HAN", "DomoNet", "Project HYDRA", "Jini"],
                      "explanation": "Home Area Networks (HANs) enable seamless integration of wired and wireless technologies for home automation.",
                      "correctAnswer": 0
                    },
                    
                      {
                        "question": "What is a key feature of a Smart Grid compared to a traditional electrical grid?",
                        "options": ["Uni-directional communication", "Manual monitoring", "Bidirectional energy and communication flow", "Centralized energy distribution"],
                        "explanation": "Smart Grid enables bidirectional flows of energy and uses two-way communication and control capabilities.",
                        "correctAnswer": 2
                      },
                      {
                        "question": "Which of the following is NOT a benefit of Smart Grid to the consumer?",
                        "options": ["Real-time information on energy usage", "Ability to control smart appliances", "Higher electricity rates", "Different pricing options"],
                        "explanation": "Smart Grid helps consumers lower their energy bills with real-time usage data and flexible pricing, not higher rates.",
                        "correctAnswer": 2
                      },
                      {
                        "question": "What role does the Phasor Measurement Unit (PMU) play in Smart Grids?",
                        "options": ["Provides internet connectivity", "Improves signal strength", "Monitors voltage and current with high sampling rate", "Blocks cyber attacks"],
                        "explanation": "PMU samples voltage and current at a fixed rate and helps provide a dynamic snapshot of the grid for monitoring.",
                        "correctAnswer": 2
                      },
                      {
                        "question": "Which component acts as a centralized coordinator in Smart Grid communication?",
                        "options": ["Smart Meter", "Gateway", "Data Aggregator Unit", "Meter Data Management System (MDMS)"],
                        "explanation": "MDMS acts as the centralized system for managing meter data and pricing decisions.",
                        "correctAnswer": 3
                      },
                      {
                        "question": "Which protocol used in Smart Home Appliances supports IPv6 addressing and 6LowPAN?",
                        "options": ["C-Bus", "Zigbee", "Thread", "Universal Power line Bus"],
                        "explanation": "Thread is based on IPv6 addressing and uses 6LowPAN for low-power wireless personal area networking.",
                        "correctAnswer": 2
                      },
                      {
                        "question": "What is net metering in the context of Smart Grid?",
                        "options": ["Measuring battery power", "Monitoring internet data", "Tracking energy usage only", "Billing based on both in-flow and out-flow of energy"],
                        "explanation": "Net metering tracks both consumption and generation of energy, adjusting billing accordingly.",
                        "correctAnswer": 3
                      },
                      {
                        "question": "Which of the following is a property of Smart Grid that enables it to recover from faults?",
                        "options": ["Self-healing", "Manual reset", "Uni-directional flow", "Centralized control only"],
                        "explanation": "Self-healing is a property that allows the Smart Grid to detect and recover from disturbances automatically.",
                        "correctAnswer": 0
                      },
                      {
                        "question": "How does a Smart Home reduce electricity costs during high-demand periods?",
                        "options": ["By turning off all devices", "Using manual switches", "Running appliances during peak hours", "Shifting appliance use to off-peak hours"],
                        "explanation": "Smart appliances and home management systems can schedule energy use during off-peak hours for cost efficiency.",
                        "correctAnswer": 3
                      },
                      {
                        "question": "Which of the following is a cyber-security threat in Smart Grid systems?",
                        "options": ["Data visualization", "Time synchronization attacks", "Power fluctuation", "User feedback"],
                        "explanation": "Time synchronization attacks (TSAs) can cause incorrect control actions by tampering with PMU timing data.",
                        "correctAnswer": 1
                      },
                      {
                        "question": "Which communication network in a Smart Grid connects smart appliances within a home?",
                        "options": ["Wide Area Network", "Neighborhood Area Network", "Home Area Network", "IP Backbone"],
                        "explanation": "Home Area Networks (HANs) connect smart appliances and meters within a consumer's residence.",
                        "correctAnswer": 2
                      }
                                        
                      ,
                      
                        {
                          "question": "What does Quantitative Analysis primarily involve?",
                          "options": ["Descriptions and themes", "Visual data interpretation", "Numerical and statistical evaluation", "Video and audio analysis"],
                          "explanation": "Quantitative analysis deals with numerical data and uses statistical methods like mean, variance, regression, etc.",
                          "correctAnswer": 2
                        },
                        {
                          "question": "Which of the following is NOT a property required to perform ANOVA?",
                          "options": ["Homogeneity", "Independence", "Random sampling", "Negative correlation"],
                          "explanation": "Negative correlation is not a requirement for ANOVA. The actual requirements are homogeneity, independence, and randomness.",
                          "correctAnswer": 3
                        },
                        {
                          "question": "Which component is used for estimating relationships between variables in statistics?",
                          "options": ["Contingency table", "Regression analysis", "F-ratio", "Standard deviation"],
                          "explanation": "Regression analysis estimates the relationship between a dependent variable and one or more independent variables.",
                          "correctAnswer": 1
                        },
                        {
                          "question": "Which measure represents the spread of values around the mean?",
                          "options": ["Mean", "Variance", "Mode", "Frequency"],
                          "explanation": "Variance is a measure that represents the average squared deviation from the mean, indicating data dispersion.",
                          "correctAnswer": 1
                        },
                        {
                          "question": "What is the purpose of using Pearson's correlation coefficient?",
                          "options": ["Measure variable independence", "Describe data distribution", "Identify predictive relationships", "Calculate variance"],
                          "explanation": "Pearson's correlation coefficient measures the strength of association between two continuous variables.",
                          "correctAnswer": 2
                        },
                        {
                          "question": "In the AgriSens system, what technology is used to send field data to farmers' phones?",
                          "options": ["Bluetooth", "WiFi", "SMS", "RFID"],
                          "explanation": "The AgriSens system uses SMS technology for sending data and updates to farmers.",
                          "correctAnswer": 2
                        },
                        {
                          "question": "Which parameter is monitored by AmbuSens for real-time patient tracking?",
                          "options": ["Blood pressure", "Eye movement", "Galvanic Skin Response (GSR)", "Sleep cycles"],
                          "explanation": "AmbuSens tracks physiological parameters like heart rate, ECG, temperature, and GSR.",
                          "correctAnswer": 2
                        },
                        {
                          "question": "Which sensor is depicted as a part of the integrated sensor node in AgriSens?",
                          "options": ["Motion sensor", "Soil moisture sensor", "Smoke detector", "Body temperature sensor"],
                          "explanation": "The AgriSens system includes a soil moisture sensor (EC-05) as part of its sensor node for irrigation monitoring.",
                          "correctAnswer": 1
                        },
                        {
                          "question": "What is the standard communication protocol used in AmbuSens WBAN?",
                          "options": ["Zigbee", "WiFi", "Bluetooth (IEEE 802.15.1)", "LoRaWAN"],
                          "explanation": "Bluetooth, conforming to IEEE 802.15.1, is used in AmbuSens for WBAN communication.",
                          "correctAnswer": 2
                        },
                        {
                          "question": "Which analytical method is used for visualizing interrelation between categorical variables?",
                          "options": ["Regression", "Standard deviation", "Contingency tables", "Precision analysis"],
                          "explanation": "Contingency tables (or cross-tabulations) are used to display frequency distributions and interrelations of categorical variables.",
                          "correctAnswer": 2
                        }
                                            
                                
                            
                      
                    
              

    ],
  };

  // For the "all" mode, combine questions from all weeks
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to shuffle options while preserving correct answer
  const shuffleOptions = (question: Question): Question => {
    const originalCorrectOption = question.options[question.correctAnswer];

    // Create a new question with shuffled options
    const shuffledOptions = shuffleArray([...question.options]);

    // Find the new index of the correct answer
    const newCorrectAnswerIndex = shuffledOptions.findIndex(
      (option) => option === originalCorrectOption
    );

    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswerIndex,
    };
  };

  // For the "ultimate" challenge mode, combine and randomize questions from all weeks
  if (mode === "assignment") {
    let allQuestions: Question[] = [];
    // Gather questions from all weeks (excluding assignment)
    for (const week in weekQuestions) {
      if (week !== "assignment") {
        allQuestions = [...allQuestions, ...weekQuestions[week]];
      }
    }
    // Shuffle all questions and their options
    return shuffleArray(allQuestions).map((q) => shuffleOptions(q));
  }

  // For the "all" mode, combine questions from all weeks
  if (mode === "all") {
    let allQuestions: Question[] = [];
    for (const week in weekQuestions) {
      allQuestions = [...allQuestions, ...weekQuestions[week]];
    }
    // Shuffle all questions and their options
    return shuffleArray(allQuestions).map((q) => shuffleOptions(q));
  }

  // Handle specific week or assignment mode
  if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
    // Return shuffled questions with shuffled options for the specific mode
    return shuffleArray(weekQuestions[mode]).map((q) => shuffleOptions(q));
  }

  // Fallback - if mode doesn't exist or has no questions
  console.error(`No questions found for mode: ${mode}`);

  // Return default questions instead of empty array
  return shuffleArray(
    weekQuestions.week1 || [
      {
        question: "Default question when no questions are found",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0,
        explanation:
          "This is a placeholder question since no questions were found for the selected mode.",
      },
    ]
  ).map((q) => shuffleOptions(q));
}
