import React from 'react';

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  title?: string;
  active?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  title,
  active = false,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      className={`qw-button ${active ? 'qw-button--active' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

