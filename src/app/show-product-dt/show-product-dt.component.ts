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
  qualitydetail: number = 0;

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
    // // @ts-ignore
    // if (this.user == "") {
    //   console.log("vao")
    //   alert("xin nhập tên đăng nhập")
    //   return;
    // } else {
    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
      console.log(id)
      this.productService.findById(id).subscribe((data: Product) => {
        let a = true;
        console.log(this.products)
        if (this.products == null) {
          this.products = [];
          this.products.push(data);
        }

        if (this.products != []) {
          for (let i = 0; i < this.products.length; i++) {
            if (id == this.products[i].id) {
              // this.products[i].quantity= this.products[i].quantity+1;
              localStorage.setItem("cart", JSON.stringify(this.products));
              localStorage.setItem("user", JSON.stringify(this.user));
              this.router.navigate(["/showcart"])
              return
            }
          }

        }

        this.products.push(data);


        localStorage.setItem("cart", JSON.stringify(this.products));
        this.router.navigate(["/showcart"])
      })
    });
  }
}
