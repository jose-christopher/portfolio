import React, { useState, useEffect, useRef } from 'react';

// Exact Palette from Antigravity Specification:
// Text: #6C0404, Bg: #F8F5DD, Primary: #F1ACAC, Secondary: #AE0F0F, Accent: #FF813D

const RESUME_DATA = {
  name: "Jose Christopher S",
  title: "Full Stack Developer · MCA Student",
  email: "sjjose1305@gmail.com",
  phone: "+91 96778 60126",
  location: "Tiruchirappalli, Tamil Nadu, India",
  links: {
    github: "https://github.com/jose-christopher",
    linkedin: "https://www.linkedin.com/in/jose-christopher1305/",
    instagram: "https://www.instagram.com/_jose_christo?xtok=MWp3ZXM1eWExemp3dw==",
    portfolio: "https://jose-christopher.github.io/portfolio/"
  }
};

const FEATURED_SLIDES = [
  {
    tag: "Full Stack · Internship Project",
    title: "Smart College Asset & Inventory Management",
    desc: "Centralized web platform built at Frontier Wox Tech to replace manual college asset paperwork. Features multi-level role-based workflows (Admin, HOD, Lab In-charge, Staff), REST APIs with JWT auth, and live inventory deduction upon issuance.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Figma"],
    live: null,
    github: "https://github.com/jose-christopher",
    type: "bars"
  },
  {
    tag: "Interactive · Web App",
    title: "MIRROR · Personality & Self-Discovery Quiz",
    desc: "An engaging 20-question psychometric self-discovery web app evaluating Big Five dimensions. Computes animated trait patterns and matches users to custom personality archetypes with light/dark adaptive styling.",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX"],
    live: "https://jose-christopher.github.io/MIRROR/",
    github: "https://github.com/jose-christopher/MIRROR",
    type: "quiz"
  },
  {
    tag: "Mobile & Web · Weather App",
    title: "Skycast Weather App",
    desc: "Clean, atmospheric weather forecasting application with live meteorological search, providing temperature, humidity metrics, and forecast condition animations powered by OpenWeather & Firebase integration.",
    tech: ["Flutter", "Firebase", "REST API", "Dart"],
    live: "https://skycast-orpin.vercel.app/",
    github: "https://github.com/jose-christopher",
    type: "weather"
  },
  {
    tag: "Editorial UI/UX · System Design",
    title: "Personal Portfolio & Brand Direction",
    desc: "A thoughtful, editorial portfolio exploring high-contrast maroon & cream aesthetics, responsive micro-interactions, smooth scroll reveals, and fluid typography developed with React.",
    tech: ["React", "Typography", "CSS Grid", "Responsive Design"],
    live: "https://jose-christopher.github.io/portfolio/",
    github: "https://github.com/jose-christopher/portfolio",
    type: "editorial"
  }
];

const ALL_PROJECTS = [
  {
    icon: "🏢",
    name: "Smart College Asset & Inventory",
    tag: "MERN Stack",
    desc: "Role-based equipment booking and college inventory pipeline with automated approval hierarchy and PDF report exports.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/jose-christopher",
    linkText: "View Case ↗"
  },
  {
    icon: "🪞",
    name: "MIRROR Quiz App",
    tag: "Interactive JS",
    desc: "20 scenario questions yielding custom archetypes and animated trait radar visualizations. 100% client-side privacy-first.",
    stack: ["JavaScript", "HTML5", "CSS Animations"],
    link: "https://jose-christopher.github.io/MIRROR/",
    linkText: "Play Quiz ↗"
  },
  {
    icon: "🌤️",
    name: "Skycast Weather",
    tag: "Flutter App",
    desc: "Real-time atmospheric status, humidity graphs, and global city search with crisp card interfaces.",
    stack: ["Flutter", "Firebase", "REST APIs"],
    link: "https://skycast-orpin.vercel.app/",
    linkText: "Launch App ↗"
  },
  {
    icon: "🌐",
    name: "Classic Portfolio Website",
    tag: "Responsive Web",
    desc: "The original clean-slate developer profile showing previous project registries, certifications, and academic trajectory.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    link: "https://jose-christopher.github.io/portfolio/",
    linkText: "Visit ↗"
  },
  {
    icon: "🕐",
    name: "Dynamic Clock & Timer",
    tag: "Python / Flutter",
    desc: "Real-time graphical clock and stopwatch built to explore UI cycle updates and asynchronous timers.",
    stack: ["Python", "Flutter", "State Management"],
    link: "https://github.com/jose-christopher",
    linkText: "GitHub ↗"
  },
  {
    icon: "❤️",
    name: "Interactive Valentine Micro-site",
    tag: "Playful UI",
    desc: "Celebratory interactive web experience with physics-based floating hearts, playful hover evasions, and confetti particles.",
    stack: ["HTML", "CSS", "DOM Scripting"],
    link: "https://github.com/jose-christopher",
    linkText: "Inspect ↗"
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "R ", "JavaScript (ES6+)","(Basics)"]
  },
  {
    title: "Web & App Development",
    skills: ["React.js", "Node.js", "Express.js", "Flutter", "HTML5", "CSS3 / Modern Layouts","(Basics)"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB Atlas", "DBMS / SQL", "Firebase", "Vercel & Render Deployment"]
  },
  {
    title: "Tools & Productivity",
    skills: ["Git & GitHub", "VS Code", "Tally Prime", "MS Excel "]
  },
  {
    title: "Design & UX",
    skills: ["Figma UI/UX", "Canva", "Adobe Photoshop", "Responsive Wireframing"]
  }
];

