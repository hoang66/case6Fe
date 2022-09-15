import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {OderProduct} from "../model/OderProduct";

@Component({
  selector: 'app-show-product-dt',
  templateUrl: './show-product-dt.component.html',
  styleUrls: ['./show-product-dt.component.css']
})
export class ShowProductDTComponent implements OnInit {
  product!: Product
  products: Product[] = [];
  oder!: OderProduct;
  user: string = "";
  usertoken: string = "";
  qualitydetail: number = 0;
  param: string = "";


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    console.log("hai" + this.products)
  }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
      this.productService.findById(id).subscribe((data: Product) => {
        console.log(this.qualitydetail)
        this.product = data;
      })
    });
  }


  create(): void {
    // @ts-ignore
    this.usertoken = JSON.parse(localStorage.getItem("userToken"));

    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
      this.productService.findById(id).subscribe((data: Product) => {
        data.quantity = this.qualitydetail
        if (this.usertoken == null) {
          alert("bạn cần đăng nhập tài khoản")
          this.param =("/detail/" +id)
          console.log(this.param)
          localStorage.setItem("param", JSON.stringify(this.param));
          this.router.navigate(["/login"])
        } else {
          if (this.products == null) {
            this.products = [];
            this.products.push(data);
          }

          if (this.products != []) {
            for (let i = 0; i < this.products.length; i++) {
              if (id == this.products[i].id) {
                localStorage.setItem("cart", JSON.stringify(this.products));
                this.router.navigate(["/showcart"])
                return
              }
            }
          }
          this.products.push(data)
          localStorage.setItem("cart", JSON.stringify(this.products));
          this.router.navigate(["/showcart"])
        }
      })
    });
  }

}
