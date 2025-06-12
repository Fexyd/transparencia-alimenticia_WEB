import juiceBad from "../../assets/JuiceBad.svg";
import juiceGood from "../../assets/Juice.svg";
import FadeInOnScroll from "./FadeInOnScroll";
import styles from "../../styles/body/juice.module.css";
import { useEffect, useState } from "react";

export enum JuiceType {
  bad = "1",
  good = "2",
}

export const JuiceIcons: Record<JuiceType, string> = {
  [JuiceType.bad]: juiceBad,
  [JuiceType.good]: juiceGood,
};

interface Juices {
  type: JuiceType;
}

export default function Juice({ type }: Juices) {
  const [juiceType, setJuiceType] = useState<JuiceType>(type);

  useEffect(() => {
    setJuiceType(type);
  }, [type]);

  return (
    <FadeInOnScroll>
      <img
        src={JuiceIcons[type]}
        className={juiceType === JuiceType.bad ? styles.bad : styles.good}
      />
    </FadeInOnScroll>
  );
}
