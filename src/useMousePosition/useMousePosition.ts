import { useEffect, useRef, useState } from "react";

export function useMousePosition<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  useEffect(() => {
    if (!ref.current) return
    
    const onMouseMove = (e: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect()
      setX(e.clientX - (bounds?.left ?? 0))
      setY(e.clientY - (bounds?.top ?? 0))
    }
    ref.current.addEventListener("mousemove", onMouseMove)

    return () => {
      ref.current?.removeEventListener("mousemove", onMouseMove)
    }
  }, [ref.current])

  return [ref, { mouseX:x, mouseY:y }] as const
}