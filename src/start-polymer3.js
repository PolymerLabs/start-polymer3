import { Element as PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: "Hello World! I'm a Polymer element :)"
      }
    };
  }
  ready(){
    super.ready();
    // Output the custom element's HTML tag to the browser console
    // Open your browser's developer tools to view the output
    console.log(this.tagName);
  }
  static get template () {
    return html`
      <h1>Start Polymer 3.0</h1>
      <p>[[message]]</p>
    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);