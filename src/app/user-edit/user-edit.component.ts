import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'tags':new FormControl(),
      'date':new FormControl(),
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
