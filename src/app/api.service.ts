import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from 'src/models/card.model';
import { DashboardService } from './dashboard/dashboard.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/cards/'

  constructor(
    private http: HttpClient, 
    private dashboardService: DashboardService, 
    private snackBar: MatSnackBar) { }


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
          this.snackBar.open('Success! Card created', '', {
            duration: 1700
          });
        }, 
        (err) => console.error(err)
      )
  }

  deleteCard(id: string) {
    return this.http.delete(this.baseUrl + id, this.getHeaders())
      .subscribe(
        res => {
          this.snackBar.open('Success! Card deleted', '', {
            duration: 1700
          });
        }, 
        (err) => console.error(err)
      )
  }

  editCard(card: Card, showMessage = false) {
    return this.http.put(this.baseUrl + card.id, card, this.getHeaders())
      .subscribe(
        res => {
          if(showMessage) {
            this.snackBar.open('Success! Card edited', '', {
              duration: 1700
            });
          }
        }, 
        (err) => console.error(err)
      )
  }
}
