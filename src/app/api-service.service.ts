import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = 'localhost:5000/'
  
  constructor(private http: HttpClient) { }
  
  login() {
    const url = this.baseUrl + 'login'; 
    const loginData = { "login":"letscode", "senha":"lets@123"}
    
    return this.http.post(url, loginData)
    // .pipe(
    //   catchError(this.handleError('deleteHero'))
    // );
  }
}
