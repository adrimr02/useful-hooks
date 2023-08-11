import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): [CopyFn, CopiedValue] {
  const [copied, setCopied] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      return true;
    } catch (err) {
      console.error('Failed to copy');
      setCopied(null);
      return false;
    }
  };

  return [copy, copied];
}
