import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "@/ui/components/icon-button/IconButton.module.css";

export default function IconButton(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={clsx(styles["icon-button"], props.className)}>
      {props.children}
    </button>
  );
}
