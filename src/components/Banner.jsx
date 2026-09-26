import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import profilePhoto from '../assets/Gemini_Generated_Image_fipglnfipglnfipg.jpg';

export default function Banner() {
  return (
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
          <MapPin className="text-purple-900" size={16} aria-hidden="true" />
          <p className="hero-location">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-accent" />
        <img className="hero-portrait" src={profilePhoto} alt="Portrait of Dhiman Paul" />
        <div className="portrait-caption"><span>Curious by nature.</span><span>Frontend by choice.</span></div>
      </div>
    </section>
  );
}