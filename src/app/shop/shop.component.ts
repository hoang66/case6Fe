import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/Product";
import {Catagorie} from "../model/Catagorie";
import {CatagorieService} from "../service/CatagorieService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productService:ProductService,private catagorieService: CatagorieService) { }
  products: Product[] = [];
  catagories: Catagorie[]=[];
  page :number=1
  ngOnInit(): void {
    this.productService.getAll(this.page).subscribe((data)=> {
      this.products = data;
    })
    this.catagorieService.getAll().subscribe((data)=> {
      this.catagories = data;
  })

}
 findProductBycatagoie(id: number):void{
    this.productService.findByIdCata(id).subscribe((data)=> {
      this.products = data;
    })
 }

  findPage(page: number):void{
    this.productService.getAll(page).subscribe((data)=> {
      this.products = data;
    })
  }
  searchForm=new FormGroup({
    nameEnterprise: new FormControl(""),
  })
  search(){
    let search=this.searchForm.value;
    let searchform = search.nameEnterprise
    this.productService.findByIdS(searchform).subscribe((data) => {
      this.products = data;
    })
  }
}
