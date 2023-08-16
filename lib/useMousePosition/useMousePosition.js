import { useEffect, useRef, useState } from "react";
function useMousePosition() {
  const ref = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    if (!ref.current)
      return;
    const onMouseMove = (e) => {
      const bounds = ref.current?.getBoundingClientRect();
      setX(e.clientX - (bounds?.left ?? 0));
      setY(e.clientY - (bounds?.top ?? 0));
    };
    ref.current.addEventListener("mousemove", onMouseMove);
    return () => {
      ref.current?.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref.current]);
  return [ref, { mouseX: x, mouseY: y }];
}
export {
  useMousePosition
};
