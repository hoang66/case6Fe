import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-product-dt',
  templateUrl: './show-product-dt.component.html',
  styleUrls: ['./show-product-dt.component.css']
})
export class ShowProductDTComponent implements OnInit {
  product!: Product

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
      this.productService.findById(id).subscribe((data: Product) => {
        this.product = data;
      })
    });
  }
}
