import { useState, useCallback, useEffect } from "react";

export type MediaQuery = boolean | null;

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState<MediaQuery>(null);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (!media.matches) {
      setTargetReached(false);
    } else {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;
