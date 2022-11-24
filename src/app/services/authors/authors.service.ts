import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/get-authors-data/showall/showall/countdesc/ar/1/20/json'

  /* ------------------------------------------------------- */
  /*                  Get Authors From Api                   */
  /* ------------------------------------------------------- */
  getAllAuthors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
