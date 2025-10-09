import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CardProduct } from "../models/card-product.model";

@Injectable({
  providedIn: 'root'
})
export class CardProductsService {

  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) { }
  getCards(): Observable<{ listCard: CardProduct[] }> {
    return this.http.get<{ listCard: CardProduct[] }>(this.apiUrl);
  }



}