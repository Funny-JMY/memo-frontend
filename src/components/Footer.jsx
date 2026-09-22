import { useEffect, useState } from "react";
import { fetchStats, recordVisit } from "../api";

export default function Footer() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // 새로고침마다 방문이 쌓이지 않도록 탭 세션당 한 번만 기록한다.
    const ping = sessionStorage.getItem("visit-recorded")
      ? Promise.resolve()
      : recordVisit().then(() => sessionStorage.setItem("visit-recorded", "1"));

    ping
      .catch(() => {})
      .then(fetchStats)
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <footer className="intro-footer">
      {stats && (
        <p className="footer-stats">
          방문 {stats.total_visits.toLocaleString()}회 · 방명록{" "}
          {stats.guestbook_published.toLocaleString()}개
        </p>
      )}
      <p>
        클라우드 컴퓨팅 실습 과제로 만든 풀스택 페이지입니다. 프론트엔드는
        React(Vite)로 만들어 Vercel에, 백엔드는 FastAPI로 만들어 Render에
        배포했습니다.
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
        <span aria-hidden="true">·</span>
        <a
          href="https://memo-backend-sn8m.onrender.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          API Docs
        </a>
      </div>
    </footer>
  );
}
