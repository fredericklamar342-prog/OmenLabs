"use client";

import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  opacity: number;
  duration: string;
  delay: string;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars only on the client side
    const newStars: Star[] = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.1,
      duration: `${Math.random() * 3 + 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="starry-sky overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-particle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            "--twinkle-duration": star.duration,
            "--twinkle-delay": star.delay,
            "--star-opacity": star.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

