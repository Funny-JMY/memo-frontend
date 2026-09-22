import Section from "./Section";

export default function Interests() {
  return (
    <Section number="03" title="성향과 요즘">
      <div className="card-grid">
        <div className="card">
          <h3>생각하는 방식</h3>
          <p>
            혼자 오래 붙들고 깊게 파고드는 편입니다. 서둘러 결론을 내기보다,
            스스로 납득이 될 때까지 생각을 정리한 뒤 움직입니다.
          </p>
        </div>
        <div className="card">
          <h3>사람과의 거리</h3>
          <p>
            낯을 가리는 편이라 처음에는 말수가 적습니다. 대신 시간을 두고 천천히
            가까워지는 쪽을 편하게 느낍니다.
          </p>
        </div>
        <div className="card wide">
          <h3>요즘</h3>
          <p>
            4년 남짓 테니스를 쳤습니다. 코트와 시간을 맞추는 일이 점점 어려워져,
            지금은 건강 관리를 위해 헬스장으로 자리를 옮겨 한 달째 다니고
            있습니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
