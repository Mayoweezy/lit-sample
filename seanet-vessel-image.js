// import {html, LitElement} from 'lit';
import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.3/all/lit-all.min.js';

export class SeanetVesselImage extends LitElement {
  
  static properties = {
    imoNumber: {},
  };  
  
  constructor() {
    super();
    this.imoNumber = 123;
  }
  
  render() {
    return html`<div><img src="http://net.sea.live/vesselimage?imo=${this.imoNumber}&size=s"></img></div>`;
  } 
}

window.customElements.define('seanet-vessel-image', SeanetVesselImage);
