import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
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
  );
}