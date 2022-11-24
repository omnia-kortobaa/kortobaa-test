import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/sitecontent/ar/ar/json'

  /* ------------------------------------------------------- */
  /*                  Get Categories From Api                */
  /* ------------------------------------------------------- */
  getAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
