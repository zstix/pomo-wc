import { LitElement, html, css, customElement } from 'lit-element';

@customElement('wc-pomo')
export class WCPomo extends LitElement {
  static get styles() {
    return css`
      .app {
        padding: 20px;
        max-width: 700px;
        margin: 100px auto;
        background-color: white;
        border-radius: 20px;
        font-family: sans-serif;
      }

      h2 {
        font-weight: 400;
        font-size: 1.6em;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <div class="app">
        <h2>${String.fromCodePoint(0x1F345)} Pomodoro Timer</h2>
        <pomo-time time=1500></pomo-time>
        <pomo-controls></pomo-controls>
      </div>
    `;
  }
}