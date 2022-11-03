import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f1ddbf5d22b44e78bf658637e0713371';
  
  constructor() { }

  ngOnInit(): void {
  }

}
