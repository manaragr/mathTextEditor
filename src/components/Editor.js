import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import MathEditor from './MathEditor';
import './index.css';
import { handleSaveFormula } from '../utils/Form';
import { removeBorder, addBorder, editExpression } from '../utils/Editor';

const Editor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const [placeholder, setPlaceholder] = useState('Write something...');
  const [mathEditorVisible, setMathEditorVisible] = useState(false);
  const [expressionEditable, setExpressionEditable] = useState(false);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const toggleMathEditor = () => {
    setMathEditorVisible((prevVisible) => !prevVisible);
    setExpressionEditable(() => false);
  };

  editExpression(setMathEditorVisible, setExpressionEditable);

  useEffect(() => {
    const tooltipElement = document.querySelector('.ql-tooltip');
    if (tooltipElement) {
      tooltipElement.style.opacity = '0';
    }
    const formulaButton = document.querySelector('button.ql-formula');
    if (formulaButton) {
      formulaButton.addEventListener('click', toggleMathEditor);
    }

    return () => {
      if (formulaButton) {
        formulaButton.removeEventListener('click', toggleMathEditor);
      }
      const expressions = document.querySelectorAll('span.ql-formula');
      expressions.forEach((expression) => {
        expression.removeEventListener('mouseenter', addBorder);
        expression.removeEventListener('mouseleave', removeBorder);
      });
    };
  }, []);

  return (
    <div>
      <ReactQuill
        onChange={handleChange}
        value={editorHtml}
        modules={Editor.modules}
        bounds='.app'
        placeholder={placeholder}
      />
      {mathEditorVisible && (
        <MathEditor
          onSaveFormula={handleSaveFormula}
          setMathEditorVisible={setMathEditorVisible}
          expressionEditable={expressionEditable}
          setExpressionEditable={setExpressionEditable}
        />
      )}
    </div>
  );
};

export default Editor;
