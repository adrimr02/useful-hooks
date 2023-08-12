import React from "react";
function useCombinedState(initialValues) {
  const [state, setState] = React.useState(initialValues);
  const setters = {};
  for (const key in initialValues) {
    setters[key] = (value) => {
      setState((s) => ({ ...s, [key]: value }));
    };
  }
  return [state, setters];
}
export {
  useCombinedState
};
