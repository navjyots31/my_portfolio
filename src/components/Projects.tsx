import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Activity, 
  Brain, 
  Code2, 
  ChevronRight 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (demoType: string) => {
    switch (demoType) {
      case 'water-quality':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'ai-classification':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'algorithm-visualizer':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Hands-On Builds</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Prototypes and practical code built during my academic journey as a beginner developer.
          </p>
        </div>

        {/* Featured Project Layout */}
        <div className="max-w-3xl mx-auto">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {/* Subtle top card gradient banner */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              <div>
                {/* Header row with Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getProjectIcon(project.demoType)}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {project.category}
                      </span>
                      <span className="ml-2 text-xs text-slate-400 font-medium">
                        • {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Key Highlight
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 font-medium mb-3.5">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Capabilities List */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">Key Highlights & Functionality:</p>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub and Live Demo */}
              <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
                <button
                  id={`project-demo-btn-${project.id}`}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 border border-cyan-400/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch Live Interactive Demo</span>
                </button>

                <a
                  id={`project-github-link-${project.id}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
