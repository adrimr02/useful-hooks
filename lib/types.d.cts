type UseFormArgs<TFieldValues extends FieldValues> = {
    initialValues: TFieldValues;
    onSubmit: (values: TFieldValues, e?: Event) => Promise<void>;
    onError: (err: unknown) => void;
};
type HandleFn = (e?: Event) => Promise<void>;
type Setters<TFieldValues extends FieldValues> = {
    [K in keyof TFieldValues]: (value: TFieldValues[K]) => void;
};
type Values<TFieldValues extends FieldValues> = {
    [K in keyof TFieldValues]: TFieldValues[K];
};
type UseFormReturn<TFieldValues extends FieldValues> = {
    handle: HandleFn;
    isLoading: boolean;
    isError: boolean;
    values: Values<TFieldValues>;
    setters: Setters<TFieldValues>;
};
type FieldValues = Record<string, any>;
type Rect = {
    width: number;
    height: number;
};

export { FieldValues, HandleFn, Rect, Setters, UseFormArgs, UseFormReturn, Values };
