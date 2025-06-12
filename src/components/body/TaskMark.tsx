// TaskMark.tsx
import { ReactNode, useState } from "react";
import { TaskIconType, TaskIconLinks } from "../assetsImport/taskIcons";
import styles from "../../styles/body/TaskMark.module.css";
import FadeInOnScroll from "./FadeInOnScroll";

interface Props {
  icon: TaskIconType;
  children: ReactNode;
}

function randomNum(): number {
  const min = -2;
  const max = 2;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function TaskMark({ icon, children }: Props) {
  const [rotateDEG] = useState(() => randomNum());

  return (
    <FadeInOnScroll>
      <div
        style={{ transform: `rotate(${rotateDEG}deg)` }}
        className={styles.wrapper}
      >
        <img src={TaskIconLinks[icon]} alt={icon} className={styles.image} />
        <span className={styles.text}>{children}</span>
      </div>
    </FadeInOnScroll>
  );
}
