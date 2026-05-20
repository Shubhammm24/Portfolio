import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python (Advanced)",
    image: "python.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "JavaScript (ES6+)",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C",
    image: "c.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "SQL",
    image: "sql.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 65,
    height: 65,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React.js",
    image: "react.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Scikit-learn",
    image: "scikitlearn.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Pandas",
    image: "pandas.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "NumPy",
    image: "numpy.svg",
    width: 65,
    height: 65,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "AWS (S3/EC2)",
    image: "aws.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Streamlit",
    image: "streamlit.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "LangChain",
    image: "langchain.svg",
    width: 65,
    height: 65,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "GitHub Actions",
    image: "githubactions.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Kafka",
    image: "kafka.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 65,
    height: 65,
  },
] as const;

export const OTHER_SKILL = [] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shubham-ranjan-58abba28b/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Shubhammm24",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://leetcode.com/u/Shubhammm24/",
  },
] as const;

export const PROJECTS = [
  {
    title: "G One Sync AI",
    description:
      "An AI-powered ICU deterioration prediction system using a multi-model ensemble (XGBoost, BiLSTM, Transformer) achieving 0.9579 AUROC. Features a real-time ingestion pipeline via FastAPI & Kafka, clinical-grade probability calibration, and a WebSocket-powered dashboard with live ECG/PPG waveforms, counterfactual modeling, and SHAP-based explainability.",
    image: "/projects/project-1.png",
    link: "https://github.com/Shubhammm24/G_One_Sync_AI",
  },
  {
    title: "TriPi — AI Travel Agent",
    description:
      "A generative AI travel planner built with LangChain & Google Gemini API that maintains conversational state across 25+ turns, boosting user retention by 45%. Engineered a RAG-style prompt system handling 15+ user constraints (budget, dietary, mobility) with 98% itinerary accuracy. Optimized LLM latency by 30% through efficient context management.",
    image: "/projects/project-2.png",
    link: "https://github.com/Shubhammm24/TriPi",
  },
  {
    title: "GoTo Cab Rental Platform",
    description:
      "A full-stack ride-hailing platform with real-time ride matching via Socket.io & MongoDB 2dsphere queries, handling 5K+ concurrent WebSockets with <200ms latency. Features JWT & MFA auth via Twilio (99.9% verification), Razorpay payment integration, and Google Maps dynamic routing. Achieved 98/100 Lighthouse performance score.",
    image: "/projects/project-3.png",
    link: "https://github.com/Shubhammm24/GoTo",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Shubhammm24",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shubham-ranjan-58abba28b/",
      },
      {
        name: "LeetCode",
        icon: null,
        link: "https://leetcode.com/u/Shubhammm24/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:shubham0003nov@gmail.com",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shubham-ranjan-58abba28b/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "IIIT Bhopal",
        icon: null,
        link: "https://www.iiitbhopal.ac.in/",
      },
      {
        name: "My Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:shubham0003nov@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Shubhammm24",
  resume: "https://drive.google.com/file/d/1zWKMxGEVbXMU5CGSWTf3KAqcEbmy1uTx/view?usp=sharing",
};
