import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardModalComponent } from '../create-card-modal/create-card-modal.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CreateCardModalComponent, {height: '60vh', width: '50vw'});
  }
}
