import "../styles/dashboard-shared.css";

function FeaturePage({ eyebrow, title, description, children }) {
  return (
    <section className="feature-page">
      <header className="feature-page-header">
        <span className="dashboard-welcome-label">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      {children}
    </section>
  );
}

export default FeaturePage;
