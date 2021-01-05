import { LitElement, html, css, customElement } from 'lit-element';

@customElement('wc-pomo')
export class WCPomo extends LitElement {
  static get styles() {
    return css`div { color: red; }`;
  }

  render() {
    return html`<div>Hello from LitElement</div>`;
  }
}