import { Component, Input } from '@angular/core';
import { Card } from 'src/models/card.model';

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


  moveTaskBack() {
    console.log('this.cardData-1: ', this.cardData)

    if(this.cardData.lista == 'Done') {
      this.cardData.lista = 'Doing'
    } else if(this.cardData.lista == 'Doing') {
      this.cardData.lista = 'ToDo'
    } 
    console.log('this.cardData-2: ', this.cardData)
    // enviar subject
  }

  moveTaskForward() {
    console.log('this.cardData-1: ', this.cardData)

    if(this.cardData.lista == 'ToDo') {
      this.cardData.lista = 'Doing'
    } else if(this.cardData.lista == 'Doing') {
      this.cardData.lista = 'Done'
    } 
    console.log('this.cardData-2: ', this.cardData)

    // enviar subject
  }


}
