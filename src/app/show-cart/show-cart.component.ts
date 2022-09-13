import { Component, OnInit } from '@angular/core';
import {OderService} from "../service/OderService";
import {OderProduct} from "../model/OderProduct";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/Product";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  constructor(private route: ActivatedRoute,private oderService: OderService) {
  }

  oderProducts: OderProduct[] = [];
  products: Product[] = [];
  ngOnInit(): void {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    console.log("hoang" + this.products)
  }
}
