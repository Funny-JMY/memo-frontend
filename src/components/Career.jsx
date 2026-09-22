import Section from "./Section";

const TIMELINE = [
  {
    org: "유안타증권",
    role: "채권운용 시스템 개발",
    desc: "채권 운용 업무를 지탱하는 시스템을 개발하며 금융 도메인의 기본기를 쌓았습니다.",
  },
  {
    org: "한국투자공사 (KIC)",
    role: "자산운용시스템 개발 · 운영",
    desc: "국부펀드의 자산운용시스템을 개발하고 운영합니다. 새로 만드는 일과 멈추지 않게 지키는 일은 전혀 다른 근육을 쓴다는 걸 이 자리에서 배웠습니다.",
  },
  {
    org: "KAIST DFMBA 7기",
    role: "재학 중",
    desc: "금융과 IT를 함께 다루며 지금까지의 경험을 다시 정리하고 있습니다. 클라우드와 풀스택 개발을 공부하는 것도 그 연장선에 있습니다.",
    isNow: true,
  },
];

export default function Career() {
  return (
    <Section number="02" title="걸어온 길">
      <ol className="timeline">
        {TIMELINE.map((item) => (
          <li
            className={`timeline-item ${item.isNow ? "is-now" : ""}`}
            key={item.org}
          >
            <h3>{item.org}</h3>
            <p className="role">{item.role}</p>
            <p className="desc">{item.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
