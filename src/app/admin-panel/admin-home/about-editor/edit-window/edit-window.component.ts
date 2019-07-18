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
  private person: Object;
  private personCopy: Object = {};

  constructor(private modalService: BsModalService) {}

  public open(person: Object) {
    this.person = person;
    Object.assign(this.personCopy, person);
    this.modalRef = this.modalService.show(this.template, this.config);
  }
}
