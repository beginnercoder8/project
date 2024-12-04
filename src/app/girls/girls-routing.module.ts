import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlsComponent } from './girls/girls.component';

const routes: Routes = [
  {path:'',component:GirlsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirlsRoutingModule { }
