"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _react = require('react');
function useElementSize() {
  const ref = _react.useRef.call(void 0, null);
  const [rect, setRect] = _react.useState.call(void 0, { width: 0, height: 0 });
  const observer = _react.useMemo.call(void 0, 
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setRect(entry.contentRect);
      }
    }) : null,
    []
  );
  _react.useEffect.call(void 0, () => {
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


exports.useElementSize = useElementSize;
