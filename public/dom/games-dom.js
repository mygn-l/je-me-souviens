export const button = function (inner, handler) {
  const button = document.createElement("button");
  button.innerHTML = inner;
  button.addEventListener("click", handler);
  return button;
};
