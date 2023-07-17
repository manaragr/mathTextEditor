import '../components/index.css';

export const editExpression = (setMathEditorVisible, setExpressionEditable) => {
  const expressions = document.querySelectorAll('span.ql-formula');
  expressions.forEach((expression) => {
    const latexValue = expression.getAttribute('data-value');

    expression.addEventListener('mouseenter', addBorder);
    expression.addEventListener('mouseleave', removeBorder);
    expression.addEventListener('dblclick', () => {
      expression.setAttribute('id', 'editable');
      enterEditMode(latexValue);
      setMathEditorVisible(true);
      setExpressionEditable(true);
    });
  });
};

export const addBorder = (event) => {
  const element = event.target;
  element.style.border = 'solid 1px rgba(240, 198, 116, 0.99)';
  element.style.padding = '2px 0';
};

export const removeBorder = (event) => {
  const element = event.target;
  element.style.border = '';
};

export const enterEditMode = (latexValue) => {
  const mathField = document.getElementById('latex');
  const mathInput = document.getElementById('mathField');
  if (mathField && mathInput) {
    mathField.value = latexValue;
    mathInput.value = latexValue;
    mathInput.focus();
  }
};
