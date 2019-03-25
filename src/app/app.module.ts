import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaiComponent } from './event-emitter/pai/pai.component';
import { FilhoComponent } from './event-emitter/filho/filho.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimoComponent } from './event-emitter/primo/primo.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    PrimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
