import { WindowState } from "@/ui/components/window/logic/state";
import { Handlers, WindowProps } from "@/ui/components/window/Window.types";
import { useRef, useState } from "react";

export function useWindowLogic(props: WindowProps) {
  const MIN_SIZE = 350;

  const [state, setState] = useState(
    WindowState.new(props.index, props.maximized),
  );

  const initialWindowPosition = useRef({
    width: state.width,
    height: state.height,
    x: state.x,
    y: state.y,
  });

  const initialCursorPosition = useRef([0, 0]);

  /**
   * Top handler listener
   * */
  function topHandlerListener(y: number) {
    // Value between 28 and the size of the window - MIN_SIZE pixels
    const maxCursorPosition = Math.min(
      initialWindowPosition.current.y +
        initialWindowPosition.current.height -
        MIN_SIZE,
      y,
    );
    const yAxisDifference =
      Math.max(28, maxCursorPosition) - initialCursorPosition.current[1];

    return {
      y: initialWindowPosition.current.y + yAxisDifference,
      height: initialWindowPosition.current.height - yAxisDifference,
    };
  }

  /**
   * Right handler listener
   * */
  function rightHandlerListener(x: number) {
    const xAxisDifference =
      Math.min(window.innerWidth, x) - initialCursorPosition.current[0];

    return {
      width: Math.max(
        initialWindowPosition.current.width + xAxisDifference,
        MIN_SIZE,
      ),
    };
  }

  /**
   * Bottom handler listener
   * */
  function bottomHandlerListener(y: number) {
    const yAxisDifference =
      Math.min(window.innerHeight, y) - initialCursorPosition.current[1];

    return {
      height: Math.max(
        MIN_SIZE,
        initialWindowPosition.current.height + yAxisDifference,
      ),
    };
  }

  /**
   * Let handler listener
   * */
  function leftHandlerListener(x: number) {
    // Valuer greater than zero and smaller than the width - min window size
    const maxCursorPosition = Math.min(
      initialWindowPosition.current.x +
        initialWindowPosition.current.width -
        MIN_SIZE,
      x,
    );
    const xAxisDifference =
      Math.max(0, maxCursorPosition) - initialCursorPosition.current[0];

    return {
      x: initialWindowPosition.current.x + xAxisDifference,
      width: initialWindowPosition.current.width - xAxisDifference,
    };
  }

  /**
   * Header handler listener
   * */
  function headerHandlerListener(x: number, y: number) {
    const difference = [
      x - initialCursorPosition.current[0],
      y - initialCursorPosition.current[1],
    ];
    return {
      x: initialWindowPosition.current.x + difference[0],
      y: initialWindowPosition.current.y + difference[1],
    };
  }

  /** Handle window resize */
  function handlerListener(e: MouseEvent, handler: Handlers) {
    e.preventDefault();

    if (props.maximized) {
      return;
    }

    // Set initial cursor position
    initialCursorPosition.current = [e.x, e.y];
    initialWindowPosition.current = state.getRect();

    let bodyClass = "";
    let callback: (e: MouseEvent) => void;

    switch (handler) {
      case "top":
        callback = (e) => {
          const { y, height } = topHandlerListener(e.y);
          setState(state.setRect({ y, height }));
        };
        bodyClass = "cursor-ns-resize";
        break;

      case "right":
        callback = (e) => {
          const { width } = rightHandlerListener(e.x);
          setState(state.setRect({ width }));
        };
        bodyClass = "cursor-ew-resize";
        break;

      case "bottom":
        callback = (e) => {
          const { height } = bottomHandlerListener(e.y);
          setState(state.setRect({ height }));
        };
        bodyClass = "cursor-ns-resize";
        break;

      case "left":
        callback = (e) => {
          const { width, x } = leftHandlerListener(e.x);
          setState(state.setRect({ x, width }));
        };
        bodyClass = "cursor-ew-resize";
        break;

      case "top-right":
        callback = (e) => {
          const { height, y } = topHandlerListener(e.y);
          const { width } = rightHandlerListener(e.x);
          setState(state.setRect({ height, y, width }));
        };
        bodyClass = "cursor-nesw-resize";
        break;

      case "bottom-right":
        callback = (e) => {
          const { height } = bottomHandlerListener(e.y);
          const { width } = rightHandlerListener(e.x);
          setState(state.setRect({ width, height }));
        };
        bodyClass = "cursor-nwse-resize";
        break;

      case "top-left":
        callback = (e) => {
          const { height, y } = topHandlerListener(e.y);
          const { width, x } = leftHandlerListener(e.x);
          setState(state.setRect({ x, y, width, height }));
        };
        bodyClass = "cursor-nwse-resize";
        break;

      case "bottom-left":
        callback = (e) => {
          const { height } = bottomHandlerListener(e.y);
          const { width, x } = leftHandlerListener(e.x);
          setState(state.setRect({ x, width, height }));
        };
        bodyClass = "cursor-nesw-resize";
        break;

      case "header":
        callback = (e) => {
          const { x, y } = headerHandlerListener(e.x, e.y);
          setState(state.setRect({ x, y }));
        };
        break;
    }

    // Change mouse cursor globally
    if (bodyClass) {
      document.body.classList.add(bodyClass);
    }

    window.addEventListener("mousemove", callback!);

    // Clear listener after the user ends of resizing the window
    window.addEventListener(
      "mouseup",
      () => {
        window.removeEventListener("mousemove", callback!);
        if (bodyClass) {
          document.body.classList.remove(bodyClass);
        }
      },
      { once: true },
    );
  }

  return {
    state,
    handlerListener,
  };
}
