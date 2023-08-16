import { FieldValues, UseFormArgs, UseFormReturn } from '../types.js';

declare function useForm<TFieldValues extends FieldValues = FieldValues>({ onSubmit, onError, initialValues, }: UseFormArgs<TFieldValues>): UseFormReturn<TFieldValues>;

export { useForm };
