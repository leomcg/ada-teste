import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = ''
  
  constructor(private http: HttpClient) { }
  
  login() {
    const loginData = { "login":"letscode", "senha":"lets@123"}
    return this.http.post('http://localhost:5000/login', loginData)
      .subscribe(
        res => this.setSession(res), 
        (err) => console.error(err)
      )
  }

  setSession(res: any) {
    localStorage.setItem('id_token', res);
  }
}
