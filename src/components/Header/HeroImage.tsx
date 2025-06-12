import { useEffect, useState } from "react";
import styles from "../../styles/header/HeroImage.module.css";

export default function HeroImage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.HeroImage}
      style={{ backgroundPositionY: `${offsetY * 0.2}px` }}
    >
      <h4 className={styles.text}>¿Sabes lo que comes?</h4>
      <h1 className={styles.title}>Sellos Alimenticios</h1>
    </div>
  );
}
