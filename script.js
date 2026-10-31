/* ===== Data ===== */
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
  { icon: "🏢", name: "Smart College Asset & Inventory", tag: "MERN Stack", desc: "Role-based equipment booking and college inventory pipeline with automated approval hierarchy and PDF report exports.", stack: ["React.js", "Node.js", "Express.js", "MongoDB"], link: "https://github.com/jose-christopher", linkText: "View Case ↗" },
  { icon: "🪞", name: "MIRROR Quiz App", tag: "Interactive JS", desc: "20 scenario questions yielding custom archetypes and animated trait radar visualizations. 100% client-side privacy-first.", stack: ["JavaScript", "HTML5", "CSS Animations"], link: "https://jose-christopher.github.io/MIRROR/", linkText: "Play Quiz ↗" },
  { icon: "🌤️", name: "Skycast Weather", tag: "Flutter App", desc: "Real-time atmospheric status, humidity graphs, and global city search with crisp card interfaces.", stack: ["Flutter", "Firebase", "REST APIs"], link: "https://skycast-orpin.vercel.app/", linkText: "Launch App ↗" },
  { icon: "🌐", name: "Classic Portfolio Website", tag: "Responsive Web", desc: "The original clean-slate developer profile showing previous project registries, certifications, and academic trajectory.", stack: ["HTML5", "CSS3", "JavaScript"], link: "https://jose-christopher.github.io/portfolio/", linkText: "Visit ↗" },
  { icon: "🕐", name: "Dynamic Clock & Timer", tag: "Python / Flutter", desc: "Real-time graphical clock and stopwatch built to explore UI cycle updates and asynchronous timers.", stack: ["Python", "Flutter", "State Management"], link: "https://github.com/jose-christopher", linkText: "GitHub ↗" },
  { icon: "❤️", name: "Interactive Valentine Micro-site", tag: "Playful UI", desc: "Celebratory interactive web experience with physics-based floating hearts, playful hover evasions, and confetti particles.", stack: ["HTML", "CSS", "DOM Scripting"], link: "https://github.com/jose-christopher", linkText: "Inspect ↗" }
];

const SKILL_CATEGORIES = [
  { title: "Programming Languages", skills: ["Python", "C++", "R ", "JavaScript (ES6+)", "(Basics)"] },
  { title: "Web & App Development", skills: ["React.js", "Node.js", "Express.js", "Flutter", "HTML5", "CSS3 / Modern Layouts", "(Basics)"] },
  { title: "Databases & Cloud", skills: ["MongoDB Atlas", "DBMS / SQL", "Firebase", "Vercel & Render Deployment"] },
  { title: "Tools & Productivity", skills: ["Git & GitHub", "VS Code", "Tally Prime", "MS Excel "] },
  { title: "Design & UX", skills: ["Figma UI/UX", "Canva", "Adobe Photoshop", "Responsive Wireframing"] }
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
  { year: "2025–26", badge: "Team of 5", title: "AI in Recruitment — Emerging Paradigms", desc: "Explored automated ATS resume parsing, AI screening efficacy, algorithmic sentiment screening, and statistical mitigation of hiring bias." },
  { year: "2024–25", badge: "Individual Paper", title: "Impacts of Digital Payment Architectures", desc: "Analytical research paper evaluating UPI penetration, mobile wallet economics, financial inclusion, and retail cash replacement trends in South India." },
  { year: "2026", badge: "Business Competition · Pre-Finalist", title: "R-CUBED — Circular Waste Business Model", desc: "Architected a sustainable B2B circular model linking industrial waste generators directly with verified upcyclers and scrap process facilities." }
];

const EDUCATION_ITEMS = [
  { degree: "Master of Computer Applications (MCA)", institution: "St. Joseph's College, Tiruchirappalli", period: "2025 — Pursuing", highlight: "Focus: Full Stack Engineering, Distributed Systems, Software Architecture", link: "https://www.sjctni.edu/" },
  { degree: "B.Com — Computer Applications", institution: "St. Joseph's College, Tiruchirappalli", period: "2022 — 2025", highlight: "Blended curriculum bridging commerce, accounting logic, data handling, and programming.", link: "https://www.sjctni.edu/" },
  { degree: "Higher Secondary Certificate (HSC)", institution: "Infant Jesus Matric Hr Sec School, Tirupur", period: "2021 — 2022", highlight: "Commerce & Computer Applications track.", link: "https://www.infantjesustiruppur.com/" },
  { degree: "Secondary School Leaving Certificate (SSLC)", institution: "Infant Jesus Matric Hr Sec School, Tirupur", period: "2019 — 2020", highlight: "Graduated with academic distinction.", link: "https://www.infantjesustiruppur.com/" }
];

