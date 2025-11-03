import React, { useRef, useState } from 'react';
import { Toolbar } from '../../organisms/Toolbar';
import { EditorArea } from '../../organisms/EditorArea';
import { EditorProps } from '../../types';

export const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  const [isCodeView, setIsCodeView] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleToggleCodeView = () => {
    setIsCodeView((prev) => !prev);
  };

  return (
    <div className={`qw-editor ${className}`}>
      <Toolbar
        onToggleCodeView={handleToggleCodeView}
        isCodeView={isCodeView}
        editorRef={editorRef}
      />
      <EditorArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isCodeView={isCodeView}
        editorRef={editorRef}
        textareaRef={textareaRef}
      />
    </div>
  );
};

