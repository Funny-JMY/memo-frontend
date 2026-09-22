import useReveal from "../hooks/useReveal";

export default function Quote() {
  const [ref, isVisible] = useReveal();

  return (
    <blockquote
      className={`pull-quote reveal ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      금융과 기술은 서로 다른 두 분야가 아니라, 같은 문제를 다른 언어로 푸는
      일이라고 생각합니다.
    </blockquote>
  );
}
