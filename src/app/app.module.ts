import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { HeaderComponent } from './header/header.component';
import { CreateCardModalComponent } from './create-card-modal/create-card-modal.component'
import { FormsModule } from '@angular/forms';
import { CardEditModeComponent } from './dashboard/card-edit-mode/card-edit-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    HeaderComponent,
    CreateCardModalComponent,
    CardEditModeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
