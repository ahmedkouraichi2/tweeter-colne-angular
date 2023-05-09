import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { SignUpPayload } from '../Payload/sign-up';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { }

  signUp(payload: SignUpPayload) {
    return this.http.post("http://localhost:8080/auth/sign-up", payload);
  }

  findAllUsernames(): Observable<string[]>{
     return  this.http.get<string[]>("http://localhost:8080/auth/usernames");
  }
}
