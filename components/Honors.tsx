import { honors } from "@/lib/data";

export default function Honors() {
  return (
    <section id="honors">
      <div className="container">
        <h2 className="animate-on-scroll">Honors & Awards</h2>
        <div className="grid-2">
          {honors.map((item) => (
            <div className="content-card animate-on-scroll" key={item.title}>
              <span className="date">{item.date}</span>
              <h3 className="role">{item.title}</h3>
              <div className="company">{item.event}</div>
              <p style={{ color: "#ccc", marginTop: "10px" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
