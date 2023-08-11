import React from 'react';
import { FieldValues, Setters, Values } from '../types';

export function useCombinedState<TFieldValues extends FieldValues>(
  initialValues: TFieldValues
): { values: Values<TFieldValues>; setters: Setters<TFieldValues> } {
  const [state, setState] = React.useState<TFieldValues>(initialValues);

  const setters = {} as {
    [K in keyof TFieldValues]: (value: TFieldValues[K]) => void;
  };

  for (const key in initialValues) {
    setters[key] = value => setState(s => ({ [key]: value, ...s }));
  }

  return { values: state, setters };
}