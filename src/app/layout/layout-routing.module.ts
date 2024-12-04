import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    
    children:[
      {path:"kids",loadChildren: () => import('../kids/kids/kids.module').then(m => m.KidsModule)},
      {path:"mens",loadChildren: () => import('../mens/mens.module').then(m => m.MensModule)},
      {path:"girls",loadChildren: () => import('../girls/girls.module').then(m=> m.GirlsModule)},
    ] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
