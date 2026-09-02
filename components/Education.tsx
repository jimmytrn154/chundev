import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      {education.map((item) => (
        <div className="entry" key={item.school}>
          <div className="entry-date">{item.date}</div>
          <h3 className="entry-title">{item.degree}</h3>
          <div className="entry-org">{item.school}</div>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
