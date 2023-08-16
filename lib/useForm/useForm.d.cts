import { FieldValues, UseFormArgs, UseFormReturn } from '../types.cjs';

declare function useForm<TFieldValues extends FieldValues = FieldValues>({ onSubmit, onError, initialValues, }: UseFormArgs<TFieldValues>): UseFormReturn<TFieldValues>;

export { useForm };
