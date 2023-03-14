import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Card } from 'src/models/card.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() cardData: Card = {
    titulo : '', 
    conteudo: '', 
    lista: '',
  }
  @Input() frontArrow = true
  @Input() backArrow = true

  constructor(private dashboardService: DashboardService, private apiService: ApiService) {}

  moveTaskBack() {
    if(this.cardData.lista == 'Done') {
      this.moveCard('Doing')
    } else if(this.cardData.lista == 'Doing') {
      this.moveCard('ToDo')
    } 

    this.dashboardService.dispacthCardsChanged()
  }

  moveTaskForward() {
    if(this.cardData.lista == 'ToDo') {
      this.moveCard('Doing')
    } else if(this.cardData.lista == 'Doing') {
      this.moveCard('Done')
    } 

    this.dashboardService.dispacthCardsChanged()
  }

  moveCard(lista: string) {
    this.apiService.editCard({...this.cardData, lista: lista})
  }

  deleteCard() {
    this.apiService.deleteCard(this.cardData.id || '')
  }


}