const CERTIFICATIONS = [
  { title: "Database Management System", issuer: "SWAYAM NPTEL", icon: "🗄️" },
  { title: "AI Fundamentals", issuer: "IBM SkillsBuild", icon: "🤖" },
  { title: "Getting Started with Generative AI", issuer: "IBM SkillsBuild", icon: "✨" },
  { title: "Microsoft Excel for Business Analysis", issuer: "BE10X", icon: "📊" }
];

const TICKER_ITEMS = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flutter',
  'Figma UI/UX', 'REST APIs', 'Tally Prime', 'Responsive Layouts', 'Database Systems'
];
const FILTERS = ['All', 'React', 'JavaScript', 'Flutter', 'HTML', 'Python'];

/* ===== State ===== */
let activeSlide = 0;
let activeFilter = 'All';
let isMobileMenuOpen = false;
let resumeModalOpen = false;
let renderedProjectCount = 0;

/* ===== Helpers ===== */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const chips = (arr) => arr.map((t) => `<b>${esc(t)}</b>`).join('');
const reveal = (inner) => `<div class="rv">${inner}</div>`;

/* ===== Scroll reveal ===== */
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals(root = document) {
  root.querySelectorAll('.rv:not(.in)').forEach((el) => {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  });
}

/* ===== Resume download ===== */
function handleDownloadResume() {
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
}

/* ===== Renderers ===== */
function renderTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  $('ticker').innerHTML = doubled
    .map((item) => `<span class="mq-item">${esc(item)} <span class="accent-star">✦</span></span>`)
    .join('');
}

function slideVisual(type) {
  if (type === 'bars') {
    const bars = [42, 65, 50, 88, 64, 98, 76]
      .map((h, bi) => `<i style="height:${h}%;animation-delay:${bi * 90}ms"></i>`).join('');
    return `<div class="vis">
      <div style="font-size:12px;font-weight:bold;margin-bottom:8px;opacity:0.9">REAL-TIME INVENTORY ACTIVITY</div>
      <div class="bars">${bars}</div>
    </div>`;
  }
  if (type === 'quiz') {
    return `<div class="vis v2">
      <div class="quiz-op">I recharge by spending time alone</div>
      <div class="quiz-op selected">✓ I plan methodically before I act</div>
      <div class="quiz-op">I follow open curiosity &amp; intuition</div>
    </div>`;
  }
  if (type === 'weather') {
    return `<div class="vis v4">
      <div class="weather-card-preview">
        <div style="font-size:14px;text-transform:uppercase;letter-spacing:1px">Tiruchirappalli · Clear Sky</div>
        <div class="temp">31°C</div>
        <div style="font-size:13px;margin-top:6px">Humidity: 62% · Wind: 11 km/h</div>
      </div>
    </div>`;
  }
  if (type === 'editorial') {
    return `<div class="vis v3">
      <div style="font-family:var(--fa);font-size:26px;color:var(--pink)">Editorial Precision</div>
      <div class="ln-bar" style="width:60%"></div>
      <div class="ln-bar" style="width:100%"></div>
      <div class="ln-bar" style="width:80%"></div>
      <div class="ln-bar" style="width:45%"></div>
    </div>`;
  }
  return '';
}

function renderSlides() {
  $('slideTrack').innerHTML = FEATURED_SLIDES.map((slide) => `
    <div class="sd">
      <div>
        <span class="tg">${esc(slide.tag)}</span>
        <h3>${esc(slide.title)}</h3>
        <p>${esc(slide.desc)}</p>
        <div class="ch">${chips(slide.tech)}</div>
        <div class="slide-links">
          ${slide.live ? `<a href="${slide.live}" target="_blank" rel="noreferrer" class="btn p">Live Demo ↗</a>` : ''}
          <a href="${slide.github}" target="_blank" rel="noreferrer" class="btn g">Source Code</a>
        </div>
      </div>
      ${slideVisual(slide.type)}
    </div>`).join('');
}

