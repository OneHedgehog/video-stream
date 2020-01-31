import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserAuthCredentilas} from "../../models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<UserAuthCredentilas>();

  public loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });


  constructor() { }

  ngOnInit() {
  }

  public onAuthSubmit() {
    alert('df');
    if (this.loginFormGroup.valid) {
      this.submitted.emit(this.loginFormGroup.value);
    }
  }

}
