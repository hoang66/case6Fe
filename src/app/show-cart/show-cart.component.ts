import {Component, OnInit} from '@angular/core';
import {OderService} from "../service/OderService";
import {OderProduct} from "../model/OderProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";
import {UserToken} from "../model/UserToken";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oderService: OderService, private router: Router) {
  }

  usertoken!: UserToken;
  oder: OderProduct = new OderProduct();
  products: Product[] = [];
  user: string = "";
  qualitydetailcart: any;
  priceAll: any;


  ngOnInit(): void {
    // @ts-ignore
    this.usertoken = JSON.parse(localStorage.getItem("userToken"));
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.oder.product = this.products;
    this.oder.priceAll = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.oder.priceAll += this.products[i].price;
    }
    this.oder.appUser = this.usertoken.id;
    this.oder.name = this.usertoken.name;
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
    localStorage.setItem("cart", JSON.stringify(this.products));
    location.reload();
  }
}
