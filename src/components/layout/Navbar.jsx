import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 pt-8 pb-4 text-fg">
      <div className="max-w-[95%] mx-auto flex justify-between items-center text-[13px] font-medium tracking-wide">
        
        {/* Left Name */}
        <div className="w-[200px]">
          <a href="#" className="hover:opacity-70 transition-opacity">
            Ankita Dalvi
          </a>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex flex-1 justify-center gap-12 lg:gap-24">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Toggle */}
        <div className="w-[200px] flex justify-end">
          <button 
            onClick={toggleTheme}
            className="hover:opacity-70 transition-opacity"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
