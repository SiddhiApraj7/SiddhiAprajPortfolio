// Real content from Siddhi's resume, with a few gaps still marked TODO
// (GitHub profile URL — the resume only lists the old portfolio's Pages URL).

export const about = {
  name: "Siddhi Apraj",
  pronouns: "she/her",
  role: "ML Engineer + Full-Stack · MS in AI, CMU",
  tagline: "Curious by default, shipping by necessity.",
  bio: [
    "Hi, I'm Siddhi! I'm an AI/ML engineer and MSAII student at Carnegie Mellon University, passionate about building intelligent systems with LLMs, multimodal models, and AI agents. I love taking interesting ideas, getting my hands dirty with the technical details, and turning them into things that actually work.",
    "Outside of work you'll find me exploring anything that piques my curiosity — singing, art, or travel!",
    "Looking for MLE, AIE, FDE roles for Summer 2027.",
  ],
  openTo: ["ML Engineer", "AI Engineer", "Forward Deployed Engineer"],
  location: "Pittsburgh, PA",
};

export type EducationItem = {
  institution: string;
  degree: string;
  dates: string;
  details: string;
};

export const education: EducationItem[] = [
  {
    institution: "Carnegie Mellon University",
    degree: "M.S. in Artificial Intelligence and Innovation (MSAII)",
    dates: "Expected May 2027 · GPA 4.04/4.0",
    details:
      "Machine Learning, Deep Learning, Multimodal ML, Advanced NLP, AI Engineering, AI Agents, LLM Systems, Advanced Computer Vision, Coding Bootcamp, Data Science",
  },
  {
    institution: "Indian Institute of Technology (IIT) Ropar",
    degree: "B.Tech in Mathematics and Computing",
    dates: "May 2025 · GPA 3.89/4.0",
    details:
      "Machine Learning, Artificial Intelligence, Optimization Techniques, Linear Algebra, Graph Theory, Distributed Algorithms, Theory of Computation",
  },
];

export type SkillNode = {
  id: string;
  label: string;
  category: "languages" | "tools" | "ml" | "fullstack";
  /** Where this was used/learned, for skills that aren't tied to a showcased project. */
  usedIn?: string[];
};

export const skillCategories: Record<SkillNode["category"], { label: string; color: string }> = {
  languages: { label: "Languages", color: "var(--color-cyan)" },
  tools: { label: "Tools & Infra", color: "var(--color-green)" },
  ml: { label: "ML / AI", color: "var(--color-magenta)" },
  fullstack: { label: "Full-Stack", color: "var(--color-purple)" },
};

// Ordered as network layers: languages -> tools/infra -> ml/ai -> full-stack.
// This is the resume's full skills list — layer sizes are uneven on purpose, like a real net.
export const skillNodes: SkillNode[] = [
  { id: "python", label: "Python", category: "languages" },
  { id: "javascript", label: "JavaScript", category: "languages" },
  { id: "sql", label: "SQL", category: "languages", usedIn: ["C3 AI internship"] },
  { id: "cpp", label: "C/C++", category: "languages", usedIn: ["IIT Ropar coursework"] },
  { id: "java", label: "Java", category: "languages", usedIn: ["Coding Bootcamp course, CMU"] },
  { id: "matlab", label: "Matlab", category: "languages", usedIn: ["IIT Ropar coursework"] },
  { id: "html_css", label: "HTML/CSS", category: "languages" },

  { id: "azure", label: "Azure", category: "tools", usedIn: ["AI Engineering course, CMU"] },
  { id: "aws", label: "AWS", category: "tools" },
  { id: "gcp", label: "GCP", category: "tools" },
  { id: "firebase", label: "Firebase", category: "tools" },
  { id: "docker", label: "Docker", category: "tools", usedIn: ["AI Engineering course, CMU"] },
  { id: "wandb", label: "W&B", category: "tools", usedIn: ["Deep Learning course, CMU"] },
  { id: "playwright", label: "Playwright", category: "tools", usedIn: ["American Express internship", "Washmetrix internship"] },
  { id: "tailwind", label: "Tailwind", category: "tools" },
  { id: "latex", label: "LaTeX", category: "tools", usedIn: ["IIT Ropar coursework"] },
  { id: "gapps", label: "Google Apps Script", category: "tools" },

  { id: "pytorch", label: "PyTorch", category: "ml" },
  { id: "sklearn", label: "scikit-learn", category: "ml", usedIn: ["Deep Learning course, CMU"] },
  { id: "pandas", label: "Pandas", category: "ml", usedIn: ["CMU coursework"] },
  { id: "numpy", label: "NumPy", category: "ml", usedIn: ["CMU coursework"] },
  { id: "huggingface", label: "Hugging Face", category: "ml", usedIn: ["CMU coursework", "IIT Bombay research"] },
  { id: "openai", label: "OpenAI API", category: "ml" },
  { id: "langchain", label: "LangChain", category: "ml" },
  { id: "langgraph", label: "LangGraph", category: "ml", usedIn: ["IIT Bombay research"] },
  { id: "llamaindex", label: "LlamaIndex", category: "ml" },
  { id: "chromadb", label: "ChromaDB", category: "ml" },

  { id: "react", label: "React", category: "fullstack" },
  { id: "react_native", label: "React Native", category: "fullstack" },
  { id: "node", label: "Node.js", category: "fullstack" },
  { id: "express", label: "Express.js", category: "fullstack" },
  { id: "mongodb", label: "MongoDB", category: "fullstack" },
  { id: "prisma", label: "Prisma", category: "fullstack" },
  { id: "fastapi", label: "FastAPI", category: "fullstack", usedIn: ["CMU coursework", "IIT Bombay research"] },
];

