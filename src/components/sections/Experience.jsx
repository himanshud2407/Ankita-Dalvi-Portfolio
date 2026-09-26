import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData as experiences, educationData as education } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 bg-bg text-fg overflow-hidden">
      <div className="max-w-[1800px] w-full mx-auto px-4 md:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="relative w-fit">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-tight tracking-tight uppercase m-0 text-fg"
            >
              EXPERIENCE
            </motion.h2>
          </div>
        </div>

        {/* Work Experience List */}
        <div className="w-full flex flex-col gap-12 md:pl-[10%] max-w-5xl mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Work History
          </span>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col border-b border-zinc-200 dark:border-zinc-800 pb-10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight m-0">
                    {exp.role}
                  </h3>
                </div>
                <span className="text-xs md:text-sm font-medium text-zinc-500 font-mono mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed list-disc list-inside marker:text-emerald-500">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="pl-1">
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education List */}
        <div className="w-full flex flex-col gap-8 md:pl-[10%] max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Education
          </span>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6"
            >
              <div className="flex flex-col">
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
                  {edu.institution}
                </span>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight m-0">
                  {edu.degree}
                </h4>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  {edu.grade}
                </span>
              </div>
              <span className="text-xs md:text-sm font-medium text-zinc-500 font-mono mt-2 md:mt-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
