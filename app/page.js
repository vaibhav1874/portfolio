"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Globe, Mail, Github, Linkedin, ChevronRight, Terminal, MessageSquare } from "lucide-react";
import BootSequence from "../components/BootSequence";

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
          {/* Main Interface Content */}
          <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
            <div className="text-xl font-bold tracking-tighter neon-text">VG_SYSTEM_v1.0</div>
            <nav className="flex gap-8 text-xs tracking-widest uppercase opacity-60">
              <a href="#systems" className="hover:opacity-100 transition-opacity">Systems</a>
              <a href="#playground" className="hover:opacity-100 transition-opacity">Playground</a>
              <a href="#metrics" className="hover:opacity-100 transition-opacity">Metrics</a>
              <a href="#connection" className="hover:opacity-100 transition-opacity text-neon-green">Connect</a>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-10 md:px-20 pt-20">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-neon-green font-mono text-sm tracking-[0.3em] mb-4 uppercase">
                // AUTHORIZED ACCESS ONLY
              </h2>
              <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-tight">
                VAIBHAV <br />
                <span className="text-gradient">GURJAR</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/50 mb-10 max-w-2xl font-light">
                AI & Data Science Engineer. <span className="text-white">I build systems that think, not just run.</span>
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="neon-border bg-neon-green/5 px-8 py-4 flex items-center gap-3 group">
                  <span className="font-bold tracking-widest uppercase text-sm">View Systems</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/10 hover:bg-white/5 transition-colors uppercase tracking-widest text-sm font-bold">
                  Initialize Contact
                </button>
              </div>
            </motion.div>

            {/* Ambient System Stats */}
            <div className="absolute bottom-10 right-10 hidden lg:block text-[10px] font-mono opacity-30 text-right uppercase space-y-1">
              <div>LATITUTDE: 18.74.N</div>
              <div>LONGITUDE: 72.88.E</div>
              <div>CORE_TEMP: 32°C</div>
              <div>NEURAL_LOAD: STABLE</div>
            </div>
          </section>

          {/* Systems Section */}
          <section id="systems" className="py-20 px-10 md:px-20">
            <div className="mb-20">
              <h3 className="text-4xl font-bold flex items-center gap-4">
                <span className="text-neon-green text-sm font-mono tracking-widest">[01]</span>
                ACTIVE_SYSTEMS
              </h3>
              <div className="h-px w-full bg-gradient-to-r from-neon-green/50 to-transparent mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <SystemCard 
                id="SYSTEM_01" 
                title="BATTLEVERSE" 
                problem="Lack of community platform for underground rappers."
                solution="A premium competitive platform with automated registration."
                tech="Next.js, MongoDB, Firebase"
                link="https://github.com"
                highlight
              />
              <SystemCard 
                id="SYSTEM_02" 
                title="SENTIMENT_LX" 
                problem="High noise in social data analysis."
                solution="Transformer-based model for nuanced sentiment extraction."
                tech="Python, PyTorch, FastAPI"
                link="https://github.com"
              />
              <SystemCard 
                id="SYSTEM_03" 
                title="AUTO_NEURAL" 
                problem="Manual architecture tuning is inefficient."
                solution="Genetic algorithm for hyperparameter optimization."
                tech="TensorFlow, Scikit-Learn"
                link="https://github.com"
              />
            </div>
          </section>

          {/* AI Playground Section */}
          <section id="playground" className="py-20 px-10 md:px-20 bg-white/[0.02]">
             <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-6">AI_PLAYGROUND</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Interact with the neural core. This module demonstrates real-time text processing and identity synthesis.
                    </p>
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-center gap-3 text-neon-green">
                        <Terminal size={16} /> <span>DEMO_MODE: ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-3 opacity-50">
                        <Cpu size={16} /> <span>LATENCY: 14ms</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full max-w-md">
                    <div className="glass-panel neon-border p-6 rounded-lg min-h-[300px] flex flex-col">
                      <div className="flex-1 flex flex-col justify-center items-center opacity-40 text-center p-8 border border-dashed border-white/10 rounded">
                        <MessageSquare size={48} className="mb-4" />
                        <p className="text-sm font-mono">NEURAL_INTERFACE_READY</p>
                        <p className="text-[10px] mt-2">WAITING FOR INPUT...</p>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Command system..." 
                          className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-neon-green transition-colors"
                        />
                        <button className="bg-neon-green text-black px-4 py-2 text-xs font-bold uppercase">Run</button>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          {/* Skills Section */}
          <section id="metrics" className="py-32 px-10 md:px-20">
            <h3 className="text-4xl font-bold mb-20 text-center">CORE_METRICS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <MetricCategory title="AI/ML" skills={["Deep Learning", "TensorFlow", "Scikit-Learn", "NLP"]} />
              <MetricCategory title="WEB_STACK" skills={["React/Next.js", "Node.js", "MongoDB", "PostgreSQL"]} />
              <MetricCategory title="TOOLS" skills={["Docker", "Git", "Cuda", "GCP/AWS"]} />
            </div>
          </section>

          {/* Contact Section */}
          <footer id="connection" className="py-40 px-10 md:px-20 border-t border-white/5 flex flex-col items-center">
             <h3 className="text-6xl md:text-8xl font-bold mb-12 text-center">INITIALIZE_<br/><span className="text-neon-green">CONNECTION</span></h3>
             <div className="flex gap-10 mt-10">
                <SocialLink icon={<Github />} href="https://github.com" label="GITHUB" />
                <SocialLink icon={<Linkedin />} href="https://linkedin.com" label="LINKEDIN" />
                <SocialLink icon={<Mail />} href="mailto:vaibhav@system.ai" label="EMAIL" />
             </div>
             <p className="mt-20 opacity-20 text-[10px] font-mono tracking-widest uppercase">
               All rights reserved // VG_IDENTITY © 2026
             </p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

