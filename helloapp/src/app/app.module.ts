import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataComponent} from './datacomponent';
import { AppComponent } from './app.component';


import { ContactformComponent } from './contactform/contactform.component'
import {AuthService} from "./auth.service";
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
   ContactformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
