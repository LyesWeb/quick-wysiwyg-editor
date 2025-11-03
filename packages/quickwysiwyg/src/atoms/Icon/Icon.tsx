import React from 'react';

export interface IconProps {
  name: 'bold' | 'italic' | 'link' | 'ol' | 'ul' | 'code';
  size?: number;
}

const icons = {
  bold: (
    <path d="M13.5 15.5H10v-3h3.5a1.5 1.5 0 010 3zM10 6.5h3a1.5 1.5 0 010 3h-3v-3zM15.6 11a3 3 0 00-2.1-5H8v12h5.5a3 3 0 002.1-5z" />
  ),
  italic: (
    <path d="M10 6h6v2h-2.5l-2 8H14v2H8v-2h2.5l2-8H10V6z" />
  ),
  link: (
    <path d="M10.9 13.4l-1.4 1.4a4 4 0 01-5.7-5.7l2.8-2.8a4 4 0 015.7 0l.7.7-1.4 1.4-.7-.7a2 2 0 00-2.8 0L5.3 10.5a2 2 0 002.8 2.8l1.4-1.4 1.4 1.4zm2.2-6.8l1.4-1.4a4 4 0 015.7 5.7l-2.8 2.8a4 4 0 01-5.7 0l-.7-.7 1.4-1.4.7.7a2 2 0 002.8 0l2.8-2.8a2 2 0 00-2.8-2.8l-1.4 1.4-1.4-1.4z" />
  ),
  ol: (
    <>
      <rect x="10" y="6" width="9" height="2" />
      <rect x="10" y="11" width="9" height="2" />
      <rect x="10" y="16" width="9" height="2" />
      <path d="M5 7h1V5H5v2zm0 6h1v-2H5v2zm0 6h2v-1H6v-1h1v-1H5v3z" />
    </>
  ),
  ul: (
    <>
      <rect x="10" y="6" width="9" height="2" />
      <rect x="10" y="11" width="9" height="2" />
      <rect x="10" y="16" width="9" height="2" />
      <circle cx="6" cy="7" r="1" />
      <circle cx="6" cy="12" r="1" />
      <circle cx="6" cy="17" r="1" />
    </>
  ),
  code: (
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  ),
};

export const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name]}
    </svg>
  );
};

