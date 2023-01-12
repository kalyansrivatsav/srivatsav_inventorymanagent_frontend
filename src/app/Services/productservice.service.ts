import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/Product';
import { ViewProduct } from '../viewproduct/ViewProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  baseurl:string="https://srivatsav-inventorymanagement-backend.azurewebsites.net/product/";

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };

  constructor(private httpprodser:HttpClient) { }

  public dispallprod(factid:number){
    return this.httpprodser.get<Product[]>(this.baseurl+"getall/"+factid);
  }

  public newprod(p:any){
    return this.httpprodser.post<any>(this.baseurl+"create",p);
  }

  public viewproduct(factid:number,prodid:number,filename:string){
    return this.httpprodser.get<ViewProduct>(this.baseurl+"image/"+factid+"/"+prodid+"/"+filename);
  }

  public deleteproduct(factid:number,prodid:number){
    return this.httpprodser.delete<any>(this.baseurl+"delete/"+factid+"/"+prodid);
  }
}
