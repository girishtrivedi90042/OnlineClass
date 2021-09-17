import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CpopupComponent } from './cpopup/cpopup.component';
// import { StudentmodelComponent } from './studentmodel/studentmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    CpopupComponent,
    // StudentmodelComponent
  ],
  imports:      [ BrowserModule,AppRoutingModule, FormsModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
