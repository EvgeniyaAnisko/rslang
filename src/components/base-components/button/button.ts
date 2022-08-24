import { newComponent } from '../base-components';
import './button.css';

export function createButton(text: string): HTMLElement {
  return newComponent('button', text, ['btn']);
}
