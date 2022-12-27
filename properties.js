import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyElement extends LitElement {

    static properties = {
        name: {},
        count: {
            attribute: false,
            type: Number,
        }
    }

    constructor() {
        super();

        this.name = "名無し";
        this.count = 123;
    }

    render() {
        return html `
            <h1>プロパティのサンプル</h1>
            <p>こんにちは、${this.name}さん！</p>
            <p>${this.count}回目です。</p>
        `;
    }
}

customElements.define('my-element', MyElement);
