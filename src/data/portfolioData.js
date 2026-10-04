// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Tarra Jaganadharao",
  firstName: "Tarra Jaganadharao",
  brandName: "Tarra Jaganadharao",
  title: "AIML Engineer",
  location: "Andhra Pradesh, India",
  phone: "+91 93980-97028",
  emails: {
    primary: "jaganadharaotarra188@gmail.com",
    secondary: "jaganadharaotarra188@gmail.com",
  },
  summary:
    "Aspiring AIML engineer and motivated B.Tech Artificial Intligence and Machine Learning student with solid skills in React, Python, SQL. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Tarra_Jaganadharao_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/jagan-bit",
  linkedin: "https://www.linkedin.com/in/jaganadharao-tarra-581862371/",
  instagram: "https://www.instagram.com/jagan__tarra/",
};

export const heroContent = {
  greeting: "Hi, I'm Tarra Jaganadharao",
  titleHighlight: "AIML & Web Developer",
  subtitle:
    "I build fast, scalable applications using Java, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:jaganadharaotarra188@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Tarra Jaganadharao,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Tarra_Jaganadharao_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Tarra Jaganadharao</span>, an aspiring AIML Engineer, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Python", "HTML","JavaScript","SQL",],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 60 },
        { name: "C++", level: 70 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 70 },
        { name: "JavaScript", level: 72 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 70 },
        { name: "react", level: 70 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "MongoDB Compass", level: 80 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "AI TOOLs & Automation",
      skills: [
        { name: "Claude AI", level: 75 },
        { name: "Chatgpt Codex", level: 70 },
        { name: "Preplexity", level: 80 },
        { name: "Replit AI", level: 70 },
        { name: "Google Collab", level: 70 },
      ]
    },
    {
      title: "Computer Science & Concepts",
      skills: [
        { name: "Data Structure", level: 60 },
        { name: "OOPS", level: 60 },
        { name: "SQL", level: 70 },
        { name: "Machine Learning Concepts", level: 70 },
        { name: "Deep Learning Concepts", level: 50 }
      ]
    },
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Content Of Social Media",
  heading: "Creative Direction",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    
    {
      title: "My Own Creative Edits",
      description: "My personal editing account",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
  
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Smartbridge",
    role: "Full Stack Devoloper Mern Stack Intern",
    duration: "June 2026 - August 2026",
    skills: ["Full Stack", "web Intelligence", "Dashboard Design", "Data storing"],
    tech: ["Web Languages", "MongoDB", "Vscode", "SQL Tools"]
  },
  {
    organization: "ServiceNow University",
    role: "AI & Frameworks",
    duration: "May 2026 - June 2026",
    skills: ["AI Fundmentals", "Agenti AI", "Automated tested Frames"],
    tech: ["Web Languages", "MongoDB", "Vscode", "SQL Tools"]
  },
  {
    organization: "Smartbridge",
    role: "AI Intern",
    duration: "june 2026 - August 2026",
    skills: ["AI Fundmentals", "Responsive Layouts", "AI Tools"],
    tech: ["AI Tools", "Coding", "Python", "cloud"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new languages like SQL, javascript, or AI tools like Antigravity." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." },
  { name: "Quick Learner", icon: "🚀", desc: "Learning Quickly To The New Skills, New Technologies and AI Tools." }
];

export const projects = [
  {
    id: "MOBILE STORE",
    number: "01",
    badge: null,
    title: "GMS Mobile Store",
    description:
      "GMS Mobile Store is a modern mobile e-commerce platform that allows users to browse smartphones and accessories, manage their cart, complete purchases, and track orders through a responsive and user-friendly shopping experience.",
    techTags: [
      "React",
      "Next.js",
      "NestJS",
    ],
    links: {
      github: "https://github.com/jaganadharao/gms-mobile-store",
      demo: "https://gms-backend-jncb.onrender.com/",
    },
    isFlagship: true,
  },
  {
    id: "Spice & Soul",
    number: "02",
    badge: null,
    title:"Spice & Soul",
    description:
      "A platform connecting local skilled workers with customers, featuring real-time search, worker profiles, and booking management with full database integration.",
    techTags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/jaganadharao/spice-soul",
      demo: "https://spice-soul22.onrender.com"
      
    },
    isFlagship: true,
  },
  {
    id: "Share Your Ideas",
    number: "03",
    badge: null,
    title: "Sharoo",
    description:
      "Sharoo is a community-driven idea-sharing platform where users can post, discover, upvote, and discuss startup, product, technology, design, and creative ideas.",
    techTags: ["React", "Node.js", "MongoDB","superbase"],
    links: {
      github: "https://github.com/jaganadharao/Sharoo", 
      demo: "https://sharoo.onrender.com"
    },
    isFlagship: true,
  },
  {
    id: "AI Resume Analyzer",
    number: "04",
    badge: null,
    title:"AI Resume Analyzer",
    description:
      "AI Resume Analyzer – An AI-powered web application that analyzes resumes, calculates ATS scores, identifies skill gaps, and provides personalized recommendations to improve job opportunities.",
    techTags: [ "react", "javascript","superbase","Node.js"],
    links: {
      github: "https://github.com/jaganadharao/AI_Resume_Analyzer.git",
      demo: "https://ai-resume-analyzer-9dht.onrender.com"
    },
    isFlagship: true,
  },
   {
    id: "Care Connect",
    number: "05",
    badge: null,
    title:"Care Connect",
    description:
      "A platform connecting local Doctors Appoitment,and booking management system.",
    techTags: [ "Node.js","javascript","react","render"],
    links: {
      github: "https://github.com/jaganadharao/Care-Connect.git",
      demo: "https://care-connect-rv9y.onrender.com"
    },
    isFlagship: true,
  },
  
];

export const certificates = {
  featured: [
    {
      name: "Generative AI by Google cloud",
      issuer: "Google Skills",
      icon: "☁️",
    },
    {
      name: "NPTEL Certificates",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Artificial Intillegence And Machine Learning",
      issuer: "Smartbridge",
      icon: "💼",
    },
    {
      name: "Full Stack Mern",
      issuer: "SmartBridge",
      icon: "🎓",
    },
    {
      name: "Network Analysis",
      issuer: "Cisco",
      icon: "🌐",
    },
    {
      name: "Anthropic Claude",
      issuer: "CLaude",
      icon: "💭",
    },


  ],
  viewAllUrl:
    "https://drive.google.com/drive/u/0/folders/1EbAaib8DXy1ro3Ndik7vptg0YMp7vpsl",
};

export const education = {
  degree: "B.Tech – Artificial Intillegence & Machine Learning Engineering",
  institution: "Kallam Haranadhareddy Institute Of Technology",
  cgpa: "8.5",
  graduation: "2027",
  twelfth: "Diploma – 79%",
  tenth: "10th SSC – 90%",
};

export const footerContent = {
  taglines: [
    "AIML Engineering & Web Dev",
    "Python · SQL · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech AIML · CGPA 8.5",
  copyright: `© ${new Date().getFullYear()} Tarra Jaganadharao | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
