import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/models/card.model';
import { Cards } from 'src/models/cards.model';
import { ApiService } from '../api.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService, private dashboardService: DashboardService) {}
  
  allCards: Card[] = []
  cards: Cards = {
    toDoCards: [],
    doingCards: [],
    doneCards: []
  }
  cardsChangedSub: Subscription = new Subscription()

  ngOnInit() {
    this.getCards()
    this.handleSubs()
  }
  
  handleSubs() {
    this.cardsChangedSub = this.dashboardService.onCardsChanged().subscribe(res => {
      if(res) {
        this.getCards()
      }
    })
  }

  getCards() {
    this.clearCards()
    this.apiService.getCards().subscribe((cards: any) => {
      this.allCards = cards
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

  clearCards() {
    this.allCards = []
    this.cards.toDoCards = []
    this.cards.doingCards = []
    this.cards.doneCards = []
  }

  ngOnDestroy() {
    this.cardsChangedSub.unsubscribe()
  }
}
