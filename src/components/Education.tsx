import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">University Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Undergraduate foundation in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/[0.1] hover:border-blue-500/30 transition-all duration-300 shadow-xl"
        >
          {/* Subtle top indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] shrink-0 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0a0e1a] rounded-[15px] flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {EDUCATION_DATA.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-400 mt-0.5">
                  {EDUCATION_DATA.institution}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{EDUCATION_DATA.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{EDUCATION_DATA.location}</span>
              </span>
            </div>
          </div>

          {/* Academic Highlights & Coursework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Key Coursework Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Key Coursework & Subjects</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_DATA.keyCoursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-blue-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Academic Focus Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Undergraduate Focus Areas</span>
              </div>
              <div className="space-y-2">
                {EDUCATION_DATA.academicFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
