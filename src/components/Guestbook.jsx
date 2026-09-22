import { useEffect, useState } from "react";
import Section from "./Section";
import { createGuestbookEntry, fetchGuestbook } from "../api";

const RELATIONS = [
  { value: "visitor", label: "처음 왔어요" },
  { value: "colleague", label: "직장 동료" },
  { value: "classmate", label: "학교 동기" },
  { value: "friend", label: "친구" },
  { value: "recruiter", label: "채용 담당" },
];

const RELATION_LABEL = Object.fromEntries(
  RELATIONS.map(({ value, label }) => [value, label])
);

function formatDate(iso) {
  return new Date(`${iso}Z`).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    nickname: "",
    message: "",
    relation: "visitor",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchGuestbook()
      .then((page) => setEntries(page.items))
      .catch(() => setError("방명록을 불러오지 못했습니다."));
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const created = await createGuestbookEntry(form);
      setEntries((prev) => [created, ...prev]);
      setForm({ nickname: "", message: "", relation: "visitor" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section number="04" title="방명록">
      <form className="guestbook-form" onSubmit={submit}>
        <div className="form-row">
          <input
            value={form.nickname}
            onChange={(e) => setForm({ ...form, nickname: e.target.value })}
            placeholder="이름 또는 별명"
            maxLength={30}
            required
          />
          <select
            value={form.relation}
            onChange={(e) => setForm({ ...form, relation: e.target.value })}
          >
            {RELATIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="남기고 싶은 말을 적어주세요."
          rows={3}
          maxLength={500}
          required
        />
        <div className="form-footer">
          {error && <p className="form-error">{error}</p>}
          <button type="submit" disabled={submitting}>
            {submitting ? "남기는 중" : "남기기"}
          </button>
        </div>
      </form>

      {entries.length > 0 && (
        <ul className="guestbook-list">
          {entries.map((entry) => (
            <li className="guestbook-entry" key={entry.id}>
              <div className="entry-head">
                <span className="entry-name">{entry.nickname}</span>
                <span className="entry-meta">
                  {RELATION_LABEL[entry.relation] ?? "방문자"} ·{" "}
                  {formatDate(entry.created_at)}
                </span>
              </div>
              <p className="entry-message">{entry.message}</p>
              {entry.reply && (
                <p className="entry-reply">
                  <span>양정모</span>
                  {entry.reply}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