const EXPERIENCE_ITEMS = [
  {
    role: "Full Stack Developer Intern",
    company: "Frontier Wox Tech Pvt. Ltd. (Austin Team)",
    period: "May 2026",
    location: "Hybrid / Tiruchirappalli",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    points: [
      "Engineered a digital asset tracking web app replacing paper registries across college faculties (Admin, HOD, Lab In-charge, Staff).",
      "Created RESTful APIs in Express with secured JSON Web Token (JWT) authorization.",
      "Implemented step-by-step equipment request approvals with automated stock tally deduction upon item issuance.",
      "Built tailored dashboard views and exported audit reports; deployed frontend on Vercel and backend on Render."
    ]
  },
  {
    role: "Assistant Merchandiser",
    company: "BAAS Exports",
    period: "May 2024",
    location: "Tirupur, Tamil Nadu",
    tags: ["Production Scheduling", "Quality Assurance", "Buyer Relations"],
    points: [
      "Coordinated international export consignments and factory production schedules to guarantee on-time shipping.",
      "Monitored multi-stage sample approval, product compliance, and streamlined client communications."
    ]
  }
];

const RESEARCH_ITEMS = [
  {
    year: "2025–26",
    badge: "Team of 5",
    title: "AI in Recruitment — Emerging Paradigms",
    desc: "Explored automated ATS resume parsing, AI screening efficacy, algorithmic sentiment screening, and statistical mitigation of hiring bias."
  },
  {
    year: "2024–25",
    badge: "Individual Paper",
    title: "Impacts of Digital Payment Architectures",
    desc: "Analytical research paper evaluating UPI penetration, mobile wallet economics, financial inclusion, and retail cash replacement trends in South India."
  },
  {
    year: "2026",
    badge: "Business Competition · Pre-Finalist",
    title: "R-CUBED — Circular Waste Business Model",
    desc: "Architected a sustainable B2B circular model linking industrial waste generators directly with verified upcyclers and scrap process facilities."
  }
];

const EDUCATION_ITEMS = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "St. Joseph's College, Tiruchirappalli",
    period: "2025 — Pursuing",
    highlight: "Focus: Full Stack Engineering, Distributed Systems, Software Architecture",
    link: "https://www.sjctni.edu/"
  },
  {
    degree: "B.Com — Computer Applications",
    institution: "St. Joseph's College, Tiruchirappalli",
    period: "2022 — 2025",
    highlight: "Blended curriculum bridging commerce, accounting logic, data handling, and programming.",
    link: "https://www.sjctni.edu/"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Infant Jesus Matric Hr Sec School, Tirupur",
    period: "2021 — 2022",
    highlight: "Commerce & Computer Applications track.",
    link: "https://www.infantjesustiruppur.com/"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Infant Jesus Matric Hr Sec School, Tirupur",
    period: "2019 — 2020",
    highlight: "Graduated with academic distinction.",
    link: "https://www.infantjesustiruppur.com/"
  }
];

const CERTIFICATIONS = [
  { title: "Database Management System", issuer: "SWAYAM NPTEL", icon: "🗄️" },
  { title: "AI Fundamentals", issuer: "IBM SkillsBuild", icon: "🤖" },
  { title: "Getting Started with Generative AI", issuer: "IBM SkillsBuild", icon: "✨" },
  { title: "Microsoft Excel for Business Analysis", issuer: "BE10X", icon: "📊" }
];

