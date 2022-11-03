import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  scienceUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f1ddbf5d22b44e78bf658637e0713371';


  constructor() { }

  ngOnInit(): void {
  }

}
