import { honors } from "@/lib/data";

export default function Honors() {
  return (
    <section className="section" id="honors">
      <h2>Honors & Awards</h2>
      {honors.map((item) => (
        <div className="entry" key={item.title}>
          <div className="entry-date">{item.date}</div>
          <h3 className="entry-title">{item.title}</h3>
          <div className="entry-org">{item.event}</div>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
