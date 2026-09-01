import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Connect & Collaborate</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Feel free to reach out for student project discussions, tech conversations, or internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400">Feel free to send a message</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-xs text-slate-200 truncate select-all">
                  {PERSONAL_INFO.email}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    id="copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    id="mailto-link-btn"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 transition-colors"
                    title="Open in Mail Client"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email address copied to clipboard!
                </p>
              )}
            </div>

            {/* Social & Developer Profiles */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Online Profiles & Code
              </h3>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-slate-300 group-hover:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-[11px] text-slate-400">Repositories & Code Experiments</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-slate-400">Professional Network & Connections</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

            </div>

            {/* University Tag Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.name}</span>
                <span className="block text-[11px] text-slate-400">Lovely Professional University, Punjab, India</span>
              </div>
            </div>

          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.1]"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Your message has been recorded. Since this is a student portfolio, you can also send an email directly to{' '}
                  <span className="text-blue-300">{PERSONAL_INFO.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    id="send-another-message-btn"
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/[0.1] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <span className="text-[11px] text-slate-400 font-mono">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Collaboration / Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hi Navjot, I came across your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-300 disabled:opacity-50 active:scale-95 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
