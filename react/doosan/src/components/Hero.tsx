import React, { useEffect, useRef, useState } from "react";
const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];
export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<number | null>(null);
  useEffect(() => {
    if (!paused) {
      autoRef.current = window.setInterval(() => {
        setIdx((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [paused]);
  const goPrev = () => setIdx((s) => (s - 1 + images.length) % images.length);
  const goNext = () => setIdx((s) => (s + 1) % images.length);
  return (
    <section
      className="relative overflow-hidden h-[420px] md:h-[560px] bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {" "}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {" "}
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0 relative">
            {" "}
            <img
              src={src}
              alt={`hero-${i}`}
              className="w-full h-full object-cover"
            />{" "}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-6 md:px-20">
              {" "}
              <div className="text-white max-w-md">
                {" "}
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  슬라이드 타이틀 {i + 1}
                </h1>{" "}
                <p className="text-sm md:text-base/relaxed">
                  여기에 간단한 설명을 넣으세요.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      {/* Prev / Next buttons */}{" "}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white px-3 py-2 rounded-full shadow"
        aria-label="Prev"
      >
        {" "}
        ‹{" "}
      </button>{" "}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white px-3 py-2 rounded-full shadow"
        aria-label="Next"
      >
        {" "}
        ›{" "}
      </button>{" "}
      {/* Dots */}{" "}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {" "}
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`go-to-${i}`}
            className={`w-3 h-3 rounded-full ${
              i === idx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
}
