import { PropsWithClassName } from "@/core/interfaces/props-with-class-name";

export interface WindowControlProps extends PropsWithClassName {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}