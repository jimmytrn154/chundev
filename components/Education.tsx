import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="animate-on-scroll">Education</h2>
        <div className="grid-2">
          {education.map((item) => (
            <div className="content-card animate-on-scroll" key={item.school}>
              <span className="date">{item.date}</span>
              <h3 className="role">{item.degree}</h3>
              <div className="company">{item.school}</div>
              <p style={{ color: "#ccc", marginTop: "10px" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
