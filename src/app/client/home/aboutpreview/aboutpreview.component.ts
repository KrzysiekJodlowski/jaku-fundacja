import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../../services/about/about.service";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-aboutpreview",
  templateUrl: "./aboutpreview.component.html",
  styleUrls: ["./aboutpreview.component.scss"],
  providers: [AboutService]
})
export class AboutpreviewComponent implements OnInit {
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
