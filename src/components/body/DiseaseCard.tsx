import { DiseasesIcons, DiseasesType } from "../assetsImport/DiseasesIcons";
import styles from "../../styles/body/Diseases.module.css";
import FadeInOnScroll from "./FadeInOnScroll";

interface Props {
  iconType: DiseasesType;
  alt: string;
  name: string;
  description: string;
}

export default function DiseaseCard({
  iconType,
  alt,
  name,
  description,
}: Props) {
  return (
    <FadeInOnScroll>
      <div className={styles.diseaseCard}>
        <img
          className={styles.diseaseCard_image}
          src={DiseasesIcons[iconType]}
          alt={alt}
        />
        <h3 className={styles.diseaseCard_name}>{name}</h3>
        <p className={styles.diseaseCard_text}>{description}</p>
      </div>
    </FadeInOnScroll>
  );
}
