import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, FolderGit2, Mail, GraduationCap, Cpu, ChevronDown, Linkedin, Github, Brain, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AiBackgroundCanvas } from './AiBackgroundCanvas';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Animated AI / Neural Background */}
      <AiBackgroundCanvas />

      {/* Radial Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Status Pill Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6 shadow-inner backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{PERSONAL_INFO.statusBadge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">LPU</span>
            </div>

            {/* Main Greeting */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p
              id="hero-role-subheading"
              className="text-lg sm:text-xl font-medium text-slate-300 mb-3 tracking-wide"
            >
              {PERSONAL_INFO.role}
            </p>

            {/* Motto */}
            <div
              id="hero-motto"
              className="inline-block px-4 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent mb-6 tracking-widest uppercase font-mono"
            >
              {PERSONAL_INFO.motto}
            </div>

            {/* Brief Context Hook for 30-sec recruiter scan */}
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
              B.Tech student at Lovely Professional University focused on practical programming,
              clean data structures, and developing foundational Artificial Intelligence & Machine Learning projects.
            </p>

            {/* Primary Action Buttons */}
            <div id="hero-cta-buttons" className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <button
                id="hero-view-projects-btn"
                type="button"
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-blue-400/30 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-[#0077b5] hover:text-white bg-[#0077b5]/10 hover:bg-[#0077b5] border border-[#0077b5]/30 hover:border-[#0077b5] transition-all duration-300 active:scale-95 cursor-pointer"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                id="hero-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/20 transition-all duration-300 active:scale-95 cursor-pointer"
                title="View GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                id="hero-contact-me-btn"
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/15 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact</span>
              </button>
            </div>
          </motion.div>

          {/* Modern Profile & Academic Overview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent shadow-2xl shadow-blue-950/40">
              <div className="rounded-[15px] bg-[#0c101c]/90 backdrop-blur-xl border border-white/[0.08] p-6 overflow-hidden space-y-5">
                
                {/* Profile Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] shadow-md">
                      <div className="w-full h-full bg-[#0e1322] rounded-[11px] flex items-center justify-center text-blue-400 font-bold text-lg">
                        NS
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white">Navjot Singh</h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                        B.Tech Undergraduate at LPU
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI / ML Track</span>
                  </div>
                </div>

                {/* Focus Areas & Competencies Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Technical Interests
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">AI & Machine Learning</div>
                        <div className="text-[10px] text-slate-400">Supervised Learning & EDA</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">IoT & Smart Systems</div>
                        <div className="text-[10px] text-slate-400">Sensor Data & Hardware</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Status List */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Current University:</span>
                    <span className="font-semibold text-slate-200">Lovely Professional University</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-slate-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" /> Punjab, India
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Collaboration Status:</span>
                    <span className="font-semibold text-emerald-400">Open to Projects & Learning</span>
                  </div>
                </div>

                {/* Quick Goal Banner */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Aiming to build impactful solutions through continuous practice.</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors text-xs"
          >
            <span>Explore Details</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
