import { flexBoxGlobals } from "./globals";

const normal = "normal";

export const justifyContent = {
  default: normal,
  normal,
  center: "center",
  start: "start",
  end: "end",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  left: "left",
  right: "right",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
  sretch: "stretch",
  safeCenter: "safe center",
  unsafeCenter: "unsafe center",
  ...flexBoxGlobals
};
