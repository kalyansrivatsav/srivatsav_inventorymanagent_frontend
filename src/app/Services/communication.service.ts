import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  factoryid:number=0;

  constructor() { }

  recieveFactIdFromFactoryDisplayPage(factid:number){
       this.factoryid=factid;
  }

  sendFactIdToProductDisplayPage(){
    return this.factoryid;
  }

}
