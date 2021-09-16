import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/@models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userService.getUser().subscribe(
      (res) => {
        console.log("request OK", res);
        this.user = res;
      },
      (err: HttpErrorResponse) => {
        console.log("erreur survenue", err);
      }
    )

  }
}
