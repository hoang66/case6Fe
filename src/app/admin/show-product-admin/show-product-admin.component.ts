import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CatagorieService} from "../../service/CatagorieService";
import {Product} from "../../model/Product";
import {Catagorie} from "../../model/Catagorie";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-product-admin',
  templateUrl: './show-product-admin.component.html',
  styleUrls: ['./show-product-admin.component.css']
})
export class ShowProductAdminComponent implements OnInit {

  constructor(private productService: ProductService, private catagorieService: CatagorieService) {
  }

  products: Product[] = [];
  formCreate!: FormGroup;
  product: Product = new Product(0, "", "", 0, 0, true, "", 0);
  catagories: Catagorie[] = [];
  page: number = 1

  ngOnInit(): void {
    this.productService.getAll(this.page).subscribe((data) => {
      this.products = data;
    })
    this.catagorieService.getAll().subscribe((data) => {
      this.catagories = data;
    })

  }

  findProductBycatagoie(id: number): void {
    this.productService.findByIdCata(id).subscribe((data) => {
      this.products = data;
    })
  }

  findPage(page: number): void {
    this.productService.getAll(page).subscribe((data) => {
      this.products = data;
    })
  }

  searchForm = new FormGroup({
    nameEnterprise: new FormControl(""),
  })

  search() {
    let search = this.searchForm.value;
    let searchform = search.nameEnterprise
    this.productService.findByIdS(searchform).subscribe((data) => {
      this.products = data;
    })
  }

  delete(id: number) {
    this.productService.delete(id);
  }

  showEdit(product: Product) {
    this.product = new Product(product.id, product.nameSt, product.img, product.price, product.quantity, product.status, product.description, product.amount);
  }

  edit(formEdit: any){
    console.log(formEdit)
    this.productService.create(formEdit);
  }
  create() {
    console.log(this.formCreate)
    this.productService.create(this.formCreate.value);
  }
}
