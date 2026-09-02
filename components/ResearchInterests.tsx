import { researchInterests } from "@/lib/data";

export default function ResearchInterests() {
  return (
    <section className="section" id="research">
      <h2>Research Interests</h2>
      <p className="keywords">{researchInterests.keywords.join(" · ")}</p>
      <p>{researchInterests.statement}</p>
    </section>
  );
}
