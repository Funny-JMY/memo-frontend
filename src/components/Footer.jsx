export default function Footer() {
  return (
    <footer className="intro-footer">
      <p>
        클라우드 컴퓨팅 실습 과제로 만든 풀스택 페이지입니다. 프론트엔드는
        React(Vite)로 만들어 Vercel에, 백엔드는 Render에 배포했습니다.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/Funny-JMY/memo-frontend"
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://github.com/Funny-JMY/memo-backend"
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </a>
      </div>
    </footer>
  );
}
