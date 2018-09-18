function applyStyle(element, binding) {
  if (binding.arg !== 'position') return;
  Object.keys(binding.modifiers).forEach((key) => {
    element.style[key] = '5px';
  });
  element.style.position = 'absolute';
}

export default {
  /** Bind lifecycle hook. */
  bind: (element, binding) => {
    applyStyle(element, binding);
  },
  update: (element, binding) => {
    applyStyle(element, binding);
  },
  inserted: (element, binding) => {
    console.log(' Inserted');
  },
};
