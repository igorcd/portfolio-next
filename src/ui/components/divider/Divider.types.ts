import { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  type?: "horizontal" | "vertical";
}
