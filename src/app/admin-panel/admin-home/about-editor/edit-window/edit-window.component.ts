import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "about-edit-window",
  templateUrl: "./edit-window.component.html",
  styleUrls: ["./edit-window.component.scss"]
})
export class EditWindowComponent {
  @ViewChild("template") template: ElementRef;
  private modalRef: BsModalRef;
  private config = {
    animated: true
  };
  private personName: string;

  constructor(private modalService: BsModalService) {}

  public open(personName: string) {
    this.personName = personName;
    this.modalRef = this.modalService.show(this.template, this.config);
  }
}
