import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductserviceService } from '../Services/productservice.service';
import { ViewProduct } from './ViewProduct';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  product:any;
  pfile!:ViewProduct;
  b64Image:string='';

  constructor(private prodser:ProductserviceService,private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.product=JSON.parse(sessionStorage.getItem('product_values')!);
    this.getImage(this.product.factoryid,this.product.id,this.product.filename);
  }

  getImage(factid:number,prodid:number,filename:string){
    this.prodser.viewproduct(factid,prodid,filename).subscribe(response => {this.b64Image=response.file});
  }

  // transform(){
  //   console.log(this.b64Image)
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.b64Image);
  // }
}
