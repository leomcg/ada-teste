import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'card-edit-mode',
  templateUrl: './card-edit-mode.component.html',
  styleUrls: ['./card-edit-mode.component.scss']
})
export class CardEditModeComponent {
  title = ''
  content = ''
  @Output() editCancelled = new EventEmitter()
  @Input() cardData: any = {}

  constructor(private apiService: ApiService, private dashboardService: DashboardService) { }

  ngOnChanges() {
    if(this.cardData) {
      this.title = this.cardData.titulo
      this.content = this.cardData.conteudo
    }
  }

  cancelEdit() {
    this.editCancelled.emit()
  }

  onSendData() {
    const cardData = {
      ...this.cardData,
      titulo: this.title,
      conteudo: this.content,
    }
    this.apiService.editCard(cardData, true)
    this.cancelEdit();
    this.dashboardService.dispacthCardsChanged()
  }
}
