function FeatureNotice({ title = "This service is not connected yet", children }) {
  return (
    <section className="feature-notice" role="status">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default FeatureNotice;
