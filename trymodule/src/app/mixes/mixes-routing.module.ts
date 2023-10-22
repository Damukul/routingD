import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixesComponent } from './mixes/mixes.component';

const routes: Routes = [
  {path:'mixes', component:MixesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MixesRoutingModule { }
