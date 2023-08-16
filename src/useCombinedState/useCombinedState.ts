import React from 'react';
import { FieldValues, Setters, Values } from '../types';

export function useCombinedState<TFieldValues extends FieldValues>(
  initialValues: TFieldValues
): [Values<TFieldValues>, Setters<TFieldValues>] {
  const [state, setState] = React.useState<TFieldValues>(initialValues);

  const setters = {} as {
    [K in keyof TFieldValues]: (value: TFieldValues[K]) => void;
  };

  for (const key in initialValues) {
    setters[key] = value => {
      setState(s => ({ ...s, [key]: value }))
    };
  }

  return [state, setters];
}