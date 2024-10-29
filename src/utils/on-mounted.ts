import { useEffect, useState } from "react";

export function useOnMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  return mounted;
}
