import * as react from 'react';
import { Rect } from '../types.cjs';

declare function useElementSize<T extends HTMLElement = HTMLDivElement>(): readonly [react.RefObject<T>, Rect];

export { useElementSize };
