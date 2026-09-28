import { useEffect, useState } from 'react';
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

const bookCollections = [
  {
    id: 'year',
    kicker: 'Reading log',
    title: 'Books I read in 2026',
    heroTitle: 'A year of reading.',
    description: 'Every book I finished this year, with a note on each one.',
    coverIds: ['17672935', '57020740', '223497156'],
    dataFile: 'book-2026.json',
  },
  {
    id: 'bengali',
    kicker: 'বাংলা বই',
    title: 'Must-read Bengali books',
    heroTitle: 'Stories in Bangla.',
    description: 'Bengali books from my shelf that stayed with me long after the last page.',
    dataFile: 'bengali-books.json',
    artTitles: ['বাংলা', 'কথা', 'স্মৃতি'],
  },
  {
    id: 'thrillers',
    kicker: 'Twists & suspense',
    title: 'Best thriller books',
    heroTitle: 'Tension, twists, reveals.',
    description: 'Mysteries and thrillers I kept turning pages for.',
    dataFile: 'thriller-books.json',
    artTitles: ['MYSTERY', 'THRILLER', 'SUSPENSE'],
  },
];

function formatReadDate(value) {
  const [year, month, day] = String(value || '').split('/').map(Number);
  if (!year || !month || !day) return value || 'Date not recorded';
  return new Date(year, month - 1, day).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function normalizeBook(record) {
  const reviewText = String(record['My Review'] || '');
  const review = reviewText.split(/<br\s*\/?>/gi).map((paragraph) => paragraph.trim()).filter(Boolean);
  const summary = reviewText.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const isbn = String(record.ISBN13 || record.ISBN || '').replace(/[^0-9X]/gi, '');
  const spoiler = record.Spoiler === true || String(record.Spoiler).toLowerCase() === 'true';

  return {
    slug: String(record['Book Id']),
    title: record.Title,
    author: record.Author,
    image: record.image || (isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : ''),
    rating: Number(record['My Rating']) || 0,
    dateRead: formatReadDate(record['Date Read']),
    readYear: String(record['Date Read'] || '').slice(0, 4),
    publishedYear: record['Original Publication Year'] || record['Year Published'] || 'Unknown',
    publisher: record.Publisher,
    pages: Number(record['Number of Pages']) || 0,
    summary: spoiler ? 'This review contains spoilers.' : summary.length > 170 ? `${summary.slice(0, 167)}...` : summary || 'Open this book to read my notes.',
    review,
    spoiler,
  };
}

function BlogHeader() {
  return (
    <header className="blog-header blog-wrap">
      <a className="blog-mark" href="/">DP<span>.</span></a>
      <a className="blog-back" href="/#hobbies">Back to portfolio</a>
    </header>
  );
}

function BookCollections({ books, year }) {
  return (
    <section className="book-collections" aria-labelledby="book-collections-heading">
      <div className="book-collections-heading">
        <p className="blog-eyebrow">Reading shelves</p>
        <h2 id="book-collections-heading">Choose a collection</h2>
        <p>Reading logs, Bengali favorites, and page-turning thrillers.</p>
      </div>
      <div className="book-collection-grid">
        {bookCollections.map((collection) => {
          const collectionCount = collection.id === 'year' ? `${books.length} books` : 'Curated shelf';
          const covers = collection.coverIds?.map((id) => books.find((book) => book.slug === id)).filter(Boolean) || [];

          return (
            <a className={`book-collection book-collection-${collection.id}`} href={`/blog.html?topic=books&year=${year}&collection=${collection.id}`} key={collection.id}>
              <span className="book-collection-art" aria-hidden="true">
                {covers.map((book) => (
                  <span className="book-collection-cover" key={book.slug}>
                    {book.image ? <img src={book.image} alt="" /> : <span>{book.title}</span>}
                  </span>
                ))}
                {collection.artTitles?.map((title) => (
                  <span className="book-collection-cover book-collection-cover-type" key={title}><span>{title}</span></span>
                ))}
                <span className="book-collection-count">{collectionCount}</span>
              </span>
              <span className="book-collection-copy">
                <span className="book-collection-kicker">{collection.kicker}</span>
                <strong>{collection.title}</strong>
                <span className="book-collection-description">{collection.description}</span>
                <span className="book-collection-link">Explore collection <span aria-hidden="true">↗</span></span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function BookList({ books, year, page, collection }) {
  const pageSize = 5;
  const pageCount = Math.ceil(books.length / pageSize);
  const firstBookIndex = (page - 1) * pageSize;
  const pageBooks = books.slice(firstBookIndex, firstBookIndex + pageSize);
  const collectionQuery = collection ? `&collection=${collection.id}` : '';
  const pageHref = (targetPage) => `/blog.html?topic=books&year=${year}${collectionQuery}&page=${targetPage}`;
  const title = collection?.title || `Books I read in ${year}`;
  const description = collection?.id === 'year'
    ? 'A running list of books, with a few thoughts on each one.'
    : collection?.description || 'A few notes on the books that found their way onto my shelf this year.';

  return (
    <section className="book-list" aria-label={title}>
      <div className="book-list-heading">
        <p className="blog-eyebrow">{collection?.kicker || 'Reading log'}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="book-list-count">Showing {firstBookIndex + 1}–{Math.min(firstBookIndex + pageSize, books.length)} of {books.length} books</p>
      </div>
      {pageBooks.map((book, index) => (
        <a className="book-row" href={`/blog.html?topic=books&year=${year}${collectionQuery}&page=${page}&book=${encodeURIComponent(book.slug)}`} key={`${book.slug}-${firstBookIndex + index}`}>
          <span className="book-cover">
            {book.image
              ? <img src={book.image} alt={`Cover of ${book.title}`} />
              : <span className="book-cover-fallback" aria-label={`Cover unavailable for ${book.title}`}>{book.title}</span>}
          </span>
          <span className="book-row-copy">
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
            <span className="book-summary">{book.summary}</span>
          </span>
          <span className="book-row-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
      {pageCount > 1 && (
        <nav className="book-pagination" aria-label="Book list pages">
          {page > 1
            ? <a className="pagination-step" href={pageHref(page - 1)}>Previous</a>
            : <span className="pagination-step is-disabled" aria-disabled="true">Previous</span>}
          <div className="pagination-numbers">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              pageNumber === page
                ? <span className="pagination-number is-current" aria-current="page" key={pageNumber}>{pageNumber}</span>
                : <a className="pagination-number" href={pageHref(pageNumber)} key={pageNumber}>{pageNumber}</a>
            ))}
          </div>
          {page < pageCount
            ? <a className="pagination-step" href={pageHref(page + 1)}>Next</a>
            : <span className="pagination-step is-disabled" aria-disabled="true">Next</span>}
        </nav>
      )}
    </section>
  );
}

function BookReview({ book, books, year, page, collection }) {
  const currentIndex = books.findIndex((item) => item.slug === book.slug);
  const relatedBooks = Array.from({ length: Math.min(3, books.length - 1) }, (_, index) => (
    books[(currentIndex + index + 1) % books.length]
  ));

  return (
    <article className="book-review">
      <a className="blog-return" href={`/blog.html?topic=books&year=${year}${collection ? `&collection=${collection.id}` : ''}&page=${page}`}>
        ← {collection ? collection.title : `All books from ${year}`}
      </a>
      <div className="review-book-header">
        <div className="review-cover">
          {book.image
            ? <img src={book.image} alt={`Cover of ${book.title}`} />
            : <span className="book-cover-fallback">{book.title}</span>}
        </div>
        <div className="review-book-copy">
          <div className="review-heading">
            <div>
              <p className="blog-eyebrow">Read {book.dateRead}</p>
              <h2>{book.title}</h2>
              <p className="review-author">by {book.author}</p>
            </div>
            {book.rating
              ? <div className="review-rating" aria-label={`Rating: ${book.rating} out of 5`}><span>{book.rating}</span><small>/ 5</small></div>
              : <div className="review-rating"></div>}
          </div>
        </div>
      </div>
      {book.spoiler
        ? <details className="review-spoiler"><summary>Show spoiler review</summary><div className="review-body">{book.review.map((paragraph, index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}</div></details>
        : <div className="review-body">{book.review.map((paragraph, index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}</div>}
      <p className="review-finished">{book.dateRead}</p>
      {relatedBooks.length > 0 && (
        <section className="related-books" aria-labelledby="related-books-heading">
          <h3 id="related-books-heading">You might also like</h3>
          <div className="related-book-list">
            {relatedBooks.map((relatedBook) => {
              const relatedIndex = books.findIndex((item) => item.slug === relatedBook.slug);
              const relatedPage = Math.floor(relatedIndex / 5) + 1;
              return (
                <a className="related-book" href={`/blog.html?topic=books&year=${year}${collection ? `&collection=${collection.id}` : ''}&page=${relatedPage}&book=${encodeURIComponent(relatedBook.slug)}`} key={relatedBook.slug}>
                  <span className="related-book-cover">
                    {relatedBook.image
                      ? <img src={relatedBook.image} alt="" />
                      : <span aria-hidden="true">{relatedBook.title}</span>}
                  </span>
                  <span className="related-book-copy">
                    <strong>{relatedBook.title}</strong>
                    <span>by {relatedBook.author}</span>
                    <span className="related-book-action">Read review <span aria-hidden="true">↗</span></span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}

export default function Blog() {
  const params = new URLSearchParams(window.location.search);
  const topicKey = params.get('topic') || 'movies';
  const topic = topics[topicKey] || topics.movies;
  const year = params.get('year') || '2026';
  const bookSlug = params.get('book');
  const collection = bookCollections.find((item) => item.id === params.get('collection'));
  const requestedPage = Number(params.get('page') || 1);
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const isBooks = topicKey === 'books';
  const isReadingList = isBooks && params.has('year') && !bookSlug;
  const [books, setBooks] = useState([]);
  const [loadState, setLoadState] = useState('loading');

  useEffect(() => {
    if (!isBooks) return;

    fetch(`/${collection?.dataFile || 'book-2026.json'}`)
      .then((response) => {
        const isSeparateCollection = collection && collection.id !== 'year';
        const isJsonResponse = response.headers.get('content-type')?.includes('json');
        if (isSeparateCollection && (!response.ok || !isJsonResponse)) {
          setLoadState('unavailable');
          return null;
        }
        if (!response.ok) throw new Error('Could not load book data');
        return response.json();
      })
      .then((data) => {
        if (!data) return;
        const records = Array.isArray(data) ? data : data.books || [];
        const normalizedBooks = records.map(normalizeBook);
        setBooks(collection && collection.id !== 'year'
          ? normalizedBooks
          : normalizedBooks.filter((book) => book.readYear === year));
        setLoadState('loaded');
      })
      .catch(() => setLoadState('error'));
  }, [collection, isBooks, year]);

  const selectedBook = books.find((book) => book.slug === bookSlug);
  const collectionBooks = books;
  const pageCount = Math.max(1, Math.ceil(collectionBooks.length / 5));
  const currentPage = Math.min(page, pageCount);

  useEffect(() => {
    const pageTitle = selectedBook
      ? `${selectedBook.title} | Dhiman's Blog`
      : isReadingList ? `${collection?.title || `Books I read in ${year}`} | Dhiman's Blog` : `${topic.label} | Dhiman's Blog`;
    document.title = pageTitle;
  }, [collection, isReadingList, selectedBook, topic.label, year]);

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="blog-main blog-wrap">
        <p className="blog-eyebrow">{topic.label} · Dhiman's blog</p>
        <h1>{selectedBook ? 'A closer look.' : isReadingList ? collection?.heroTitle || `Reading in ${year}.` : topic.title}</h1>
        <p className="blog-intro">{selectedBook ? 'A few thoughts after turning the last page.' : isReadingList ? collection?.description || topic.intro : topic.intro}</p>
        <nav className="blog-nav" aria-label="Blog categories">
          <a href="/blog.html?topic=movies" aria-current={topicKey === 'movies' ? 'page' : undefined}>Movies</a>
          <a href="/blog.html?topic=books" aria-current={isBooks ? 'page' : undefined}>Books</a>
          <a href="/blog.html?topic=games" aria-current={topicKey === 'games' ? 'page' : undefined}>Video games</a>
        </nav>

        {isBooks ? (
          <div className="blog-content" aria-live="polite">
            {loadState === 'loading' && <p className="blog-status">Loading book notes...</p>}
            {loadState === 'unavailable' && <p className="blog-status">This collection’s book list is not available yet.</p>}
            {loadState === 'error' && <p className="blog-status">Book notes could not be loaded. Please try again.</p>}
            {loadState === 'loaded' && selectedBook && <BookReview book={selectedBook} books={collectionBooks} year={year} page={currentPage} collection={collection} />}
            {loadState === 'loaded' && bookSlug && !selectedBook && (
              <p className="blog-status">That book could not be found. <a href={`/blog.html?topic=books&year=${year}`}>Return to the reading list.</a></p>
            )}
            {loadState === 'loaded' && !bookSlug && isReadingList && (
              collectionBooks.length ? <BookList books={collectionBooks} year={year} page={currentPage} collection={collection} /> : <p className="blog-status">No books have been added for {year} yet.</p>
            )}
            {loadState === 'loaded' && !bookSlug && !isReadingList && (
              <BookCollections books={books} year={year} />
            )}
          </div>
        ) : (
          <section className="blog-empty" aria-live="polite">
            <span className="blog-empty-mark" aria-hidden="true">✳</span>
            <h2>Stories coming soon</h2>
            <p>Posts about {topic.label.toLowerCase()} will appear here. Check back soon.</p>
          </section>
        )}
      </main>
      <footer className="blog-footer blog-wrap">© {new Date().getFullYear()} Dhiman Paul</footer>
    </div>
  );
}