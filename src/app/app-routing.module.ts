import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatefactoryComponent } from './createfactory/createfactory.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { FactoryComponent } from './factory/factory.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'factory',pathMatch:'full'},
  {path:'factory',component:FactoryComponent},
  {path:'newfact',component:CreatefactoryComponent},
  {path:'product',component:ProductComponent},
  {path:'newprod',component:CreateproductComponent},
  {path:'viewprod',component:ViewproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
