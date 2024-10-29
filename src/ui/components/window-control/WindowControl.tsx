import { WindowControlProps } from "@/ui/components/window-control/WindowControl.types";
import CloseIcon from "@/ui/icons/CloseIcon";
import MaximizeIcon from "@/ui/icons/MaximizeIcon";
import MinimizeIcon from "@/ui/icons/MinimizeIcon";
import clsx from "clsx";

export default function WindowControl(props: WindowControlProps) {
  const {
    onClose,
    onMinimize,
    onMaximize
  } = props;

  return (
    <div className={clsx('flex', props.className)}>
      {/* Minimize Button */}
      <div
        className="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
        onClick={onMinimize}
      >
        <MinimizeIcon className="w-4 fill-white"/>
      </div>

      {/* Maximize Button */}
      <div
        className="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
        onClick={onMaximize}
      >
        <MaximizeIcon className="w-4 fill-white"/>
      </div>

      {/* Close Button */}
      <div
        className="w-4 h-4 bg-white/10 rounded-full mx-1 cursor-pointer transition-colors duration-150 hover:bg-white/40"
        onClick={onClose}
      >
        <CloseIcon className="w-4 fill-white"/>
      </div>
    </div>
  )
}