import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-edit-window",
  templateUrl: "./edit-window.component.html",
  styleUrls: ["./edit-window.component.scss"]
})
export class EditWindowComponent {
  // @Input() deleteWindowValue: string;
  // @Input() removeNews: any;
  @ViewChild("template") template: ElementRef;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  public open() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private saveNews() {}
}
