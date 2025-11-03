import React, { useState } from 'react';
import { ToolbarButton } from '../../molecules/ToolbarButton';
import { LinkModal } from '../../molecules/LinkModal';
import { executeCommand, insertLink, isCommandActive } from '../../utils/commands';
import { EditorCommand } from '../../types';

export interface ToolbarProps {
  onToggleCodeView: () => void;
  isCodeView: boolean;
  editorRef: React.RefObject<HTMLDivElement>;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onToggleCodeView,
  isCodeView,
  editorRef,
}) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [commandStates, setCommandStates] = useState<Record<EditorCommand, boolean>>({
    bold: false,
    italic: false,
    insertOrderedList: false,
    insertUnorderedList: false,
  });

  const handleCommand = (command: EditorCommand) => {
    if (editorRef.current) {
      editorRef.current.focus();
      executeCommand(command);
      updateCommandStates();
    }
  };

  const handleLinkInsert = (url: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      insertLink(url);
    }
  };

  const updateCommandStates = () => {
    setCommandStates({
      bold: isCommandActive('bold'),
      italic: isCommandActive('italic'),
      insertOrderedList: isCommandActive('insertOrderedList'),
      insertUnorderedList: isCommandActive('insertUnorderedList'),
    });
  };

  React.useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && editor.contains(selection.anchorNode)) {
        updateCommandStates();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [editorRef]);

  return (
    <>
      <div className="qw-toolbar">
        <div className="qw-toolbar-group">
          <ToolbarButton
            icon="bold"
            title="Bold"
            onClick={() => handleCommand('bold')}
            active={commandStates.bold}
          />
          <ToolbarButton
            icon="italic"
            title="Italic"
            onClick={() => handleCommand('italic')}
            active={commandStates.italic}
          />
          <ToolbarButton
            icon="link"
            title="Insert Link"
            onClick={() => setIsLinkModalOpen(true)}
          />
        </div>
        <div className="qw-toolbar-divider" />
        <div className="qw-toolbar-group">
          <ToolbarButton
            icon="ol"
            title="Numbered List"
            onClick={() => handleCommand('insertOrderedList')}
            active={commandStates.insertOrderedList}
          />
          <ToolbarButton
            icon="ul"
            title="Bullet List"
            onClick={() => handleCommand('insertUnorderedList')}
            active={commandStates.insertUnorderedList}
          />
        </div>
        <div className="qw-toolbar-divider" />
        <div className="qw-toolbar-group">
          <ToolbarButton
            icon="code"
            title={isCodeView ? 'Switch to Editor' : 'Switch to Code'}
            onClick={onToggleCodeView}
            active={isCodeView}
          />
        </div>
      </div>
      <LinkModal
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        onSubmit={handleLinkInsert}
      />
    </>
  );
};

