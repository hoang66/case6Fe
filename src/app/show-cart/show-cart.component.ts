import {Component, OnInit} from '@angular/core';
import {OderService} from "../service/OderService";
import {OderProduct} from "../model/OderProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oderService: OderService, private router: Router) {
  }

  oder!: OderProduct;
  products: Product[] = [];
  user: string = "";
  productOder: Product[] = [];

  ngOnInit(): void {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    console.log("hoang" + this.products)
  }


  delete(id: any): void {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i)
        break;
      }
    }
    console.log(this.products)
    localStorage.setItem("cart", JSON.stringify(this.products));
    this.router.navigate(["/showcart"])
  }

}
