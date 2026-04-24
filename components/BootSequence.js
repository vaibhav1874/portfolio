"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "Initializing system kernel...",
  "Loading neural network modules...",
  "Authenticating user session...",
  "Identity detected: VAIBHAV GURJAR",
  "Role: AI & Data Science Engineer",
  "Establishing secure connection to ARCHIVE_01...",
  "System ready."
];

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[index]]);
        setIndex((prev) => prev + 1);
      }, index === BOOT_LOGS.length - 1 ? 1000 : 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#050608] flex items-center justify-center p-6 font-mono overflow-hidden"
    >
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-50"></div>
      
      <div className="max-w-2xl w-full">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-neon-green/80 text-sm md:text-base"
            >
              <span className="text-neon-green/40">[{new Date().toLocaleTimeString()}]</span>
              <span className={i === BOOT_LOGS.length - 1 ? "text-neon-green font-bold" : ""}>
                {i === 3 ? "SYSTEM ACCESS GRANTED" : i === 4 ? `> ${log}` : log}
              </span>
            </motion.div>
          ))}
          {index < BOOT_LOGS.length && (
            <motion.div 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-neon-green inline-block ml-1"
            />
          )}
        </div>
      </div>
      
      {/* Loading Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
          className="w-full h-full bg-neon-green shadow-[0_0_10px_#10b981]"
        />
      </div>
    </motion.div>
  );
}
