import {html, LitElement} from 'lit';

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
