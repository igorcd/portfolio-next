import WindowControl from "@/ui/components/window-control/WindowControl";
import { useWindowLogic } from "@/ui/components/window/logic/window-logic";
import styles from "@/ui/components/window/Window.module.css";
import { WindowProps } from "@/ui/components/window/Window.types";
import clsx from "clsx";

export default function Window(props: WindowProps) {
  const {
    onMinimize,
    onClose,
    onMaximize,
    minimized,
    inFocus,
    maximized,
    index,
  } = props;

  const { state, handlerListener } = useWindowLogic(props);

  return (
    <div
      className={clsx(
        styles["window"],
        styles["--maximized"] && maximized,
        styles["--minimized"] && minimized,
        { "backdrop-blur-lg": inFocus },
      )}
      style={{
        zIndex: index,
        width: `${state.width}px`,
        height: `${state.height}px`,
        left: `${state.x}px`,
        top: `${state.y}px`,
      }}
    >
      <div className="w-full h-full relative flex flex-col items-stretch px-[3px] pb-[3px]">
        {/* Top Handler */}
        <div
          className="top-0 h-1 left-3 right-3 absolute cursor-ns-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "top")}
        ></div>

        {/* Right Handle */}
        <div
          className="bottom-3 top-3 right-0 w-1 absolute cursor-ew-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "right")}
        ></div>

        {/* Bottom Handle */}
        <div
          className="bottom-0 h-1 left-3 right-3 absolute cursor-ns-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "bottom")}
        ></div>

        {/* Left Handle */}
        <div
          className="bottom-3 top-3 left-0 w-1 absolute cursor-ew-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "left")}
        ></div>

        {/* Top Right Handler */}
        <div
          className="right-0 top-0 w-1.5 h-1.5 absolute cursor-nesw-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "top-right")}
        ></div>

        {/* Bottom Right Handler */}
        <div
          className="right-0 bottom-0 w-1.5 h-1.5 absolute cursor-nwse-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "bottom-right")}
        ></div>

        {/* Top Left Handler */}
        <div
          className="left-0 top-0 w-1.5 h-1.5 absolute cursor-nwse-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "top-left")}
        ></div>

        {/* Bottom Left Handler */}
        <div
          className="left-0 bottom-0 w-1.5 h-1.5 absolute cursor-nesw-resize"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "bottom-left")}
        ></div>

        {/* Header */}
        <header
          className="h-0 sm:h-7 flex items-center justify-end"
          onMouseDown={(e) => handlerListener(e.nativeEvent, "header")}
        >
          {!props.maximized && (
            <WindowControl
              onMaximize={onMaximize}
              onClose={onClose}
              onMinimize={onMinimize}
              className="max-sm:hidden"
            />
          )}
        </header>

        {/* Loading */}

        {/* iFrame */}
        {/*    <iframe
          src={url}
          className={`w-full h-full rounded-md flex-1 opacity-0 transition-opacity duration-300 ${
            state.resizing ? 'pointer-events-none' : ''
          } ${!loading ? 'opacity-100' : ''}`}
          aria-label={`Conteúdo do aplicativo ${url}`}
          onLoad={() => setLoading(false)}
          ref={iframeRef}
        ></iframe>*/}
      </div>
    </div>
  );
}
