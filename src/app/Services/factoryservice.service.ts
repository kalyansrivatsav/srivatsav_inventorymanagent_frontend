import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factory } from '../factory/Factory';

@Injectable({
  providedIn: 'root'
})
export class FactoryserviceService {

  baseurl:string="https://srivatsav-inventorymanagement-backend.azurewebsites.net/factory/"

  constructor(private httpfactser:HttpClient) { }

  public dispallfact(){
    return this.httpfactser.get<Factory[]>(this.baseurl+"getall");
  }

  public createfact(f:any){
    return this.httpfactser.post<any>(this.baseurl+"create",f);
  }

  public deletefact(id:any){
     return this.httpfactser.delete<any>(this.baseurl+"delete/"+id);
  }
}
