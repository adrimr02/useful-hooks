import * as react from 'react';
import { Rect } from '../types.js';

declare function useElementSize<T extends HTMLElement = HTMLDivElement>(): readonly [react.RefObject<T>, Rect];

export { useElementSize };
