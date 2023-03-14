import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from 'src/models/card.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/cards'

  constructor(private http: HttpClient) { }


  getHeaders() {
    const token = localStorage.getItem('id_token');
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + token);

    return { headers }
  }

  getCards() {
    return this.http.get(this.baseUrl, this.getHeaders())
  }

  creatCard(card: Card) {
    return this.http.post(this.baseUrl, card, this.getHeaders())
      .subscribe(
        res => {
          console.log('success create card', res)
        }, 
        (err) => console.error(err)
      )
  }
}
