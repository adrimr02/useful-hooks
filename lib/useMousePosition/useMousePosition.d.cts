import * as react from 'react';

declare function useMousePosition<T extends HTMLElement = HTMLDivElement>(): readonly [react.MutableRefObject<T | null>, {
    readonly mouseX: number;
    readonly mouseY: number;
}];

export { useMousePosition };
