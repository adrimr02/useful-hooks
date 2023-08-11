import React from 'react';
import { FieldValues, HandleFn, UseFormArgs, UseFormReturn } from '../types';
import { useCombinedState } from '../useCombinedState/useCombinedState';

export function useHandle<TFieldValues extends FieldValues = FieldValues>({
  onSubmit,
  onError,
  initialValues,
}: UseFormArgs<TFieldValues>): UseFormReturn<TFieldValues> {
  const [values, setters] = useCombinedState(initialValues);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handle: HandleFn = async e => {
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
