# QuickWYSIWYG

[![npm version](https://img.shields.io/npm/v/quickwysiwyg.svg)](https://www.npmjs.com/package/quickwysiwyg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fast, lightweight, and customizable WYSIWYG editor for React.

## 🌟 Features

- 🪶 **Lightweight**: Zero dependencies (except React)
- ⚡ **Fast**: Optimized for performance
- 🎨 **Simple**: Easy to use and configure
- 🔧 **Extensible**: Built with atomic design principles
- 📝 **TypeScript**: Full type safety
- 💅 **Customizable**: Style with CSS

## 🚀 Demo

[View live demo](https://lyesweb.github.io/quick-wysiwyg-editor/)

## 📦 Installation

```bash
npm install quickwysiwyg
```

Or with yarn:

```bash
yarn add quickwysiwyg
```

Or with pnpm:

```bash
pnpm add quickwysiwyg
```

## 📖 Usage

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

export default App;
```

## 🎯 API

### Editor Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | Yes | - | The HTML content (controlled) |
| `onChange` | `(value: string) => void` | Yes | - | Callback when content changes |
| `placeholder` | `string` | No | `'Start typing...'` | Placeholder text when editor is empty |
| `className` | `string` | No | `''` | Additional CSS class name for the editor container |

## ✨ Features

### Toolbar Buttons

- **Bold** - Make selected text bold
- **Italic** - Make selected text italic  
- **Link** - Insert or edit hyperlinks
- **Numbered List** - Create ordered lists
- **Bullet List** - Create unordered lists
- **Code View** - Toggle between WYSIWYG and raw HTML code view

### Keyboard Shortcuts

Standard browser shortcuts work:
- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Shift + Z` - Redo

## 🏗️ Project Structure

This is a monorepo managed with pnpm workspaces:

```
/
├── packages/
│   ├── quickwysiwyg/   # The library package
│   └── demo/           # Demo application
├── pnpm-workspace.yaml
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/LyesWeb/quick-wysiwyg-editor.git
cd quick-wysiwyg-editor

# Install dependencies
pnpm install

# Build the library
pnpm build:lib

# Run the demo in development mode
pnpm dev
```

### Build

```bash
# Build everything
pnpm build

# Build only the library
pnpm build:lib

# Build only the demo
pnpm build:demo
```

## 📝 Publishing to npm

```bash
cd packages/quickwysiwyg
pnpm build
npm publish
```

## 🚀 Deploying Demo to GitHub Pages

The demo is automatically deployed to GitHub Pages when you push to the `main` branch.

For manual deployment:

```bash
pnpm build:demo
# Then deploy the packages/demo/dist folder to GitHub Pages
```

## 🎨 Customization

You can customize the editor's appearance by overriding the CSS classes:

```css
/* Override editor styles */
.qw-editor {
  border: 2px solid #your-color;
}

.qw-toolbar {
  background-color: #your-color;
}

.qw-button--active {
  background-color: #your-color;
}
```

All CSS classes use the `qw-` prefix to avoid conflicts.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [LyesWeb](https://github.com/LyesWeb)

## 🔗 Links

- [GitHub Repository](https://github.com/LyesWeb/quick-wysiwyg-editor)
- [npm Package](https://www.npmjs.com/package/quickwysiwyg)
- [Demo](https://lyesweb.github.io/quick-wysiwyg-editor/)

## 🐛 Known Limitations

- Uses `document.execCommand` which is deprecated but still widely supported
- No mobile toolbar (uses native contentEditable behavior)
- Basic formatting only (by design for simplicity)

## 🗺️ Roadmap

Future enhancements may include:
- Additional formatting options (headings, code blocks, etc.)
- Customizable toolbar
- Plugin system
- Better mobile support
- Modern Selection API implementation

