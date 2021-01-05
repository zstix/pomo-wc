import { LitElement, html, css, customElement } from 'lit-element';

@customElement('pomo-controls')
export class PomoControls extends LitElement {
  static get styles() {
    return css`
      .controls {
        padding: 1em 0;
        height: 4em;
      }

      button {
        background-color: lightgray;
        border: none;
        text-transform: uppercase;
        font-size: 1.2em;
        padding: 0.5em 1em;
        font-weight: 600;
        border-radius: 0.6em;
        border-bottom: 0.3em solid gray;
        user-select: none;
        cursor: pointer;
        outline: none;
        margin-bottom: 0.8em;
        margin-right: 1em;
        position: relative;
      }

      button::-moz-focus-inner {
        border: 0;
      }

      button:active {
        top: 0.3em;
        border-bottom: none;
      }

      button.red {
        background-color: tomato;
        border-color: darkred;
        color: white;
      }

      button.green {
        background-color: yellowgreen;
        border-color: green;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="controls">
        <button class="green">start</button>
        <button class="red">break</button>
        <button class="red">long break</button>
      </div>
    `;
  }
}