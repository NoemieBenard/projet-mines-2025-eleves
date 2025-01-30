/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('beep-header')
export class BeepHeader extends LitElement {
  static override styles = css`

    :host {
      display: flex;
      flex-direction: row;
      flex: 0 0 auto;
      align-items: center;
      width:100%;
      background-color: whitesmoke;
    }

    header {   
      width: 100%;
      height: 10%;
      padding: 2%;

    }

    nav {
      width: 100%;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: space-between; 
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
    }

    .search-button {
        background-color: whitesmoke;
    }

  `;



  override render() {
    return html`
    <header>
        <nav>
          <h1>Jane Doe</h1>
          <button class="search button">🔎</button>
        </nav>
    </header>
    `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'beep-header': BeepHeader;
  }
}
