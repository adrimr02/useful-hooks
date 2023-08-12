import { useState } from "react";
function useCopyToClipboard() {
  const [copied, setCopied] = useState(null);
  const copy = async (text) => {
    if (!navigator.clipboard) {
      console.warn("Clipboard API not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      return true;
    } catch (err) {
      console.error("Failed to copy");
      setCopied(null);
      return false;
    }
  };
  return [copy, copied];
}
export {
  useCopyToClipboard
};
