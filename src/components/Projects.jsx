import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import geometryGeniusScreenshot from '../assets/GeometryGenius.png';
import devStackScreenshot from '../assets/DevStack.png';
import SectionHeading from './SectionHeading';

const projects = [
  {
    name: 'DevStack',
    description: 'A tool discovery app that helps developers explore technologies, compare options, and build a stack that fits their next project.',
    features: ['Explore and compare development tools', 'Build a project-specific stack', 'Track tools you have already used'],
    stack: ['React', 'JavaScript', 'Responsive UI'],
    image: devStackScreenshot,
    imageAlt: 'DevStack tool selection dashboard',
    github: 'https://github.com/dhiman067/assignment-05',
    live: 'https://development-tool-manager-flame.vercel.app/',
  },
  {
    name: 'Geometry Genius',
    description: 'A geometry calculator that turns shape measurements into clear, quick answers in one focused workspace.',
    features: ['Calculate areas of 2D shapes', 'Calculate volumes of 3D shapes', 'Review previous calculations'],
    stack: ['JavaScript', 'Tailwind CSS', 'DaisyUI'],
    image: geometryGeniusScreenshot,
    imageAlt: 'Geometry Genius calculator showing shape area tools',
    github: 'https://github.com/dhiman067/geometry-genius',
    live: 'https://geometry-genius-sand.vercel.app/',
  },
  {
    name: 'Task Logic Dashboard',
    description: 'A type-safe task manager focused on simple organization, useful filters, and keeping tasks saved between visits.',
    features: ['Create and organize tasks', 'Filter tasks by status', 'Persist task data locally'],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/dhiman067',
  },
];

export default function Projects() {
  const projectTrackRef = useRef(null);
  const [projectCarousel, setProjectCarousel] = useState({ current: 0, atStart: true, atEnd: false });

  useEffect(() => {
    const track = projectTrackRef.current;
    if (!track) return undefined;

    const updateCarousel = () => {
      const firstCard = track.querySelector('.project');
      const trackGap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = firstCard ? firstCard.getBoundingClientRect().width + trackGap : track.clientWidth;
      const maxScroll = track.scrollWidth - track.clientWidth;

      setProjectCarousel({
        current: Math.min(Math.round(track.scrollLeft / step), projects.length - 1),
        atStart: track.scrollLeft <= 1,
        atEnd: track.scrollLeft >= maxScroll - 1,
      });
    };

    updateCarousel();
    track.addEventListener('scroll', updateCarousel, { passive: true });
    window.addEventListener('resize', updateCarousel);
    return () => {
      track.removeEventListener('scroll', updateCarousel);
      window.removeEventListener('resize', updateCarousel);
    };
  }, []);

  const scrollProjects = (direction) => {
    const track = projectTrackRef.current;
    const firstCard = track?.querySelector('.project');
    if (!track || !firstCard) return;

    const trackGap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    track.scrollBy({ left: direction * (firstCard.getBoundingClientRect().width + trackGap), behavior });
  };

  return (
    <section className="projects-section section-wrap" id="projects">
      <div className="projects-heading">
        <SectionHeading eyebrow="Selected work" title="A few things I’ve made.">A mix of practical tools and experiments, built to learn by doing.</SectionHeading>
        <div className="carousel-controls" aria-label="Project carousel controls">
          <span className="carousel-counter" aria-live="polite">{String(projectCarousel.current + 1).padStart(2, '0')} <span>/</span> {String(projects.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => scrollProjects(-1)} disabled={projectCarousel.atStart} aria-label="Previous projects"><ChevronLeft size={19} /></button>
          <button type="button" onClick={() => scrollProjects(1)} disabled={projectCarousel.atEnd} aria-label="Next projects"><ChevronRight size={19} /></button>
        </div>
      </div>
      <div className="project-list" id="projects-carousel-track" ref={projectTrackRef} role="region" aria-label="Project carousel" tabIndex={0}>
        {projects.map((project, index) => (
          <article className="project scroll-reveal" key={project.name} aria-label={`${project.name}, project ${index + 1} of ${projects.length}`} style={{ '--reveal-delay': `${index * 90}ms` }}>
            <div className={`project-visual ${!project.image ? 'project-visual-placeholder' : ''}`}>
              {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <span className="project-number">0{index + 1}</span>}
            </div>
            <div className="project-content">
              <div className="project-title-row">
                <div><p className="eyebrow">Project 0{index + 1}</p><h3>{project.name}</h3></div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><FaGithub size={18} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={18} /></a>}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div><h4>What it does</h4><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
                <div><h4>Built with</h4><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}