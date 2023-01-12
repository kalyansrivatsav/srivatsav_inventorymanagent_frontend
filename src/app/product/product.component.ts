import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factory } from '../factory/Factory';
import { CommunicationService } from '../Services/communication.service';
import { ProductserviceService } from '../Services/productservice.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  plist:Product[]=[];
  factid:number=0;
  factname:string='';

  constructor(private commser:CommunicationService,private prodser:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    let factory=JSON.parse(sessionStorage.getItem('factory_values')!);
    this.factname=factory.name;
    this.factid=factory.id;
    this.dispallproduct(this.factid);
    console.log(this.factname);
  }

  dispallproduct(factoryid:number){
    this.prodser.dispallprod(factoryid).subscribe(response => {this.plist=response})
  }

  delete(p:any){
    this.prodser.deleteproduct(p.factoryid,p.id).subscribe(response => {console.log(response)});
    window.location.reload();
  }

  view(p:any){
    sessionStorage.setItem('product_values',JSON.stringify(p));
    this.router.navigate(['viewprod']);
  }
  update(p:any){}
  create(){
    this.router.navigate(['newprod']);
  }

}
