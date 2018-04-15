class HelloWorld extends HTMLElement {
	constructor() {
		super();
		let tmp = `HELLO THERE!`;
		this.attachShadow({ mode: 'open' }).innerHTML = tmp;
	}
}

customElements.define('hello-world', HelloWorld);