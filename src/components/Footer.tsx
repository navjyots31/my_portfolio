import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative border-t border-white/[0.08] bg-[#050810] py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-white text-base">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-normal text-slate-400 font-mono">B.Tech Student</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              © 2026 Navjot Singh | Built with passion for technology
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                id="footer-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-mail-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
