import { flexBoxGlobals } from "./globals";

const nowrap = "nowrap";

export const flexWrap = {
  default: nowrap,
  nowrap,
  wrap: "wrap",
  wrapReverse: "wrap-reverse",
  ...flexBoxGlobals
};
