import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  userSearch = '';

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProductsOrder();
  }

}
