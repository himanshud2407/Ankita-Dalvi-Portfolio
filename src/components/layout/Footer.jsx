import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-bg text-fg">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Ankita Dalvi • Data Analyst & Business Analyst
          </p>
          <div className="flex items-center gap-6">
             <a href="https://linkedin.com/in/ankydalvi8877" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
             <a href="https://github.com/ankita-analytics" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">GitHub</a>
             <a href="mailto:ankitasanjay1623@gmail.com" className="hover:text-fg transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
