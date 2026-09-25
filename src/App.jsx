import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Film, Gamepad2, Mail,MapPin } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiBootstrap, SiCss, SiDaisyui, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import profilePhoto from './assets/Gemini_Generated_Image_fipglnfipglnfipg.jpg';
import geometryGeniusScreenshot from './assets/GeometryGenius.png';
import devStackScreenshot from './assets/DevStack.png';

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

const hobbies = [
  { title: 'Movies', description: 'I enjoy stories that pull me into another world and leave me thinking long after the credits.', icon: Film, href: '/blog.html?topic=movies', label: 'Screen stories' },
  { title: 'Books', description: 'Reading gives me new perspectives, fresh ideas, and a welcome change of pace from the screen.', icon: BookOpen, href: '/blog.html?topic=books', label: 'Notes from reading' },
  { title: 'Video games', description: 'I like exploring game worlds, solving challenges, and seeing how thoughtful interaction makes play feel natural.', icon: Gamepad2, href: '/blog.html?topic=games', label: 'Worlds & play' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/dhiman067', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dhiman-paul', icon: FaLinkedinIn },
  { name: 'Instagram', href: 'https://www.instagram.com/dhiman.builds', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/dhiman.developer.student', icon: null },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading scroll-reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

export default function App() {
  const projectTrackRef = useRef(null);
  const [projectCarousel, setProjectCarousel] = useState({ current: 0, atStart: true, atEnd: false });

  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal');

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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
    <div className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Dhiman Paul, home">DP<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#hobbies">Hobbies</a>
          <a className="nav-contact" href="#contact">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Frontend developer</p>
            <h1>Hi, I’m Dhiman.<br /><span>I build for the web.</span></h1>
            <p className="hero-lede">I turn ideas into clear, thoughtful digital experiences with code and a little curiosity.</p>
            <p className="hero-story">My journey began with mathematics, where I learned to break big problems into smaller, logical steps. I found the same satisfaction in building for the web: bringing structure and creativity together to make something people can actually use. I’m always learning, making, and looking for a better way to solve the next problem.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a>
              <a className="text-link" href="mailto:dhimanpaul.dev@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-location-row">
              <MapPin className='text-purple-900' size={16} aria-hidden="true" />
              <p className="hero-location">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-accent" />
            <img className="hero-portrait" src={profilePhoto} alt="Portrait of Dhiman Paul" />
            <div className="portrait-caption"><span>Curious by nature.</span><span>Frontend by choice.</span></div>
          </div>
        </section>

        <section className="skills-section section-band" id="skills">
          <div className="section-wrap skills-layout">
            <SectionHeading eyebrow="What I know" title="A toolkit for thoughtful interfaces." >From web foundations to modern frameworks, these are the tools I use to turn ideas into useful experiences.</SectionHeading>
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

        <section className="projects-section section-wrap" id="projects">
          <div className="projects-heading">
            <SectionHeading eyebrow="Selected work" title="A few things I’ve made." >A mix of practical tools and experiments, built to learn by doing.</SectionHeading>
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

        <section className="hobbies-section section-band" id="hobbies">
          <div className="section-wrap">
            <SectionHeading eyebrow="Away from the screen" title="A few other things I enjoy." />
            <div className="hobby-list">
              {hobbies.map(({ title, description, icon: Icon, href, label }, index) => (
                <a className={`hobby hobby-${index + 1} scroll-reveal`} href={href} key={title} aria-label={`Read Dhiman's ${title.toLowerCase()} blog`} style={{ '--reveal-delay': `${index * 90}ms` }}>
                  <span className="hobby-art">
                    <span className="hobby-index">0{index + 1}</span>
                    <span className="hobby-label">{label}</span>
                    <Icon size={68} strokeWidth={1.25} aria-hidden="true" />
                    <span className="hobby-art-line" />
                  </span>
                  <span className="hobby-copy">
                    <span className="hobby-title"><span>{title}</span><ArrowUpRight size={19} aria-hidden="true" /></span>
                    <span className="hobby-description">{description}</span>
                    <span className="hobby-read">Visit blog <span aria-hidden="true">→</span></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy scroll-reveal">
            <p className="eyebrow">Say hello</p>
            <h2>Have something in mind?<br /><span>Let’s talk.</span></h2>
            <p>I’m open to new connections, collaborations, and conversations about building for the web.</p>
            <a className="button button-primary" href="mailto:dhimanpaul.dev@gmail.com"><Mail size={17} /> dhimanpaul.dev@gmail.com <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-links scroll-reveal">
            <h3>Find me around the web</h3>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a href={href} key={name} target="_blank" rel="noreferrer">
                <span>{Icon ? <Icon size={18} /> : <span className="facebook-mark">f</span>}{name}</span><ArrowUpRight size={16} />
              </a>
            ))}
            <a href="/cv.html" target="_blank" rel="noreferrer"><span><span className="cv-mark">CV</span>Curriculum vitae</span><ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">DP<span>.</span></a>
        <p>Designed and built by Dhiman Paul</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}