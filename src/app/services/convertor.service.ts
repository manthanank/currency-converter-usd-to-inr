import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvertorService {
  constructor(private http: HttpClient) {}

  convert(): Observable<any> {
    const url = `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=2e2282f1c1fd83c440ff`;
    return this.http.get<any>(url);
  }
}
