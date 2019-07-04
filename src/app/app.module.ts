import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const appRoutes:Routes =[
  {path:'user',component:UserEditComponent},
  {path:'coursename',component:CoursesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,CoursesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
