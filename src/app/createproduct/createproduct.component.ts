import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { CommunicationService } from '../Services/communication.service';
import { ProductserviceService } from '../Services/productservice.service';
import { NewProduct } from './NewProduct';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  factid:number=0;
  newProduct!:NewProduct;
  createprodform!:FormGroup;
  name:string="";
  filename:string='';
  b64file:string='';

  constructor(private fb:FormBuilder,private commser:CommunicationService,private prodser:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.factid=JSON.parse(sessionStorage.getItem('factory_values')!).id;
    this.createprodform=this.fb.group({prodname:['',Validators.required],prodquant:[0,Validators.required],prodtype:['',Validators.required],proddoc:[null,Validators.required]});
  }

  getfile(event:any){
      const file:File=event.target.files[0];

      if(file){
        this.filename=file.name;
        var reader=new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        // reader.readAsBinaryString(file);
        reader.readAsDataURL(file);
      }
      console.log(this.filename);
  }

  _handleReaderLoaded(readerEvt:any) {
    var binaryString = readerEvt.target.result;
          //  this.b64file= btoa(binaryString);
          //  console.log(btoa(binaryString));
          this.b64file=binaryString;
   }

  newprod(){
      this.newProduct=new NewProduct(this.createprodform.value.prodname,this.createprodform.value.prodquant,this.createprodform.value.prodtype,this.factid,this.filename,this.b64file);
      this.prodser.newprod(this.newProduct).subscribe((response:any) => console.log(response));
      this.router.navigate(['product']);
  }

}
