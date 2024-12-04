import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirlsRoutingModule } from './girls-routing.module';
import { GirlsComponent } from './girls/girls.component';


@NgModule({
  declarations: [
    GirlsComponent
  ],
  imports: [
    CommonModule,
    GirlsRoutingModule
  ]
})
export class GirlsModule { }
