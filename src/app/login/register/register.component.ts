import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    pass: new FormControl("", Validators.required)

  })

  register(){
    this.loginService.register(this.loginForm.value).subscribe((data)=>{
      this.router.navigate(["/login"])
    })
  }

}
