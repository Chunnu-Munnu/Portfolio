export const profile = {
  name: "Amogh Sharma",
  role: "Computer Science Engineer",
  email: "amoghrules20@gmail.com",
  phone: "+91 8495910475",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/Chunnu-Munnu",
  linkedin: "https://www.linkedin.com/in/amogh-sharma-76ba49253/",
  resume: "/assets/Amogh_Sharma_Resume.pdf",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Wins", href: "#wins" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { value: "15+", label: "hackathon wins" },
  { value: "8.00", label: "current CGPA" },
  { value: "2028", label: "PESU CSE batch" },
  { value: "Top 1.5%", label: "national finalist project" },
];

export const skillGroups = [
  {
    title: "AI and Vision",
    items: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "MediaPipe", "DenseNet-121"],
  },
  {
    title: "Product Engineering",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask"],
  },
  {
    title: "Data Platforms",
    items: ["dbt", "Airflow", "Spark", "Databricks", "SQL", "MongoDB"],
  },
  {
    title: "Blockchain and DevOps",
    items: ["Solidity", "Web3.js", "Hardhat", "Docker", "GitHub", "Supabase"],
  },
];

export const draggableSkills = [
  "Python",
  "React",
  "FastAPI",
  "dbt",
  "Airflow",
  "Spark",
  "Databricks",
  "Solidity",
  "Docker",
  "OCR",
  "LLMs",
  "Computer Vision",
];

