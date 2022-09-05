export function newAnchorComponent(inner: string, link: string, addClass?: string[]): HTMLAnchorElement {
  const element = document.createElement('a');
  element.innerHTML = inner;
  if (addClass) element.classList.add(...addClass);
  element.href = link;
  return element;
}
