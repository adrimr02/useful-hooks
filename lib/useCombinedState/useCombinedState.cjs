"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);
function useCombinedState(initialValues) {
  const [state, setState] = _react2.default.useState(initialValues);
  const setters = {};
  for (const key in initialValues) {
    setters[key] = (value) => {
      setState((s) => ({ ...s, [key]: value }));
    };
  }
  return [state, setters];
}


exports.useCombinedState = useCombinedState;
