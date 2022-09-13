import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe((data)=> {
      this.products = data;
    })
  }


}