export type SkillLink = { source: string; target: string };

// Curated, not exhaustive — each edge is a real pairing (used together on a project,
// or one depends on the other), not just "same category."
export const skillLinks: SkillLink[] = [
  { source: "python", target: "pytorch" },
  { source: "python", target: "pandas" },
  { source: "python", target: "numpy" },
  { source: "python", target: "sklearn" },
  { source: "python", target: "langchain" },
  { source: "python", target: "fastapi" },
  { source: "python", target: "openai" },

  { source: "javascript", target: "react" },
  { source: "javascript", target: "node" },
  { source: "javascript", target: "react_native" },
  { source: "javascript", target: "playwright" },
  { source: "javascript", target: "express" },
  { source: "javascript", target: "gapps" },
  { source: "html_css", target: "react" },
  { source: "html_css", target: "tailwind" },
  { source: "tailwind", target: "react" },
  { source: "sql", target: "prisma" },
  { source: "sql", target: "fastapi" },

  { source: "docker", target: "aws" },
  { source: "docker", target: "gcp" },
  { source: "docker", target: "azure" },
  { source: "docker", target: "fastapi" },
  { source: "docker", target: "node" },
  { source: "aws", target: "react_native" },
  { source: "aws", target: "mongodb" },
  { source: "gcp", target: "pytorch" },
  { source: "gcp", target: "langchain" },
  { source: "azure", target: "openai" },
  { source: "firebase", target: "react_native" },
  { source: "firebase", target: "react" },
  { source: "wandb", target: "pytorch" },
  { source: "playwright", target: "node" },
  { source: "gapps", target: "openai" },
  { source: "gapps", target: "mongodb" },

  { source: "pytorch", target: "huggingface" },
  { source: "pytorch", target: "langchain" },
  { source: "pytorch", target: "fastapi" },
  { source: "huggingface", target: "langchain" },
  { source: "huggingface", target: "openai" },
  { source: "langchain", target: "langgraph" },
  { source: "langchain", target: "llamaindex" },
  { source: "langgraph", target: "openai" },
  { source: "llamaindex", target: "openai" },
  { source: "sklearn", target: "pandas" },
  { source: "sklearn", target: "numpy" },
  { source: "pandas", target: "numpy" },
  { source: "chromadb", target: "langchain" },

  { source: "fastapi", target: "langchain" },
  { source: "fastapi", target: "mongodb" },
  { source: "react", target: "node" },
  { source: "react", target: "mongodb" },
  { source: "node", target: "mongodb" },
  { source: "node", target: "prisma" },
  { source: "prisma", target: "mongodb" },
  { source: "express", target: "node" },
  { source: "express", target: "mongodb" },
];

export type ProjectLink = { label: string; url: string };

