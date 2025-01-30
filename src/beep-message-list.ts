import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../beep-message.js';
import {Task} from '@lit/task';

type Message = {
    content:string;
    date: string;
    author: string;
    likes: number;
    liked: boolean;
  }
  
const messages: Message[] = [
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    },
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    },
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    },
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    },
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    },
    {
        content: "Hello World",
        date: "2024-01-29T10:04:24.7072",
        author: "Alice",
        likes:0,
        liked:false

    }
]
  

  

@customElement('beep-message-list')
  export class BeepMessageList extends LitElement {
    static override styles = css``;

    _messagesTask = new Task(this, {
        args: () => ["test"],
        task: () => {
            return new Promise<Message[]>((resolve) => {
                setTimeout(() => {
                    resolve(messages);//replace by a real api call
                }, 2000);
            });
            //return fetch("/messages")
        }
    })
  
    override render() {
        
        return html`
          ${this._messagesTask.render({
            initial: () => html`<p>Waiting to start task</p>`,
            pending: () => html`<p>Running task...</p>`,
            complete: (messages) => html`
              ${messages.map(
                (message) => html`
                  <beep-message
                    content=${message.content}
                    date=${message.date}
                    author=${message.author}
                    likes=${message.likes}
                    ?liked=${message.liked}
                  ></beep-message>
                `
              )}
            `,
            error: (error: Error) => html`<p>Oops, something went wrong: ${error}</p>`
          })}
        `;
      }
  }
  
  declare global {
    interface HTMLElementTagNameMap {
      'beep-message-list': BeepMessageList;
    }
  }



