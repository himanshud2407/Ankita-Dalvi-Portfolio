import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData, projectCategories as categories } from '../../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'ALL' || project.category.toUpperCase() === activeCategory
  );

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const otherProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="flex flex-col gap-normal py-32 m-0 bg-bg text-fg font-sans overflow-hidden">
      <div className="max-w-[1800px] w-full px-4 md:px-6 lg:px-10 mx-auto">
        <div className="flex flex-col mb-12">
          <div className="relative w-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-tight tracking-tight uppercase m-0 text-fg"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4 md:gap-6 text-[8px] md:text-[10px] uppercase tracking-widest font-medium mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-4 overflow-x-auto whitespace-nowrap"
        >
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`hover:text-fg transition-colors ${activeCategory === cat ? 'text-fg border-b border-fg' : 'text-zinc-400 dark:text-zinc-600'}`}
            >
              {cat === 'ALL' ? 'ALL' : `[${cat}]`}
            </button>
          ))}
        </motion.div>

        <div className="w-full max-w-[1400px] mx-auto">
          {featuredProject && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full mb-8 md:mb-12 group relative flex justify-center border-b border-zinc-200 dark:border-zinc-800 pb-8 md:pb-12 cursor-pointer"
            >
              <div className="w-full max-w-[800px] xl:max-w-[900px] aspect-[16/9] overflow-hidden relative rounded-2xl">
                <img 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:blur-md" 
                  src={featuredProject.image} 
                />
                <div className="absolute inset-0 rounded-2xl bg-black/20 group-hover:bg-black/60 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-6 text-center z-10 pointer-events-none">
                  <p className="text-white text-lg md:text-3xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md max-w-3xl">
                    {featuredProject.description}
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white z-20">
                  <h3 className="text-2xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight font-display">{featuredProject.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3">
                    <div className="hidden md:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-[8px] md:text-xs uppercase font-bold rounded-sm text-white">
                      {featuredProject.category}
                    </div>
                    {featuredProject.github && (
                      <a href={featuredProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors text-xs md:text-sm font-medium text-white hover:text-white/70">
                        <FiGithub size={16} />
                      </a>
                    )}
                    {featuredProject.link && (
                      <a href={featuredProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors text-xs md:text-sm font-medium text-white hover:text-white/70">
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {otherProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-8 md:gap-y-12 pt-6 md:pt-10 border-t border-zinc-200 dark:border-zinc-800">
              {otherProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full flex flex-col group border-t-0 border-zinc-200 dark:border-zinc-800 py-0 cursor-pointer"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden relative mb-4 rounded-2xl">
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:blur-md" 
                      src={project.image} 
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/60 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-6 text-center z-10 pointer-events-none">
                      <p className="text-white text-base md:text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="pr-4">
                          <h3 className="text-base md:text-3xl font-normal uppercase tracking-tight text-fg leading-[1.1] font-display">
                            {project.title}
                          </h3>
                          <p className="hidden md:block text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="hidden md:block px-2 py-1 bg-fg/5 dark:bg-white/10 text-fg text-[10px] md:text-xs uppercase font-bold rounded-sm whitespace-nowrap mt-1">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 md:gap-4 mt-4">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors text-xs md:text-sm font-medium text-fg hover:text-fg/70">
                            <FiGithub size={16} />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors text-xs md:text-sm font-medium text-fg hover:text-fg/70">
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
