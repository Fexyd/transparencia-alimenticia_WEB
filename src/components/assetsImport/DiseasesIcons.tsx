import obesityIcon from "../../assets/overweight-svgrepo-com.svg";

export enum DiseasesType {
  Obesity = "obesity",
}

export const DiseasesIcons: Record<DiseasesType, string> = {
  [DiseasesType.Obesity]: obesityIcon,
};
