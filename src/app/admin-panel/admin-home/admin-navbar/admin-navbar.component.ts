import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "src/app/services/auth-service/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
  styleUrls: ["./admin-navbar.component.scss"]
})
export class AdminNavbarComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  public logOut() {
    this.authService.logOut();
    this.router.navigate(["admin/login"]);
  }
}
