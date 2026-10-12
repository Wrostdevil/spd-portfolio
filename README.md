# Shakti Prosad Dey — Portfolio

> **B.Tech IT @ NIT Jalandhar | Full-Stack Developer | AI/ML Enthusiast**

A premium, single-file, zero-dependency personal portfolio website. No framework, no build step, no runtime dependencies — just fast, accessible, responsive HTML + CSS + JS.

### 🔴 Live Demo

**Deployed on Vercel → https://spd-portfolio.vercel.app/**

[![Live](https://img.shields.io/badge/Live-spd--portfolio.vercel.app-C8FF00?style=for-the-badge&logo=vercel)](https://spd-portfolio.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-single--file-E34F26?style=flat&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-custom--no--framework-1572B6?style=flat&logo=css3&logoColor=white)](./index.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](./index.html)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)](https://spd-portfolio.vercel.app/)

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [About](#-about)
- [Features](#-features)
- [Sections Overview](#-sections-overview)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Experience](#-experience)
- [Education](#-education)
- [Certifications & Achievements](#-certifications--achievements)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Performance & Accessibility](#-performance--accessibility)
- [Contact Form Setup](#-contact-form-setup)
- [Contact](#-contact)
- [License](#-license)

---

## 👨‍💻 About

I'm **Shakti Prosad Dey**, a third-year B.Tech IT student at **Dr. B.R. Ambedkar NIT Jalandhar** (2023–2027), originally from **Chattogram, Bangladesh**.

I build full-stack platforms, AI pipelines, and scalable APIs. My edge is thinking like both an **engineer and a product designer** — I don't just write code, I design systems.

**Quick stats:**

| Metric | Value |
|--------|-------|
| DSA Problems Solved | **500+** (LeetCode / CodeChef) |
| Major Projects | **6+** full-stack + AI/ML builds |
| Internships | **3** (ML, Full-Stack, Frontend) |
| Graduating | **2027** |
| Scholarship | **ICCR Scholar** (Indian Council for Cultural Relations, 2023) |
| Certification | **Oracle Cloud OCI 2025 AI Foundations Associate** |

---

## ✨ Features

- **Single-file site** — entire portfolio in `index.html` (markup + styles + scripts)
- **3 themes** — `dark / light / neon`, toggle button + persisted to `localStorage`
- **Branded loader** — animated `SHAKTI` intro with progress bar, auto-dismisses
- **Custom cursor + cursor ring** — fine-pointer devices only, auto-disabled on touch
- **Particle hero canvas** — pauses when offscreen / tab hidden for performance
- **Typing hero title** + magnetic CTA buttons (`View My Work`, `GitHub Profile`, `My Resume`)
- **Infinite marquee ticker** — Full-Stack, NIT Jalandhar, 500+ DSA, Oracle Certified, ICCR Scholar
- **Animated stat counters** — scroll-into-view count-up
- **Skills with proficiency radials + category filter** — Languages / Frontend / Backend / Database / Cloud & Tools
- **Projects showcase** — 7 builds with Live Demo + GitHub badges, featured-project highlight
- **Experience timeline** — 3 internships
- **Hall of Honours certificate gallery** — 10 cards, category filter, drag/scroll slider, dots, full-size lightbox with keyboard (←/→/Esc) navigation
- **Testimonials** — draggable track
- **Tools orbit visualization** — animated orbit rings (static on `prefers-reduced-motion`)
- **Blog / Tech Insights** — 3 article cards
- **Contact form** — Formspree-powered with inline success + error states, validation, loading state
- **Contact CTA** — Email, GitHub, Phone links + live availability status
- **Global UX** — scroll progress bar, scroll-reveal animations, scroll-spy nav, mobile hamburger menu, back-to-top / theme FAB
- **Fully responsive** — breakpoints at `1200px / 900px / 640px / 420px` + touch + reduced-motion + print rules
- **Zero third-party requests** — self-hosted fonts, local images, no CDN at runtime

---

## 🧩 Sections Overview

| # | Section | ID | Notes |
|---|---------|----|-------|
| 1 | Loader | — | Branded overlay, `display:none` after fade |
| 2 | Navbar | `#home` | Fixed, blur backdrop, mobile hamburger with `aria-expanded` |
| 3 | Hero | `#home` | Typing title, photo (`my-image.png`), particle canvas, Resume + GitHub CTAs |
| 4 | Marquee | — | Pure CSS infinite ticker, `aria-hidden` |
| 5 | Stats | — | 500+ DSA, 6 Projects, 2 Internships, 2027 Graduating |
| 6 | About | `#about` | Bio + 6 highlight cards (ICCR, Oracle, 500+ DSA, AI/ML, Web Dev, Hackmol Top 10) |
| 7 | Skills | `#skills` | 17 proficiency radials + filter (`aria-pressed`) |
| 8 | Projects | `#projects` | 7 featured builds with Live Demo / GitHub links |
| 9 | Experience | `#experience` | 3-entry internship timeline |
| 10 | Certificates | `#certificates` | 10 cards, filter, slider, dots, lightbox |
| 11 | Testimonials | — | 3 cards, draggable track |
| 12 | Tools | — | Orbit visualization + CS fundamentals checklist |
| 13 | Blog | — | 3 article cards |
| 14 | Contact Form | `#contact-form` | Name / Email / Subject / Message via Formspree |
| 15 | Contact CTA | `#contact` | Email, GitHub, Phone + status badge |
| 16 | Footer | — | `SPD` logo, availability pulse, © 2026 |

---

## 🛠 Tech Stack

This portfolio itself:

- **HTML5** — semantic landmarks (`nav` / `main` / `footer`), skip link, sequential headings
- **CSS3** — custom properties / theming, grid + flex, glassmorphism, animations, `content-visibility`
- **Vanilla JavaScript** — loader, cursor, canvas, counters, filters, slider, lightbox, scroll-spy, theme toggle, form handling
- **Self-hosted fonts** — Bebas Neue, Bricolage Grotesque, JetBrains Mono (OFL 1.1, latin subsets in `assets/fonts/`)
- **Hosting** — [Vercel](https://spd-portfolio.vercel.app/) (any static host works)

My working stack (showcased in Skills section):

| Category | Skills |
|----------|--------|
| **Languages** | Python 90%, JavaScript 85%, TypeScript 80%, C++ 75%, Java 70%, SQL 70% |
| **Frontend** | React.js 88%, Next.js 82%, Tailwind CSS 90% |
| **Backend** | Node.js 85%, Express.js 80%, FastAPI 78% |
| **Database** | MongoDB 75%, PostgreSQL 72% |
| **Cloud & Tools** | AWS 70%, Git/GitHub 85%, Vercel 80% |
| **CS Fundamentals** | DSA, System Design, OOP & Design Patterns, DBMS & Query Optimization, Networking & OS, Distributed Systems |

---

## 🚀 Featured Projects

All projects are linked live from the site. Source: [github.com/Wrostdevil](https://github.com/Wrostdevil).

| # | Project | Stack | Live | Code |
|---|---------|-------|------|------|
| 01 | **TalknCode** — ⭐ Featured. Real-time collaborative coding / SaaS platform (Feb 2026) | Next.js, Convex, Clerk, TypeScript, Real-time | [talkncode.vercel.app](https://talkncode.vercel.app) | [GitHub](https://github.com/Wrostdevil/Talkncode) |
| 02 | **PathoScan** — Full-stack AI system predicting Pathogenic vs Benign genetic variants with SHAP explainability + Gemini clinical insights (Mar 2026) | React, Prism.js, XGBoost, Uvicorn, TailwindCSS | [pathoscan-zeta.vercel.app](https://pathoscan-zeta.vercel.app/) | [GitHub](https://github.com/Wrostdevil/PathoScan) |
| 03 | **Dincharya** — Premium productivity + habit tracker with circadian routines, 31-day tracker, vintage Waterbury clock, ambient audio, Pomodoro deep-work (Sep 2026) | React 19, TypeScript, Tailwind, Firebase, Web Audio API | [dincharya-spd.ai.studio](https://dincharya-spd.ai.studio/) | [GitHub](https://github.com/Wrostdevil/Dincharya) |
| 04 | **SpreadVision.ai** — AI epidemic prediction with climate + epidemiological data, 14-day forecasting, risk API, what-if simulator (Mar 2026) | Next.js 14, FastAPI, XGBoost, HealthCare AI | [spreadvision-ai.vercel.app](https://spreadvision-ai.vercel.app) | [GitHub](https://github.com/Wrostdevil/Spreadvision-ai) |
| 05 | **AgrowneX** — AI agricultural insurance with real-time weather analytics, geo risk assessment, voice AI assistant, quote calculator (Dec 2025) | React 18, Express, Open-Meteo, Gemini AI | [agrownex.vercel.app](https://agrowneX.vercel.app) | [GitHub](https://github.com/Wrostdevil/Minor-Project-AgriSure) |
| 06 | **SwasthFit** — AI physiotherapy coach with pose estimation, real-time form correction, progress tracking (Mar 2026) | Python, MediaPipe, Streamlit, Computer Vision | [swasthfit.onrender.com](https://swasthfit.onrender.com/) | [GitHub](https://github.com/Wrostdevil/SwasthFit) |
| 07 | **Business Analytics** — End-to-end retail analytics converting raw data to actionable insights (Nov 2025) | Python, SQL, Power BI, Next.js, Supabase | Trial repo | [GitHub](https://github.com/Wrostdevil/Business_improvement_retail_comapany) |

> Visit the live portfolio to explore all of these with screenshots, tags, and direct links: **https://spd-portfolio.vercel.app/#projects**

---

## 💼 Experience

| Period | Company | Role | Highlights |
|--------|---------|------|------------|
| Jun 2026 – Jul 2026 | **FlyRank AI** | Machine Learning Intern | Built responsive web apps with modern JS frameworks; agile team collaboration |
| Dec 2025 – Jan 2026 | **Skylark Delhi Express Pvt. Ltd.** | Full Stack Web Development Intern | Responsive apps with modern JS frameworks; structured agile environment |
| Jun 2025 – Jul 2025 | **AD Infocom Systems** | Frontend Web Developer Intern | E-commerce + interactive tools; REST APIs with Node.js/Express; frontend responsiveness + backend optimization |

---

## 🎓 Education

**B.Tech — Information Technology**
Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar
`2023 — 2027`

---

## 🏆 Certifications & Achievements

**Internships (3):**

- FlyRank AI — Machine Learning Engineering Intern (Jul 1 – Aug 12, 2026 · 6 weeks)
- Skylark Express Delhi Pvt. Ltd. — Full-Stack Development Intern (Dec 15, 2025 – Jan 15, 2026)
- AD Infocom Systems — Web Development Intern (Jun 10 – Jul 10, 2025)

**Courses & Events (7):**

- AlgoUniversity — Dynamic Programming Camp (Matrix Exponentiation & SQRT Decomposition)
- CodeFest'26 · IIT (BHU) Varanasi — Certificate of Excellence, Eureka Event
- NASSCOM FutureSkills Prime — Acquiring Data, Gold (95%), issued 24 May 2026
- NASSCOM FutureSkills Prime — Data Processing & Visualisation, Gold (94%), issued 25 May 2026
- NASSCOM FutureSkills Prime — Exploratory Data Analysis, Gold (89%), issued 27 May 2026
- HackerRank — HackTheRank Certificate of Participation (Online Quiz)
- Hackmol 7.0 — Top 10 Teams, 24-Hour Hackathon (March 2026)

Certificate images live in `assets/*.jpg` and are viewable in the lightbox gallery on the [live site](https://spd-portfolio.vercel.app/#certificates).

---

## 📁 Project Structure

```text
SPD_portfolio/
├── index.html            # Entire site: markup + styles + scripts (entry point for Vercel)
├── README.md
├── my-image.png          # Hero portrait (fallback: assets/my-image.png)
└── assets/
    ├── fonts/            # Self-hosted webfonts (OFL licensed)
    │   ├── bebas-neue-latin.woff2
    │   ├── bricolage-grotesque-latin.woff2
    │   └── jetbrains-mono-latin-400.woff2
    ├── favicon.svg
    ├── flyrank.jpg
    ├── skylark.jpg
    ├── Ad infocom.jpg
    ├── algouniversity.jpg
    ├── codefest1.jpg
    ├── nasscom-acquiring-data.jpg
    ├── nasscom-data-processing.jpg
    ├── nasscom-eda.jpg
    ├── hackerrank.jpg
    └── Hackmol.jpg
```

All paths are relative, so the folder works from any directory or subpath. No build output, no `node_modules`.

---

## ⚡ Getting Started

No installation needed.

**Option 1 — Open directly:**

Just double-click `index.html` in a browser.

**Option 2 — Serve locally (recommended):**

```bash
# clone
git clone https://github.com/Wrostdevil/SPD_portfolio.git
cd SPD_portfolio

# python
python -m http.server 8000
# → http://localhost:8000

# or node
npx serve .
```

Any static host works as-is (Vercel, Netlify, GitHub Pages). Enable gzip/brotli for best load performance.

---

## 🚢 Deployment

This portfolio is live at **https://spd-portfolio.vercel.app/** via Vercel.

To deploy your own fork:

1. Push this repo to GitHub.
2. Go to [vercel.com → New Project → Import](https://vercel.com/new).
3. Select the repo — no build command, no output directory needed (static).
4. Framework preset: **Other**. Root serves `index.html` automatically.
5. Deploy. Your URL will look like `https://<project>.vercel.app`.

```bash
# Alternative: Vercel CLI
npm i -g vercel
vercel --prod
```

---

## 🎨 Customization

- **Theme colors:** CSS variables in `:root` (`--ink`, `--paper`, `--lime`, `--violet`, `--crimson`, `--sky`) + per-theme overrides for `[data-theme="light"]` and `[data-theme="neon"]`.
- **Content:** each section is a self-contained block in `index.html` — edit text, links, and images in place. Class names mirror the section (`.skills-*`, `.proj-*`, `.cert-*`, ...).
- **Resume link:** update the Google Drive URL in the hero (`My Resume` button).
- **Social links:** search for `Wrostdevil` in `index.html` to update GitHub URLs; update `mailto:` and `tel:` in the Contact section.
- **Adding a certificate:** duplicate a `.cert-card` block, set `data-cat`, `data-full`, `data-org`, `data-role`, `data-date`, and the `<img>` + info fields. Slider, dots, filters, and lightbox pick it up automatically.
- **Adding a project:** duplicate a `.project-row` block, update `.proj-date`, `.proj-name`, `.proj-tags`, `.proj-desc`, and the two `.github-badge` links.

---

## ⚡ Performance & Accessibility

- Zero third-party requests — fonts, images, and all code are local.
- Certificate images use explicit `width`/`height`, `loading="lazy"`, `decoding="async"`.
- Below-fold sections use `content-visibility: auto`; backdrop blur disabled on small screens.
- Canvas, cursor, and sliders pause when hidden, offscreen, or idle; loader uses compositor-only transforms.
- Full landmark structure (`nav` / `main` / `footer`), skip link, sequential headings, labeled controls, visible focus rings, keyboard-operable gallery, live-region form feedback, contrast-checked text (decorative elements `aria-hidden`).
- Honors `prefers-reduced-motion` and touch (`hover:none`) environments.

---

## 📬 Contact Form Setup

The form posts to Formspree:

```html
<form id="contactForm" action="https://formspree.io/f/xlgaeygw" method="POST">
```

To use your own endpoint, replace the `action` URL with a form ID from [formspree.io](https://formspree.io). No other changes needed — validation, loading state, and success/error messaging are handled in-page.

---

## 📞 Contact

**Shakti Prosad Dey** — Open to SDE internships, full-time roles, and collaborations. Responds within 24 hours.

- 🌐 Portfolio: **https://spd-portfolio.vercel.app/**
- 📧 Email: [shaktidey2023@gmail.com](mailto:shaktidey2023@gmail.com)
- 💻 GitHub: [github.com/Wrostdevil](https://github.com/Wrostdevil)
- 📱 Phone: [+91 7908239341](tel:+917908239341) · +8801638087395
- 📍 Jalandhar, Punjab, India (from Chattogram, Bangladesh)
- 📄 Resume: [Google Drive](https://drive.google.com/file/d/13H1h-xTD7GyySFDDO3pMerAq0hvk7FiT/view?usp=sharing)

---

## 📝 Fonts

Self-hosted latin subsets of [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), all under the [SIL Open Font License 1.1](https://openfontlicense.org). No Google Fonts requests at runtime. Rare decorative glyphs fall back to system fonts.

---

## 📄 License

Portfolio content and code © 2026 Shakti Prosad Dey. Fonts licensed under OFL 1.1 by their respective authors.

If you fork this for your own portfolio, please give credit and replace personal content, images, and links with your own.
