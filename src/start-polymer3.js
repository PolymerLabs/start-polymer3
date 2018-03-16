// Import statements use bare module specifiers.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { Element as PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '../node_modules/@polymer/paper-checkbox/paper-checkbox.js';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready(){
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log(this.tagName);
  }
  
  togglePie(event){
    console.log(this.pie);
    if(this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./lazy-element.js').then((LazyElement) => {
        console.log("LazyElement loaded");
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
    //this.pie=event.detail.value;
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <h1>Start Polymer 3.0</h1>
      <p>[[message]]</p>
      <paper-checkbox 
        checked={{pie}}>I like pie.</paper-checkbox>
        <!-- on-checked-changed="togglePie"-->
      <template is="dom-if" if=[[pie]]>
        <lazy-element><p>lazy loading...</p></lazy-element>
      </template>
    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
