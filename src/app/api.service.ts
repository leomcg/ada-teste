import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from 'src/models/card.model';
import { DashboardService } from './dashboard/dashboard.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/cards/'

  constructor(private http: HttpClient, private dashboardService: DashboardService) { }


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

  createCard(card: Card) {
    return this.http.post(this.baseUrl, card, this.getHeaders())
      .subscribe(
        res => {
          this.dashboardService.dispacthCardsChanged()
        }, 
        (err) => console.error(err)
      )
  }

  deleteCard(id: string) {
    return this.http.delete(this.baseUrl + id, this.getHeaders())
      .subscribe(
        res => {
          console.log('success delete card', res)
        }, 
        (err) => console.error(err)
      )
  }

  editCard(card: Card) {
    return this.http.put(this.baseUrl + card.id, card, this.getHeaders())
      .subscribe(
        res => {
          console.log('success edit card card', res)
        }, 
        (err) => console.error(err)
      )
  }
}
