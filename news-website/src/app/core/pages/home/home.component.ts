import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f1ddbf5d22b44e78bf658637e0713371';

  constructor() { }

  ngOnInit(): void {

  }

}
