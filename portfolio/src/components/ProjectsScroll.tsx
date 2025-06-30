"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const cards = containerRef.current.querySelectorAll(".card");
    const totalCards = cards.length;
    const totalScroll = window.innerWidth * (totalCards - 1); // minus 1 since first card is already visible

    gsap.to(containerRef.current, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden bg-white"
    >
      <div
        ref={containerRef}
        className="flex h-screen"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="card w-screen h-screen flex-shrink-0 flex items-center justify-center text-6xl font-bold text-black bg-white"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
