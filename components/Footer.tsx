import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      © 2026 {profile.name} · Last updated September 2026
    </footer>
  );
}
