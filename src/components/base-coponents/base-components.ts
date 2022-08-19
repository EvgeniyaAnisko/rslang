export default function newComponent(type: string, inner = '', addClass?: string[]): HTMLElement {
  const element = document.createElement(type);
  element.innerHTML = inner;
  if (addClass) element.classList.add(...addClass);
  return element;
}
