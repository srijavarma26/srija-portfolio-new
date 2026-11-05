# L Gayathri Srija — Personal Developer Portfolio Website

A futuristic, award-winning personal developer portfolio engineered for **L Gayathri Srija (Srija)**, Computer Science undergraduate at Koneru Lakshmaiah Education Foundation (KL University).

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, custom canvas graphics, and responsive glassmorphism.

---

## 🎨 Visual Identity & Color Palette
- **Deep Midnight Black / Charcoal:** `#08090D`
- **Secondary Surface:** `#10121A`
- **Electric Violet Accent:** `#9B7CFF`
- **Cyan Accent:** `#55D6E8`
- **Soft White Primary Text:** `#F4F4F7`
- **Muted Grey Secondary Text:** `#A1A1AA`
- **Typography:** Space Grotesk, Sora, Inter, JetBrains Mono

---

## 🚀 Key Sections & Architecture
1. **Header & Navigation (`Navbar.tsx`):**
   - Brand monogram `GS` with animated glow
   - Seamless section jump anchors (Home, About, Skills, Projects, Education, Certifications, Contact)
   - Real-time active section tracking on scroll
   - Mobile responsive drawer menu with backdrop blur

2. **Hero Section (`Hero.tsx` & `InteractiveHeroCanvas.tsx`):**
   - Small professional status: `"COMPUTER SCIENCE UNDERGRADUATE | 2027"`
   - Main headline: `"Building Intelligent Digital Experiences."`
   - Supporting introduction: `"I'm Srija, a Computer Science undergraduate at KL University, passionate about building AI-powered applications, full-stack solutions, and meaningful digital products."`
   - CTAs: `Explore My Work` & `Get In Touch`
   - Interactive 3D/Constellation HTML5 Canvas with mouse repulsion and custom `GS` monogram core
   - Verified GitHub & LinkedIn profile links

3. **About Section (`About.tsx`):**
   - Heading: `"Beyond the Code."`
   - Story and engineering philosophy
   - Animated academic stat cards: `8.58 CGPA`, `2027 Graduation`, `KL University`, `Vijayawada, India`

4. **Technical Skills Section (`Skills.tsx`):**
   - Clean categorized badges (Languages, Frontend, Backend & APIs, Databases, AI/ML, Tools & Platforms, Core CS)
   - Interactive category filter tabs
   - Zero fake percentage bars

5. **Problem Solving & Coding (`ProblemSolving.tsx`):**
   - Algorithmic topics: Arrays, Strings, Hashing, Searching, Sorting, Recursion, Linked Lists, Stacks, Queues, OOP
   - Platform mentions: LeetCode and HackerRank
   - Interactive Python syntax window with one-click copy

6. **Featured Projects (`Projects.tsx`, `ProjectCard.tsx`, `ProjectPreviews.tsx`):**
   - **Project 01: CampusConnect – Lost Item and Complaint Portal** (React, Node, Express, MongoDB, Tailwind)
     - Live Demo: `https://campus-connect-theta-smoky-63.vercel.app/`
     - GitHub: `https://github.com/srijavarma26/campus-connect`
   - **Project 02: AI Phishing and Threat Analyzer** (TypeScript, React, Node, Vercel Serverless, Gemini API)
     - Live Demo: `https://ai-phishing-and-threat-analyzer-two.vercel.app/`
     - GitHub: `https://github.com/srijavarma26/AI-Phishing-and-Threat-Analyzer`
   - **Project 03: AI-Based Government Scheme Navigator** (Python, Scikit-learn, Streamlit, Pandas)
     - Live Demo: `https://ap-schemes-navigator.streamlit.app/`
     - GitHub: `https://github.com/srijavarma26/ai-govt-schemes-recommender-`
   - **Project 04: E-Commerce Sales Analytics Dashboard** (SQL, MySQL, Power BI, Excel)
     - Live Dashboard: `https://app.powerbi.com/view?r=eyJrIjoiZjM0ZmUzYjgtNjU0ZC00MTI5LWE3OWEtOWMxYjc4YTk1YmMyIiwidCI6IjgwOGNjODNlLWE1NDYtNDdlNy1hMDNmLTczYTFlYmJhMjRmMyIsImMiOjEwfQ%3D%3D`

7. **Academic Timeline (`Education.tsx`):**
   - KL University (B.Tech CSE, 2023–2027, 8.58 CGPA)
   - Sri Sarada Junior College (Intermediate BiPC, 2021–2023, 93.6%)
   - Ravindra Bharathi Public School (SSC, 2020–2021, 9.95 CGPA)

8. **Certifications & Badges (`Certifications.tsx`):**
   - Automation Anywhere RPA Professional Certification (Jan 2026)
   - AWS Certified Cloud Practitioner Badge (May 2025)

9. **Contact & Collaboration (`Contact.tsx`):**
   - Heading: `"Have an idea? Let's build something meaningful."`
   - Direct contacts: Email (`srijavarma2006@gmail.com`), Phone (`+91 7799777912`), Location (`Vijayawada, India`)
   - Interactive validated contact form with direct mailto generation and confetti celebration

10. **Footer (`Footer.tsx`):**
    - `"Designed and developed by Srija."`
    - Quick nav, social links, and smooth back-to-top button

---

## 🛠️ Local Development & Build

```bash
# Navigate to project folder
cd "C:\Users\L GAYATHRI SRIJA\.gemini\antigravity\scratch\srija-portfolio"

# Start Vite Development Server
npm run dev

# Create Production Build
npm run build

# Preview Production Build Locally
npm run preview
```
