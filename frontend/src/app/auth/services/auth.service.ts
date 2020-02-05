import { Injectable } from '@angular/core';
import {UserAuthCredentilas} from "../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(userAuthCredentilas: UserAuthCredentilas) {
    return this.httpClient.post('/login', userAuthCredentilas)
  }
}
