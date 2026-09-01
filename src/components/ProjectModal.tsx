import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Droplets,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // --- State for Smart Water Quality Meter Demo ---
  const [phVal, setPhVal] = useState<number>(7.2);
  const [turbidityVal, setTurbidityVal] = useState<number>(3.5);
  const [tdsVal, setTdsVal] = useState<number>(180);

  const getWaterQualityStatus = () => {
    const isPhSafe = phVal >= 6.5 && phVal <= 8.5;
    const isTurbiditySafe = turbidityVal <= 5.0;
    const isTdsSafe = tdsVal <= 300;

    if (isPhSafe && isTurbiditySafe && isTdsSafe) {
      return { 
        label: 'Optimal / Safe Drinking Water', 
        color: 'text-emerald-400', 
        bg: 'bg-emerald-500/10 border-emerald-500/30',
        badgeBg: 'bg-emerald-500/20 text-emerald-300',
        status: 'safe',
        recommendation: 'Parameters meet WHO/EPA potability standards. Suitable for consumption.'
      };
    }
    if ((isPhSafe && isTurbiditySafe) || (isPhSafe && isTdsSafe)) {
      return { 
        label: 'Acceptable / Moderate (Filtration Recommended)', 
        color: 'text-amber-400', 
        bg: 'bg-amber-500/10 border-amber-500/30',
        badgeBg: 'bg-amber-500/20 text-amber-300',
        status: 'moderate',
        recommendation: 'Minor parameter variance detected. Domestic sediment or carbon filter recommended.'
      };
    }
    return { 
      label: 'Unsafe / Requires Treatment', 
      color: 'text-rose-400', 
      bg: 'bg-rose-500/10 border-rose-500/30',
      badgeBg: 'bg-rose-500/20 text-rose-300',
      status: 'unsafe',
      recommendation: 'High risk detected in pH or particulate matter. UV sterilization and RO filtration necessary.'
    };
  };

  const applyWaterPreset = (type: 'tap' | 'stream' | 'runoff' | 'mineral') => {
    if (type === 'tap') {
      setPhVal(7.4);
      setTurbidityVal(1.2);
      setTdsVal(140);
    } else if (type === 'stream') {
      setPhVal(6.8);
      setTurbidityVal(4.8);
      setTdsVal(280);
    } else if (type === 'mineral') {
      setPhVal(7.8);
      setTurbidityVal(0.6);
      setTdsVal(190);
    } else {
      setPhVal(5.2);
      setTurbidityVal(18.5);
      setTdsVal(680);
    }
  };

  const waterStatus = getWaterQualityStatus();

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-3xl rounded-2xl bg-[#0b0f19] border border-white/[0.12] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">• {project.status}</span>
          </div>
          <button
            id="close-project-modal-btn"
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1.5">{project.title}</h3>
            <p className="text-sm text-cyan-400 font-medium">{project.tagline}</p>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* INTERACTIVE SIMULATOR SECTION */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 relative overflow-hidden shadow-inner">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Interactive Sensor Calibration Sandbox
                </span>
              </div>
              <span className="text-[11px] text-cyan-300 font-mono flex items-center gap-1">
                <Zap className="w-3 h-3" /> Live Simulator
              </span>
            </div>

            {/* WATER QUALITY METER DEMO */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400">Sample Presets:</span>
                <button
                  type="button"
                  onClick={() => applyWaterPreset('tap')}
                  className="px-2.5 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs transition-colors cursor-pointer"
                >
                  Municipal Tap Water
                </button>
                <button
                  type="button"
                  onClick={() => applyWaterPreset('mineral')}
                  className="px-2.5 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs transition-colors cursor-pointer"
                >
                  Bottled Mineral Water
                </button>
                <button
                  type="button"
                  onClick={() => applyWaterPreset('stream')}
                  className="px-2.5 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs transition-colors cursor-pointer"
                >
                  Natural Stream
                </button>
                <button
                  type="button"
                  onClick={() => applyWaterPreset('runoff')}
                  className="px-2.5 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs transition-colors cursor-pointer"
                >
                  Untreated Runoff
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* pH Slider */}
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-blue-400" /> pH Level
                    </span>
                    <span className="font-mono text-blue-400 font-bold text-sm">{phVal.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="14"
                    step="0.1"
                    value={phVal}
                    onChange={(e) => setPhVal(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
                    <span>Acidic (0)</span>
                    <span className="text-blue-300 font-semibold">Safe (6.5-8.5)</span>
                    <span>Basic (14)</span>
                  </div>
                </div>

                {/* Turbidity Slider */}
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" /> Turbidity
                    </span>
                    <span className="font-mono text-cyan-400 font-bold text-sm">{turbidityVal.toFixed(1)} NTU</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="0.5"
                    value={turbidityVal}
                    onChange={(e) => setTurbidityVal(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
                    <span>Clear</span>
                    <span className="text-cyan-300 font-semibold">Safe (&le;5 NTU)</span>
                    <span>Turbid</span>
                  </div>
                </div>

                {/* TDS Slider */}
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Total Solids (TDS)
                    </span>
                    <span className="font-mono text-purple-400 font-bold text-sm">{tdsVal} ppm</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="900"
                    step="10"
                    value={tdsVal}
                    onChange={(e) => setTdsVal(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
                    <span>Purified</span>
                    <span className="text-purple-300 font-semibold">Ideal (&le;300)</span>
                    <span>High Minerals</span>
                  </div>
                </div>
              </div>

              {/* Real-time Classification Card */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${waterStatus.bg}`}>
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-2 rounded-lg bg-black/20 shrink-0">
                    <Activity className={`w-6 h-6 ${waterStatus.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Microcontroller Threshold Logic Assessment</div>
                    <div className={`text-base font-bold ${waterStatus.color}`}>{waterStatus.label}</div>
                    <p className="text-xs text-slate-300 mt-0.5">{waterStatus.recommendation}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right text-[11px] font-mono text-slate-400 shrink-0">
                  <div>ADC Resolution: 10-bit</div>
                  <div className="text-cyan-400">Sampling Rate: 100ms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              Core Technical Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
