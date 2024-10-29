import { createContext, useContext } from "react";

const WindowManagerContext = createContext(null);

export default function WindowManagerProvider() {
  return (
    <WindowManagerContext.Provider value={null}></WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  return useContext(WindowManagerContext);
}
