// Autonomous custom element

class HelloWorld extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    const tmp = 'HELLO THERE!';
    this.attachShadow({ mode: 'open' }).innerHTML = tmp;
  }
}

customElements.define('hello-world', HelloWorld);
