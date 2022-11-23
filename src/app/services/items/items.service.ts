import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}
  getallItems(): Observable<any> {
    return this.http.get(
      'https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ar/showall/1/25/json'
    );
  }
}
