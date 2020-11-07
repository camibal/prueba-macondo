import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  productsApi: any[] = [];
  showModalImg: any = { imagen: '', descripcion: '' };

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.getProductsApi();
  }

  getProductsApi() {
    this.productsService.getProducts().subscribe(res => {
      console.log(res);
      this.productsApi = res;
    }, err => {
      console.log(err);
    }
    );
  }

  addProduct(newId: HTMLInputElement, newName: HTMLInputElement, newdate: HTMLInputElement, newAddress: HTMLInputElement, newCity: HTMLInputElement, newPdf: HTMLInputElement) {
    this.productsService.addProducts({
      id: newId.value,
      name: newName.value,
      date: newdate.value,
      address: newAddress.value,
      city: newCity.value,
      pdf: newPdf.value,
      hide: true
    });
    newId.value = '';
    newName.value = '';
    newdate.value = '';
    newAddress.value = '';
    newCity.value = '';
    newPdf.value = '';
    return false;
  }

  showImg(item) {
    this.showModalImg = item;
  }

}