import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    title: 'Core Frontend & Framework Stack',
    skills: [
      { name: 'Next.js', note: 'React framework', icon: SiNextdotjs, color: '#302d37', tint: '#f0eef2' },
      { name: 'React', note: 'Component-based interfaces', icon: SiReact, color: '#1599b5', tint: '#e7f8fb' },
      { name: 'TypeScript', note: 'Typed JavaScript', icon: SiTypescript, color: '#3178c6', tint: '#eaf2fc' },
      { name: 'JavaScript', note: 'Interactive web experiences', icon: SiJavascript, color: '#b08b00', tint: '#fff8d9' },
      { name: 'Tailwind CSS', note: 'Utility-first styling', icon: SiTailwindcss, color: '#06a9c7', tint: '#e7f8fb' },
      { name: 'Bootstrap', note: 'Responsive UI components', icon: SiBootstrap, color: '#7952b3', tint: '#f1ebf8' },
    ],
  },
  {
    title: 'Backend, Database & Authentication',
    skills: [
      { name: 'Node.js', note: 'JavaScript runtime', icon: SiNodedotjs, color: '#43853d', tint: '#edf6eb' },
      { name: 'Express.js', note: 'Node.js web framework', icon: SiExpress, color: '#302d37', tint: '#f0eef2' },
      { name: 'MongoDB', note: 'NoSQL document database', icon: SiMongodb, color: '#47a248', tint: '#edf7ed' },
      { name: 'Better Auth', note: 'Authentication framework', icon: ShieldCheck, color: '#6653a3', tint: '#f1eef9' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section-band" id="skills">
      <div className="section-wrap skills-layout">
        <SectionHeading eyebrow="What I know" title="A toolkit for thoughtful interfaces.">From web foundations to modern frameworks, these are the tools I use to turn ideas into useful experiences.</SectionHeading>
        <div className="skill-groups" aria-label="Technical skills">
          {skillGroups.map(({ title, skills }) => (
            <div className="skill-group" key={title}>
              <h3 className="skill-group-title">{title}</h3>
              <div className="skill-grid">
                {skills.map(({ name, note, icon: Icon, color, tint }, index) => (
                  <article className="skill-card scroll-reveal" key={name} style={{ '--skill-color': color, '--skill-tint': tint, '--reveal-delay': `${index % 3 * 70}ms` }}>
                    <span className="skill-icon"><Icon size={30} aria-hidden="true" /></span>
                    <span className="skill-copy"><strong>{name}</strong><span>{note}</span></span>
                    <ArrowUpRight className="skill-arrow" size={17} aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}