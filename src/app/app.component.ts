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
    // this.apiService.creatCard({
    //   titulo : "titulo 2", 
    //   conteudo: "conteudo 2", 
    //   lista: "ToDo"
    // })
    // this.apiService.creatCard({
    //   titulo : "titulo 3", 
    //   conteudo: "conteudo 3", 
    //   lista: "Doing"
    // })
    // this.apiService.creatCard({
    //   titulo : "titulo 4", 
    //   conteudo: "conteudo 4", 
    //   lista: "Done"
    // })
    // this.apiService.creatCard({
    //   titulo : "titulo 5", 
    //   conteudo: "conteudo 5", 
    //   lista: "Done"
    // })
    // this.apiService.creatCard({
    //   titulo : "titulo 6", 
    //   conteudo: "conteudo 6", 
    //   lista: "Doing"
    // })
  }
}
