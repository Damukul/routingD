import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixesRoutingModule } from './mixes-routing.module';
import { MixesComponent } from './mixes/mixes.component';


@NgModule({
  declarations: [
    MixesComponent
  ],
  imports: [
    CommonModule,
    MixesRoutingModule
  ]
})
export class MixesModule { }
