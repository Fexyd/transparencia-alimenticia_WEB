import styles from "../../styles/body/Stamp.module.css";
import FadeInOnScroll from "./FadeInOnScroll";

interface Props {
  iconHREF: string;
  name: string;
  description: string;
}

export default function Stamp({ iconHREF, name, description }: Props) {
  return (
    <FadeInOnScroll>
      <div className={styles.card}>
        <img className={styles.image} src={iconHREF} alt="" />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </FadeInOnScroll>
  );
}
