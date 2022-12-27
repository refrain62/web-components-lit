import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyElement extends LitElement {
    render() {
        return html `
            <h1>Hello World!</h1>
        `;
    }
}

customElements.define('my-element', MyElement);
