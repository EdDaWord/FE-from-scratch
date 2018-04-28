# Web Components
#study/webDev

There are 4 standards that are need for web components to work

# 1) Custom Elements
Also low key we need JS classes for the sugar.

[MDN custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

Custom elements are supported by default in Chrome and Opera

## MVC
The controller of a custom element is `CustomElementRegistry.define()`
Arguments:
	- `DOMString` : `ed-div`
	- Class object (custom element controller)
	- `extends` property, **Autonomous** or **Customized**.

## Two types of custom elements
- **Autonomous** custom elements are standalone — they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example `<popup-info>`, or `document.createElement("popup-info")`.

- **Customized** built-in elements inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom elment in the `is` attribute (or property). For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`.

## Lifecycle hooks
[life cycle hooks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

## HTML and CSS
You can construct the `template` through literal strings or `document.createElement` and a bunch of DOM/CSS modifiers on that variable.


# 2) Shadow DOM
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
An important part of web components is encapsulation. Being able to keep the markup structure, 

### Shadow DOM Terminology 
### 	Shadow Host
		- The regular DOM node that the shadow DOM attaches to
### 	Shadow tree
		- The DOM tree inside the shadow DOM
### 	Shadow Boundary 
		- The place where the shadow DOM ends and the regular DOM begins
### 	Shadow root
		- The interface to the Shadow DOM API

Shadow DOMs exactly the same as regular DOMs except what ever `styling`  in the shadow DOM cannot effect the styling of the outside DOM.

### Basic usage

```
let shadow = elementRef.attachShadow({mode: 'open'});
let shadow = elementRef.attachShadow({mode: 'closed’});
``` 

Whether the Shadow DOM of element is accessible through JS

```
let myShadowDom = myCustomElem.shadowRoot; // null if closed
```

HOLY SHIT THEY ARE DOING IN-LINE CSS + INLINE HTML


# 3) HTML imports
Similar to ES6 module imports but HTML imports are within HTML and for HTML. ES6 module imports are for JS. This is a big debate for Mozilla who is waiting for the ES6 imports vs HTML imports fight to play out.
`<link rel="import" href="/imports/heart.html">`

# 4) HTML Templates
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.

The template element holds HTML code without displaying it:
```
<template>
  <h2>Flower</h2>
  <img src="img_white_flower.jpg">
</template>
```

The `<template>` tag holds its content hidden from the client.

Content inside a `<template>` tag will not be rendered.

The content can be visible and rendered later by using JavaScript.

Use the `<template>` tag when you have HTML code you want to use over and over again, but not until you ask for it. To do this without the `<template>` tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.