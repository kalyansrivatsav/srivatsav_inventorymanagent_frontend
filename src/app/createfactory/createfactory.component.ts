import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Factory } from '../factory/Factory';
import { FactoryserviceService } from '../Services/factoryservice.service';
import { NewFactory } from './NewFactory';

@Component({
  selector: 'app-createfactory',
  templateUrl: './createfactory.component.html',
  styleUrls: ['./createfactory.component.css']
})
export class CreatefactoryComponent implements OnInit {

  createfactform!:FormGroup;
  newfactory!:NewFactory;
  

  constructor(private fb:FormBuilder,private factser:FactoryserviceService,private router:Router) { }

  ngOnInit(): void {
    this.createfactform=this.fb.group({
      factname:['',Validators.required],factloc:['',Validators.required]
    });
  }

  newfact(){
    this.newfactory=new NewFactory(this.createfactform.value.factname,this.createfactform.value.factloc);
    this.factser.createfact(this.newfactory).subscribe((response:any)=>
    console.log(response));

    this.router.navigate(['factory']);
  }

}
