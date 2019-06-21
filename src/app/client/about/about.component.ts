import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../services/about/about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  private about: Object[];

  constructor(private aboutService: AboutService) {
    this.about = [];
  }

  ngOnInit() {
    this.aboutService.getAboutObjectsFromDb().then(aboutUs => {
      Object.values(aboutUs).forEach(person => {
        this.about.push(person);
      });
    });
  }
}
