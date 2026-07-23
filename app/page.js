"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Globe, 
  Mail, 
  ChevronRight, 
  Terminal as TerminalIcon, 
  MessageSquare, 
  Code2, 
  Users, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Binary, 
  ExternalLink,
  Search,
  CheckCircle,
  HelpCircle,
  FolderDot
} from "lucide-react";
import BootSequence from "../components/BootSequence";

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "VG_SYSTEM_v2.0 // TERMINAL BOOTED SUCCESSFULLY" },
    { type: "system", text: "Type /help or help to list available directories and query modules." }
  ]);
  const terminalEndRef = useRef(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmed = command.trim();
    if (!trimmed) return;

    let responseText = "";
    let isError = false;
    const lowerCmd = trimmed.toLowerCase();

    if (lowerCmd === "/help" || lowerCmd === "help") {
      responseText = `SYSTEM DIRECTORY QUERY CODES:
  /about        - Get professional summary & details
  /education    - View academic background (SATI Vidisha)
  /skills       - List technical skill arrays & metrics
  /projects     - Display repository systems details (TrueVail, TrustIQ, etc.)
  /hackathons   - Display competitive hackathon achievements & awards
  /leadership   - View community roles & BattleVerse founder info
  /learning     - Check active learning courses & certifications
  /clear        - Clear the console logs
  /socials      - Print connections & social access paths`;
    } else if (lowerCmd === "/about" || lowerCmd === "about") {
      responseText = `IDENTITY: Vaibhav Gurjar
ROLE: AI & Data Science Specialist & Full-Stack Developer
CORE SPECIALIZATION: Computer Science Engineering (Artificial Intelligence & Data Science)
SUMMARY: CSE student specializing in AI & DS with a strong interest in Machine Learning and Full Stack Development. Passionate about building real-world applications that solve practical problems through modern technologies. Experienced in hackathons, open-source collaboration, and developing AI-powered software.`;
    } else if (lowerCmd === "/education" || lowerCmd === "education") {
      responseText = `ACADEMIC ARCHIVES:
Institution: Samrat Ashok Technological Institute (SATI), Vidisha
Degree: Bachelor of Technology (B.Tech)
Major: Computer Science Engineering (Artificial Intelligence & Data Science)
Expected Graduation: 2029
Current Status: Active Matriculation`;
    } else if (lowerCmd === "/skills" || lowerCmd === "skills") {
      responseText = `TECHNICAL SKILL MATRIX:
- LANGUAGES: C, C++, Python, Java, JavaScript
- FRONTEND: HTML, CSS, Tailwind CSS, Next.js, React (Learning)
- BACKEND & DB: FastAPI, REST APIs, Firebase Firestore, MongoDB
- AI & DS: Machine Learning (Learning), Pandas, NumPy, Google Gemini API
- TOOLS: Git, GitHub, Firebase, Render, VS Code
- CORE SUBJECTS: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks`;
    } else if (lowerCmd === "/projects" || lowerCmd === "projects") {
      responseText = `ACTIVE REPOSITORY SYSTEMS:
[1] PS-07 EXOPLANET TRANSIT DETECTION - AI Pipeline
    Tech: Python, Streamlit, Lightkurve, Astropy, RandomForest
    Desc: Automatically detects exoplanet transits from stellar light curves.
    GitHub: https://github.com/vaibhav1874/PS-07-Bharatiya-Antariksh-Hackathon-2026

[2] TRUEVAIL - AI-Powered Fake News Detection Platform
    Tech: Python, FastAPI, Firebase, Gemini API
    Desc: Developed an AI platform to verify news credibility using LLMs.
    GitHub: https://github.com/vaibhav1874/TrueVail

[3] TRUSTIQ - AI-Based Trust Verification System
    Desc: Built an intelligent platform for credibility verification & trust analysis.
    GitHub: https://github.com/vaibhav1874/Trustiq

[4] MONEY MENTOR - AI Personal Finance Assistant
    Desc: Created budgeting and smart AI personal finance recommender system.
    GitHub: https://github.com/vaibhav1874/money-mentor

[5] BATTLEVERSE - Rap Battle Competitive Platform
    Role: Founder / Coordinator. Managed branding, event operations, community outreach.`;
    } else if (lowerCmd === "/hackathons" || lowerCmd === "hackathons" || lowerCmd === "achievements") {
      responseText = `COMPETITIVE HACKATHON LOGS:
- 🏆 Winner - Technovision Hackathon
- 🥉 3rd Place - VibeHack 2.0
- 🏅 Top 10 Finalist - MANIT Bhopal Hackathon
- 🚀 Selected among Top 20 teams out of 1,500+ participating teams
- 💻 Contributor - GirlScript Summer of Code (GSSoC)`;
    } else if (lowerCmd === "/leadership" || lowerCmd === "leadership" || lowerCmd === "activities") {
      responseText = `LEADERSHIP & ENGAGEMENT:
- Founder @ BattleVerse: Established rap battle platform. Coordinated branding, registrations, community building, and sponsorships.
- Wiki Club @ SATI Vidisha: Assisted in organizing technical events, coordinating volunteer logistics, and community activities.`;
    } else if (lowerCmd === "/learning" || lowerCmd === "learning" || lowerCmd === "certifications") {
      responseText = `CURRENT WORKFLOWS:
- Studying: Machine Learning, React, Advanced DSA, Deep Learning, System Design
- Certifications (Pending/Target): Machine Learning, React, Python, Google AI, AWS Cloud Fundamentals`;
    } else if (lowerCmd === "/socials" || lowerCmd === "socials") {
      responseText = `SECURE CONNECTION NODES:
- GitHub: https://github.com/vaibhav1874
- LinkedIn: https://linkedin.com/in/vaibhav1874
- Email: vaibhavgurjar1874@gmail.com`;
    } else if (lowerCmd === "/clear" || lowerCmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      responseText = `ERROR: Command "${trimmed}" not recognized. Type /help for options.`;
      isError = true;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: trimmed },
      { type: isError ? "error" : "output", text: responseText }
    ]);
    setCommand("");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050608] text-white">
      <AnimatePresence>
        {!isBooted && (
          <BootSequence onComplete={() => setIsBooted(true)} />
        )}
      </AnimatePresence>

      {isBooted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 grid-bg"
        >
          {/* Header */}
          <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
            <div className="text-xl font-bold tracking-tighter neon-text">VG_SYSTEM_v2.0</div>
            <nav className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest uppercase opacity-60">
              <a href="#systems" className="hover:opacity-100 transition-opacity">Projects</a>
              <a href="#metrics" className="hover:opacity-100 transition-opacity">Skills</a>
              <a href="#logbook" className="hover:opacity-100 transition-opacity">Logbook</a>
              <a href="#playground" className="hover:opacity-100 transition-opacity text-neon-green">Terminal</a>
              <a href="#connection" className="hover:opacity-100 transition-opacity">Connect</a>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-neon-green font-mono text-xs md:text-sm tracking-[0.3em] mb-4 uppercase">
                // SYSTEM_STATUS: OPERATIONAL_
              </h2>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-none">
                VAIBHAV <br />
                <span className="text-gradient">GURJAR</span>
              </h1>
              
              {/* Profile Intro */}
              <div className="space-y-6 max-w-2xl mb-10">
                <p className="text-lg md:text-xl text-white/80 font-mono">
                  &gt; Computer Science Engineering student specializing in <span className="text-neon-green font-bold">Artificial Intelligence & Data Science</span> at SATI Vidisha.
                </p>
                <p className="text-base text-white/50 font-light leading-relaxed">
                  Passionate about building real-world applications that solve practical problems through modern technologies. Experienced in hackathons, open-source collaboration, and developing AI-powered software. Currently expanding expertise in Machine Learning, React, and strengthening system design capabilities.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#systems" className="neon-border bg-neon-green/5 px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 group">
                  <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Access Systems</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#playground" className="px-6 py-3 md:px-8 md:py-4 border border-white/10 hover:bg-white/5 transition-colors uppercase tracking-widest text-xs md:text-sm font-bold flex items-center gap-2">
                  <TerminalIcon size={16} className="text-neon-green animate-pulse" />
                  Neural Console
                </a>
              </div>
            </motion.div>

            {/* Ambient System Stats */}
            <div className="absolute bottom-10 right-10 hidden lg:block text-[10px] font-mono opacity-30 text-right uppercase space-y-1">
              <div>LOCATION: SATI, Vidisha, IN</div>
              <div>ACADEMIC_EXP: Expected 2029</div>
              <div>NEURAL_SPECIALIZATION: AI & DS</div>
              <div>HOST_LOAD: RESPONSIVE</div>
            </div>
          </section>

          {/* Active Projects (Systems) Section */}
          <section id="systems" className="py-20 px-6 md:px-20 border-t border-white/5">
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                <span className="text-neon-green text-sm font-mono tracking-widest">[01]</span>
                ACTIVE_SYSTEM_REPOS
              </h3>
              <div className="h-px w-full bg-gradient-to-r from-neon-green/50 to-transparent mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <SystemCard 
                id="SYS_01_EXOPLANET" 
                title="Exoplanet Transit Detection" 
                tech="Python, Streamlit, Lightkurve, Astropy, RandomForest"
                problem="Identifying tiny, faint exoplanetary transit signals obscured by stellar noise in massive astronomical datasets."
                solution="End-to-end AI pipeline developed for ISRO's Bharatiya Antariksh Hackathon 2026 (Problem Statement 07) that downloads Kepler/TESS curves, detrends stellar variability, characterizes transits, and classifies candidate signals."
                bulletPoints={[
                  "Built a fully automated detrending & period-search module (BLS search + fold).",
                  "Integrated transit model fits using Mandel-Agol (batman) & lmfit optimization.",
                  "Engineered 5 vetting checks (odd-even, secondary eclipse, centroid shift) & RF Classifier."
                ]}
                link="https://github.com/vaibhav1874/PS-07-Bharatiya-Antariksh-Hackathon-2026"
                highlight
              />
              <SystemCard 
                id="SYS_02_TRUEVAIL" 
                title="TrueVail" 
                tech="Python, FastAPI, Firebase, Gemini API"
                problem="High volume of unreliable digital media & fake news propagating online."
                solution="AI-powered analysis platform evaluating and verifying article credibility dynamically with Gemini LLM backend."
                bulletPoints={[
                  "Integrated Google's Gemini API for advanced semantic news analysis.",
                  "Built a secure, scalable backend architecture with FastAPI and Firebase.",
                  "Engineered automated workflows for credibility scoring and verification reviews."
                ]}
                link="https://github.com/vaibhav1874/TrueVail"
              />
              <SystemCard 
                id="SYS_03_TRUSTIQ" 
                title="TrustIQ" 
                tech="AI Workflows, Credibility Verification, UI/UX"
                problem="Lack of automated trust scoring and reliability metrics for online data systems."
                solution="An intelligent verification workspace designed for evaluating trustworthiness of external resources."
                bulletPoints={[
                  "Designed robust AI agents for checking validity and scoring integrity.",
                  "Created a clean, futuristic UI for smooth data parsing and analytics visualization.",
                  "Implemented flexible API endpoints for modular tool integrations."
                ]}
                link="https://github.com/vaibhav1874/Trustiq"
              />
              <SystemCard 
                id="SYS_04_MONEY_MENTOR" 
                title="Money Mentor" 
                tech="AI Recommendations, Python, Financial Planning"
                problem="Lack of structured personal budgeting tools combined with intelligent advisory interfaces."
                solution="AI-driven financial advisor helping users optimize savings, budgets, and investments."
                bulletPoints={[
                  "Engineered customizable budgeting engines based on smart spending analytics.",
                  "Incorporated responsive recommendation modules utilizing statistical machine learning models.",
                  "Ensured secure storage of mock finance data profiles."
                ]}
                link="https://github.com/vaibhav1874/money-mentor"
              />
              <SystemCard 
                id="SYS_05_BATTLEVERSE" 
                title="BattleVerse" 
                tech="Next.js, MongoDB, Community Operations"
                problem="Absence of a localized, dedicated platform for underground competitive rap battles."
                solution="A specialized community competitive space for registrations, matching, and promotion."
                bulletPoints={[
                  "Founded the platform to support independent artists and expand underground events.",
                  "Organized and managed events, coordinating registrations and sponsorship campaigns.",
                  "Designed digital branding and unified system portals for community interaction."
                ]}
                link="https://github.com/vaibhav1874/BattleVerse"
              />
            </div>
          </section>

          {/* Skill Metrics Section */}
          <section id="metrics" className="py-20 px-6 md:px-20 bg-white/[0.01] border-y border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                  <span className="text-neon-green text-sm font-mono tracking-widest">[02]</span>
                  CORE_METRICS_AND_SKILLS
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-neon-green/50 to-transparent mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <MetricCategory 
                  title="LANGUAGES & CORE" 
                  skills={[
                    { name: "Python", val: 92 },
                    { name: "C++", val: 85 },
                    { name: "Java", val: 80 },
                    { name: "JavaScript", val: 82 },
                    { name: "C", val: 75 }
                  ]} 
                />
                
                <MetricCategory 
                  title="FRONTEND & BACKEND" 
                  skills={[
                    { name: "FastAPI", val: 88 },
                    { name: "REST APIs", val: 85 },
                    { name: "HTML5 / CSS3", val: 90 },
                    { name: "Tailwind CSS", val: 93 },
                    { name: "Next.js", val: 80 },
                    { name: "React", val: 60, status: "Learning" }
                  ]} 
                />

                <MetricCategory 
                  title="AI, DATABASES & TOOLS" 
                  skills={[
                    { name: "Gemini API", val: 90 },
                    { name: "Machine Learning", val: 60, status: "Learning" },
                    { name: "Firebase / Firestore", val: 85 },
                    { name: "MongoDB", val: 82 },
                    { name: "Git & GitHub", val: 90 },
                    { name: "NumPy / Pandas", val: 78 }
                  ]} 
                />
              </div>

              {/* Subject Expertise & Learning List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/5">
                <div className="glass-panel p-6 border border-white/10 rounded-lg">
                  <h4 className="text-sm font-mono tracking-widest text-neon-green/80 uppercase mb-4 flex items-center gap-2">
                    <Binary size={16} /> Academic Subjects & Core Theory
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 text-xs font-mono text-white/70">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Database Management (DBMS)</li>
                    <li>• Operating Systems</li>
                    <li>• Computer Networks</li>
                    <li>• AI & Data Science Fundamentals</li>
                  </ul>
                </div>

                <div className="glass-panel p-6 border border-white/10 rounded-lg">
                  <h4 className="text-sm font-mono tracking-widest text-neon-green/80 uppercase mb-4 flex items-center gap-2">
                    <Cpu size={16} /> Currently Learning & Certifications
                  </h4>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "React", "Advanced DSA", "Deep Learning", "System Design"].map((item) => (
                        <span key={item} className="bg-white/5 border border-white/10 text-white/80 px-2 py-1 text-[10px] font-mono rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="h-px bg-white/5 my-2"></div>
                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">
                      Upcoming Certifications:
                    </div>
                    <div className="text-[11px] font-mono text-neon-green/70 flex flex-wrap gap-3">
                      <span>[ML Core]</span>
                      <span>[React Architecture]</span>
                      <span>[Google AI Specialization]</span>
                      <span>[AWS Cloud Fundamentals]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chronology Logbook (Timeline) */}
          <section id="logbook" className="py-20 px-6 md:px-20 border-b border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                  <span className="text-neon-green text-sm font-mono tracking-widest">[03]</span>
                  CHRONOLOGICAL_LOGS
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-neon-green/50 to-transparent mt-4"></div>
              </div>

              <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neon-green border-4 border-[#050608] shadow-[0_0_8px_#10b981]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neon-green tracking-widest uppercase">// EXPECTED GRADUATION 2029</span>
                    <span className="text-xs text-white/40 font-mono">2025 - 2029</span>
                  </div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    Samrat Ashok Technological Institute (SATI), Vidisha
                  </h4>
                  <p className="text-sm text-white/60 font-mono mt-1">
                    B.Tech in Computer Science Engineering (Artificial Intelligence & Data Science)
                  </p>
                  <p className="text-xs text-white/40 mt-2 font-light">
                    Specializing in AI algorithms, database structures, core computational models, and advanced intelligence applications.
                  </p>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white/40 border-4 border-[#050608]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">// COMPETITIVE HACKATHONS</span>
                    <span className="text-xs text-white/40 font-mono">2024 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Hackathon Competitions & Achievements</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2 text-xs font-mono text-white/80">
                      <span className="text-neon-green">🏆</span>
                      <span><strong>Winner</strong> – Technovision Hackathon</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs font-mono text-white/80">
                      <span className="text-neon-green">🥉</span>
                      <span><strong>3rd Place</strong> – VibeHack 2.0</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs font-mono text-white/80">
                      <span className="text-neon-green">🏅</span>
                      <span><strong>Top 10 Finalist</strong> – MANIT Bhopal Hackathon</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs font-mono text-white/80">
                      <span className="text-neon-green">🚀</span>
                      <span><strong>Top 20 Team (out of 1,500+ teams)</strong> – ISRO Bharatiya Antariksh Hackathon 2026 (Problem Statement 07: Exoplanet Transit Detection).</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white/40 border-4 border-[#050608]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">// COLLABORATION & LEADERSHIP</span>
                    <span className="text-xs text-white/40 font-mono">2024 - Active</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Community & Open Source Contributions</h4>
                  <div className="mt-3 space-y-3 text-xs text-white/70">
                    <p>
                      <strong>GirlScript Summer of Code (GSSoC):</strong> Selected as an active contributor, writing modular commits, fixing issue trackers, and collaborating in remote software design teams.
                    </p>
                    <p>
                      <strong>BattleVerse Rap Platform:</strong> Spearheaded operations as Founder, organizing tournaments, digital branding, community integrations, and volunteer structures.
                    </p>
                    <p>
                      <strong>Wiki Club, SATI:</strong> Coordinated logistical support, volunteer allocations, and technical workshops across campus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Playground/Terminal Section */}
          <section id="playground" className="py-20 px-6 md:px-20 bg-white/[0.01]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                
                {/* Information Card */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
                    <TerminalIcon size={24} className="text-neon-green animate-pulse" />
                    NEURAL_CONSOLE
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed text-sm md:text-base">
                    Interact directly with the system core to query Vaibhav Gurjar's professional records. Use CLI directory queries to explore the academic, project, and skill nodes of this environment.
                  </p>
                  
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex items-center gap-3 text-neon-green">
                      <CheckCircle size={14} /> <span>CONSOLE_STATUS: STABLE</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-60">
                      <Cpu size={14} /> <span>LATENCY: LOCAL_0ms</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-60">
                      <HelpCircle size={14} /> <span>Type 'help' or '/help' in the terminal</span>
                    </div>
                  </div>
                </div>
                
                {/* Interactive Console Screen */}
                <div className="flex-1 w-full min-h-[400px] flex flex-col">
                  <div className="glass-panel neon-border rounded-lg flex-1 flex flex-col overflow-hidden">
                    
                    {/* Console Header bar */}
                    <div className="bg-black/60 px-4 py-2 border-b border-white/10 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/40">
                      <span>SYSTEM_TERMINAL_v2.01</span>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/55"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/55"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/55"></span>
                      </div>
                    </div>

                    {/* Console Output Screen */}
                    <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 max-h-[350px]">
                      {history.map((log, idx) => (
                        <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                          {log.type === "input" && (
                            <div className="text-white/40">
                              <span>$ </span>
                              <span className="text-white">{log.text}</span>
                            </div>
                          )}
                          {log.type === "output" && (
                            <div className="text-neon-green/90 pl-3 border-l border-neon-green/20">
                              {log.text}
                            </div>
                          )}
                          {log.type === "error" && (
                            <div className="text-red-400 pl-3 border-l border-red-500/20">
                              {log.text}
                            </div>
                          )}
                          {log.type === "system" && (
                            <div className="text-white/30 italic">
                              {log.text}
                            </div>
                          )}
                        </div>
                      ))}
                      <div ref={terminalEndRef} />
                    </div>

                    {/* Console Input Bar */}
                    <form onSubmit={handleCommandSubmit} className="border-t border-white/10 p-3 bg-black/40 flex gap-2 items-center">
                      <span className="text-neon-green font-mono text-sm pl-1">$</span>
                      <input 
                        type="text" 
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                        placeholder="Command system (e.g. /skills, /projects)..." 
                        className="flex-1 bg-transparent border-none text-white text-xs font-mono focus:outline-none placeholder-white/20"
                      />
                      <button 
                        type="submit" 
                        className="bg-neon-green/10 hover:bg-neon-green text-neon-green hover:text-black border border-neon-green/30 hover:border-neon-green px-4 py-1.5 text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-300 rounded"
                      >
                        Enter
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Section */}
          <footer id="connection" className="py-32 px-6 md:px-20 border-t border-white/5 flex flex-col items-center relative overflow-hidden bg-black/40">
            <h3 className="text-4xl md:text-7xl font-bold mb-6 text-center tracking-tighter leading-none">
              INITIALIZE_<br />
              <span className="text-neon-green text-glow">CONNECTION</span>
            </h3>
            <p className="text-white/50 text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-12 text-center">
              Ready to collaborate on AI, Machine Learning, and Web Engineering
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              <SocialLink icon={<Code2 />} href="https://github.com/vaibhav1874" label="GITHUB" />
              <SocialLink icon={<Users />} href="https://linkedin.com/in/vaibhav1874" label="LINKEDIN" />
              <SocialLink icon={<Mail />} href="mailto:vaibhavgurjar1874@gmail.com" label="EMAIL" />
            </div>

            <div className="mt-20 flex flex-col items-center gap-2">
              <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
                Languages spoken: English // Hindi
              </div>
              <p className="opacity-20 text-[9px] font-mono tracking-widest uppercase">
                SYSTEM IDENTIFIER // VG_PORTFOLIO © 2026 // ALL METRICS VERIFIED
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

function SystemCard({ id, title, tech, problem, solution, bulletPoints, link, highlight }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className={`glass-panel p-6 md:p-8 relative overflow-hidden flex flex-col justify-between rounded-lg ${
        highlight ? 'neon-border border-neon-green/30' : 'border border-white/10 hover:border-white/20 transition-all duration-300'
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] font-mono text-neon-green/60 tracking-[0.2em]">{id}</span>
          <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/10 font-mono text-white/50">ACTIVE</span>
        </div>
        <h4 className="text-2xl font-bold mb-3 tracking-tight">{title}</h4>
        <div className="text-[10px] font-mono text-neon-green/50 mb-6 uppercase tracking-wider bg-neon-green/5 border border-neon-green/10 px-2 py-1 inline-block rounded">
          {tech}
        </div>
        
        <div className="space-y-4 mb-6 text-xs md:text-sm">
          <div>
            <span className="text-[9px] font-bold block text-white/40 mb-1 uppercase tracking-widest">Problem:</span>
            <p className="text-white/70 italic font-light">{problem}</p>
          </div>
          <div>
            <span className="text-[9px] font-bold block text-white/40 mb-1 uppercase tracking-widest">Solution:</span>
            <p className="text-white/80 font-light">{solution}</p>
          </div>
          {bulletPoints && (
            <div className="pt-2 border-t border-white/5">
              <span className="text-[9px] font-bold block text-white/40 mb-1.5 uppercase tracking-widest">Core Highlights:</span>
              <ul className="space-y-1 text-white/60 text-xs font-mono pl-1">
                {bulletPoints.map((bp, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-neon-green">&gt;</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4 mt-4 border-t border-white/5">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/40 hover:text-neon-green flex items-center gap-1.5 text-xs font-mono tracking-widest transition-colors group/link"
        >
          <span>REPOS_NODE</span>
          <ExternalLink size={12} className="group-hover/link:translate-y-[-1px] transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

function MetricCategory({ title, skills }) {
  return (
    <div className="space-y-6 glass-panel p-6 border border-white/10 rounded-lg">
      <h4 className="text-xs font-mono tracking-[0.4em] text-white/40 flex items-center gap-2 mb-2 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
        {title}
      </h4>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between text-[10px] font-mono mb-1.5 uppercase tracking-wide">
              <span className="flex items-center gap-2">
                {skill.name}
                {skill.status && (
                  <span className="text-[8px] bg-neon-blue/15 border border-neon-blue/30 text-neon-blue px-1.5 py-0.5 rounded font-mono uppercase tracking-widest leading-none">
                    {skill.status}
                  </span>
                )}
              </span>
              <span className={skill.status ? "text-neon-blue" : "text-neon-green/60"}>
                {skill.val}%
              </span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${
                  skill.status 
                    ? "from-neon-blue/30 to-neon-blue" 
                    : "from-neon-green/30 to-neon-green"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 group transition-all"
    >
      <div className="p-4 rounded-full border border-white/10 group-hover:neon-border group-hover:text-neon-green text-white/40 transition-all duration-300">
        {icon}
      </div>
      <span className="text-[9px] font-mono tracking-widest opacity-25 group-hover:opacity-100 transition-opacity uppercase">{label}</span>
    </a>
  );
}

