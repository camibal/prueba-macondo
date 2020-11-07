import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Products[];
  private endpointAmazon: string = environment.endpointAmazon;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(`${this.endpointAmazon}`);
  }

  getProductsOrder() {
    if (localStorage.getItem('products') === null) {
      this.products = [];
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
    return this.products;
  }

  addProducts(product: Products) {
    this.products.push(product);
    let products = [];
    if (localStorage.getItem('products') === null) {
      products = [];
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      products = JSON.parse(localStorage.getItem('products'));
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));
    }
  }
}
