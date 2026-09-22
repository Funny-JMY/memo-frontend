const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || "요청을 처리하지 못했습니다.");
  }

  return res.status === 204 ? null : res.json();
}

export const fetchGuestbook = (limit = 20) =>
  request(`/guestbook?limit=${limit}`);

export const createGuestbookEntry = (entry) =>
  request("/guestbook", { method: "POST", body: JSON.stringify(entry) });

export const fetchStats = () => request("/stats?days=7");

export const recordVisit = () =>
  request("/visits?path=/", { method: "POST" });
