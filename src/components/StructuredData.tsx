import React from 'react';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Pol",
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional full-stack web developer specializing in React, Next.js, TypeScript, Laravel, and modern web technologies",
    "url": "https://thomas-pol.com/",
    "email": "thepollies.thomas@gmail.com",
    "image": "https://thomas-pol.com/img/aa51605b-2659-4a55-8ddc-0e1b0f552816.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/thomas-pol-1b4748350/",
      "https://github.com/Thomas-Pol"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "PHP",
      "Node.js",
      "Tailwind CSS",
      "GSAP",
      "Web Development",
      "Full Stack Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
