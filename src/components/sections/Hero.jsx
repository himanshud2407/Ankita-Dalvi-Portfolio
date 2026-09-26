import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col pt-32 pb-20 bg-bg text-fg overflow-hidden">
      
      {/* Top spacing to push heading down slightly to match reference */}
      <div className="flex-1"></div>

      {/* Center Massive Text */}
      <div className="flex items-center justify-center w-full px-4 mb-16">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 }
            }
          }}
          className="text-[5.5vw] sm:text-[6.5vw] md:text-[7vw] lg:text-[7.5vw] xl:text-[7.2vw] font-black leading-[0.9] uppercase m-0 text-center text-fg whitespace-nowrap flex justify-center items-center gap-[1px] sm:gap-[2px] md:gap-[3px]"
        >
          {"ANKITA DALVI".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-block cursor-default"
              style={{ width: char === " " ? "2vw" : "auto", minWidth: char === " " ? "14px" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Bottom Area (Divider + Metadata + Paragraph + Buttons) */}
      <div className="w-[95%] mx-auto flex flex-col items-center">
        
        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 origin-left mb-4"
        ></motion.div>
        
        {/* 3-Column Metadata */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full flex justify-between items-start text-[10px] md:text-[12px] font-medium leading-snug mb-24 md:mb-32"
        >
          <div className="text-left w-1/3">
            <p>Data Analyst & Business Analyst</p>
            <p>Power BI Developer</p>
          </div>
          
          <div className="text-center w-1/3">
            <p>Based in</p>
            <p>Maharashtra, India</p>
          </div>
          
          <div className="text-right w-1/3">
            <p>Working</p>
            <p>Globally</p>
          </div>
        </motion.div>

        {/* Short Paragraph/Description with Radial Glow */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Subtle Radial Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-zinc-200/50 dark:bg-zinc-900/50 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-snug text-fg"
          >
            [A results-driven Data Analyst & Power BI{' '}
            <a href="https://github.com/ankita-analytics" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-500 hover:text-fg transition-colors border-b-2 border-transparent hover:border-fg pb-0.5">
              Developer <FiArrowUpRight className="inline-block" size={24} />
            </a>{' '}
            from India, transforming complex operational data into actionable business intelligence, interactive KPI dashboards, and automated reporting systems.]
          </motion.p>

          {/* Actions Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12"
          >
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent text-fg text-xs font-bold uppercase tracking-wider hover:bg-fg hover:text-bg transition-colors duration-200 cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block"></span>
              <span>Open to Work</span>
            </div>

            {/* Resume Link */}
            <a 
              href="/Ankita_Dalvi_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-fg border-b border-fg pb-0.5 hover:opacity-70 transition-opacity"
            >
              Resume
            </a>

            {/* Contact Link */}
            <a 
              href="#contact" 
              className="text-xs font-bold uppercase tracking-wider text-fg border-b border-fg pb-0.5 hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
          </motion.div>
        </div>

      </div>

      <div className="flex-1"></div>
    </section>
  );
};

export default Hero;
