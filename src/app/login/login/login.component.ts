import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  param: string = "";

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    pass: new FormControl("", Validators.required)

  })

  login() {
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      this.loginService.setToken(data.token);
      this.loginService.setUserToken(data);
      // @ts-ignore
      this.param = JSON.parse(localStorage.getItem("param"));
      console.log("login" + this.param)
      // @ts-ignore
      this.router.navigate(["" + this.param])
    })
  }
}
