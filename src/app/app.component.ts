import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { }
  
  ngOnInit() {
    this.apiService.login().subscribe((res: any) => {

      console.log('res: ', res)
    })
  }
}
