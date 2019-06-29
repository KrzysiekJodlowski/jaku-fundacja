import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TimeService } from "../../../../services/time/time.service";

@Component({
  selector: "app-edit-window",
  templateUrl: "./edit-window.component.html",
  styleUrls: ["./edit-window.component.scss"]
})
export class EditWindowComponent {
  private infoDate: string;
  private infoTitle: string;
  private infoContent: string;
  // @Input() saveNews: any;
  @ViewChild("template") template: ElementRef;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(
    private modalService: BsModalService,
    private timeService: TimeService
  ) {}

  public open(date: string, title: string, content: string) {
    this.infoDate = this.timeService.formatDateAsInputValue(date);
    this.infoTitle = title;
    this.infoContent = content;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private saveNews(editForm: any) {
    console.log(editForm.value.infoDate);
    console.log(editForm.value.infoTitle);
    console.log(editForm.value.infoContent);
    this.modalRef.hide();
  }
}
