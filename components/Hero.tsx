"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { hero } from "@/lib/data";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let count = 0;
    let index = 0;

    function type() {
      if (cancelled || !textRef.current) return;
      if (count === hero.typingTexts.length) count = 0;
      const currentText = hero.typingTexts[count];
      const letter = currentText.slice(0, ++index);
      textRef.current.textContent = letter + "|";

      if (letter.length === currentText.length) {
        timeoutId = setTimeout(() => {
          index = 0;
          count++;
          type();
        }, 2000);
      } else {
        timeoutId = setTimeout(type, 100);
      }
    }

    type();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="avatar-wrapper">
          <Image
            src={hero.avatar}
            alt={hero.name}
            width={180}
            height={180}
            className="avatar-img"
            priority
          />
        </div>

        <h1>{hero.name}</h1>
        <div className="hero-subtitle" ref={textRef} />
        <p>{hero.paragraph}</p>
        <a href={`mailto:${hero.ctaEmail}`} className="cta-btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
