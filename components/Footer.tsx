import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <h2 className="animate-on-scroll">Let&apos;s Connect</h2>
        <p style={{ marginBottom: "30px" }}>
          Open to collaborations in AI Research and Web Development.
        </p>
        <div className="social-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <br />
        <br />
        <p>&copy; 2026 Chương Trần Anh. Crafted with code.</p>
      </div>
    </footer>
  );
}
