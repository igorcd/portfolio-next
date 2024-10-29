import { DividerProps } from "@/ui/components/divider/Divider.types";
import clsx from "clsx";

export default function Divider(props: DividerProps) {
  return (
    <hr
      className={clsx(
        "bg-white/30 border-none",
        props.type == "vertical" ? "mx-2 w-px h-4" : "h-px w-full my-2",
        props.className,
      )}
    />
  );
}
