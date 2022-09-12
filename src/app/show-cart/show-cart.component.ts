import { Component, OnInit } from '@angular/core';
import {OderService} from "../service/OderService";
import {OderProduct} from "../model/OderProduct";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  constructor(private route: ActivatedRoute,private oderService: OderService) {
  }

  oderProducts: OderProduct[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      let id = paramsId?.['id'];
    this.oderService.getOderByuser(id).subscribe((data) => {
      this.oderProducts = data;
      console.log(data)
    })
    });
  }
}
