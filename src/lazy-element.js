// Import statements use bare module specifiers.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { Element as PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js';

class LazyElement extends PolymerElement {
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <p>You like pie.</p>
    `;
  }
}

// Register the element with the browser.
customElements.define('lazy-element', LazyElement);