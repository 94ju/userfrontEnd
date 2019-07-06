import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor() { }
  userDetailForm:FormGroup
  ngOnInit() {
    this.userDetailForm=new FormGroup({
      'tags':new FormControl(null,Validators.required),
      'date':new FormControl(null,Validators.pattern("$$")),
      'name':new FormControl(),
      'author':new FormControl(),
      'isPublished':new FormControl(),
      'price':new FormControl()
    })
  }
  onSubmit(){
    console.log(this.userDetailForm)
  }

}