// Helper Component for Scroll Reveal
function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rv ${isVisible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const tickerItems = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flutter',
    'Figma UI/UX', 'REST APIs', 'Tally Prime', 'Responsive Layouts', 'Database Systems'
  ];
  const doubledTicker = [...tickerItems, ...tickerItems];

  const handleSlideChange = (nextIndex) => {
    const total = FEATURED_SLIDES.length;
    setActiveSlide((nextIndex + total) % total);
  };

  // Generate downloadable resume text file or open printable view
  const handleDownloadResume = () => {
    const resumeContent = `JOSE CHRISTOPHER S
Tiruchirappalli, Tamil Nadu, India | +91 96778 60126 | sjjose1305@gmail.com
Portfolio: ${RESUME_DATA.links.portfolio}
LinkedIn: ${RESUME_DATA.links.linkedin}
GitHub: ${RESUME_DATA.links.github}

========================================================================
CAREER OBJECTIVE
========================================================================
MCA student with a B.Com (Computer Applications) background and experience
in full stack web development (MERN), business operations, and applied research.
Seeking an entry-level IT or Data role to build impactful digital solutions.

========================================================================
EDUCATION
========================================================================
- Master of Computer Applications (MCA) [2025 - Pursuing]
  St. Joseph's College, Tiruchirappalli
- B.Com (Computer Applications) [2022 - 2025]
  St. Joseph's College, Tiruchirappalli
- HSC & SSLC
  Infant Jesus Matric Hr Sec School, Tirupur

========================================================================
TECHNICAL SKILLS
========================================================================
- Languages: Python, C++, R (Basics), JavaScript (ES6+)
- Web/App Development: React.js, Node.js, Express.js, Flutter, HTML5, CSS3
- Databases: MongoDB Atlas, DBMS, SQL, Firebase
- Tools & Software: Git, GitHub, VS Code, Tally Prime, MS Excel
- Design: Figma UI/UX, Canva, Photoshop

========================================================================
WORK EXPERIENCE
========================================================================
Full Stack Developer Intern | Frontier Wox Tech Pvt. Ltd. (May 2026)
- Built Smart College Asset & Inventory Management System (MERN).
- Developed role-based permissions (Admin, HOD, Lab In-charge, Staff) & JWT auth.
- Implemented automated stock deductions upon approval.

Assistant Merchandiser | BAAS Exports, Tirupur (May 2024)
- Managed production schedules, export compliances, and international client briefs.

========================================================================
KEY PROJECTS
========================================================================
1. Smart College Asset & Inventory System (React, Node, Express, MongoDB)
2. MIRROR Personality & Self-Discovery Quiz (HTML, CSS, JavaScript)
3. Skycast Weather App (Flutter, Firebase)
4. Personal Portfolio Website (HTML, CSS, JavaScript)
5. Dynamic Clock & Timer App (Python, Flutter)

========================================================================
LEADERSHIP & CERTIFICATIONS
========================================================================
- Student Secretary (Shift I), St. Joseph's College
- Master of Ceremonies for collegiate symposia & cultural fests
- Database Management System (SWAYAM NPTEL)
- AI Fundamentals & Generative AI (IBM SkillsBuild)
- Microsoft Excel Master (BE10X)

Languages Known: Tamil (Native), English (Professional Proficiency)
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jose_Christopher_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredProjects = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.stack.some(s => s.toLowerCase().includes(activeFilter.toLowerCase())) || p.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="antigravity-app">
      {/* Dynamic Embedded Styles guaranteeing exact reference specifications */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Caveat:wght@600&display=swap');

        :root {
          color-scheme: light;
          --bg: #F8F5DD;
          --ink: #6C0404;
          --red: #AE0F0F;
          --org: #FF813D;
          --pink: #F1ACAC;
          --card: color-mix(in srgb, #F1ACAC 16%, #F8F5DD);
          --card-hover: color-mix(in srgb, #F1ACAC 28%, #F8F5DD);
          --soft: color-mix(in srgb, #6C0404 74%, #F8F5DD);
          --ln: color-mix(in srgb, #6C0404 16%, #F8F5DD);
          --fh: 'Fraunces', serif;
          --fb: 'Plus Jakarta Sans', sans-serif;
          --fa: 'Caveat', cursive;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        body {
          background-color: var(--bg);
          color: var(--ink);
          font-family: var(--fb);
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .w {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* Top sticky Navigation */
        nav {
          position: sticky;
          top: 0;
          z-index: 90;
          background: color-mix(in srgb, var(--bg) 86%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--ln);
        }

        nav .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        .logo {
          font-family: var(--fh);
          font-weight: 900;
          font-size: 24px;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .logo i {
          color: var(--org);
          font-style: normal;
        }

        .nav-links {
          display: flex;
          gap: 26px;
          font-size: 14.5px;
          font-weight: 600;
        }

        .nav-links a {
          position: relative;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--red);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 14px;
          border: 2px solid var(--ink);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
          font-family: var(--fb);
          text-decoration: none;
          background: transparent;
        }

        .btn.p {
          background: var(--pink);
          color: var(--ink);
        }

        .btn.p:hover {
          transform: translateY(-3px);
          background: var(--org);
          box-shadow: 0 10px 22px -8px var(--red);
        }

        .btn.g {
          background: transparent;
          color: var(--ink);
        }

        .btn.g:hover {
          background: var(--ink);
          color: var(--bg);
          transform: translateY(-2px);
        }

        .btn.accent {
          background: var(--org);
          color: var(--ink);
          border-color: var(--ink);
        }
        .btn.accent:hover {
          background: var(--red);
          color: var(--bg);
        }

        /* Mobile Hamburger */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }

        .mobile-toggle span {
          width: 24px;
          height: 2.5px;
          background: var(--ink);
          border-radius: 4px;
          transition: 0.2s;
        }

        /* Hero Section */
        .hero {
          position: relative;
          text-align: center;
          padding: 95px 0 75px;
          overflow: hidden;
        }

        .bl {
          position: absolute;
          border-radius: 50%;
          filter: blur(65px);
          opacity: 0.55;
          animation: fl 10s ease-in-out infinite;
          pointer-events: none;
        }
        .bl.a {
          width: 340px;
          height: 340px;
          background: var(--pink);
          left: -70px;
          top: 10px;
        }
        .bl.b {
          width: 280px;
          height: 280px;
          background: var(--org);
          right: -50px;
          top: 60px;
          animation-delay: -3.5s;
        }
        .bl.c {
          width: 250px;
          height: 250px;
          background: var(--red);
          left: 45%;
          bottom: -110px;
          opacity: 0.22;
          animation-delay: -6.5s;
        }

        @keyframes fl {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(32px, -24px) scale(1.09); }
        }

        .tag-hand {
          font-family: var(--fa);
          font-size: 24px;
          color: var(--red);
          display: inline-block;
          margin-bottom: 6px;
        }

        h1 {
          font-family: var(--fh);
          font-weight: 900;
          font-size: clamp(38px, 7.5vw, 80px);
          line-height: 1.04;
          margin: 6px 0 18px;
          letter-spacing: -0.025em;
        }

        h1 em {
          font-style: normal;
          color: var(--red);
          background: linear-gradient(transparent 64%, var(--pink) 64% 92%, transparent 92%);
        }

        .lead {
          max-width: 650px;
          margin: 0 auto 28px;
          color: var(--soft);
          font-size: 17.5px;
          line-height: 1.65;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 22px;
          font-size: 13.5px;
          color: var(--soft);
        }

        .hero-socials a {
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 600;
        }

        .hero-socials a:hover {
          color: var(--red);
        }

        /* Marquee Ticker */
        .mq {
          border-block: 2px solid var(--ink);
          background: var(--ink);
          color: var(--bg);
          overflow: hidden;
          white-space: nowrap;
          padding: 12px 0;
          position: relative;
        }

        .mq-track {
          display: inline-block;
          animation: marquee 24s linear infinite;
          font-family: var(--fh);
          font-size: 18px;
          font-weight: 700;
        }

        .mq-item {
          margin: 0 20px;
        }

        .mq-item span.accent-star {
          color: var(--org);
          margin-left: 18px;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Section Global */
        section {
          padding: 85px 0;
        }

        .sh {
          margin-bottom: 34px;
        }

        .sh small {
          font-family: var(--fa);
          font-size: 24px;
          color: var(--red);
          display: block;
        }

        h2 {
          font-family: var(--fh);
          font-weight: 900;
          font-size: clamp(30px, 4.8vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.015em;
        }

        h3 {
          font-family: var(--fh);
          font-size: 24px;
          margin: 0 0 8px;
          line-height: 1.2;
        }

        /* Featured Slider */
        .sl {
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid var(--ln);
          background: var(--card);
          box-shadow: 0 12px 30px -15px rgba(108, 4, 4, 0.12);
        }

        .tr {
          display: flex;
          transition: transform 0.65s cubic-bezier(0.7, 0, 0.2, 1);
        }

        .sd {
          min-width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 38px;
          box-sizing: border-box;
          align-items: center;
        }

        .sd .tg {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 8px;
        }

        .sd p {
          color: var(--soft);
          margin: 0 0 18px;
          font-size: 15px;
          line-height: 1.6;
        }

        .ch {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .ch b {
          font-weight: 600;
          font-size: 12px;
          border: 1px solid var(--ln);
          border-radius: 999px;
          padding: 5px 12px;
          background: var(--bg);
          color: var(--ink);
        }

        .slide-links {
          display: flex;
          gap: 12px;
        }

        /* Graphic Card Previews inside Slider */
        .vis {
          border-radius: 20px;
          min-height: 270px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(135deg, var(--red), var(--org));
          color: var(--bg);
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.15);
        }

        .vis.v2 {
          background: linear-gradient(135deg, var(--pink), var(--org));
        }

        .vis.v3 {
          background: linear-gradient(135deg, var(--ink), var(--red));
        }

        .vis.v4 {
          background: linear-gradient(135deg, #7C1D1D, var(--org));
        }

        .bars {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 150px;
        }

        .bars i {
          flex: 1;
          background: var(--bg);
          border-radius: 6px 6px 2px 2px;
          animation: gr 1.2s ease both;
        }

        @keyframes gr {
          from { transform: scaleY(0.08); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }

        .quiz-op {
          background: var(--bg);
          color: var(--ink);
          border-radius: 12px;
          padding: 12px 16px;
          margin-top: 10px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0,0,0,0.06);
        }
        .quiz-op.selected {
          background: var(--ink);
          color: var(--bg);
        }

        .weather-card-preview {
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }
        .weather-card-preview .temp {
          font-size: 42px;
          font-family: var(--fh);
          font-weight: 900;
          line-height: 1;
        }

        .ln-bar {
          height: 10px;
          border-radius: 6px;
          background: var(--bg);
          opacity: 0.85;
          margin-top: 10px;
        }

        /* Controls */
        .ctl {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 24px;
        }

        .ctl button.arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          background: none;
          color: var(--ink);
          font-size: 19px;
          cursor: pointer;
          transition: 0.2s;
          display: grid;
          place-items: center;
        }

        .ctl button.arrow:hover {
          background: var(--ink);
          color: var(--bg);
          transform: scale(1.05);
        }

        .dt {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ln);
          border: 0;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .dt.on {
          width: 32px;
          border-radius: 6px;
          background: var(--red);
        }

        /* Grid Cards */
        .g3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .cd {
          background: var(--card);
          border: 1px solid var(--ln);
          border-radius: 22px;
          padding: 26px;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .cd:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 36px -18px rgba(174, 15, 15, 0.25);
          border-color: var(--red);
        }

        .cd .y {
          font-family: var(--fa);
          font-size: 20px;
          color: var(--org);
          font-weight: 600;
        }

        .cd p {
          margin: 0;
          color: var(--soft);
          font-size: 14.5px;
        }

        .dot-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-size: 22px;
          margin-bottom: 14px;
          border: 1px solid var(--ln);
        }

        /* Projects filter pills */
        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .filter-btn {
          background: transparent;
          border: 1.5px solid var(--ln);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          color: var(--ink);
          transition: 0.2s;
        }
        .filter-btn.active, .filter-btn:hover {
          background: var(--ink);
          color: var(--bg);
          border-color: var(--ink);
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 28px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(to bottom, var(--red), var(--org));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 38px;
        }

        .timeline-bullet {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--org);
          border: 3px solid var(--bg);
          box-shadow: 0 0 0 2px var(--red);
        }

        .timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
        }

        .period-pill {
          background: var(--pink);
          color: var(--ink);
          border: 1px solid var(--ink);
          font-size: 12px;
          font-weight: 700;
          padding: 2px 12px;
          border-radius: 999px;
        }

        .timeline-points {
          list-style: none;
          margin-top: 10px;
        }

        .timeline-points li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 6px;
          color: var(--soft);
          font-size: 14.5px;
        }

        .timeline-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--red);
          font-weight: 800;
        }

        /* Call to Action Container */
        .ct {
          text-align: center;
          background: var(--ink);
          color: var(--bg);
          border-radius: 34px;
          padding: 68px 28px;
          position: relative;
          overflow: hidden;
          border: 2px solid var(--ink);
        }

        .ct h2 {
          color: var(--bg);
        }

        .ct p {
          color: var(--pink);
          margin: 14px auto 28px;
          max-width: 520px;
          font-size: 16px;
        }

        .ct .btn.p {
          background: var(--org);
          border-color: var(--org);
          color: var(--ink);
        }
        .ct .btn.p:hover {
          background: var(--pink);
          border-color: var(--pink);
        }

        .ct .btn.g {
          border-color: var(--bg);
          color: var(--bg);
        }
        .ct .btn.g:hover {
          background: var(--bg);
          color: var(--ink);
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 40px 0 50px;
          color: var(--soft);
          font-size: 13.5px;
          border-top: 1px solid var(--ln);
        }

        /* Reveal animations */
        .rv {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s cubic-bezier(0.2, 0, 0, 1), transform 0.7s cubic-bezier(0.2, 0, 0, 1);
        }
        .rv.in {
          opacity: 1;
          transform: none;
        }

        /* Resume Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(108, 4, 4, 0.45);
          backdrop-filter: blur(6px);
          z-index: 999;
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .modal-card {
          background: var(--bg);
          color: var(--ink);
          max-width: 680px;
          width: 100%;
          border: 2px solid var(--ink);
          border-radius: 24px;
          padding: 30px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(108, 4, 4, 0.35);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--ln);
          padding-bottom: 14px;
          margin-bottom: 18px;
        }

        .close-btn {
          background: none;
          border: 1px solid var(--ink);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 18px;
          display: grid;
          place-items: center;
          color: var(--ink);
        }
        .close-btn:hover {
          background: var(--ink);
          color: var(--bg);
        }

        /* Media Queries for responsive screens */
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .mobile-toggle { display: flex; }

          .mobile-nav-panel {
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            background: var(--bg);
            border-bottom: 2px solid var(--ink);
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            box-shadow: 0 10px 24px rgba(0,0,0,0.1);
            z-index: 89;
          }

          .mobile-nav-panel a {
            font-size: 17px;
            font-weight: 700;
            padding: 8px 0;
            border-bottom: 1px solid var(--ln);
          }

          .sd {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }

          section {
            padding: 56px 0;
          }
        }

        @media (max-width: 520px) {
          h1 {
            font-size: 34px;
          }
          .btns {
            flex-direction: column;
            width: 100%;
          }
          .btns .btn {
            width: 100%;
          }
          .slide-links {
            flex-direction: column;
          }
          .ctl button.arrow {
            width: 40px;
            height: 40px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
          .rv {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Sticky Navigation */}
      <nav>
        <div className="w">
          <div className="nav-inner">
            <a className="logo" href="#top">
              J<i>C</i>
            </a>

            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="nav-actions">
              <button
                className="btn p"
                onClick={handleDownloadResume}
                title="Download full Jose Christopher resume"
              >
                📄 Resume
              </button>
              <button
                className="btn g"
                onClick={() => setResumeModalOpen(true)}
                title="Quick View Resume"
              >
                View Bio
              </button>
              <button
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-panel">
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work Slides</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>All Projects</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Technical Skills</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#research" onClick={() => setIsMobileMenuOpen(false)}>Research & Papers</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact & Links</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero" id="top">
        <div className="bl a"></div>
        <div className="bl b"></div>
        <div className="bl c"></div>

        <div className="w">
          <Reveal>
            <span className="tag-hand">Hello, I’m Jose Christopher S</span>
            <h1>
               Learning, <em> trying,</em> creating.
            </h1>
            <p className="lead">
              I am an MCA student with a strong foundation in Computer Applications and Commerce, skilled in computer applications and commerce . I like solving real problems with clean code and good design. Right now I am looking for a job in IT or Data where I can learn and grow.
            </p>
            <div className="btns" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn p" href="#work">
                View Selected Work
              </a>
              <button className="btn accent" onClick={handleDownloadResume}>
                Download CV (.txt)
              </button>
              <a className="btn g" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-socials">
              <span>📍 Tiruchirappalli, TN</span>
              <span>•</span>
              <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span>•</span>
              <a href={RESUME_DATA.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>•</span>
              <a href={`tel:${RESUME_DATA.phone}`}>
                {RESUME_DATA.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Infinite Marquee Ticker */}
      <div className="mq">
        <div className="mq-track">
          {doubledTicker.map((item, idx) => (
            <span key={idx} className="mq-item">
              {item} <span className="accent-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Section 1: Featured Interactive Slider */}
      <section id="work">
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Selected work</small>
              <h2>Projects, one slide at a time</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="sl">
              <div
                className="tr"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {FEATURED_SLIDES.map((slide, i) => (
                  <div className="sd" key={i}>
                    <div>
                      <span className="tg">{slide.tag}</span>
                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
                      <div className="ch">
                        {slide.tech.map((t) => (
                          <b key={t}>{t}</b>
                        ))}
                      </div>

                      <div className="slide-links">
                        {slide.live && (
                          <a
                            href={slide.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn p"
                          >
                            Live Demo ↗
                          </a>
                        )}
                        <a
                          href={slide.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn g"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>

                    {/* Visual Card simulation based on type */}
                    {slide.type === 'bars' && (
                      <div className="vis">
                        <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', opacity: 0.9 }}>
                          REAL-TIME INVENTORY ACTIVITY
                        </div>
                        <div className="bars">
                          {[42, 65, 50, 88, 64, 98, 76].map((h, bi) => (
                            <i
                              key={bi}
                              style={{ height: `${h}%`, animationDelay: `${bi * 90}ms` }}
                            ></i>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.type === 'quiz' && (
                      <div className="vis v2">
                        <div className="quiz-op">I recharge by spending time alone</div>
                        <div className="quiz-op selected">✓ I plan methodically before I act</div>
                        <div className="quiz-op">I follow open curiosity & intuition</div>
                      </div>
                    )}

                    {slide.type === 'weather' && (
                      <div className="vis v4">
                        <div className="weather-card-preview">
                          <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tiruchirappalli · Clear Sky</div>
                          <div className="temp">31°C</div>
                          <div style={{ fontSize: '13px', marginTop: '6px' }}>Humidity: 62% · Wind: 11 km/h</div>
                        </div>
                      </div>
                    )}

                    {slide.type === 'editorial' && (
                      <div className="vis v3">
                        <div style={{ fontFamily: 'var(--fa)', fontSize: '26px', color: 'var(--pink)' }}>
                          Editorial Precision
                        </div>
                        <div className="ln-bar" style={{ width: '60%' }}></div>
                        <div className="ln-bar" style={{ width: '100%' }}></div>
                        <div className="ln-bar" style={{ width: '80%' }}></div>
                        <div className="ln-bar" style={{ width: '45%' }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="ctl">
              <button
                className="arrow"
                aria-label="Previous Slide"
                onClick={() => handleSlideChange(activeSlide - 1)}
              >
                ←
              </button>
              {FEATURED_SLIDES.map((_, n) => (
                <button
                  key={n}
                  className={`dt ${n === activeSlide ? 'on' : ''}`}
                  aria-label={`Slide ${n + 1}`}
                  onClick={() => handleSlideChange(n)}
                ></button>
              ))}
              <button
                className="arrow"
                aria-label="Next Slide"
                onClick={() => handleSlideChange(activeSlide + 1)}
              >
                →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Complete Projects Catalog */}
      <section id="projects" style={{ background: 'color-mix(in srgb, var(--card) 40%, var(--bg))' }}>
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Catalog</small>
              <h2>All Project Works & Experiments</h2>
            </div>

            {/* Filter buttons */}
            <div className="filter-row">
              {['All', 'React', 'JavaScript', 'Flutter', 'HTML', 'Python'].map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="g3">
            {filteredProjects.map((p, idx) => (
              <Reveal key={idx}>
                <div className="cd" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="dot-badge" style={{ background: 'var(--bg)' }}>
                      {p.icon}
                    </div>
                    <span className="y">{p.tag}</span>
                  </div>
                  <h3 style={{ marginTop: '8px' }}>{p.name}</h3>
                  <p style={{ flexGrow: 1, marginBottom: '16px' }}>{p.desc}</p>
                  <div className="ch" style={{ marginBottom: '16px' }}>
                    {p.stack.map(st => (
                      <b key={st}>{st}</b>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn g"
                    style={{ textAlign: 'center', width: '100%' }}
                  >
                    {p.linkText}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technical Skills Matrix */}
      <section id="skills">
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Toolkit</small>
              <h2>What I know & build with</h2>
            </div>
          </Reveal>

          <div className="g3">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <Reveal key={idx}>
                <div className="cd">
                  <div className="y">{cat.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        style={{
                          background: 'var(--bg)',
                          border: '1px solid var(--ln)',
                          borderRadius: '10px',
                          padding: '6px 12px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ink)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Work Experience & Internships */}
      <section id="experience" style={{ background: 'color-mix(in srgb, var(--card) 45%, var(--bg))' }}>
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Timeline</small>
              <h2>Experience & Practical Roles</h2>
            </div>
          </Reveal>

          <div className="timeline">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <Reveal key={idx}>
                <div className="timeline-item">
                  <div className="timeline-bullet"></div>
                  <div className="timeline-header">
                    <div>
                      <h3 style={{ margin: 0 }}>{item.role}</h3>
                      <div style={{ color: 'var(--red)', fontWeight: 700, fontSize: '15px' }}>
                        {item.company}
                      </div>
                    </div>
                    <span className="period-pill">{item.period}</span>
                  </div>

                  <div className="ch" style={{ margin: '8px 0 12px' }}>
                    {item.tags.map(t => (
                      <b key={t}>{t}</b>
                    ))}
                  </div>

                  <ul className="timeline-points">
                    {item.points.map((pt, pidx) => (
                      <li key={pidx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Research & Innovation */}
      <section id="research">
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Analysis & Papers</small>
              <h2>Research, Studies & Business Ideas</h2>
            </div>
          </Reveal>

          <div className="g3">
            {RESEARCH_ITEMS.map((res, idx) => (
              <Reveal key={idx}>
                <div className="cd" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="period-pill">{res.year}</span>
                    <span className="y">{res.badge}</span>
                  </div>
                  <h3 style={{ margin: '14px 0 8px' }}>{res.title}</h3>
                  <p>{res.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Education & Background */}
      <section id="education" style={{ background: 'color-mix(in srgb, var(--card) 30%, var(--bg))' }}>
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Academia</small>
              <h2>Where I studied and grew</h2>
            </div>
          </Reveal>

          <div className="g3">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <Reveal key={idx}>
                <div className="cd" style={{ height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <span className="y">{edu.period}</span>
                    <h3 style={{ margin: '8px 0 4px', fontSize: '20px' }}>{edu.degree}</h3>
                    <div style={{ color: 'var(--red)', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>
                      {edu.institution}
                    </div>
                    <p>{edu.highlight}</p>
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn g"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      Visit Institution ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Certifications & Leadership */}
      <section id="about">
        <div className="w">
          <Reveal>
            <div className="sh">
              <small>Credentials</small>
              <h2> co curricular & Campus Leadership</h2>
            </div>
          </Reveal>

          <div className="g3" style={{ marginBottom: '32px' }}>
            <Reveal>
              <div className="cd">
                <div className="dot-badge" style={{ background: 'var(--pink)' }}>⭐</div>
                <span className="y">Student Governance</span>
                <h3>Student Secretary, Shift I</h3>
                <p>St. Joseph's College, Tiruchirappalli. Spearheaded student coordination, represented the student council, and assisted examination control duties.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="cd">
                <div className="dot-badge" style={{ background: 'var(--org)' }}>🎤</div>
                <span className="y">Public Speaking</span>
                <h3>Master of Ceremonies</h3>
                <p>Hosted college symposia and academic conventions, coordinating hospitality and stage decorum with strong verbal communication.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="cd">
                <div className="dot-badge" style={{ background: 'var(--red)', color: 'var(--bg)' }}>🗣️</div>
                <span className="y">Languages</span>
                <h3>Communication</h3>
                <p>Tamil (Native Speaker) & English (Professional Working Proficiency) with business correspondence capabilities.</p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h3 style={{ marginBottom: '16px' }}>Earned Credentials</h3>
            <div className="g3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--ln)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                >
                  <div style={{ fontSize: '24px' }}>{cert.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px' }}>{cert.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--soft)' }}>{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 8: Contact & Call to Action */}
      <section id="contact">
        <div className="w">
          <Reveal>
            <div className="ct">
              <h2>Let's connect and make things happen.</h2>
              <div className="btns" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a className="btn p" href={`mailto:${RESUME_DATA.email}`}>
                  ✉️ {RESUME_DATA.email}
                </a>
                <a className="btn g" href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a className="btn g" href={RESUME_DATA.links.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="btn g" href={`tel:${RESUME_DATA.phone}`}>
                  📞 {RESUME_DATA.phone}
                </a>
                <button className="btn accent" onClick={handleDownloadResume}>
                  Download Resume
                </button>
              </div>

              <div style={{ marginTop: '28px', fontSize: '14px', color: 'var(--pink)', opacity: 0.85 }}>
                Tiruchirappalli, Tamil Nadu, India · Available for immediate relocation or remote work
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="w">
          <p>© 2026 Jose Christopher S · </p>
        </div>
      </footer>

      {/* Bio / Printable Resume Modal */}
      {resumeModalOpen && (
        <div className="modal-overlay" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 style={{ fontSize: '24px' }}>Jose Christopher S</h2>
                <div style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 600 }}>
                   MCA Student
                </div>
              </div>
              <button
                className="close-btn"
                onClick={() => setResumeModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--soft)' }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Objective:</strong> Enthusiastic and detail-oriented MCA scholar with solid grounding in commercial systems, web application programming, and user-centric interfaces.
              </p>

              <h4 style={{ color: 'var(--ink)', margin: '14px 0 6px', fontFamily: 'var(--fh)' }}>Academic Credentials</h4>
              <p>• MCA — St. Joseph's College, Tiruchirappalli (2025 – Present)</p>
              <p>• B.Com Computer Applications — St. Joseph's College, Tiruchirappalli (2022 – 2025)</p>

              <h4 style={{ color: 'var(--ink)', margin: '14px 0 6px', fontFamily: 'var(--fh)' }}>Experience</h4>
              <p>• Full Stack Developer Intern — Frontier Wox Tech Pvt. Ltd. (Smart College Asset Management System)</p>
              <p>• Assistant Merchandiser — BAAS Exports, Tirupur</p>

              <h4 style={{ color: 'var(--ink)', margin: '14px 0 6px', fontFamily: 'var(--fh)' }}>Leadership</h4>
              <p> Students Secretary - St. Joseph's College (2026-2027) </p>

              <div style={{ marginTop: '22px', display: 'flex', gap: '10px' }}>
                <button className="btn p" onClick={handleDownloadResume}>
                  Download Copy (.txt)
                </button>
                <button className="btn g" onClick={() => setResumeModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}