import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../Services/communication.service';
import { FactoryserviceService } from '../Services/factoryservice.service';
import { Factory } from './Factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  flist:Factory[]=[];

  constructor(private factser:FactoryserviceService,private router:Router,private commser:CommunicationService) { }

  ngOnInit(): void {
    this.disapallfact();
  }

  disapallfact(){
   this.factser.dispallfact().subscribe(response => {this.flist=response})
  }

  update(f:any){}

  view(f:any){
    sessionStorage.setItem('factory_values',JSON.stringify(f));
    console.log(sessionStorage.getItem('factory_values'));
     this.router.navigate(['product']);
  }

  create(){
    this.router.navigate(['newfact']);
  }

  delete(f:any){
     this.factser.deletefact(f.id).subscribe(response => {console.log(response)});
     window.location.reload();
  }

}
