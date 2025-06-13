import aprove from "../../assets/Vector2.svg";
import reject from "../../assets/Vector1.svg";
import neutral from "../../assets/Vector3.svg";

export enum TaskIconType {
  Approved = "approved",
  Rejected = "rejected",
  Neutral = "neutral",
}

export const TaskIconLinks: Record<TaskIconType, string> = {
  [TaskIconType.Approved]: aprove,
  [TaskIconType.Rejected]: reject,
  [TaskIconType.Neutral]: neutral,
};
