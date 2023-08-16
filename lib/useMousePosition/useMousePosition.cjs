"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _react = require('react');
function useMousePosition() {
  const ref = _react.useRef.call(void 0, null);
  const [x, setX] = _react.useState.call(void 0, 0);
  const [y, setY] = _react.useState.call(void 0, 0);
  _react.useEffect.call(void 0, () => {
    if (!ref.current)
      return;
    const onMouseMove = (e) => {
      const bounds = _optionalChain([ref, 'access', _ => _.current, 'optionalAccess', _2 => _2.getBoundingClientRect, 'call', _3 => _3()]);
      setX(e.clientX - (_nullishCoalesce(_optionalChain([bounds, 'optionalAccess', _4 => _4.left]), () => ( 0))));
      setY(e.clientY - (_nullishCoalesce(_optionalChain([bounds, 'optionalAccess', _5 => _5.top]), () => ( 0))));
    };
    ref.current.addEventListener("mousemove", onMouseMove);
    return () => {
      _optionalChain([ref, 'access', _6 => _6.current, 'optionalAccess', _7 => _7.removeEventListener, 'call', _8 => _8("mousemove", onMouseMove)]);
    };
  }, [ref.current]);
  return [ref, { mouseX: x, mouseY: y }];
}


exports.useMousePosition = useMousePosition;
