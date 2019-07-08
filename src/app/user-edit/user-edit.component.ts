import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private userservice:UserService) { }
  userDetailForm:FormGroup
  ngOnInit() {
    this.userDetailForm=new FormGroup({
      'tags':new FormArray([],Validators.required),
      'date':new FormControl(null,Validators.pattern("$$")),
      'name':new FormControl(),
      'author':new FormControl(),
      'isPublished':new FormControl(),
      'price':new FormControl()
    })
  }
  onSubmit(){
    console.log(this.userDetailForm.value)
    this.userservice.onsendCourse(this.userDetailForm.value).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    )
    
  }

}
