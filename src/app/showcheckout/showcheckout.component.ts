import {Component, OnInit} from '@angular/core';
import {OderService} from "../service/OderService";
import {ActivatedRoute, Router} from "@angular/router";
import {OderProduct} from "../model/OderProduct";

@Component({
  selector: 'app-showcheckout',
  templateUrl: './showcheckout.component.html',
  styleUrls: ['./showcheckout.component.css']
})
export class ShowcheckoutComponent implements OnInit {

  constructor(private oderService: OderService, private route: ActivatedRoute, private router: Router) {
  }

  usertoken: any;
  oder!: OderProduct[];

  ngOnInit(): void {
    // @ts-ignore
    this.usertoken = JSON.parse(localStorage.getItem("userToken"));
    if (this.usertoken == null) {
      alert("bạn cần đăng nhập tài khoản")
      this.router.navigate(["/login"])
    } else {
      let id = this.usertoken.id
      this.oderService.getOderByuser(id).subscribe((data)=> {
        this.oder = data;
        console.log(data)
      })
    }
  }
}
