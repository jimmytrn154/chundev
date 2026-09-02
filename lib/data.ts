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

export type SkillGroup = {
  title: string;
  items: string[];
};

export type NewsItem = {
  date: string;
  text: string;
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

export const profile = {
  name: "Tran Anh Chuong",
  vietnameseName: "Chương Trần Anh",
  photo: "/chun.jpg",
  title: "Undergraduate Researcher",
  affiliation: "College of Engineering and Computer Science, VinUniversity",
  location: "Hanoi, Vietnam",
};

export const about =
  "I am a third-year Data Science undergraduate at VinUniversity, working as a part-time research assistant on multimodal medical AI. My current work integrates mammogram imaging with clinical text for molecular breast cancer subtype classification, alongside applied computer vision and full-stack engineering for research infrastructure.";

export const researchInterests = {
  keywords: [
    "Multimodal Learning",
    "Medical AI",
    "Efficient Deep Learning",
    "Generative & Agentic AI",
    "Neural Data Science",
  ],
  statement:
    "I am particularly interested in developing reliable and computationally efficient AI systems that integrate vision, language, and neural or physiological signals. My research approach emphasizes rigorous empirical evaluation through ablation studies, error analysis, and deployment-aware benchmarking, with a particular interest in translating multimodal and generative AI methods to healthcare and real-world applications.",
};

export const news: NewsItem[] = [
  {
    date: "Jul 2026",
    text: "Selected as a Top 5 finalist in the Robotics & Physical AI track at Agentic AI Build Week 2026, organized by GenAI Fund.",
  },
  {
    date: "Jun 2026",
    text: "Joined Naiscorp Robotics as a Computer Vision Engineer Intern, working on real-time face analysis for robotic deployment.",
  },
  {
    date: "May 2025",
    text: "Joined the Molecular Breast Cancer Subtype Prediction group at VinUniversity as a research assistant.",
  },
  {
    date: "Feb 2025",
    text: "Began building the registration platform for DATATHON 2026, VinUniversity's first national Data Science & AI hackathon.",
  },
  {
    date: "Aug 2024",
    text: "Started as a research assistant and web developer on KALM4REC, a keyword-driven recommendation framework for cold-start users.",
  },
];

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
    codeUrl: "https://github.com/jimmytrn154/AI-Final-Project",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Java", "C / C++", "SQL"],
  },
  {
    title: "AI & Data Science",
    items: [
      "PyTorch",
      "OpenCV",
      "ONNX Runtime",
      "Pandas",
      "LangChain",
      "scikit-learn",
    ],
  },
  {
    title: "Web & Systems",
    items: ["React", "Next.js", "Node.js", "Flask / FastAPI", "Tailwind CSS"],
  },
  {
    title: "Infrastructure",
    items: ["Google Cloud Platform", "Docker", "Git / GitHub", "MySQL"],
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
    school: "College of Engineering and Computer Science, VinUniversity",
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
