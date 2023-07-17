import katex from 'katex';
import 'react-quill/dist/quill.snow.css';
import '../components/index.css';
window.katex = katex;

export const handleSaveFormula = (
  latex,
  setMathEditorVisible,
  expressionEditable,
  setExpressionEditable
) => {
  const inputElement = document.querySelector('input[data-formula]');
  const primarySaveButton = document.querySelector('.ql-action');
  const tooltip = document.querySelector('.ql-tooltip');
  tooltip.classList.add('ql-editing');

  if (tooltip && tooltip.classList.contains('ql-editing')) {
    if (expressionEditable) {
      const editable = document.getElementById('editable');
      if (editable) {
        editable.setAttribute('id', Math.random(100000).toString());
        editable.style.display = 'none';
      }
      let newValue = '';
      newValue = latex;
      inputElement.value = newValue;
    } else {
      const currentValue = inputElement.value;
      let newValue = '';
      console.log(currentValue);
      newValue = latex + currentValue;
      inputElement.value = newValue;
    }
    inputElement.focus();
    primarySaveButton.click();
    setMathEditorVisible(false);
    setExpressionEditable(false);
  }
};
