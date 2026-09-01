import React from 'react';
import { motion } from 'motion/react';
import { User, BookOpen, Brain, Rocket, Code2, CheckCircle2, Award, Laptop } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curious Mind, Student & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Learner</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Undergraduate student driven by curiosity, code logic, and the endless possibilities of Artificial Intelligence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Student Developer Journey</h3>
                  <p className="text-xs text-slate-400">Lovely Professional University (LPU)</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Hi, I’m <strong className="text-white font-semibold">Navjot Singh</strong>, a B.Tech student at <strong className="text-blue-300 font-semibold">Lovely Professional University (LPU)</strong>. My passion lies in building practical software, understanding algorithmic logic, and exploring how <strong className="text-purple-300 font-semibold">Artificial Intelligence & Machine Learning</strong> can solve real-world problems.
                </p>
                <p className="text-slate-400">
                  As an aspiring developer at the beginner/foundational level, I dedicate my time to learning programming languages like <span className="text-slate-200">Python</span> and <span className="text-slate-200">C++</span>, sharpening my software logic and problem-solving skills, and crafting hands-on experimental projects.
                </p>
                <p className="text-slate-400">
                  I believe the best way to grow is through consistent practice, continuous learning, and turning concepts learned in lecture halls into impactful practical solutions.
                </p>
              </div>
            </div>

            {/* Highlights checklist */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Enrolled in B.Tech program at LPU</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Actively exploring AI & Machine Learning</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Software Logic & Problem Solving</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Building hands-on academic prototypes</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Focus Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Card 1: Education & Campus */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex-1 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Academic Learning at LPU</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pursuing B.Tech curriculum covering Object Oriented Programming, DBMS, algorithms, and computing fundamentals.
                </p>
              </div>
            </div>

            {/* Card 2: AI & ML Exploration */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex-1 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">AI/ML Exploration</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Studying Python libraries (Pandas, NumPy, scikit-learn), exploring predictive modeling, and understanding neural fundamentals.
                </p>
              </div>
            </div>

            {/* Card 3: Hands-On Philosophy */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex-1 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Hands-on Growth</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Motivated by a beginner's mindset—always eager to learn from documentation, mentors, and open-source code repositories.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
