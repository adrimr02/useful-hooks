export type UseFormArgs<TFieldValues extends FieldValues> = {
  initialValues: TFieldValues;
  onSubmit: (values: TFieldValues, e?: Event) => Promise<void>;
  onError: (err: unknown) => void;
};

export type HandleFn = (e?: Event) => Promise<void>;
export type Setters<TFieldValues extends FieldValues> = {
  [K in keyof TFieldValues]: (value: TFieldValues[K]) => void;
};
export type Values<TFieldValues extends FieldValues> = {
  [K in keyof TFieldValues]: TFieldValues[K];
};

export type UseFormReturn<TFieldValues extends FieldValues> = {
  handle: HandleFn;
  isLoading: boolean;
  isError: boolean;
  values: Values<TFieldValues>;
  setters: Setters<TFieldValues>;
};

export type FieldValues = Record<string, any>;
