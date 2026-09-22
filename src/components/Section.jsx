import useReveal from "../hooks/useReveal";

export default function Section({ number, title, children }) {
  const [ref, isVisible] = useReveal();

  return (
    <section
      className={`section reveal ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <header className="section-head">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}
