import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private apiUrl = 'https://localhost:7147/api/';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    let list = this.http.get<IProduct[]>(this.apiUrl + 'Products');
    return list;
  }
}
