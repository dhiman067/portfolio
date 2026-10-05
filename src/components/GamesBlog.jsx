export default function GamesBlog({ topic, navigation }) {
  return (
    <>
      <section className="blog-hero">
        <p className="blog-eyebrow">{topic.label} · Dhiman's blog</p>
        <h1>{topic.title}</h1>
        <p className="blog-intro">{topic.intro}</p>
      </section>
      {navigation}
      <section className="blog-empty" aria-live="polite">
        <span className="blog-empty-mark" aria-hidden="true">✳</span>
        <h2>Stories coming soon</h2>
        <p>Posts about video games will appear here. Check back soon.</p>
      </section>
    </>
  );
}
