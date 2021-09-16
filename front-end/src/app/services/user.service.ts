import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/@models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(data) {
    return this.httpClient.post(this.baseUrl + "login", data, { withCredentials: true });
  }

  register(data) {
    return this.httpClient.post(this.baseUrl + "register", data, { withCredentials: true });
  }

  getUser(): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl + "user");
  }

  
}
