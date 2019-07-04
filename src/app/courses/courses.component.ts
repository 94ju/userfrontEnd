import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  users=[{}]
  userNames=[{}]
  showUser=false;
  constructor(private userservice:UserService){}

  getUser(){
    this.userservice.onGetUser().subscribe(
      (user)=>{
        this.users=user;
        console.log(user)
      },
      (error)=>console.log(error)
    )
  }
  getNames(){
    // this.showUser=true;
    // this.userservice.onGetUsers().subscribe(
    //   (user)=>{
    //     //this.users=user.name
    //     const userNames=user.map(username=>username.name)
    //     this.userNames=userNames
    //     console.log(userNames)
    //   }
    // )
  }

  ngOnInit() {
    this.showUser=true;
    this.userservice.onGetUsers().subscribe(
      (user)=>{
        //this.users=user.name
        const userNames=user.map(username=>username.name)
        this.userNames=userNames
        console.log(userNames)
      }
    )
  }

}
