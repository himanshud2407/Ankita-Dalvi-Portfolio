import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-bg text-fg overflow-hidden">
      <div className="max-w-[1800px] w-full mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="relative w-fit">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-tight tracking-tight uppercase m-0 text-fg"
            >
              ABOUT
            </motion.h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 lg:col-span-5 flex justify-center items-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
              className="w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] max-h-[390px] rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
            >
              <img 
                src="/Ankita-dalvi.jpeg" 
                alt="Ankita Dalvi - Data Analyst & Power BI Developer" 
                className="w-full h-full object-cover object-top" 
                loading="lazy"
              />
            </motion.div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center pt-4 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col gap-5 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed"
            >
              <p>
                Data Analyst with close to two years of experience across staffing/recruiting, IT, and non-IT sectors, specializing in Power BI dashboard development (DAX, data modeling, Power Query), MIS/KPI reporting, and end-to-end data transformation.
              </p>
              <p>
                Skilled in converting operational data into actionable insights that support process improvement, compliance tracking, and strategic business decision-making. Proficient in SQL, Python, Advanced Excel, Minitab, and Spotfire, with a strong background in cross-functional collaboration and stakeholder communication.
              </p>
              <p>
                Educated with an MBA in Business Analytics & International Business (Suryadatta Institute) and a Bachelor of Computer Applications (BCA, SGPA: 9.43/10). Certified in Microsoft Power BI, SQL for Data Analytics, and Advanced Excel.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              className="mt-8"
            >
               <a 
                href="/Ankita_Dalvi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-fg hover:text-brand-500 transition-colors pb-1.5 border-b border-fg hover:border-brand-500 w-fit"
              >
                Download Resume ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
