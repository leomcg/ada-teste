import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { Cards } from 'src/models/cards.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  
  allCards: Card[] = []
  cards: Cards = {
    toDoCards: [],
    doingCards: [],
    doneCards: []
  }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    this.apiService.getCards().subscribe((cards: any) => {
      this.allCards = cards
      console.log('cards: ', this.allCards)
      this.separateCards()
    })
  }

  separateCards() {
    this.allCards.forEach(el => {
      if (el.lista == 'ToDo') {
        this.cards.toDoCards.push(el)
      } else if ((el.lista == 'Doing')) {
        this.cards.doingCards.push(el)
      } else {
        this.cards.doneCards.push(el)
      }
    });
  }
}
