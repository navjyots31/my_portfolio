import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Brain, 
  GitBranch, 
  Cpu, 
  Network, 
  FileCode2, 
  CheckCircle,
  Layers,
  GraduationCap
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill, SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: ('All' | SkillCategory)[] = ['All', 'Languages', 'AI & Core Concepts', 'Tools & Foundations'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <FileCode2 className="w-5 h-5" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Learner':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Learner
          </span>
        );
      case 'Beginner':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Beginner
          </span>
        );
      case 'Foundational':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Foundational
          </span>
        );
      case 'Practicing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Practicing
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">
            {level}
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Learning Roadmap</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Transparently represented as a beginner/student developer building strong fundamentals.
          </p>

          {/* Honest Note Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300">
            <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Active student learner status: Focusing on hands-on building & concept mastery</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 border border-blue-400/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative glass-panel rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Card top row */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.accentColor} p-[1px] shadow-sm`}>
                    <div className="w-full h-full bg-[#0d1220] rounded-[11px] flex items-center justify-center text-slate-100 group-hover:text-blue-300 transition-colors">
                      {getIcon(skill.icon)}
                    </div>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {skill.name}
                </h3>
                
                <div className="text-[11px] font-mono text-slate-400 mb-2">
                  {skill.category}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Card bottom pill */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-blue-300/90">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>{skill.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
