import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f1ddbf5d22b44e78bf658637e0713371';


  constructor() { }

  ngOnInit(): void {
  }

}
