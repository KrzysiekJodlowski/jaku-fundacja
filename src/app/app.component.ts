import { Component, HostListener } from "@angular/core";
import { AuthServiceService } from "./services/auth-service/auth-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "fundacjaJaku";

  constructor(public authService: AuthServiceService) {}

  @HostListener("window:unload", ["$event"])
  onWindowClose(event: any): void {
    this.authService.logOut();
  }
}
