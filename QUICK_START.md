# QuickWYSIWYG - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build the Library

```bash
pnpm build:lib
```

This builds the `quickwysiwyg` package in `packages/quickwysiwyg/dist/`

### 3. Run the Demo

```bash
pnpm dev
```

This starts the development server at `http://localhost:5173`

### 4. Build for Production

```bash
# Build everything
pnpm build

# Or build individually
pnpm build:lib
pnpm build:demo
```

## 📦 Publishing to npm

1. Navigate to the library package:
```bash
cd packages/quickwysiwyg
```

2. Ensure it's built:
```bash
pnpm build
```

3. Publish to npm:
```bash
npm publish
```

Note: Make sure you're logged in to npm with `npm login` first.

## 🌐 Deploy Demo to GitHub Pages

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys the demo to GitHub Pages when you push to the `main` branch.

**Setup Steps:**
1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the `main` branch to trigger deployment

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the demo
pnpm build:demo

# The built files will be in packages/demo/dist/
# Deploy this folder to GitHub Pages using your preferred method
```

## 🧪 Testing the Library Locally

To test the library in another project before publishing:

1. Build the library:
```bash
pnpm build:lib
```

2. In another React project, install it locally:
```bash
pnpm add /path/to/QuikWYSIWYG/packages/quickwysiwyg
```

Or use `pnpm link`:
```bash
# In the library directory
cd packages/quickwysiwyg
pnpm link --global

# In your test project
pnpm link --global quickwysiwyg
```

## 📝 Project Structure

```
QuikWYSIWYG/
├── packages/
│   ├── quickwysiwyg/          # The library
│   │   ├── src/
│   │   │   ├── atoms/         # Button, Icon
│   │   │   ├── molecules/     # ToolbarButton, LinkModal
│   │   │   ├── organisms/     # Toolbar, EditorArea
│   │   │   ├── templates/     # Editor
│   │   │   ├── types/         # TypeScript types
│   │   │   ├── utils/         # Helper functions
│   │   │   ├── styles/        # CSS
│   │   │   └── index.ts       # Main export
│   │   ├── dist/              # Built files (generated)
│   │   ├── package.json
│   │   └── tsup.config.ts
│   │
│   └── demo/                  # Demo app
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       ├── dist/              # Built demo (generated)
│       ├── index.html
│       ├── package.json
│       └── vite.config.ts
│
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── pnpm-workspace.yaml
├── package.json
├── tsconfig.json
├── README.md
├── LICENSE
└── QUICK_START.md
```

## 🔧 Development Tips

### Watch Mode

For library development with auto-rebuild:
```bash
cd packages/quickwysiwyg
pnpm dev
```

### Hot Reload Demo

The demo has hot module replacement enabled, so changes will reflect immediately when running `pnpm dev`.

### Debugging

- Use React DevTools for component debugging
- Check browser console for errors
- The editor uses `contentEditable`, which has browser-specific behaviors

## ❓ Common Issues

### Issue: "Cannot find module 'quickwysiwyg'"

**Solution:** Make sure you've built the library first:
```bash
pnpm build:lib
```

### Issue: Styles not appearing

**Solution:** Make sure you've imported the CSS:
```tsx
import 'quickwysiwyg/style.css';
```

### Issue: TypeScript errors in demo

**Solution:** Ensure the library is built and types are generated:
```bash
pnpm build:lib
```

### Issue: GitHub Pages 404

**Solution:** 
1. Ensure `.nojekyll` file exists in `packages/demo/public/`
2. Check that the base path in `vite.config.ts` matches your repository name
3. Verify GitHub Pages is enabled in repository settings

## 📚 Next Steps

- Customize the styles in `packages/quickwysiwyg/src/styles/editor.css`
- Add new features following the atomic design pattern
- Update the demo to showcase new features
- Write tests (consider adding Jest or Vitest)
- Add more examples to the demo

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

Happy coding! 🎉