export type Project = {
  title: string;
  category: SkillNode["category"];
  context?: string;
  stack: string[];
  blurb: string;
  result?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Uncertainty-Aware RAG Knowledge Distillation",
    category: "ml",
    context: "Advanced NLP Course Team Project · Dr. Sean Welleck",
    stack: ["RAG", "BM25", "PyTorch", "Qwen", "Llama"],
    blurb:
      "Confidence-weighted RAG knowledge distillation framework for multi-hop QA, combining hybrid BM25+dense retrieval, self-consistency scoring, and teacher-verbalized confidence.",
    result: "Trained a 3B student model on 30K HotpotQA examples.",
  },
  {
    title: "Graph-Enhanced Multimodal Web Agent",
    category: "ml",
    context: "Multimodal ML Course Team Project · Dr. Daniel Fried, Dr. David Mortensen",
    stack: ["Multimodal ML", "Graph Transformer", "Qwen3-VL", "LoRA"],
    blurb:
      "Graph-augmented multimodal web agent for web navigation, integrating a 3-layer DOM Graph Transformer with Qwen3-VL-8B and LoRA fine-tuning.",
    result: "Improved element grounding & action prediction on Multimodal-Mind2Web.",
  },
  {
    title: "Pairs Trading with Machine Learning",
    category: "ml",
    context: "B.Tech Team Project · Dr. Puneet Pasricha",
    stack: ["Python", "Gaussian Process Regression", "PCA", "Clustering", "Pandas", "NumPy"],
    blurb:
      "Replicated 3 classical pair-selection strategies (Distance, Cointegration, Copula) as baselines, then introduced a novel Gaussian Process Regression algorithm using rolling windows and kernel combinations.",
    result: "Novel Gaussian Process Regression algorithm for pair selection, enhanced via PCA + clustering across 84 dates, 500+ matrices.",
    links: [{ label: "Report", url: "https://drive.google.com/file/d/1Q5U6cfG8CYYFcINSi8GKWum3bvgZuGgF/view" }],
  },
  {
    title: "Gmail AI Assistant",
    category: "ml",
    context: "Research Intern Project · IIT Bombay, Technology Innovation Hub",
    stack: ["Python", "Google Apps Script", "OpenAI API", "MongoDB", "Gmail API", "GCP"],
    blurb:
      "Organizes a flooded inbox automatically — sorts incoming mail, drafts quick replies, and consolidates action items into a single to-do list so nothing important gets buried.",
    result: "Reduced cognitive workload by ~1.5 hours/week.",
    links: [
      { label: "GitHub", url: "https://github.com/SiddhiApraj7/GmailAIAssistant" },
      { label: "Demo", url: "https://drive.google.com/file/d/1QnAZXdjiz3ACcDAkmh1o4aAabl6R35Y_/view" },
    ],
  },
  {
    title: "Product Repair Application",
    category: "ml",
    stack: ["Python", "Llama 3.1 8B", "ChromaDB", "LangChain"],
    blurb:
      "Takes a photo of a broken device plus a description of the problem, then returns actionable repair steps pulled from a database of repair manuals or the web.",
    result: "Photo + prompt in, actionable repair steps out.",
    links: [
      { label: "GitHub", url: "https://github.com/SiddhiApraj7/ProductRepairAppProject" },
      {
        label: "Demo",
        url: "https://www.canva.com/design/DAGPJIe9ZA8/aGUPZcBR4oIfknAbvU71Cw/view?utm_content=DAGPJIe9ZA8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      },
    ],
  },
  {
    title: "DigiRupi — E-RUPI Digital Wallet App",
    category: "fullstack",
    context: "2nd Prize Winner Team · AMEX Makeathon '23",
    stack: ["React Native", "AWS Amplify", "RDS", "Prisma ORM"],
    blurb:
      "Full-stack wallet app integrating UPI and E-RUPI, with real-time voucher issuance and redemption across 3 user roles and multi-layered authentication.",
    result: "2nd Prize among 12,500+ registrations, AMEX Makeathon '23.",
    links: [
      { label: "GitHub", url: "https://github.com/SiddhiApraj7/Amex-collab" },
      { label: "Demo", url: "https://www.youtube.com/watch?v=SMb2W81xgX0" },
    ],
  },
  {
    title: "GDSC Management Portal",
    category: "fullstack",
    context: "Google Developer Student Club · IIT Ropar",
    stack: ["React", "JavaScript", "Node.js", "Tailwind", "Firebase", "MongoDB", "HTML/CSS", "GCP"],
    blurb:
      "Management portal for Google Developer Student Club members to pitch ideas, host projects, and collaborate on their educational growth.",
    result: "Ideation, project hosting & collaboration for GDSC members.",
    links: [
      { label: "GitHub", url: "https://github.com/SiddhiApraj7/GDSCManagementPortal" },
      { label: "Live Site", url: "https://gdsc-management-portal.vercel.app/" },
    ],
  },
  {
    title: "LibConnect — Library Management App",
    category: "fullstack",
    context: "Campus Project · IIT Ropar",
    stack: ["React Native", "react-native-geolocation", "JavaScript", "Express.js", "MongoDB"],
    blurb:
      "All-in-one app for the IIT Ropar library — real-time seat availability with automated seat management, digitized access to study resources, and a system for retrieving misplaced belongings, replacing manual entries.",
    links: [
      { label: "GitHub", url: "https://github.com/SiddhiApraj7/DEP" },
      {
        label: "Demo",
        url: "https://www.canva.com/design/DAF-hMplvQM/YBY2reWWQVSc6mgE6BTTTA/view?utm_content=DAF-hMplvQM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      },
    ],
    result: "Real-time seats, digitized resources, and lost-and-found — all in one app.",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  featured?: boolean;
  /** Chronological order, oldest = 1. Drives the x-axis of the career growth curve. */
  order: number;
  /** Rough scope/impact, 1-10. Drives the y-axis — not just a straight line up. */
  scope: number;
  /** Short label shown next to its dot on the career growth curve. */
  label: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Forward Deployed Engineering Intern",
    org: "C3 AI · Redwood City, CA",
    dates: "May 2026 – Aug 2026",
    bullets: [
      "Contributed to a cattle marketing optimization solution by identifying predictive features, evaluating classical ML models, and designing data models and full-stack software, achieving projected profitability of $15 per head.",
    ],
    order: 5,
    scope: 8,
    label: "C3 AI",
  },
  {
    role: "Graduate Research Assistant, ChangeLing Lab",
    org: "Carnegie Mellon University · Advised by Dr. David Mortensen",
    dates: "Jan 2026 – Aug 2026",
    bullets: ["Research Assistant in the ChangeLing Lab under Dr. David Mortensen."],
    featured: true,
    order: 4,
    scope: 9,
    label: "ChangeLing Lab",
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Carnegie Mellon University · Question Answering with LLMs",
    dates: "Aug 2026",
    bullets: ["Teaching Assistant under Dr. Eric Nyberg & Dr. Teruko Mitamura."],
    order: 6,
    scope: 7,
    label: "CMU TA",
  },
  {
    role: "Research Intern",
    org: "IIT Bombay, Technology Innovation Hub · Mumbai, India",
    dates: "Aug 2024 – Dec 2024",
    bullets: [
      "Designed a Gmail AI Assistant leveraging Google Workspace, OpenAI API, and MongoDB to auto-organize inboxes and draft replies, reducing cognitive workload by ~1.5 hours/week.",
      "Implemented cheque image preprocessing (shadow removal), achieving ~70% accuracy on a custom augmented dataset.",
    ],
    order: 3,
    scope: 6,
    label: "IIT Bombay",
  },
  {
    role: "Software Engineering Intern",
    org: "American Express · Bangalore, India",
    dates: "May 2024 – Jul 2024",
    bullets: [
      "Built an automated testing framework (Playwright and JavaScript), improving test coverage across 5+ key workflows and lowering QA effort by ~40%.",
    ],
    order: 2,
    scope: 4,
    label: "Amex",
  },
  {
    role: "Data Science Intern",
    org: "Washmetrix / R-Daten LLP · India/USA",
    dates: "Dec 2022 – Jan 2023",
    bullets: [
      "Automated testing of business workflows and an operations metrics dashboard using Microsoft Playwright and Node.js, cutting manual testing effort by ~80% and enabling weekly production deployments.",
    ],
    order: 1,
    scope: 3,
    label: "Washmetrix",
  },
];

export const contact = {
  email: "sapraj@andrew.cmu.edu",
  github: "https://github.com/SiddhiApraj7",
  linkedin: "https://www.linkedin.com/in/siddhi-apraj/",
  resumeUrl: "https://drive.google.com/file/d/1LN4ane-hAciqIHinlJwebVmO072F4BZC/view?usp=sharing",
};
