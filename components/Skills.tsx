import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="animate-on-scroll">Technical Expertise</h2>
        <div className="skills-wrapper">
          {skillCategories.map((category) => (
            <div className="skill-category animate-on-scroll" key={category.title}>
              <div className="skill-header">
                <i className={`fas ${category.icon}`} />
                <h3>{category.title}</h3>
              </div>
              {category.skills.map((skill) => {
                const filled = Math.round(skill.percent / 10);
                return (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-track">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={i}
                          className={`skill-segment ${i < filled ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
