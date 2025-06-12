import { useRef, useEffect, useState } from "react";

export default function FadeOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // intersectionRatio es un número entre 0 y 1 que indica % visible
        setOpacity(entry.intersectionRatio);
      },
      {
        threshold: Array.from(Array(101).keys(), (v) => v / 100), // [0, 0.01, ..., 1]
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: opacity,
        transition: "opacity 0.3s ease-out",
        height: "200px",
        backgroundColor: "tomato",
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "1.5rem",
      }}
    >
      Opacidad suave: {opacity.toFixed(2)}
    </div>
  );
}
