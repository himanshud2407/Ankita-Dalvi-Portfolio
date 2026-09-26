import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-bg text-fg overflow-hidden">
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
              CONTACT
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="md:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-5xl font-normal tracking-tight mb-6">
                Let's discuss data & analytics.
              </h3>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
                Whether you are looking for a Data Analyst, Business Analyst, or Power BI Developer to build impactful dashboards and optimize business reporting, I am always open to new opportunities.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <FiMail className="text-emerald-500" size={18} />
                <a href="mailto:ankitasanjay1623@gmail.com" className="text-sm md:text-base font-medium hover:text-fg transition-colors">
                  ankitasanjay1623@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <FiPhone className="text-emerald-500" size={18} />
                <a href="tel:+918830677102" className="text-sm md:text-base font-medium hover:text-fg transition-colors">
                  +91 8830677102
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <FiMapPin className="text-emerald-500" size={18} />
                <span className="text-sm md:text-base font-medium">
                  Maharashtra, India (Open to Relocation & Remote)
                </span>
              </div>

              <div className="flex gap-6 pt-6">
                <a 
                  href="https://linkedin.com/in/ankydalvi8877" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-fg transition-colors pb-1 border-b border-transparent hover:border-fg"
                >
                  <FiLinkedin size={16} /> LinkedIn
                </a>
                <a 
                  href="https://github.com/ankita-analytics" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-fg transition-colors pb-1 border-b border-transparent hover:border-fg"
                >
                  <FiGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="md:col-span-6 bg-[#E9E9E7] p-8 md:p-10 rounded-2xl border border-[#B8B8B8] shadow-sm"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#7D8FA3] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-[#888888] py-3 focus:outline-none focus:border-[#00B874] text-[#222222] placeholder:text-[#888888]/70 transition-colors text-sm font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#7D8FA3] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-[#888888] py-3 focus:outline-none focus:border-[#00B874] text-[#222222] placeholder:text-[#888888]/70 transition-colors text-sm font-medium"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#7D8FA3] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-transparent border-b border-[#888888] py-3 focus:outline-none focus:border-[#00B874] text-[#222222] placeholder:text-[#888888]/70 transition-colors resize-none text-sm font-medium"
                  placeholder="Tell me about your project or role..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="self-start mt-2 px-8 py-3.5 bg-[#111111] hover:bg-[#00B874] text-[#FFFFFF] font-bold uppercase tracking-wider text-xs rounded-full transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
