import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../../services/about/about.service";

@Component({
  selector: "app-about-editor",
  templateUrl: "./about-editor.component.html",
  styleUrls: ["./about-editor.component.scss"]
})
export class AboutEditorComponent implements OnInit {
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
