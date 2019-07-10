import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-confirm-window",
  templateUrl: "./confirm-window.component.html",
  styleUrls: ["./confirm-window.component.scss"]
})
export class ConfirmWindowComponent {
  private confirmWindowStatement: string;
  @Input() showConfirmWindow: any;
  @ViewChild("template") template: ElementRef;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  public show(confirmWindowStatement: string) {
    this.confirmWindowStatement = confirmWindowStatement;
    this.modalRef = this.modalService.show(this.template, this.config);
    setTimeout(() => {
      this.modalRef.hide();
    }, 2000);
  }
}
