export type Handlers =
  | "top"
  | "right"
  | "left"
  | "bottom"
  | "bottom-right"
  | "bottom-left"
  | "top-left"
  | "top-right"
  | "header";

export interface WindowProps {
  index: number;
  maximized: boolean;
  onMaximize: () => void;
  onMinimize: () => void;
  onClose: () => void;
  minimized: boolean;
  inFocus: boolean;
}
