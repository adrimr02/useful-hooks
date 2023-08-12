import { FieldValues, Values, Setters } from '../types.js';

declare function useCombinedState<TFieldValues extends FieldValues>(initialValues: TFieldValues): [Values<TFieldValues>, Setters<TFieldValues>];

export { useCombinedState };
