import React, { useEffect } from 'react';

export interface EditorAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isCodeView: boolean;
  editorRef: React.RefObject<HTMLDivElement>;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

export const EditorArea: React.FC<EditorAreaProps> = ({
  value,
  onChange,
  placeholder = 'Start typing...',
  isCodeView,
  editorRef,
  textareaRef,
}) => {
  useEffect(() => {
    if (editorRef.current && !isCodeView && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value, isCodeView]);

  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      if (newContent !== value) {
        onChange(newContent);
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  return (
    <div className="qw-editor-area">
      {isCodeView ? (
        <textarea
          ref={textareaRef}
          className="qw-textarea"
          value={value}
          onChange={handleTextareaChange}
          placeholder={placeholder}
          spellCheck={false}
        />
      ) : (
        <div
          ref={editorRef}
          className="qw-content-editable"
          contentEditable
          onInput={handleContentChange}
          onPaste={handlePaste}
          data-placeholder={placeholder}
          suppressContentEditableWarning
        />
      )}
    </div>
  );
};

