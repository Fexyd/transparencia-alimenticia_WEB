import styles from "../../styles/body/Stamp.module.css";
import { StampsType, StampsIcons } from "../assetsImport/stamps";
import FadeInOnScroll from "./FadeInOnScroll";

interface Props {
  iconHREF: StampsType; // recibes el enum
  name: string;
  description: string;
}

export default function Stamp({ iconHREF, name, description }: Props) {
  // Aquí haces el mapeo enum -> ruta
  const iconSrc = StampsIcons[iconHREF];

  return (
    <FadeInOnScroll>
      <div className={styles.card}>
        <img className={styles.image} src={iconSrc} alt={name} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </FadeInOnScroll>
  );
}
