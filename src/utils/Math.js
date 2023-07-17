export const handleClick = (event, mathField, mathElement) => {
  const target = event.target;

  if (target === mathField || mathField.contains(target)) {
    if (!mathElement.isStyleChanged) {
      mathElement.classList.add('bottom-responsive');
    } else {
      mathElement.classList.remove('bottom-responsive');
    }
  } else {
    mathElement.classList.remove('bottom-responsive');
  }
};

export const updateLatexOutput = (mathField, latexOutput, setLatex) => {
  const latex = mathField.getValue();
  latexOutput.value = latex;
  setLatex(latex);
};
