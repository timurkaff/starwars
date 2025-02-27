'use client';

import { useEffect, useState } from 'react';

export default function StarsBackground() {
  const [stars, setStars] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
            zIndex: -1
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
} 