export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export type EditorCommand = 
  | 'bold'
  | 'italic'
  | 'insertOrderedList'
  | 'insertUnorderedList';

export interface ToolbarButtonProps {
  command?: EditorCommand;
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  active?: boolean;
}

