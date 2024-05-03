import {html, LitElement} from 'lit';
import {Task} from '@lit/task';

export class SeanetVesselInformation extends LitElement {
 
    static properties = {
      imoNumber: {},
    };  
    
    
    _fetchVesselTask = new Task(this, {
      task: async ([imoNumber]) => {
        
        const data = { Imo: imoNumber };
        const dataString = JSON.stringify(JSON.stringify(data));
        //console.log(data);
        const response = await fetch(
          `https://oe0wl.wiremockapi.cloud/api/3/11/VesselInformation/GetVesselData`, 
          {
            method: 'POST',
            header: {
              'Accept': 'application/json, text/plain, */*',
              'Accept-Encoding': 'gzip, deflate, br',
              'Content-Type': 'application/json',
              'Connection': 'keep-alive',
              'Origin': 'chrom',              
              'Authorization': 'Bearer sPexialTokken',
              'X-Clarksons-User-Id': 'f351255c-86c1-44e4-9b97-eaafe5f99cac',
              'X-Clarksons-Security-Cloud': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1Q0ExQTc1QTZERUUzQzY5RDRFQjg4MzM4NjQyOTVFNkU4RkYyMTkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJoY29hZGFiZTQ4YWRUcmlET0dRcFhtNlA4aGsifQ.eyJuYmYiOjE2ODk3NjU5OTcsImV4cCI6MTY4OTc2OTU5NywiaXNzIjoiaHR0cHM6Ly9pZC1zdGFnaW5nLnNlYS5saXZlIiwiY2xpZW50X2lkIjoic2VhLW5ldC10c3Qtd2ViIiwic3ViIjoiZTQ0NTkxM2UtZjE1OC00ZWZkLTg1YzItMDhkNzgyZjIyYzc1IiwiYXV0aF90aW1lIjoxNjg5NzY1OTk2LCJpZHAiOiJsb2NhbCIsImNsb3VkX3VybCI6Imh0dHBzOi8vbG9naW4tc3RhZ2luZy5zZWEubGl2ZSIsImNsb3VkX3VzZXJfaWQiOiIyMDQ2NyIsInVzZXJfdHlwZV9pZCI6IjEiLCJzY29wZSI6WyJwcm9maWxlIiwib3BlbmlkIl0sImFtciI6WyJwd2QiXX0.nDlxJ86QPLPOMDsYMsUxxfV1PVfi-hJtmSR7XVMjn8nTmdWWzXbvo8DB4zhKGLZwGll01pmyUHguWpBCtGKeG4kWqaRd_MTGgoPOCr97PbpZ8bPQdqvL17I4nJVtSuw8BfwMQLRR35s7bTCKUtjw84XzYAfveDXU0j58d2AqMdWYjkFuwIWe-sJx2wA7Y3-oQRRfSjrz9CDE-ZCvwqTMvIpIgzyQErOhOUWSecUMwgi_bHf9tkBsZugq_n65YTSWVHtK65hfpUljXrHrU89EtIziAoEk8dcqq4qWyKuBnYoVOpGAGOYHbf8lW9fYfiK31Kt6GKJkJIBy_M9_qt0_QQ'
            },
            // body: { 'imo': imoNumber }
            body: dataString
          });
        if (!response.ok) { throw new Error(response); }
        
        //console.log(response);
        //console.log(response.json());
        
        const result = await response.json();
        
        //console.log(response);
        //console.log(response.json());
        return result;
      },
      args: () => [this.imoNumber]
    });
  
    constructor() {
      super();
      this.imoNumber = 9460904;
    }
  
    render() {
      return this._fetchVesselTask.render({
        pending: () => html `<p>Loading product ....</p>`,
        complete: (response) => {
          //debugger;
          //console.log(response);
          return html `
          <h1>Vessel Info</h1>
          <seanet-vessel-image imoNumber="${this.imoNumber}"></seanet-vessel-image>
          <p>${response.VesselData.VesselName}</p>
          <pre>${JSON.stringify(response, null, 2)}</pre>
        `},
        error: (e) => html `<p>${e}</p>`
      });
    }  
  }
  
  customElements.define('seanet-vessel-information', SeanetVesselInformation);