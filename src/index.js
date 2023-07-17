import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import 'katex/dist/katex.min.css';

function App() {
  Editor.modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ header: [1, 2, 3, false] }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['link', 'image', 'formula']
    ],
    clipboard: {
      matchVisual: false
    }
  };

  return (
    <div className='app'>
      <Editor />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export { Editor };
