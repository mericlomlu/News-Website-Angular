import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f1ddbf5d22b44e78bf658637e0713371';


  constructor() { }

  ngOnInit(): void {
  }

}
