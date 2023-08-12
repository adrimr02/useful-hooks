import { FieldValues, Values, Setters } from '../types.cjs';

declare function useCombinedState<TFieldValues extends FieldValues>(initialValues: TFieldValues): [Values<TFieldValues>, Setters<TFieldValues>];

export { useCombinedState };
