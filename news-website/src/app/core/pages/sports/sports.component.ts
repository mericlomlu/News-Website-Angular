import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f1ddbf5d22b44e78bf658637e0713371';


  constructor() { }

  ngOnInit(): void {
  }

}
