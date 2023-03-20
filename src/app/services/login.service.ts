import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl: string = '';
  private user: User | any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiLogin;
  }

  doLogin(email:string,password:string):Observable<User>{
    this.user = this.http.get(this.baseUrl);
    return this.user;
  }
}
