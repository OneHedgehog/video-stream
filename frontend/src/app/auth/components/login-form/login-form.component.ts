import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserAuthCredentilas} from "../../models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Output() onAuthFormSubmitted = new EventEmitter<UserAuthCredentilas>();

  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
  });


  constructor() { }

  ngOnInit() {
  }

  public onAuthSubmit() {
    console.log('valid', this.loginFormGroup.valid);
    if (this.loginFormGroup.valid) {
      this.onAuthFormSubmitted.emit(this.loginFormGroup.value);
    }
  }

}
