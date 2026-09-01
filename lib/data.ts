export type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  codeUrl?: string;
  demoUrl?: string;
};

export type SkillItem = {
  name: string;
  percent: number;
};

export type SkillCategory = {
  icon: string;
  title: string;
  skills: SkillItem[];
};

export type HonorItem = {
  date: string;
  title: string;
  event: string;
  description: string;
};

export type EducationItem = {
  date: string;
  degree: string;
  school: string;
  description: string;
};

export const hero = {
  name: "Chương Trần Anh",
  avatar: "/chun.jpg",
  typingTexts: [
    "Data Science Student @ VinUniversity",
    "Medical AI & Multimodal Learning Researcher",
    "Full-Stack Developer",
  ],
  paragraph:
    "I'm a Data Science student at VinUniversity researching multimodal learning, medical AI, and efficient deep learning — building systems that combine vision, language, and physiological signals, with a focus on real-world healthcare applications.",
  ctaEmail: "jimmytrn154@gmail.com",
};

export const experience: ExperienceItem[] = [
  {
    date: "May 2025 - Present",
    role: "Research Assistant (Part-time)",
    company: "Molecular Breast Cancer Subtype Prediction, VinUniversity",
    bullets: [
      "Engineered a multimodal fusion pipeline (MammoCLIP, GraphAdapter, SAM-Med2D) integrating mammogram imaging with patient clinical reports for cancer subtype classification.",
      "Received a $3,000 VinUniversity research grant and completed a research paper draft for ISBI submission.",
    ],
  },
  {
    date: "June 2026 - Present",
    role: "Computer Vision Engineer Intern (Part-time)",
    company: "Naiscorp Robotics",
    bullets: [
      "Built a real-time multi-face age & gender inference pipeline (ONNX Runtime, MobileNetV3, AdaFace) for robotic deployment.",
      "Achieved 8.5-year MAE age estimation and 96.98% Rank-1 gender accuracy on the AgeDB benchmark.",
    ],
  },
  {
    date: "Aug 2024 - Aug 2025",
    role: "Web Developer & Research Assistant (Part-time)",
    company: "KALM4REC, VinUniversity",
    bullets: [
      "Deployed a keyword-driven recommendation visualizer connecting user queries to restaurants for cold-start users.",
      "Completed a graph-based visualization model for the KALM4REC retrieval-augmented recommendation framework.",
    ],
  },
  {
    date: "Feb 2025 - Present",
    role: "Full-Stack Developer",
    company: "DATATHON 2026, VinTelligence · VinUniversity",
    bullets: [
      "Architected the end-to-end registration platform (datathon.site), onboarding 552 teams and 1,856+ contestants at scale.",
      "Provisioned GCP infrastructure to securely distribute 160GB of contest data while keeping cloud spend within budget.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "VinHousing",
    image: "/vinhousing.png",
    description:
      "This project builds an Off-Campus Housing Management System that connects Landlords, Students and Admin. An all-in-one solution from browsing to contract signing.",
    tech: ["NodeJS", "MySQL", "TiDB Cloud"],
    codeUrl: "https://github.com/jimmytrn154/vinahouse",
  },
  {
    title: "FinLove",
    image: "/finlove.png",
    description:
      "FinLove is a comprehensive portfolio construction and analysis platform that integrates advanced quantitative finance methodologies with modern machine learning techniques.",
    tech: ["NextJS", "FastAPI", "Arimax"],
    codeUrl: "https://github.com/dinhieufam/FinLove",
  },
  {
    title: "Naruto Battle Game",
    image: "/naruto.jpg",
    description:
      "An interactive computer vision game where players use physical hand signs to battle without controllers. The system utilizes real-time object detection and style transfer to render avatars and cast abilities based on player gestures.",
    tech: ["YOLOv11", "FastAPI", "NextJS"],
    codeUrl:
      "https://github.com/VinTelligence-DSAI/Track-CV---Naruto-Handsign-Challenge",
  },
  {
    title: "KALM4REC",
    description:
      "A keyword-driven recommendation visualizer for cold-start users — enter keywords like \"rice\" or \"meat\" and explore graph connections between queries and restaurants.",
    tech: ["LLM", "RAG", "Data Viz"],
  },
  {
    title: "Naiscorp Age & Gender Vision",
    description:
      "A real-time multi-face detection pipeline predicting age and gender for robotic deployment, achieving 96.98% Rank-1 gender accuracy on AgeDB.",
    tech: ["ONNX Runtime", "OpenCV", "MobileNetV3"],
  },
  {
    title: "DATATHON 2026 Platform",
    description:
      "The end-to-end registration platform for VinUniversity's first national Data Science & AI Hackathon, built to handle thousands of concurrent registrations across 552 teams.",
    tech: ["Full-Stack", "GCP", "Automated Mailing"],
    demoUrl: "https://datathon.site",
  },
  {
    title: "Learning When to Stop",
    description:
      "Investigated adaptive early-exit strategies for ResNet-18 on CIFAR-10, achieving 87.69% accuracy with 49.54% fewer FLOPs using a reinforcement-learning exit controller.",
    tech: ["PyTorch", "ResNet-18", "Reinforcement Learning"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "fa-code",
    title: "Programming",
    skills: [
      { name: "Python", percent: 90 },
      { name: "JavaScript", percent: 80 },
      { name: "Java", percent: 70 },
      { name: "C / C++", percent: 70 },
      { name: "SQL", percent: 80 },
    ],
  },
  {
    icon: "fa-brain",
    title: "AI & Data Science",
    skills: [
      { name: "PyTorch", percent: 75 },
      { name: "OpenCV", percent: 80 },
      { name: "Pandas", percent: 80 },
      { name: "Langchain", percent: 70 },
    ],
  },
  {
    icon: "fa-desktop",
    title: "Front-End",
    skills: [
      { name: "ReactJS", percent: 85 },
      { name: "Tailwind", percent: 85 },
      { name: "HTML/CSS", percent: 90 },
    ],
  },
  {
    icon: "fa-server",
    title: "Back-End & Infra",
    skills: [
      { name: "Flask/FastAPI", percent: 80 },
      { name: "Node.js", percent: 80 },
      { name: "Git / GitHub", percent: 90 },
      { name: "Docker", percent: 50 },
    ],
  },
];

export const honors: HonorItem[] = [
  {
    date: "Jul 2026",
    title: "NEURIM — Top 5 Finalist, Robotics & Physical AI Track",
    event: "Agentic AI Build Week 2026 · GenAI Fund",
    description:
      "Built a brain-in-the-loop generative AI system using EEG-derived preference signals to iteratively evaluate and refine generated images.",
  },
];

export const education: EducationItem[] = [
  {
    date: "2024 - 2028",
    degree: "B.S. Data Science",
    school: "VinUniversity",
    description:
      "Major GPA: 3.61/4.00. Coursework: Data Mining & Big Data Analytics, Linear Algebra, Data Science Programming, Probability & Statistics.",
  },
];

export const contact = {
  email: "jimmytrn154@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/ch%C6%B0%C6%A1ng-tr%E1%BA%A7n-anh-6a02b3286/",
  github: "https://github.com/jimmytrn154",
};
