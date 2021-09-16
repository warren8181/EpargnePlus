import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      email: '',
      password: ''
    });

  }

  connexion(){
    this.userService.login(this.formLogin.getRawValue()).subscribe(
      (res:any) => {
        console.log("user connected", res);
        localStorage.setItem('token', res?.jeton);
        this.router.navigate(['admin/tontines']);
      },
      (error: HttpErrorResponse) => {
        console.log("erreur survenue", error);
      }
    )
  }

}
