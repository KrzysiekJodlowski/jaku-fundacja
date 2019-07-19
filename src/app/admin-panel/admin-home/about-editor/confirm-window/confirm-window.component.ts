import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { $ } from "protractor";

@Component({
  selector: "about-confirm-window",
  templateUrl: "./confirm-window.component.html",
  styleUrls: ["./confirm-window.component.scss"]
})
export class ConfirmWindowComponent {
  private confirmWindowStatement: string;
  @ViewChild("template") template: ElementRef;
  @ViewChild("alert") alert: ElementRef;
  private success: boolean = false;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  public show(confirmWindowStatement: string, isOperationSucceed: boolean) {
    this.confirmWindowStatement = confirmWindowStatement;
    this.success = isOperationSucceed;
    this.modalRef = this.modalService.show(this.template, this.config);
    setTimeout(() => {
      this.modalRef.hide();
    }, 4000);
  }
}
