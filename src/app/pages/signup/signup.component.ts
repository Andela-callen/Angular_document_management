import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirm_password: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.confirm_password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  createForm() {
    this.signupForm = new FormGroup({
      firstname : this.firstname,
      lastname : this.lastname,
      username : this.username,
      email : this.email,
      passwordGroup : new FormGroup({
        password: this.password,
        confirm_password : this.confirm_password,
      }),
    });
  }
}
// signupForm: FormGroup;
  // post: any;
  // firstname: string;
  // lastname: string;
  // email: string;

  // // signupForm = new FormGroup({
  // //   firstname: new FormControl(),
  // //   lastname: new FormControl(),
  // //   email: new FormControl(),
  // //   password: new FormGroup({
  // //     password: new FormControl(),
  // //     confirm_password: new FormControl(),
  // //   })
  // // });

  // constructor(private formbuilder: FormBuilder) {
  //   this.signupForm = formbuilder.group({
  //     'firstname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
  //     'lastname': [null, Validators.required],
  //     'email': [null, Validators.required],
  //   });
  // }