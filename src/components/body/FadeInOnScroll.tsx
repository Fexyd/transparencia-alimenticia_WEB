import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  threshold?: number[]; // Array de valores para umbrales progresivos
  delay?: number;
  rotationMax?: number; // grados máximo para rotar proporcionalmente (opcional)
}

export default function FadeInOnScroll({
  children,
  className,
  style,
  threshold = Array.from({ length: 101 }, (_, i) => i / 100), // de 0 a 1 en 0.01 pasos
  delay = 0,
  rotationMax = 0,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(entry.intersectionRatio);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [threshold]);

  // Calcula el valor de rotación proporcional
  const rotationValue = rotationMax * ratio;

  const combinedStyle: CSSProperties = {
    opacity: ratio,
    transform: `rotate(${rotationValue}deg) translateY(${(1 - ratio) * 20}px)`,
    transition: `opacity 0.3s ease-out ${delay}ms, transform 0.3s ease-out ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={ref} className={className} style={combinedStyle}>
      {children}
    </div>
  );
}
