/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { formatDistanceToNow } from 'date-fns';
import '@kor-ui/kor/components/card';
import '@kor-ui/kor/components/icon';



/**
 * An example element.
 *
 * Props
 * @prop {string} content - The text content of the message
 * @prop {string} author - The author of the message
 * @prop {string} date - The date of the message
 * @prop {number} likes - Number of likes of the message
 * @prop {boolean} liked - Boolean to indicate if the message was liked or not
 */
@customElement('beep-message')
export class BeepMessage extends LitElement {
  static override styles = css`
    :host {
      display: flex;
    }

    
    .message-author {
      font-family: Arial, Helvetica, sans-serif;
      font-size: small;
      margin: 0;
    }

    .message-tool-bar {
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
  `;


  @property()
  content = 'Test content';

  @property()
  date = new Date().toISOString();

  @property()
  author = 'Test author';

  @property({type: Number})
  likes = 0;

  @property({type: Boolean})
  liked = false;


  override render() {
    return html`
      <kor-card margin="">
        <h6 class="message-author"> ${this.author} - ${formatDistanceToNow(this.date, {addSuffix: true})} </h6>
        <p class="message-content">${this.content}</p>
        <span slot="footer"> ${this.likes} ${(this.likes > 1) ? "likes":"like"}</span>
        <kor-icon slot="footer" icon="favorite" button @click=${this._handleLike} color=${this.liked ? "red" : "black"} class="like-button"></kor-icon>
      </kor-card>
    `;
  }

 
  private _handleLike() {
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
    this.dispatchEvent(new CustomEvent(this.liked ? 'like':'unlike'))
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message': BeepMessage;
  }
}

