import DiseaseCard from "./DiseaseCard";
import styles from "../../styles/body/Diseases.module.css";
import { ReactNode } from "react";
import { DiseasesType } from "../assetsImport/DiseasesIcons";

interface Props {
  children: ReactNode;
  iconType: DiseasesType;
  alt: string;
  name: string;
  description: string;
}

export default function Disease({
  children,
  iconType,
  alt,
  name,
  description,
}: Props) {
  return (
    <div className={styles.disease}>
      <DiseaseCard
        iconType={DiseasesType.Obesity}
        alt={alt}
        name={name}
        description={description}
      ></DiseaseCard>
      <p className={styles.diseaseText}>{children}</p>
    </div>
  );
}
