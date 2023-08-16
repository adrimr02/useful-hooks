import React from "react";
import { useCombinedState } from "../useCombinedState/useCombinedState";
function useForm({
  onSubmit,
  onError,
  initialValues
}) {
  const [values, setters] = useCombinedState(initialValues);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
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
export {
  useForm
};
