import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userfrontend';

  users=[{
    _id:"5a68fdc3615eda645bc6bdec",
    tags:["express","backend"],
    date:"2018-01-24T21:42:27.388Z",
    name:"Express.js Course",
    author:"Msh",
    isPublished:true,
    price:10,
    __v:0}]
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
