import styles from "../../styles/body/Cartulin.module.css";
import { ReactNode } from "react";
import Tittle from "./Tittle";

interface Props {
  children: ReactNode;
  tittle?: string;
  rotation?: number;
  size?: number;
}

export default function Cartulin({ children, tittle }: Props) {
  return (
    <div className={styles.textSection}>
      <div className={styles.tapeWrapper}>
        <div className={styles.tape1}></div>
        <div className={styles.tape2}></div>
      </div>
      {tittle && <Tittle color="var(--color-main-dark)" tittle={tittle} />}
      <p className={styles.text}>{children}</p>
    </div>
  );
}
