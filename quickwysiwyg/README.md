# QuickWYSIWYG

A fast, lightweight, and customizable WYSIWYG editor for React.

## Features

- 🪶 **Lightweight**: Zero dependencies (except React)
- ⚡ **Fast**: Optimized for performance
- 🎨 **Simple**: Easy to use and configure
- 🔧 **Extensible**: Built with atomic design principles
- 📝 **TypeScript**: Full type safety

## Installation

```bash
npm install quickwysiwyg
# or
yarn add quickwysiwyg
# or
pnpm add quickwysiwyg
```

## Usage

```tsx
import { useState } from 'react';
import { Editor } from 'quickwysiwyg';
import 'quickwysiwyg/style.css';

function App() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <Editor
      value={content}
      onChange={setContent}
      placeholder="Start typing..."
    />
  );
}
```

## API

### Editor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | The HTML content (controlled) |
| `onChange` | `(value: string) => void` | - | Callback when content changes |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `className` | `string` | `''` | Additional CSS class name |

## Toolbar Buttons

- **Bold** - Make text bold
- **Italic** - Make text italic
- **Link** - Insert hyperlink
- **Numbered List** - Create ordered list
- **Bullet List** - Create unordered list
- **Code View** - Toggle between WYSIWYG and HTML code view

## License

MIT

## Links

- [GitHub Repository](https://github.com/LyesWeb/quick-wysiwyg-editor)
- [npm Package](https://www.npmjs.com/package/quickwysiwyg)
- [Live Demo](https://lyesweb.github.io/quick-wysiwyg-editor/)

