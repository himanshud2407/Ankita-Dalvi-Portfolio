import React from 'react';
import { motion } from 'framer-motion';

// Helper to generate mock heatmap data
const generateMockHeatmap = () => {
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    const days = [];
    for (let j = 0; j < 7; j++) {
      // Random activity level 0-4
      const level = Math.random() > 0.6 ? Math.floor(Math.random() * 5) : 0;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const GitHub = () => {
  const mockHeatmap = generateMockHeatmap();
  
  const getColorClass = (level) => {
    switch(level) {
      case 0: return 'bg-zinc-300 dark:bg-zinc-800';
      case 1: return 'bg-emerald-300 dark:bg-emerald-900';
      case 2: return 'bg-emerald-400 dark:bg-emerald-700';
      case 3: return 'bg-emerald-500 dark:bg-emerald-500';
      case 4: return 'bg-emerald-600 dark:bg-emerald-400';
      default: return 'bg-zinc-300 dark:bg-zinc-800';
    }
  };

  return (
    <section id="github" className="relative py-20 md:py-32 bg-bg text-fg overflow-hidden">
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
              GITHUB
            </motion.h2>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-wrap gap-8 md:gap-16"
            >
              {[
                { label: 'Followers', val: '124' },
                { label: 'Commits', val: '1,248' },
                { label: 'Repos', val: '42' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                    {stat.label}
                  </span>
                  <span className="text-sm md:text-base font-bold tracking-tight leading-none mt-0.5">
                    {stat.val}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              href="https://github.com/ankita-analytics" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-fg hover:text-emerald-600 transition-colors pb-2 border-b border-fg hover:border-emerald-600 mt-4 md:mt-0"
            >
              View Profile ↗
            </motion.a>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar pb-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              className="min-w-max flex flex-col mx-auto w-fit"
            >
              {/* Heatmap Grid */}
              <div className="flex gap-[4px]">
                {mockHeatmap.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[4px] flex-shrink-0">
                    {week.map((dayLevel, dIdx) => (
                      <div 
                        key={`${wIdx}-${dIdx}`}
                        className={`w-[14px] h-[14px] rounded-[3px] transition-all duration-300 hover:scale-110 cursor-pointer ${getColorClass(dayLevel)}`}
                        title={`${dayLevel * 3} contributions`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-4 pl-8 text-[10px] md:text-xs text-zinc-500 font-medium">
                <a href="#" className="hover:text-zinc-800 transition-colors">
                  Learn how we count contributions
                </a>
                <div className="flex items-center gap-[4px]">
                  <span className="mr-1">Less</span>
                  <div className={`w-[14px] h-[14px] rounded-[3px] ${getColorClass(0)}`}></div>
                  <div className={`w-[14px] h-[14px] rounded-[3px] ${getColorClass(1)}`}></div>
                  <div className={`w-[14px] h-[14px] rounded-[3px] ${getColorClass(2)}`}></div>
                  <div className={`w-[14px] h-[14px] rounded-[3px] ${getColorClass(3)}`}></div>
                  <div className={`w-[14px] h-[14px] rounded-[3px] ${getColorClass(4)}`}></div>
                  <span className="ml-1">More</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
