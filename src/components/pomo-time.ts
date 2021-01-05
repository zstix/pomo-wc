import { LitElement, html, property, css, customElement } from 'lit-element';

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

  // TODO: move to util class?
  private _pad(num: number): string {
    const str = num.toString(10);
    return str.length === 2 ? str : "0" + str;
  }

  // TODO: move to util class?
  private get _timeString(): string {
    const minutes = this._pad(Math.floor(this.time / 60));
    const seconds = this._pad(this.time % 60);
    return `${minutes}:${seconds}`;
  }

  render() {
    return html`<h1>${this._timeString}</h1>`;
  }
}