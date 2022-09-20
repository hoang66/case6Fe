import {Component, OnInit} from '@angular/core';
import {OderService} from "../service/OderService";
import {OderProduct} from "../model/OderProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";
import {UserToken} from "../model/UserToken";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oderService: OderService, private router: Router,) {
  }

  usertoken!: UserToken;
  oder: OderProduct = new OderProduct();
  products: Product[] = [];
  user: string = "";
  oders: OderProduct[] = [];
  FormOder: any

  ngOnInit(): void {
    this.tinhsl();
    // @ts-ignore
    this.usertoken = JSON.parse(localStorage.getItem("userToken"));
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    console.log(this.usertoken)
    this.oder.product = this.products;
    console.log(this.oder.product)
    this.oder.priceAll = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.oder.priceAll += (this.products[i].price + this.oder.product[i].quantity);
    }

    this.oder.quantity = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.oder.quantity += this.products[i].quantity;
    }
    this.oder.appUser = this.usertoken;
    this.oder.date = new Date();
    console.log("hai" + this.oder.adress)


    this.FormOder = new FormGroup({
      quantity: new FormControl(this.oder.quantity),
      adress: new FormControl(""),
      priceAll: new FormControl(this.oder.priceAll),
      date: new FormControl(this.oder.date),
      appUser: new FormControl(this.oder.appUser),
      product: new FormControl(this.oder.product),
    })
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

  up(i: number) {
    var effect = document.getElementById('qty' + i);
    console.log(i)
    // @ts-ignore
    var qty = effect.value;
    if (!isNaN(qty)) { // @ts-ignore
      effect.value++;
    }
    this.oder.product[i].quantity = qty
    this.tinhsl();
    this.tinhTienChoToan();
    return false;
  }

  down(i: number) {
    var effect = document.getElementById('qty' + i);
    console.log(i)
    // @ts-ignore
    var qty = effect.value;
    if (!isNaN(qty)) { // @ts-ignore
      effect.value--;
    }
    this.oder.product[i].quantity = qty
    this.tinhTienChoToan();
    this.tinhsl();
    return false;
  }

  tinhTienChoToan() {
    this.oder.priceAll = 0;
    for (let i = 0; i < this.products.length; i++) {
      // @ts-ignore
      let count = document.getElementById('qty' + i).value;
      this.oder.priceAll += (this.products[i].price * count);
    }
  }

  tinhsl() {
    this.oder.quantity = 0;
    for (let i = 0; i < this.products.length; i++) {
      // @ts-ignore
      let count = document.getElementById('qty' + i).value;
      this.oder.quantity += Number(count);
    }
  }

  checkOut() {
    // @ts-ignore
    this.oder.adress = document.getElementById("adress").value

    this.oderService.save(this.FormOder.value).subscribe((data) => {
      alert("bạn đặt hàng thành công")
      this.products = []
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.router.navigate(["showcheckout"])
    })
    // this.oderService.save(this.FormOder.value)
    // console.log(this.FormOder.value)
    // console.log(this.oder)
    // alert("bạn đặt hàng thành công")
    // this.products = []
    // localStorage.setItem("cart", JSON.stringify(this.products));
    // this.router.navigate([""])
  }


}
