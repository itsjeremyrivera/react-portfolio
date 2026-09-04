export function CaseStudyNavigation({ sections }) {
  return (
    <nav className="case-contents" aria-label="In this case study">
      <p>In this case study</p>
      <ul>
        {sections.map(([id, label]) => (
          <li key={id}><a href={`#${id}`}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export function NextCaseStudy({ href, company, title }) {
  return (
    <section className="case-next shell">
      <p className="eyebrow">Next case study</p>
      <h2>{company}</h2>
      <p className="case-next-description">{title}</p>
      <div className="case-next-actions">
        <a className="button primary" href={href}>View {company} <span aria-hidden="true">→</span></a>
        <a className="button secondary" href="/#work">All selected work</a>
      </div>
    </section>
  );
}
