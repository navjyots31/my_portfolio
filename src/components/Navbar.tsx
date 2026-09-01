import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Send, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060911]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="navbar-brand-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-tight text-lg"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-[1px] flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#080c16] rounded-[11px] flex items-center justify-center">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
              B.Tech • AI/ML Learner
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-3">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                id={`nav-link-${sectionId}`}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm shadow-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA / Social Quick Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="navbar-github-btn"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="navbar-linkedin-btn"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="navbar-contact-cta"
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 border border-blue-400/30 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white hover:bg-white/[0.1] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0f19] border border-white/[0.12] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  id={`mobile-nav-${sectionId}`}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
