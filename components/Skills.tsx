import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <div className="skill-group-title">{group.title}</div>
          <div className="skill-items">{group.items.join(", ")}</div>
        </div>
      ))}
    </section>
  );
}
