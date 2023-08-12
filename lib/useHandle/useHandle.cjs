"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _useCombinedState = require('../useCombinedState/useCombinedState');
function useHandle({
  onSubmit,
  onError,
  initialValues
}) {
  const [values, setters] = _useCombinedState.useCombinedState.call(void 0, initialValues);
  const [isLoading, setIsLoading] = _react2.default.useState(false);
  const [isError, setIsError] = _react2.default.useState(false);
  const handle = async (e) => {
    try {
      setIsLoading(true);
      await onSubmit(initialValues, e);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      onError(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { handle, isLoading, isError, values, setters };
}


exports.useHandle = useHandle;
