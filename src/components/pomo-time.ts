import { LitElement, html, property, css, customElement } from 'lit-element';
import { timeToString } from '../utils';

@customElement('pomo-time')
export class PomoTime extends LitElement {
  @property({ type: Number }) time: number;

  static get styles() {
    return css`
      h1 {
        font-weight: 400;
        font-size: 4em;
        margin: 0;
      }
    `;
  }

  render() {
    return html`<h1>${timeToString(this.time)}</h1>`;
  }
}