export const myProjects = [
  {
    id: 1,
    title: "PAYSHIELD AI OPS",
    category: "AI Observability",
    description:
      "Real-time financial risk intelligence platform built around event ingestion, fraud scoring, and observability for production-style payment workflows.",
    subDescription: [
      "Engineered a distributed Docker-based architecture for live transaction analysis and operational monitoring.",
      "Designed a 6-model ensemble across graph analytics, sequence anomaly detection, tabular learning, behavioral biometrics, AML scoring, and language-based fraud detection.",
      "Integrated Gmail IMAP monitoring and Razorpay-linked payment workflows to simulate production-grade event streams.",
      "Built telemetry and root-cause workflows using Prometheus, Loki, Promtail, and Jaeger.",
    ],
    href: "",
    image: "/assets/projects/auth-system.jpg",
    tags: ["Python", "Docker", "Prometheus", "AI"],
  },
  {
    id: 2,
    title: "Intelli-Credit",
    category: "Credit Risk Engine",
    description:
      "AI-powered corporate credit appraisal engine that turns raw financial documents into risk scores, explainability, and audit-ready CAM outputs.",
    subDescription: [
      "Built a full-stack underwriting platform with FastAPI, React, and MongoDB.",
      "Designed a 5-layer data pipeline for document classification, OCR extraction, normalization, GST-bank reconciliation, and fraud flagging.",
      "Developed an ensemble scoring layer using XGBoost, LightGBM, CatBoost, and AdaBoost.",
      "Mapped SHAP explainability to the Five Cs of credit with automated recommendations and risk-based pricing.",
    ],
    href: "",
    image: "/assets/projects/elearning.jpg",
    tags: ["React", "FastAPI", "MongoDB", "ML"],
  },
  {
    id: 3,
    title: "Missile Command Logging System",
    category: "Blockchain and ML",
    description:
      "National hackathon winning system for tamper-proof command logging and real-time validation of sensitive satellite command records.",
    subDescription: [
      "Built a decentralized logging layer to record and verify satellite command data for defense-style workflows.",
      "Used blockchain primitives to create immutable audit trails for sensitive command records.",
      "Implemented ML validation to detect clerical errors and suspicious command patterns.",
      "Won 2nd place at Vyuhatech 2.0 National Hackathon, CMRIT.",
    ],
    href: "",
    image: "/assets/projects/game-engine.jpg",
    tags: ["Solidity", "Python", "ML", "Security"],
  },
  {
    id: 4,
    title: "Questify-AI",
    category: "OCR and LLMs",
    description:
      "Automated education platform that generates question papers and grades handwritten answers with OCR and language models.",
    subDescription: [
      "Built the product with the MERN stack and integrated OCR for handwritten answer extraction.",
      "Used Tesseract OCR and Gemini API for semantic grading, feedback, and question generation.",
      "Reached finalist status in the Future of Work Hackathon, placing in the top 1.5%.",
    ],
    href: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: ["MERN", "Tesseract", "Gemini API", "OCR"],
  },
  {
    id: 5,
    title: "PAML Ocular Disease Detection",
    category: "Medical Imaging",
    description:
      "CNN-based retinal scan classifier focused on early diagnosis and accessible screening workflows.",
    subDescription: [
      "Developed a TensorFlow CNN model to detect ocular disease patterns from retinal scans.",
      "Focused model decisions around early screening support and practical accessibility.",
      "Won 1st place at the PES University ML Project Competition.",
    ],
    href: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: ["Python", "TensorFlow", "CNN", "Healthcare"],
  },
  {
    id: 6,
    title: "Trinetra",
    category: "Assistive Vision",
    description:
      "Smart vision assistance tool for visually impaired users, combining real-time object detection with audio feedback.",
    subDescription: [
      "Engineered real-time object detection using Python, OpenCV, and YOLO.",
      "Integrated audio feedback loops so users receive immediate environmental context.",
      "Designed the workflow around fast, practical assistance rather than passive analytics.",
    ],
    href: "",
    image: "/assets/projects/accessories.jpg",
    tags: ["Python", "OpenCV", "YOLO", "Accessibility"],
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    job: "SatSure",
    date: "Internship",
    contents: [
      "Worked on data platform and pipeline engineering workflows across dbt, Airflow, Spark, and Databricks.",
      "Contributed to production-oriented data movement, transformation, orchestration, and reliability practices.",
      "Strengthened practical engineering habits around maintainable pipelines, clear contracts, and repeatable data workflows.",
    ],
  },
  {
    title: "Computer Science Engineering",
    job: "PES University, Bengaluru",
    date: "2024-2028",
    contents: [
      "B.Tech CSE student focused on AI systems, full-stack products, computer vision, blockchain, and data engineering.",
      "Current CGPA: 8.00, with stronger emphasis on project depth, competitive builds, and real-world engineering practice.",
      "Selected as a GSSoC 2025 contributor and active in technical clubs including Shunya, Nexus AIML, and Equinox.",
    ],
  },
  {
    title: "Leadership and Representation",
    job: "PES MUN, Harvard HPAIR, campus clubs",
    date: "2025-2026",
    contents: [
      "Sponsorship Head at PES MUN Society, managing outreach and securing partners for university events.",
      "Selected to represent PES University at Harvard HPAIR.",
      "Earned High Commendation awards at AICON MUN 2025 and XENORA National MUN 2026.",
    ],
  },
];

export const achievements = [
  "15+ hackathon wins across AI, blockchain, health-tech, and product engineering.",
  "Winner at Syzygy Hackathon, Mystara Hackathon, PAML, and Tech Solstice 2026.",
  "2nd place at Vyuhatech 2.0 National Hackathon in the Blockchain/ML track.",
  "Top 5 Grand Finalist at AWS x Kiro Dev National Hackathon, IIT Bombay.",
  "Top 10 Grand Finalist at Zerve AI Datathon, IIT Bombay.",
  "12th nationwide at CryoVault CTF with cryptography, forensics, and reverse engineering challenges.",
  "4th place at Layer8 CTF, IEEE PESU ECC, specializing in web exploitation and cryptography.",
  "Top 5 finalist at Gradient Ascent AI Hackathon with DenseNet-121 on CheXpert.",
];

export const mySocials = [
  {
    name: "GitHub",
    href: profile.github,
    label: "GH",
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    label: "@",
  },
];