function renderSlideControls() {
  $('slideCtl').innerHTML =
    `<button class="arrow" aria-label="Previous Slide" data-slide="prev">←</button>` +
    FEATURED_SLIDES.map((_, n) =>
      `<button class="dt ${n === activeSlide ? 'on' : ''}" aria-label="Slide ${n + 1}" data-slide="${n}"></button>`).join('') +
    `<button class="arrow" aria-label="Next Slide" data-slide="next">→</button>`;
}

function handleSlideChange(nextIndex) {
  const total = FEATURED_SLIDES.length;
  activeSlide = (nextIndex + total) % total;
  $('slideTrack').style.transform = `translateX(-${activeSlide * 100}%)`;
  renderSlideControls();
}

function renderFilters() {
  $('filterRow').innerHTML = FILTERS.map((f) =>
    `<button class="filter-btn ${activeFilter === f ? 'active' : ''}" data-filter="${f}">${f}</button>`).join('');
}

function renderProjects() {
  const q = activeFilter.toLowerCase();
  const list = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.stack.some((s) => s.toLowerCase().includes(q)) || p.tag.toLowerCase().includes(q));

  const grid = $('projectsGrid');
  grid.innerHTML = list.map((p) => reveal(`
    <div class="cd" style="height:100%">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="dot-badge" style="background:var(--bg)">${p.icon}</div>
        <span class="y">${esc(p.tag)}</span>
      </div>
      <h3 style="margin-top:8px">${esc(p.name)}</h3>
      <p style="flex-grow:1;margin-bottom:16px">${esc(p.desc)}</p>
      <div class="ch" style="margin-bottom:16px">${chips(p.stack)}</div>
      <a href="${p.link}" target="_blank" rel="noreferrer" class="btn g" style="text-align:center;width:100%">${esc(p.linkText)}</a>
    </div>`)).join('');

  // Cards that were already on screen stay visible; new ones animate in
  Array.from(grid.children).forEach((el, i) => { if (i < renderedProjectCount) el.classList.add('in'); });
  renderedProjectCount = list.length;
  observeReveals(grid);
}

function renderSkills() {
  const chipStyle = 'background:var(--bg);border:1px solid var(--ln);border-radius:10px;padding:6px 12px;font-size:13px;font-weight:600;color:var(--ink)';
  $('skillsGrid').innerHTML = SKILL_CATEGORIES.map((cat) => reveal(`
    <div class="cd">
      <div class="y">${esc(cat.title)}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px">
        ${cat.skills.map((s) => `<span style="${chipStyle}">${esc(s)}</span>`).join('')}
      </div>
    </div>`)).join('');
}

function renderExperience() {
  $('timeline').innerHTML = EXPERIENCE_ITEMS.map((item) => reveal(`
    <div class="timeline-item">
      <div class="timeline-bullet"></div>
      <div class="timeline-header">
        <div>
          <h3 style="margin:0">${esc(item.role)}</h3>
          <div style="color:var(--red);font-weight:700;font-size:15px">${esc(item.company)}</div>
        </div>
        <span class="period-pill">${esc(item.period)}</span>
      </div>
      <div class="ch" style="margin:8px 0 12px">${chips(item.tags)}</div>
      <ul class="timeline-points">
        ${item.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}
      </ul>
    </div>`)).join('');
}

function renderResearch() {
  $('researchGrid').innerHTML = RESEARCH_ITEMS.map((r) => reveal(`
    <div class="cd" style="height:100%">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="period-pill">${esc(r.year)}</span>
        <span class="y">${esc(r.badge)}</span>
      </div>
      <h3 style="margin:14px 0 8px">${esc(r.title)}</h3>
      <p>${esc(r.desc)}</p>
    </div>`)).join('');
}

function renderEducation() {
  $('educationGrid').innerHTML = EDUCATION_ITEMS.map((edu) => reveal(`
    <div class="cd" style="height:100%;justify-content:space-between">
      <div>
        <span class="y">${esc(edu.period)}</span>
        <h3 style="margin:8px 0 4px;font-size:20px">${esc(edu.degree)}</h3>
        <div style="color:var(--red);font-weight:600;font-size:14px;margin-bottom:8px">${esc(edu.institution)}</div>
        <p>${esc(edu.highlight)}</p>
      </div>
      <div style="margin-top:16px">
        <a href="${edu.link}" target="_blank" rel="noreferrer" class="btn g" style="padding:6px 14px;font-size:12px">Visit Institution ↗</a>
      </div>
    </div>`)).join('');
}

