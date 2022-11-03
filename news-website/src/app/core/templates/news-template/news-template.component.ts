import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-template',
  templateUrl: './news-template.component.html',
  styleUrls: ['./news-template.component.scss']
})
export class NewsTemplateComponent implements OnInit {

  @Input() apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f1ddbf5d22b44e78bf658637e0713371';

  apiResultArticles: any = [];

  sortOptions: SelectItem[] = [];

  sortOrder!: number;

  sortField!: string;
  
  constructor(
    private newsApiService: NewsApiService
  ) { }

  ngOnInit(): void {
    this.newsApiService.getArticles(this.apiUrl).subscribe((result) =>{
      this.apiResultArticles = result.articles;
    })
  }

}
