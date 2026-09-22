# 자기소개 페이지 — Frontend

클라우드 컴퓨팅 실습 과제로 만든 개인 소개 페이지입니다.
React(Vite)로 만든 프론트엔드이며, FastAPI 백엔드와 연동해 방명록과 방문 통계를 제공합니다.

## 배포 주소

| 구분 | 주소 |
| --- | --- |
| 소개 페이지 (Vercel) | https://memo-frontend-yjm3.vercel.app/ |
| API 문서 (Render, Swagger UI) | https://memo-backend-sn8m.onrender.com/docs |
| 백엔드 저장소 | https://github.com/Funny-JMY/memo-backend |

## 화면 구성

| 섹션 | 내용 |
| --- | --- |
| Hero | 이름, 소속, 한 줄 소개 |
| 01 소개 | 경력과 대학원 진학 배경 |
| 02 걸어온 길 | 경력 타임라인 (유안타증권 → 한국투자공사 → KAIST DFMBA) |
| 03 성향과 요즘 | 일하는 방식과 근황 |
| 04 방명록 | 방문자가 글을 남기고, 주인의 답글이 함께 표시되는 영역 (백엔드 연동) |
| Contact / Footer | 연락처, 방문·방명록 집계, 저장소 및 API 문서 링크 |

## 백엔드 연동

| 동작 | 호출 API |
| --- | --- |
| 방명록 목록 조회 | `GET /guestbook` |
| 방명록 작성 | `POST /guestbook` |
| 방문 기록 (탭 세션당 1회) | `POST /visits` |
| 푸터 집계 표시 | `GET /stats` |

## 기술 스택

- React 19, Vite
- CSS 변수 기반 라이트/다크 테마, Google Fonts (Noto Serif KR / Noto Sans KR)
- IntersectionObserver를 사용한 스크롤 등장 효과

## 폴더 구조

```
src/
├── api.js              # 백엔드 호출 함수 모음
├── App.jsx             # 페이지 조립
├── App.css             # 페이지 스타일
├── index.css           # 색상·타이포그래피 토큰 (라이트/다크)
├── hooks/
│   └── useReveal.js    # 스크롤 등장 감지 훅
└── components/
    ├── Hero.jsx
    ├── Section.jsx     # 번호 + 제목이 붙는 섹션 공통 틀
    ├── About.jsx
    ├── Quote.jsx
    ├── Career.jsx
    ├── Interests.jsx
    ├── Guestbook.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## 로컬 실행

```bash
npm install
npm run dev     # http://localhost:5173
```

## 환경 변수

| 이름 | 설명 | 예시 |
| --- | --- | --- |
| `VITE_API_URL` | 백엔드 주소 (없으면 `http://localhost:8000`) | `https://memo-backend-sn8m.onrender.com` |

로컬은 `.env` 파일에, 배포는 Vercel 프로젝트의 Environment Variables에 등록합니다.
