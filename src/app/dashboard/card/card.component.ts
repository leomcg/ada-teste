import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = ''
  @Input() content: string = ''
  @Input() frontArrow = true
  @Input() backArrow = true


  moveTaskBack() {
    
  }
  moveTaskForward() {
    
  }
}
