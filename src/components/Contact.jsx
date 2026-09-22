import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, isVisible] = useReveal();

  return (
    <section
      className={`intro-contact reveal ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="contact-label">Contact</p>
      <a className="contact-pill" href="mailto:jungmo.yang09@gmail.com">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.333 5.833h13.334c.46 0 .833.373.833.834v6.666a.833.833 0 0 1-.833.834H3.333a.833.833 0 0 1-.833-.834V6.667c0-.46.373-.834.833-.834Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.333 6.667 6.209 4.472a.833.833 0 0 0 .916 0l6.209-4.472"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        jungmo.yang09@gmail.com
      </a>
    </section>
  );
}
