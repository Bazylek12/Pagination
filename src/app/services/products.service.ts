import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getSortedList(order: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products?sort=${order}`);
  }

  getProductsInCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  getLimitedProducts(limit: number): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products?limit=${limit}`);
  }
}
