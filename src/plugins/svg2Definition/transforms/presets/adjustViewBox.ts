import { assignAttrsAtTag } from "..";
import { TransformFactory } from "../..";

export const adjustViewBox: TransformFactory = assignAttrsAtTag("svg", () => ({
  viewBox: "64 64 896 896",
}));