function SystemCard({ id, title, problem, solution, tech, link, highlight }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`glass-panel p-8 relative overflow-hidden group ${highlight ? 'neon-border' : 'border border-white/10 hover:border-white/30'}`}
    >
      <div className="text-[10px] font-mono text-neon-green/60 mb-4 tracking-[0.2em]">{id}</div>
      <h4 className="text-2xl font-bold mb-6 tracking-tight">{title}</h4>
      <div className="space-y-4 mb-8">
        <div>
          <span className="text-[10px] font-bold block text-white/40 mb-1 uppercase tracking-widest">Problem:</span>
          <p className="text-sm text-white/70 italic">{problem}</p>
        </div>
        <div>
          <span className="text-[10px] font-bold block text-white/40 mb-1 uppercase tracking-widest">Solution:</span>
          <p className="text-sm text-white/70">{solution}</p>
        </div>
      </div>
      <div className="text-[10px] font-mono text-neon-green/40 mb-10 overflow-hidden text-ellipsis whitespace-nowrap">
        {tech}
      </div>
      <a href={link} className="absolute bottom-6 right-8 text-white/40 group-hover:text-neon-green transition-colors">
        <Github size={20} />
      </a>
    </motion.div>
  );
}

function MetricCategory({ title, skills }) {
  return (
    <div className="space-y-8">
      <h4 className="text-xs font-mono tracking-[0.5em] text-white/40 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-neon-green"></div>
        {title}
      </h4>
      <div className="space-y-6">
        {skills.map((skill, i) => (
          <div key={skill}>
            <div className="flex justify-between text-[10px] font-mono mb-2 uppercase tracking-wide">
              <span>{skill}</span>
              <span className="text-neon-green/60">{90 - (i * 8)}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${90 - (i * 8)}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-neon-green/20 to-neon-green"
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
      className="flex flex-col items-center gap-3 group transition-all"
    >
      <div className="p-4 rounded-full border border-white/10 group-hover:neon-border group-hover:text-neon-green text-white/40 transition-all">
        {icon}
      </div>
      <span className="text-[10px] font-mono tracking-widest opacity-20 group-hover:opacity-100 transition-opacity uppercase">{label}</span>
    </a>
  );
}
