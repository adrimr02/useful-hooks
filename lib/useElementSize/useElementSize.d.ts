import * as react from 'react';

type Rect = {
    width: number;
    height: number;
};
declare function useElementSize<T extends HTMLElement = HTMLDivElement>(): readonly [react.RefObject<T>, Rect];

export { useElementSize };
