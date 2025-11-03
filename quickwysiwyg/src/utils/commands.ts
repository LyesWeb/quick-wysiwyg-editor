import { EditorCommand } from '../types';

export const executeCommand = (command: EditorCommand): void => {
  document.execCommand(command, false);
};

export const insertLink = (url: string): void => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText) {
    document.execCommand('createLink', false, url);
  } else {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    range.insertNode(link);
    range.setStartAfter(link);
    range.setEndAfter(link);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export const isCommandActive = (command: EditorCommand): boolean => {
  return document.queryCommandState(command);
};

