import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="animate-on-scroll">Professional Journey</h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <div
              key={item.company}
              className={`timeline-item ${
                i % 2 === 0 ? "left" : "right"
              } animate-on-scroll`}
            >
              <div className="content-card">
                <span className="date">{item.date}</span>
                <h3 className="role">{item.role}</h3>
                <div className="company">{item.company}</div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
