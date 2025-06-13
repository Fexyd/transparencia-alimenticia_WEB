import obesityIcon from "../../assets/Group4.svg";
import hipertension from "../../assets/Group1.svg";
import diabetes from "../../assets/Group2.svg";
import corazon from "../../assets/Group3.svg";

export enum DiseasesType {
  Obesity = "obesity",
  Hipertension = "hipertension",
  Diabetes = "diabetes",
  Heart = "heart",
}

export const DiseasesIcons: Record<DiseasesType, string> = {
  [DiseasesType.Obesity]: obesityIcon,
  [DiseasesType.Hipertension]: hipertension,
  [DiseasesType.Diabetes]: diabetes,
  [DiseasesType.Heart]: corazon,
};
