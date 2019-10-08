import { flexBoxGlobals } from "./globals";

const normal = "normal";

export const alignItems = {
  default: normal,
  normal,
  stretch: "stretch",
  center: "center",
  start: "start",
  end: "end",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  baseline: "baseline",
  firstBaseline: "first baseline",
  lastBaseline: "last baseline",
  safeCenter: "safe center",
  unsafeCenter: "unsafe center",
  ...flexBoxGlobals
};
