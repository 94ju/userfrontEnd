import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from './user.service';
import {FormGroup, FormControl} from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'userfrontend';
  constructor(private course:CoursesComponent){

  }
    // users=[{}]
    // userNames=[{}]
    // showUser=false;
    // constructor(private userservice:UserService){}

    // getUser(){
    //   this.userservice.onGetUser().subscribe(
    //     (user)=>{
    //       this.users=user;
    //       console.log(user)
    //     },
    //     (error)=>console.log(error)
    //   )
    // }
    getNames(){
        this.course.getNames();
    }

   
    ngOnInit(){
   
    }
    
}
