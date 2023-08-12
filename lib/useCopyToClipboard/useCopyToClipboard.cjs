"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _react = require('react');
function useCopyToClipboard() {
  const [copied, setCopied] = _react.useState.call(void 0, null);
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


exports.useCopyToClipboard = useCopyToClipboard;
