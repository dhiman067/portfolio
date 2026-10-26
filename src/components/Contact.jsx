import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/dhiman067', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dhiman-paul', icon: FaLinkedinIn },
  { name: 'Instagram', href: 'https://www.instagram.com/__dhiman067?vrfl=bm1zOGFheWs3NnUz', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1D52xQ6mcn', icon: null },
];

export default function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-copy scroll-reveal">
        <p className="eyebrow">Say hello</p>
        <h2>Have something in mind?<br /><span>Let’s talk.</span></h2>
        <p>I’m open to new connections, collaborations, and conversations about building for the web.</p>
        <a className="button button-primary" href="https://mail.google.com/mail/u/1/#inbox?compose=jrjtXLFTpJlZMmBTPwKKFtPnlPbwtfwtqJVNkwLQwrjztmTgFtFsnwdnJZnJcCMhrxbbqmQh"><Mail size={17} /> pauldhiman80@gmail.com <ArrowUpRight size={16} /></a>
      </div>
      <div className="contact-links scroll-reveal">
        <h3>social links</h3>
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a href={href} key={name} target="_blank" rel="noreferrer">
            <span>{Icon ? <Icon size={18} /> : <span className="facebook-mark">f</span>}{name}</span><ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}