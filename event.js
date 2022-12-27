import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyElement extends LitElement {
    static properties = {
        count: {
            type: Number,
            reflect: true
        }
    }

    constructor() {
        super();
        
        this.count = 0;
    }

    render() {
        return html `
            <h1>イベントのサンプル</h1>
            <p>カウント: ${this.count}</p>

            <button
                @click="${() => this._increment()}"
                >
                +1
            </button>
        `;
    }

    _increment() {
        this.count += 1;
    }
}

customElements.define('my-element', MyElement);
