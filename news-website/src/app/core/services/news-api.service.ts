import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(apiURL: string): Observable<any>{
    return this.http.get(apiURL);
  }

}
