import { useEffect, useMemo, useRef, useState } from 'react'

type Rect = {
  width: number;
  height: number;
};

export function useElementSize<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<Rect>({ width: 0, height: 0 });

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry) {
              setRect(entry.contentRect);
            }
          })
        : null,
    []
  );

  useEffect(() => {
    if (!observer) return;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return [ref, rect] as const;
}
