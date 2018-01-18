import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CoursesComponent} from './courses.component';
import { AppComponent } from './app.component';
import {CoursesService} from "./courses.service";
import {SummaryPipe} from "./summary.pipe";





@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,



  ],
  imports: [
    BrowserModule,
   FormsModule,
    HttpModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
