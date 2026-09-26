import { ArrowUpRight } from 'lucide-react';
import bookCover from '../assets/bookCover.png';
import gameCover from '../assets/gameCover.png';
import movieCover from '../assets/movieCover.png';
import SectionHeading from './SectionHeading';

const hobbies = [
  { title: 'Movies', description: 'I enjoy stories that pull me into another world and leave me thinking long after the credits.', image: movieCover, href: '/blog.html?topic=movies', label: 'Screen stories',invite: 'Checkout my blogs to find out about my favourite movies.' },
  { title: 'Books', description: 'Reading gives me new perspectives, fresh ideas, and a welcome change of pace from the screen.', image: bookCover, href: '/blog.html?topic=books', label: 'Notes from reading',invite: 'Checkout my blogs to find out about my taste in books.' },
  { title: 'Video games', description: 'I like exploring game worlds, solving challenges, and seeing how thoughtful interaction makes play feel natural.', image: gameCover, href: '/blog.html?topic=games', label: 'Worlds & play',invite: 'Checkout my blogs to find out which game made a last long impact on me.' },
];

export default function Hobbies() {
  return (
    <section className="hobbies-section section-band" id="hobbies">
      <div className="section-wrap">
        <SectionHeading eyebrow="Away from the screen" title="A few other things I enjoy." />
        <div className="hobby-list">
          {hobbies.map(({ title, description,invite, image, href, label }, index) => (
            <a className={`hobby hobby-${index + 1} scroll-reveal`} href={href} key={title} aria-label={`Read Dhiman's ${title.toLowerCase()} blog`} style={{ '--reveal-delay': `${index * 90}ms` }}>
              <span className="hobby-art">
                <img className="hobby-cover" src={image} alt="" />
                <span className="hobby-index">0{index + 1}</span>
                <span className="hobby-label">{label}</span>
                <span className="hobby-art-line" />
              </span>
              <span className="hobby-copy">
                <span className="hobby-title"><span>{title}</span><ArrowUpRight size={19} aria-hidden="true" /></span>
                <span className="hobby-description">{description}</span>
                <p className="hobby-description">{invite}</p>
                <span className="hobby-read">Visit blog <span aria-hidden="true">→</span></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}