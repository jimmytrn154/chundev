import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      {experience.map((item) => (
        <div className="entry" key={item.company}>
          <div className="entry-date">{item.date}</div>
          <h3 className="entry-title">{item.role}</h3>
          <div className="entry-org">{item.company}</div>
          <ul>
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
