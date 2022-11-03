import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  generalUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f1ddbf5d22b44e78bf658637e0713371';


  constructor() { }

  ngOnInit(): void {
  }

}
