import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, ) { }
  
  ngOnInit() {
    this.loginService.login()
  }
}
