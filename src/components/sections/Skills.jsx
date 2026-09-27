import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { skillsData, skillCategories, certificationsData, languagesData } from '../../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-bg text-fg relative overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        
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
              SKILLS
            </motion.h2>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-fg text-bg shadow-sm'
                  : 'bg-fg/5 text-fg hover:bg-fg/10 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4 mb-20"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="flex items-center gap-3 p-2.5 md:p-3 bg-fg/5 hover:bg-fg/10 transition-colors rounded-md cursor-default border border-transparent hover:border-fg/10"
            >
              {/* Icon Container - Transparent & Perfectly Fitted */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                {skill.iconUrl || (typeof skill.icon === 'string' && skill.icon.trim().length > 0) ? (
                  <img 
                    src={skill.iconUrl || skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full max-w-[36px] max-h-[36px] object-contain select-none pointer-events-none" 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  skill.icon
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-[12px] md:text-[13px] font-bold text-fg leading-tight mb-0.5 truncate">
                  {skill.name}
                </span>
                <span className="text-[10px] md:text-[11px] font-medium text-zinc-500 dark:text-zinc-400 leading-tight truncate">
                  {skill.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Languages / Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 border-t border-zinc-200 dark:border-zinc-800">
          
          {/* Certifications */}
          <div className="lg:col-span-8 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
              Certifications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, cIdx) => (
                <motion.a 
                  key={cIdx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 rounded-md bg-fg/5 border border-zinc-200/60 dark:border-zinc-800/80 flex flex-col justify-between hover:bg-fg/10 transition-colors cursor-pointer block"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-semibold text-fg leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cert.name}
                    </p>
                    <FiExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 opacity-60 group-hover:opacity-100 transition-all shrink-0 mt-0.5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                    {cert.issuer}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Languages & Availability */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
              Languages & Availability
            </span>
            <div className="p-5 rounded-md bg-fg/5 border border-zinc-200/60 dark:border-zinc-800/80 space-y-4 text-xs">
              <div>
                <p className="font-bold uppercase tracking-wider text-zinc-400 mb-1">Languages</p>
                <p className="text-sm font-medium text-fg">{languagesData.languages}</p>
              </div>
              <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800">
                <p className="font-bold uppercase tracking-wider text-zinc-400 mb-1">Availability</p>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {languagesData.availability}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
