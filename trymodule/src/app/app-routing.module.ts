import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooldrinksComponent } from './cooldrinks/cooldrinks.component';
import { MocktailsComponent } from './mocktails/mocktails.component';

const routes: Routes = [
  {path:'cooldrinks', component:CooldrinksComponent},
  {path:'mocktails',component:MocktailsComponent},
  {
    path:'mixesModule', loadChildren: ()=> import('./mixes/mixes.module').then(m=>m.MixesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
