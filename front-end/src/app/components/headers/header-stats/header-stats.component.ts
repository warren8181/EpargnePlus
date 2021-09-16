import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TontineService } from "src/app/services/tontine.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {

  countUsers;

  constructor(private tontineService: TontineService) {}

  ngOnInit(): void {
    
    this.tontineService.getCountUsers().subscribe(
      (res) => {
        console.log("users count", res)
        this.countUsers = res;
      },
      (err: HttpErrorResponse) => {
        console.log("count not got", err);
      }
    );
    

  }
}
