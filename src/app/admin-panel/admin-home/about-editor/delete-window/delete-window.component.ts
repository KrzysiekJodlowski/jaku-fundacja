import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "about-delete-window",
  templateUrl: "./delete-window.component.html",
  styleUrls: ["./delete-window.component.scss"]
})
export class DeleteWindowComponent {
  @ViewChild("template") template: ElementRef;
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  public open() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private removeOnePerson() {}
}
