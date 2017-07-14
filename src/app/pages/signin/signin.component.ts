import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // registerForm = new FormGroup({
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormGroup({
  //     password: new FormControl(),
  //     confirm_password: new FormControl(),
  //   })
  // });

  constructor() { }

  ngOnInit() {
  }

}