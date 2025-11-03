import { useState } from 'react';
import { Editor } from 'quickwysiwyg';
import 'quickwysiwyg/style.css';

const initialContent = '<p>Welcome to <strong>QuickWYSIWYG</strong>! 🎉</p><p>This is a lightweight, fast, and simple WYSIWYG editor for React.</p><p>Try the features:</p><ul><li>Make text <strong>bold</strong> or <em>italic</em></li><li>Add <a href="https://github.com/LyesWeb/quick-wysiwyg-editor">links</a></li><li>Create lists</li><li>Switch to code view</li></ul>';

function App() {
  const [content, setContent] = useState(initialContent);

  const handleReset = () => {
    setContent(initialContent);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>QuickWYSIWYG</h1>
        <p>A fast, lightweight, and customizable WYSIWYG editor for React</p>
        <div className="links">
          <a
            href="https://github.com/LyesWeb/quick-wysiwyg-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/quickwysiwyg"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            npm
          </a>
        </div>
      </header>

      <main className="main">
        <section className="demo-section">
          <div className="demo-header">
            <h2>Try it out</h2>
            <button onClick={handleReset} className="reset-button">
              Reset Content
            </button>
          </div>
          <Editor
            value={content}
            onChange={setContent}
            placeholder="Start typing..."
          />
        </section>

        <section className="info-section">
          <h2>Features</h2>
          <ul className="features-list">
            <li>🪶 Zero dependencies (except React)</li>
            <li>⚡ Fast and lightweight</li>
            <li>🎨 Simple to use and configure</li>
            <li>🔧 Built with atomic design principles</li>
            <li>📝 Full TypeScript support</li>
            <li>💅 Customizable with CSS</li>
          </ul>

          <h2>Installation</h2>
          <pre className="code-block">
            <code>npm install quickwysiwyg</code>
          </pre>

          <h2>Usage</h2>
          <pre className="code-block">
{`import { useState } from 'react';
import { Editor } from 'quickwysiwyg';
import 'quickwysiwyg/style.css';

function App() {
  const [content, setContent] = useState('');

  return (
    <Editor
      value={content}
      onChange={setContent}
      placeholder="Start typing..."
    />
  );
}`}
          </pre>
        </section>
      </main>

      <footer className="footer">
        <p>
          Made with ❤️ by{' '}
          <a
            href="https://github.com/LyesWeb"
            target="_blank"
            rel="noopener noreferrer"
          >
            LyesWeb
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

