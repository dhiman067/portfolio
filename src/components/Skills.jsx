import { ArrowUpRight } from 'lucide-react';
import { SiBootstrap, SiCss, SiDaisyui, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'HTML', note: 'Semantic page structure', icon: SiHtml5, color: '#e34f26', tint: '#fff0eb' },
  { name: 'CSS', note: 'Responsive layouts & styling', icon: SiCss, color: '#663399', tint: '#f1ebf8' },
  { name: 'Tailwind CSS', note: 'Utility-first styling', icon: SiTailwindcss, color: '#06a9c7', tint: '#e7f8fb' },
  { name: 'Bootstrap', note: 'Responsive UI components', icon: SiBootstrap, color: '#7952b3', tint: '#f1ebf8' },
  { name: 'DaisyUI', note: 'Themed Tailwind components', icon: SiDaisyui, color: '#10a982', tint: '#e8f7f2' },
  { name: 'JavaScript', note: 'Interactive web experiences', icon: SiJavascript, color: '#b08b00', tint: '#fff8d9' },
  { name: 'TypeScript', note: 'Typed JavaScript', icon: SiTypescript, color: '#3178c6', tint: '#eaf2fc' },
  { name: 'React', note: 'Component-based interfaces', icon: SiReact, color: '#1599b5', tint: '#e7f8fb' },
  { name: 'Next.js', note: 'React framework', icon: SiNextdotjs, color: '#302d37', tint: '#f0eef2' },
];

export default function Skills() {
  return (
    <section className="skills-section section-band" id="skills">
      <div className="section-wrap skills-layout">
        <SectionHeading eyebrow="What I know" title="A toolkit for thoughtful interfaces.">From web foundations to modern frameworks, these are the tools I use to turn ideas into useful experiences.</SectionHeading>
        <div className="skill-grid" aria-label="Technical skills">
          {skills.map(({ name, note, icon: Icon, color, tint }, index) => (
            <article className="skill-card scroll-reveal" key={name} style={{ '--skill-color': color, '--skill-tint': tint, '--reveal-delay': `${index % 3 * 70}ms` }}>
              <span className="skill-icon"><Icon size={30} aria-hidden="true" /></span>
              <span className="skill-copy"><strong>{name}</strong><span>{note}</span></span>
              <ArrowUpRight className="skill-arrow" size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}