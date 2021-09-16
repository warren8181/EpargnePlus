import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {

  collapseShow = "hidden";

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
