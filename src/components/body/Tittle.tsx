import styles from "../../styles/body/Typography.module.css";

interface Props_Tittle {
  tittle: string;
  color?: string;
}

export default function Tittle(props: Props_Tittle) {
  // Quitamos espacios y chequeamos si queda texto
  if (!props.tittle.trim()) return null;

  if (props.color) {
    return (
      <h2 className={styles.tittle} style={{ color: props.color }}>
        {props.tittle}
      </h2>
    );
  } else {
    return <h2 className={styles.tittle}>{props.tittle}</h2>;
  }
}
