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
  private infoDateCopy: string;
  private infoTitle: string;
  private infoTitleCopy: string;
  private infoContent: string;
  private infoContentCopy: string;
  private infoIndex: number;
  @Input() saveNews: any;
  @ViewChild("template") template: ElementRef;

  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(
    private modalService: BsModalService,
    private timeService: TimeService
  ) {}

  public open(date: string, title: string, content: string, index: number) {
    this.initializeInfoValues(date, title, content);
    this.infoIndex = index;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private initializeInfoValues(date: string, title: string, content: string) {
    this.infoDate = this.timeService.formatDateAsInputValue(date);
    this.infoDateCopy = (" " + this.infoDate).slice(1);
    this.infoTitle = title;
    this.infoTitleCopy = (" " + this.infoTitle).slice(1);
    this.infoContent = content;
    this.infoContentCopy = (" " + this.infoContent).slice(1);
  }

  private saveInfo() {
    let updatedInfo = this.getChanges();
    Object.keys(updatedInfo).length > 0
      ? this.saveNews(updatedInfo, this.infoIndex)
      : null;

    this.modalRef.hide();
  }

  private getChanges() {
    let updatedInfo = new Object();

    this.infoDateCopy.localeCompare(this.infoDate) !== 0
      ? ((this.infoDate = this.infoDateCopy),
        (updatedInfo = { ...updatedInfo, date: this.infoDate }))
      : null;
    this.infoTitleCopy.localeCompare(this.infoTitle) !== 0
      ? ((this.infoTitle = this.infoTitleCopy),
        (updatedInfo = { ...updatedInfo, date: this.infoTitle }))
      : null;
    this.infoContentCopy.localeCompare(this.infoContent) !== 0
      ? ((this.infoContent = this.infoContentCopy),
        (updatedInfo = { ...updatedInfo, date: this.infoContent }))
      : null;

    return updatedInfo;
  }
}
