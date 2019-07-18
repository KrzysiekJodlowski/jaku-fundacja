import { Component, OnInit, ViewChild } from "@angular/core";
import { AboutService } from "../../../services/about/about.service";
import { DeleteWindowComponent } from "./delete-window/delete-window.component";
import { EditWindowComponent } from "./edit-window/edit-window.component";
import { ConfirmWindowComponent } from "./confirm-window/confirm-window.component";

@Component({
  selector: "app-about-editor",
  templateUrl: "./about-editor.component.html",
  styleUrls: ["./about-editor.component.scss"]
})
export class AboutEditorComponent implements OnInit {
  private about: Object[];

  @ViewChild(DeleteWindowComponent)
  deleteWindow: DeleteWindowComponent;

  @ViewChild(EditWindowComponent)
  editWindow: EditWindowComponent;

  @ViewChild(ConfirmWindowComponent)
  confirmWindow: ConfirmWindowComponent;

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

  private showEditWindow(person?: Object) {
    if (person === undefined)
      person = {
        name: "",
        description: "",
        image: "",
        rank: 2,
        position: ""
      };
    this.editWindow.open(person);
  }

  private showDeleteWindow() {
    this.deleteWindow.open();
  }
}
