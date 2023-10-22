import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CooldrinksComponent } from './cooldrinks/cooldrinks.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { Router } from '@angular/router';
import { MixesModule } from './mixes/mixes.module';

@NgModule({
  declarations: [
    AppComponent,
    CooldrinksComponent,
    MocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
