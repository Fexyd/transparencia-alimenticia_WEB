import aprove from "../../assets/check-svgrepo-com.svg";
import reject from "../../assets/cross-svgrepo-com.svg";
import neutral from "../../assets/minus-svgrepo-com.svg";

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
