import styles from "../../styles/body/TextSection.module.css";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  rotation?: number;
  size?: number;
}

export default function Text({ children, rotation = 0, size }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const style: CSSProperties = {
    height: size !== undefined ? `${size}rem` : undefined,
  };

  const holeCount = Math.floor(containerHeight / 60);

  return (
    <div ref={containerRef} className={styles.textSection} style={style}>
      <div className={styles.line}></div>
      <div className={styles.notebookLines}>
        {Array.from({ length: holeCount }).map((_, i) => (
          <div key={i} className={styles.holeWrapper}>
            <div className={styles.hole}></div>
          </div>
        ))}
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
