import Image from "next/image";
import { profile, contact } from "@/lib/data";

const sections = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research Interests" },
  { href: "#news", label: "News" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#honors", label: "Honors & Awards" },
  { href: "#education", label: "Education" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Image
        src={profile.photo}
        alt={profile.name}
        width={180}
        height={180}
        className="headshot"
        priority
      />

      <h1 className="sidebar-name">{profile.name}</h1>
      <div className="sidebar-alt-name">{profile.vietnameseName}</div>
      <div className="sidebar-title">{profile.title}</div>
      <div className="sidebar-affiliation">{profile.affiliation}</div>
      <div className="sidebar-location">{profile.location}</div>

      <ul className="sidebar-links">
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>

      <nav>
        <ul className="sidebar-nav">
          {sections.map((section) => (
            <li key={section.href}>
              <a href={section.href}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