function renderCertifications() {
  $('certGrid').innerHTML = CERTIFICATIONS.map((c) => `
    <div style="background:var(--card);border:1px solid var(--ln);border-radius:16px;padding:16px 20px;display:flex;align-items:center;gap:14px">
      <div style="font-size:24px">${c.icon}</div>
      <div>
        <div style="font-weight:700;font-size:15px">${esc(c.title)}</div>
        <div style="font-size:12px;color:var(--soft)">${esc(c.issuer)}</div>
      </div>
    </div>`).join('');
}

/* ===== Mobile menu ===== */
function renderMobileMenu() {
  $('mobileNavSlot').innerHTML = isMobileMenuOpen ? `
    <div class="mobile-nav-panel">
      <a href="#work">Work Slides</a>
      <a href="#projects">All Projects</a>
      <a href="#skills">Technical Skills</a>
      <a href="#experience">Experience</a>
      <a href="#research">Research &amp; Papers</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact &amp; Links</a>
    </div>` : '';
}

/* ===== Resume modal ===== */
function renderModal() {
  $('modalSlot').innerHTML = resumeModalOpen ? `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-card">
        <div class="modal-header">
          <div>
            <h2 style="font-size:24px">Jose Christopher S</h2>
            <div style="color:var(--red);font-size:13px;font-weight:600"> MCA Student</div>
          </div>
          <button class="close-btn" id="modalCloseX" aria-label="Close modal">✕</button>
        </div>

        <div style="font-size:14px;line-height:1.7;color:var(--soft)">
          <p style="margin-bottom:12px"><strong>Objective:</strong> Enthusiastic and detail-oriented MCA scholar with solid grounding in commercial systems, web application programming, and user-centric interfaces.</p>

          <h4 style="color:var(--ink);margin:14px 0 6px;font-family:var(--fh)">Academic Credentials</h4>
          <p>• MCA — St. Joseph's College, Tiruchirappalli (2025 – Present)</p>
          <p>• B.Com Computer Applications — St. Joseph's College, Tiruchirappalli (2022 – 2025)</p>

          <h4 style="color:var(--ink);margin:14px 0 6px;font-family:var(--fh)">Experience</h4>
          <p>• Full Stack Developer Intern — Frontier Wox Tech Pvt. Ltd. (Smart College Asset Management System)</p>
          <p>• Assistant Merchandiser — BAAS Exports, Tirupur</p>

          <h4 style="color:var(--ink);margin:14px 0 6px;font-family:var(--fh)">Leadership</h4>
          <p> Students Secretary - St. Joseph's College (2026-2027) </p>

          <div style="margin-top:22px;display:flex;gap:10px">
            <button class="btn p" id="modalDownload">Download Copy (.txt)</button>
            <button class="btn g" id="modalCloseBtn">Close</button>
          </div>
        </div>
      </div>
    </div>` : '';
}

function setModal(open) {
  resumeModalOpen = open;
  renderModal();
}

/* ===== Events ===== */
$('navResumeBtn').addEventListener('click', handleDownloadResume);
$('heroCvBtn').addEventListener('click', handleDownloadResume);
$('contactResumeBtn').addEventListener('click', handleDownloadResume);
$('viewBioBtn').addEventListener('click', () => setModal(true));

$('mobileToggle').addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  renderMobileMenu();
});
$('mobileNavSlot').addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    isMobileMenuOpen = false;
    renderMobileMenu();
  }
});

$('slideCtl').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-slide]');
  if (!btn) return;
  const v = btn.dataset.slide;
  if (v === 'prev') handleSlideChange(activeSlide - 1);
  else if (v === 'next') handleSlideChange(activeSlide + 1);
  else handleSlideChange(parseInt(v, 10));
});

$('filterRow').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-filter]');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  renderFilters();
  renderProjects();
});

$('modalSlot').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay' || e.target.closest('#modalCloseX') || e.target.closest('#modalCloseBtn')) {
    setModal(false);
  } else if (e.target.closest('#modalDownload')) {
    handleDownloadResume();
  }
});

/* ===== Init ===== */
renderTicker();
renderSlides();
renderSlideControls();
renderFilters();
renderProjects();
renderSkills();
renderExperience();
renderResearch();
renderEducation();
renderCertifications();
observeReveals(document);
