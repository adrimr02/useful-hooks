type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;
declare function useCopyToClipboard(): [CopyFn, CopiedValue];

export { useCopyToClipboard };
