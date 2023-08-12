import { useEffect, useMemo, useRef, useState } from "react";
function useElementSize() {
  const ref = useRef(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const observer = useMemo(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setRect(entry.contentRect);
      }
    }) : null,
    []
  );
  useEffect(() => {
    if (!observer)
      return;
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);
  return [ref, rect];
}
export {
  useElementSize
};
