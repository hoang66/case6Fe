import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/Product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-product-dt',
  templateUrl: './show-product-dt.component.html',
  styleUrls: ['./show-product-dt.component.css']
})
export class ShowProductDTComponent implements OnInit {
  product!: Product
  products: Product[] = [];


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    console.log("hai" + this.products)
  }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
      this.productService.findById(id).subscribe((data: Product) => {
        this.product = data;
      })
    });
  }

  create(): void {
    this.route.params.subscribe(paramsId => {

      let id = paramsId?.['id'];
      this.productService.findById(id).subscribe((data: Product) => {
        let a = true;
        if (this.products == null) {
          this.products = [];
          this.products.push(data);
        } else {
          for (let i = 0; i < this.products.length; i++) {
            if (id == this.products[i].id) {
              a = true
              break;
            } else {
              a = false;
            }
          }

          if (a == false) {
            this.products.push(data);
          }
        }
        localStorage.setItem("cart", JSON.stringify(this.products));
        this.router.navigate(["/showcart"])
      })
    });
  }


}
