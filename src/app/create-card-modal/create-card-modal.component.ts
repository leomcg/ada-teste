import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'create-card-modal',
  templateUrl: './create-card-modal.component.html',
  styleUrls: ['./create-card-modal.component.scss']
})
export class CreateCardModalComponent {
  title = ''
  content = ''
  constructor(
    public dialogRef: MatDialogRef<CreateCardModalComponent>, 
    private apiService: ApiService) { }

  onSendData() {
    const cardData = {
      titulo: this.title,
      conteudo: this.content,
      lista: 'ToDo'
    }

    console.log('content: ', this.content)
    this.apiService.createCard(cardData)
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy() {

  }
  
}
