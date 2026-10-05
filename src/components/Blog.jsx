import { useEffect } from 'react';
import BooksBlog from './BooksBlog';
import GamesBlog from './GamesBlog';
import MoviesBlog from './MoviesBlog';
import './Blog.css';

const topics = {
  movies: {
    title: 'Stories on screen.',
    intro: 'Films I love, scenes I remember, and thoughts on the stories that stay with me.',
    label: 'Movies',
  },
  books: {
    title: 'Pages worth turning.',
    intro: 'Reading notes, favorite passages, and books that gave me a new perspective.',
    label: 'Books',
  },
  games: {
    title: 'Worlds worth exploring.',
    intro: 'Games, memorable worlds, clever mechanics, and the details that make play feel special.',
    label: 'Video games',
  },
};

function BlogHeader() {
  return (
    <header className="blog-header blog-wrap">
      <a className="blog-identity" href="/" aria-label="Dhiman Paul home">
        <span className="blog-mark">DP<span>.</span></span>
        <span className="blog-identity-copy"><strong>Dhiman Paul</strong><small>PERSONAL JOURNAL</small></span>
      </a>
      <a className="blog-back" href="/#hobbies"><span aria-hidden="true">←</span> Back to portfolio</a>
    </header>
  );
}

export default function Blog() {
  const requestedTopic = new URLSearchParams(window.location.search).get('topic') || 'movies';
  const topicKey = topics[requestedTopic] ? requestedTopic : 'movies';
  const topic = topics[topicKey];
  const navigation = (
    <nav className="blog-nav" aria-label="Blog categories">
      <a href="/blog.html?topic=movies" aria-current={topicKey === 'movies' ? 'page' : undefined}>Movies</a>
      <a href="/blog.html?topic=books" aria-current={topicKey === 'books' ? 'page' : undefined}>Books</a>
      <a href="/blog.html?topic=games" aria-current={topicKey === 'games' ? 'page' : undefined}>Video games</a>
    </nav>
  );

  useEffect(() => {
    if (topicKey !== 'books') document.title = `${topic.label} | Dhiman's Blog`;
  }, [topic, topicKey]);

  return (
    <div className={`blog-page blog-topic-${topicKey}`}>
      <BlogHeader />
      <main className="blog-main blog-wrap">
        {topicKey === 'books'
          ? <BooksBlog topic={topic} navigation={navigation} />
          : topicKey === 'games'
            ? <GamesBlog topic={topic} navigation={navigation} />
            : <MoviesBlog topic={topic} navigation={navigation} />}
      </main>
      <footer className="blog-footer blog-wrap">© {new Date().getFullYear()} Dhiman Paul</footer>
    </div>
  );
}
