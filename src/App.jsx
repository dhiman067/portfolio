import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import profilePhoto from './assets/Gemini_Generated_Image_fipglnfipglnfipg.jpg';
import geometryGeniusScreenshot from './assets/GeometryGenius.png';
import { 
  Mail, 
  Terminal, 
  Code,
  Sparkles, 
  BookOpen, 
  Gamepad2, 
  Film, 
  Cpu, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Compass, 
  GraduationCap, 
  MapPin, 
  Layers, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  FileText,
  MessageCircle,
  Download
} from 'lucide-react';

const Github = FaGithub;
const Linkedin = FaLinkedinIn;
const Instagram = FaInstagram;
const Facebook = FaFacebookF;

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState('math'); // 'math' | 'react' | 'logic'

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Code editor interactive snippets
  const snippets = {
    math: `// Mathematics -> Frontend Logic Transformation
function calculateInterface(logic, precision) {
  const mathFormula = (x) => Math.pow(x, 2) + 2 * x + 1; // f(x) = (x + 1)²
  const UIState = logic.map((node) => ({
    id: node.id,
    calculatedValue: mathFormula(node.value),
    isPixelPerfect: precision === '100%'
  }));
  return UIState;
}`,
    react: `// React + TypeScript Journey
interface Developer {
  name: "Dhiman Paul";
  major: "Mathematics";
  skills: string[];
  passionLevel: number;
}

const Dhiman: Developer = {
  name: "Dhiman Paul",
  major: "Mathematics",
  skills: ["JS", "TS", "Tailwind", "React"],
  passionLevel: Infinity
};`,
    logic: `// Logic Driven UI State
const [curiosity, setCuriosity] = useState<boolean>(true);
const [currentFocus, setCurrentFocus] = useState<string>("React.js");

useEffect(() => {
  console.log("Bridging math proofs with component trees...");
}, [currentFocus]);`
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dhimanpaul.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PIVOT STORY', href: '#pivot' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PASSIONS', href: '#passions' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E2E8F0] font-sans selection:bg-[#F59E0B] selection:text-black relative overflow-x-hidden">
      
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#181C24] text-[#F59E0B] border border-[#F59E0B]/40 px-5 py-3 rounded-xl shadow-2xl animate-bounce">
          <Check className="w-5 h-5 text-[#10B981]" />
          <span className="font-mono text-xs font-semibold tracking-wider">Email copied to clipboard! (dhimanpaul.dev@gmail.com)</span>
        </div>
      )}

      {/* Grid Overlay Background */}
      <div 
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#10B981]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0B0C10]/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-black font-mono font-black text-base flex items-center justify-center transition-all group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-[#F59E0B]/20">
              DP/
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-widest text-white group-hover:text-[#F59E0B] transition-colors">
                DHIMAN PAUL
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wide">NARAYANGANJ, BD</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-xs tracking-widest text-slate-400 hover:text-[#F59E0B] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Resume CTA & Status */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setResumeOpen(true)}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold tracking-wider text-slate-200 border border-slate-700 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all bg-white/5 hover:bg-[#F59E0B]/10"
            >
              <FileText className="w-3.5 h-3.5 text-[#F59E0B]" />
              RESUME
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111319] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-widest text-slate-300 hover:text-[#F59E0B]"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setResumeOpen(true);
              }}
              className="mt-2 text-center py-2.5 rounded-lg border border-[#F59E0B] text-[#F59E0B] font-mono text-xs font-bold"
            >
              VIEW RESUME ↗
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="scroll-reveal is-visible max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column - Intro Details */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-mono text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            FRONTEND DEVELOPER • MATHEMATICS STUDENT
          </div>

          {/* Personal Mark and Intro */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl border border-[#F59E0B]/30 bg-[#161B22] flex items-center justify-center shadow-lg shadow-[#F59E0B]/10">
              <img src={profilePhoto} alt="Dhiman Paul" className="w-full h-full rounded-2xl object-cover" />
            </div>
            <p className="font-mono text-slate-400 text-sm tracking-wide">
              <span className="text-slate-600">/</span> hello, i'm dhiman paul
            </p>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            I build <span className="text-[#F59E0B] underline decoration-[#F59E0B]/30 underline-offset-8">precise, expressive</span> web interfaces.
          </h1>

          {/* Hero Story Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans pt-2">
            I turn mathematical thinking into clear, engaging digital experiences. I build modern interfaces with <span className="text-white font-medium">React, TypeScript, and Tailwind CSS</span>, combining structured logic with thoughtful visual design.
          </p>

          {/* Location & Institution Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5 bg-[#161B22] border border-slate-800 px-3 py-1.5 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Narayanganj, Bangladesh</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#161B22] border border-slate-800 px-3 py-1.5 rounded-md">
              <GraduationCap className="w-3.5 h-3.5 text-[#10B981]" />
              <span>B.Sc. in Mathematics</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-black font-mono font-bold text-xs px-6 py-3.5 rounded-lg tracking-wider uppercase transition-all shadow-lg shadow-[#F59E0B]/15"
            >
              VIEW MY PROJECTS
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#161B22] hover:bg-[#1C232E] border border-slate-700 hover:border-slate-500 text-slate-200 font-mono font-bold text-xs px-6 py-3.5 rounded-lg tracking-wider uppercase transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4 text-slate-400" />}
              {copied ? 'COPIED!' : 'COPY EMAIL'}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 flex items-center gap-5 border-t border-slate-800/80 w-full">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">CONNECT</span>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://github.com/dhiman067" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors p-1.5 bg-[#161B22] rounded-md border border-slate-800" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors p-1.5 bg-[#161B22] rounded-md border border-slate-800" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <button onClick={handleCopyEmail} className="hover:text-[#F59E0B] transition-colors p-1.5 bg-[#161B22] rounded-md border border-slate-800" title="Email">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column - Interactive Math + Code Terminal Showcase */}
        <div className="lg:col-span-5 relative w-full">
          
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F59E0B]/20 to-[#10B981]/20 rounded-2xl blur-lg opacity-50" />

          <div className="relative bg-[#0F1218] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
            
            {/* Terminal Header Bar */}
            <div className="bg-[#161B22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              
              <div className="text-slate-400 text-[11px] font-mono tracking-wider flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
                dhiman.dev / math-logic.ts
              </div>

              <Sparkles className="w-3.5 h-3.5 text-slate-500" />
            </div>

            {/* Interactive Tab Toggle inside Code Window */}
            <div className="bg-[#0B0C10] px-3 py-2 border-b border-slate-800/80 flex gap-2">
              <button 
                onClick={() => setCodeSnippet('math')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${codeSnippet === 'math' ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40' : 'text-slate-400 hover:text-white'}`}
              >
                MathProof.ts
              </button>
              <button 
                onClick={() => setCodeSnippet('react')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${codeSnippet === 'react' ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40' : 'text-slate-400 hover:text-white'}`}
              >
                Developer.ts
              </button>
              <button 
                onClick={() => setCodeSnippet('logic')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${codeSnippet === 'logic' ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40' : 'text-slate-400 hover:text-white'}`}
              >
                StateLoop.tsx
              </button>
            </div>

            {/* Snippet Code View */}
            <div className="p-5 overflow-x-auto leading-relaxed text-slate-300 min-h-[220px]">
              <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {snippets[codeSnippet]}
              </pre>
            </div>

            {/* Footer Terminal Badges */}
            <div className="bg-[#0B0C10]/90 border-t border-slate-800 p-3 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 text-[10px] text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/20 font-bold uppercase tracking-wider">
                <Zap className="w-3 h-3" />
                LOGIC PIVOT: ACTIVE
              </div>

              <div className="text-[10px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 flex items-center gap-1.5">
                <span className="text-slate-500 uppercase tracking-wider">FOCUS:</span>
                <span className="text-[#F59E0B] font-semibold">React.js & TS</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Origin Story Section */}
      <section id="pivot" className="scroll-reveal py-20 bg-[#0E1117] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase mb-2">// THE ORIGIN STORY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Mathematical Proofs to Code Execution
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-3">
              How studying abstract algebra, calculus, and logical proofs turned into a passion for constructing digital frontend experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Mathematical Foundation */}
            <div className="bg-[#141822] border border-slate-800/80 rounded-xl p-6 relative group hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-4 font-mono font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                Mathematical Logic
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                As a Mathematics student, I spent hours studying set theory, discrete mathematics, and algorithms. I learned to analyze complex problems by breaking them down into fundamental logic steps.
              </p>
            </div>

            {/* Card 2 - The Spark / Pivot */}
            <div className="bg-[#141822] border border-slate-800/80 rounded-xl p-6 relative group hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4 font-mono font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#10B981]" />
                Fascinating Pivot
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                When I introduced myself to programming, I realized code is simply applied mathematics brought to life. I became completely obsessed with how lines of code translate into dynamic interactive visuals.
              </p>
            </div>

            {/* Card 3 - Modern Frontend Craftsman */}
            <div className="bg-[#141822] border border-slate-800/80 rounded-xl p-6 relative group hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-4 font-mono font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#3B82F6]" />
                Frontend Craft
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Now I am building frontend projects with JavaScript, TypeScript, Tailwind CSS, and DaisyUI while actively deepening my mastery of React.js and preparing for full-stack integration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Skills Roadmap Section */}
      <section id="skills" className="scroll-reveal py-20 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start mb-10">
          <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase mb-2">// TECHNICAL ROADMAP</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Tech Stack & Skill Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 - Proficient Core */}
          <div className="bg-[#11141D] border border-slate-800 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Fluent & Proficient</h3>
              </div>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">STRONG</span>
            </div>

            <div className="space-y-4">
              {[
                { name: 'HTML5 & CSS3', desc: 'Semantic structures & responsive layouts', level: '95%' },
                { name: 'JavaScript (ES6+)', desc: 'DOM, Async/Await, Array Methods, Closures', level: '85%' },
                { name: 'TypeScript', desc: 'Type Safety, Interfaces, Generics', level: '80%' },
                { name: 'Tailwind CSS', desc: 'Utility-first styling & dynamic layouts', level: '92%' },
                { name: 'DaisyUI', desc: 'Component library & theme management', level: '90%' },
              ].map((skill) => (
                <div key={skill.name} className="p-3 bg-[#181D28] rounded-lg border border-slate-800/80">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-200 mb-1">
                    <span>{skill.name}</span>
                    <span className="text-[#10B981]">{skill.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2 font-sans">{skill.desc}</p>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Deepening Mastery */}
          <div className="bg-[#11141D] border border-slate-800 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Active Mastery</h3>
              </div>
              <span className="text-[10px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20">CURRENT FOCUS</span>
            </div>

            <div className="space-y-4">
              {[
                { name: 'React.js', desc: 'Hooks, State Management, Custom Hooks, JSX', level: '75%' },
                { name: 'Component Architecture', desc: 'Reusable patterns, modular design', level: '80%' },
                { name: 'REST APIs & Fetching', desc: 'Integrating third-party API data seamlessly', level: '78%' },
                { name: 'Git & GitHub', desc: 'Version control, branches, PR workflows', level: '82%' },
              ].map((skill) => (
                <div key={skill.name} className="p-3 bg-[#181D28] rounded-lg border border-slate-800/80">
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-200 mb-1">
                    <span>{skill.name}</span>
                    <span className="text-[#F59E0B]">{skill.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2 font-sans">{skill.desc}</p>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Future Horizon */}
          <div className="bg-[#11141D] border border-slate-800 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Next Horizon</h3>
              </div>
              <span className="text-[10px] font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">UPCOMING</span>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Next.js', tag: 'SSR & App Router' },
                { name: 'Node.js & Express', tag: 'Backend Logic' },
                { name: 'Databases (MongoDB/PostgreSQL)', tag: 'Data Persistence' },
                { name: 'State Management (Redux/Zustand)', tag: 'Global State' },
              ].map((item) => (
                <div key={item.name} className="p-3 bg-[#181D28] rounded-lg border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white">{item.name}</h4>
                    <span className="text-[10px] text-slate-400">{item.tag}</span>
                  </div>
                  <Compass className="w-4 h-4 text-[#3B82F6]" />
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-lg bg-[#3B82F6]/5 border border-[#3B82F6]/20 text-xs text-slate-300 font-sans">
                💡 <span className="text-white font-semibold">Continuous Growth Mindset:</span> Learning daily to transform from a Frontend Craftsman into a Full-Stack Engineer.
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-reveal py-20 bg-[#0E1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-start mb-12">
            <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase mb-2">// SELECTED WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Minimal Projects & Frontend Experiments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-[#141822] rounded-xl border border-slate-800 overflow-hidden flex flex-col group hover:border-[#F59E0B]/50 transition-all">
              <div className="p-6 pb-4 border-b border-slate-800/60 bg-[#181C28]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20">REACT + TAILWIND</span>
                  <div className="flex gap-2 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                  Interactive Dev Showcase
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  A high-end developer portfolio featuring live terminal mockups, mathematical logic transformations, dark aesthetic design, and responsive elements.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-300">
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">React</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">TypeScript</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#141822] rounded-xl border border-slate-800 overflow-hidden flex flex-col group hover:border-[#F59E0B]/50 transition-all">
              <div className="aspect-[16/9] overflow-hidden border-b border-slate-800/60 bg-[#F4EFE7]">
                <img
                  src={geometryGeniusScreenshot}
                  alt="Geometry Genius calculator showing 2D shape area tools"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pb-4 border-b border-slate-800/60 bg-[#181C28]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">JS + TAILWIND + DAISYUI</span>
                  <div className="flex gap-2 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                  Geometry Genius
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  A focused geometry calculator for turning measurements into answers. Users can calculate the area of 2D shapes and the volume of 3D shapes, then review their previous calculations in one clear workspace.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-300">
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">JavaScript</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Tailwind CSS</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Geometry Logic</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#141822] rounded-xl border border-slate-800 overflow-hidden flex flex-col group hover:border-[#F59E0B]/50 transition-all">
              <div className="p-6 pb-4 border-b border-slate-800/60 bg-[#181C28]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">REACT + TYPESCRIPT</span>
                  <div className="flex gap-2 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                  Task Logic Dashboard
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  A clean, state-driven task manager built with React state hooks, type-safe interfaces, custom local storage sync, and filtering logic.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-300">
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">React</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">TypeScript</span>
                  <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Tailwind</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Passions Section */}
      <section id="passions" className="scroll-reveal passions-section py-20 max-w-7xl mx-auto px-6">
        
        <div className="passions-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#F59E0B] font-mono text-xs tracking-widest uppercase mb-3 block">// OFF-DUTY & IDENTITY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Keeps Me Alive
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl md:text-right">
            Three ways I step away from the screen, stay curious, and bring fresh perspective back to the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Books */}
          <div className="passion-card passion-card-amber group bg-[#11141D] border border-slate-800 rounded-xl p-7 flex flex-col items-center text-center">
            <span className="passion-number self-start">01</span>
            <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Reading Books</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Immersing myself in literature, classics, and Bengali books. Reading fuels critical thinking, imagination, and continuous focus needed for programming.
            </p>
            <span className="font-mono text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
              MINDSET & FOCUS
            </span>
          </div>

          {/* Movies */}
          <div className="passion-card passion-card-green group bg-[#11141D] border border-slate-800 rounded-xl p-7 flex flex-col items-center text-center">
            <span className="passion-number self-start">02</span>
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Watching Movies</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              A huge fan of cinema and visual storytelling. Analyzing cinematic lighting, direction, and character dynamics directly influences how I design visual UI storytelling.
            </p>
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
              VISUAL CREATIVITY
            </span>
          </div>

          {/* Gaming */}
          <div className="passion-card passion-card-blue group bg-[#11141D] border border-slate-800 rounded-xl p-7 flex flex-col items-center text-center">
            <span className="passion-number self-start">03</span>
            <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gaming</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Exploring immersive game mechanics, problem-solving puzzles, and strategy games. Gaming keeps my reflexes sharp and teaches intuitive UX design.
            </p>
            <span className="font-mono text-[10px] text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
              PROBLEM SOLVING
            </span>
          </div>

        </div>

      </section>

      {/* STRICT MATCH: Contact & Open Channel Section */}
      <section id="contact" className="scroll-reveal py-20 bg-[#0B0C10] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Subtitle Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[#F59E0B]">06</span>
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">CONTACT / OPEN CHANNEL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left Side Column - Main Headline & Copy Button */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Let’s make something useful.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I’m open to internships, small collaborations, and conversations about making the web a little more human.
              </p>

              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#F59E0B] border-b-2 border-[#F59E0B] pb-1 hover:text-white hover:border-white transition-colors uppercase pt-2"
              >
                <Copy className="w-4 h-4" />
                <span>COPY DIRECT EMAIL</span>
              </button>
            </div>

            {/* Right Side Column - 6 Grid Social Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: EMAIL */}
              <a
                href="mailto:dhimanpaul.dev@gmail.com"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">EMAIL</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">dhimanpaul.dev@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card 2: GITHUB */}
              <a
                href="https://github.com/dhiman067"
                target="_blank"
                rel="noreferrer"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">GITHUB</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">@dhiman-paul</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card 3: LINKEDIN */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">LINKEDIN</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">in/dhiman-paul</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card 4: WHATSAPP */}
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noreferrer"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">WHATSAPP</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">+880 (17) 000-0000</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card 5: INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">INSTAGRAM</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">@dhiman.builds</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card 6: FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-[#12151D] hover:bg-[#161B26] border border-slate-800/90 rounded-xl p-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B] transition-colors">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold">FACEBOOK</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white font-mono">dhiman.developer.student</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

            </div>

          </div>

          {/* Curriculum Vitae Bar */}
          <div className="bg-[#0D0F14] border border-[#F59E0B]/40 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="flex flex-col space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#F59E0B] tracking-wider">CURRICULUM VITAE / 2026</span>
              <p className="text-slate-300 text-xs sm:text-sm">
                A one-page overview of my learning path, projects, and current stack.
              </p>
            </div>

            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-black font-mono font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all shadow-lg shadow-[#F59E0B]/15 self-start md:self-auto"
            >
              <Download className="w-4 h-4" />
              VIEW RESUME
            </button>
          </div>

          {/* Footer Copyright */}
          <div className="text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between w-full pt-10 mt-12 border-t border-slate-900">
            <span>© 2026 DHIMAN PAUL. ALL RIGHTS RESERVED.</span>
            <span className="mt-2 sm:mt-0 text-slate-600">CRAFTED WITH REACT & TAILWIND • NARAYANGANJ, BANGLADESH</span>
          </div>

        </div>
      </section>

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#141822] border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative font-sans">
            <button 
              onClick={() => setResumeOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Dhiman Paul - Resume</h3>
                <p className="text-xs text-slate-400 font-mono">Frontend Craftsman • Mathematics Major</p>
              </div>
            </div>

            <div className="bg-[#0B0C10] p-4 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300 font-sans mb-6">
              <p><strong className="text-white">Education:</strong> B.Sc. in Mathematics (Current Student)</p>
              <p><strong className="text-white">Location:</strong> Narayanganj, Bangladesh</p>
              <p><strong className="text-white">Core Skills:</strong> HTML, CSS, JavaScript, TypeScript, Tailwind CSS, DaisyUI, React.js</p>
              <p><strong className="text-white">Upcoming:</strong> Next.js, Node.js, Express, Databases (MongoDB/PostgreSQL)</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setResumeOpen(false)}
                className="flex-1 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-mono text-xs font-bold hover:bg-slate-800"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  alert("Resume download initiated!");
                  setResumeOpen(false);
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#F59E0B] text-black font-mono text-xs font-bold hover:bg-[#d97706]"
              >
                DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}