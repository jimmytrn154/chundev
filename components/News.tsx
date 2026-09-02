import { news } from "@/lib/data";

export default function News() {
  return (
    <section className="section" id="news">
      <h2>News</h2>
      <ul className="news-list">
        {news.map((item) => (
          <li key={item.date + item.text}>
            <div className="news-date">{item.date}</div>
            <div className="news-text">{item.text}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
