import { FieldValues, UseFormArgs, UseFormReturn } from '../types.js';

declare function useHandle<TFieldValues extends FieldValues = FieldValues>({ onSubmit, onError, initialValues, }: UseFormArgs<TFieldValues>): UseFormReturn<TFieldValues>;

export { useHandle };
