import styles from "../../styles/body/Statistics.module.css";
import Tittle from "./Tittle";

interface Props {
  tittle: string;
  porcentajes: number[];
  text: string[];
}

export default function Stats({ tittle, porcentajes, text }: Props) {
  if (text.length !== porcentajes.length) {
    return <div>No se pudo alavergaaaaaaaaaaa</div>;
  }

  return (
    <>
      <Tittle tittle={tittle}></Tittle>
      <div className={styles.container}>
        {porcentajes.map((porcentaje, i) => (
          <div key={i} className={styles.barWrapper}>
            <div className={styles.barStyle}>
              <div
                className={`${styles.bar} ${styles[`bar${i + 1}`]}`}
                style={{ height: `${porcentaje}%` }}
              >
                <span className={styles.porcentaje}>{porcentaje} %</span>
              </div>
            </div>
            <span className={styles.text}>{text[i]}</span>
          </div>
        ))}
      </div>
    </>
  );
}
