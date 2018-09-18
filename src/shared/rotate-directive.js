export default {
  bind: (element, binding) => {
    console.log(binding.value);
    Object.keys(binding.value).forEach((key) => {
      console.log(key.toString());
      element.style[key] = `rotate(${binding.value[key]})`;
    });
  },
};
