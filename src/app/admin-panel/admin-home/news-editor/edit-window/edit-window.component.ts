import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-edit-window",
  templateUrl: "./edit-window.component.html",
  styleUrls: ["./edit-window.component.scss"]
})
export class EditWindowComponent {
  private date: number;
  private title: string;
  private content: string;
  // @Input() saveNews: any;
  @ViewChild("template") template: ElementRef;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  public open(date: number, title: string, content: string) {
    this.date = date;
    this.title = title;
    this.content = content;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private saveNews() {}
}
