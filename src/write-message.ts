/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@kor-ui/kor/components/button';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('write-message')
export class WriteMessage extends LitElement {
  static override styles = css`
    :host {
      display: flex;"
      flex: 0 0 auto;
      justify-content: center;
      align-items: center;
      width:100%;
    }

    footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: whitesmoke;
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        gap: 1rem;
    }
    #message-input {
        width: 90%;
        padding: 8px;
    }   
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
    <footer>
      <div class="write-message-div">
            <input id="message-input"/>
      </div>
      <kor-button label="Submit" color="Primary" type="filled"></kor-button>
    </footer>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'write-message': WriteMessage;
  }
}
