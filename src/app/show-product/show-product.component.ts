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
  page:number=1
  ngOnInit(): void {
    this.productService.getAll(this.page).subscribe((data)=> {
      this.products = data;
    })
  }
}
