import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {OderProduct} from "../model/OderProduct";
import {OderService} from "../service/OderService";


@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  constructor(private oderService: OderService) {
  }

  oderProducts: OderProduct[] = [];

  ngOnInit(): void {
    this.oderService.getOderByuser().subscribe((data) => {
      this.oderProducts = data;
      console.log(data)
    })
  }

}
