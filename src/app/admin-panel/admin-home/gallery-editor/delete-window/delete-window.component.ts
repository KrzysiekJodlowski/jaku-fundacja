import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "gallery-editor-delete-window",
  templateUrl: "./delete-window.component.html",
  styleUrls: ["./delete-window.component.scss"]
})
export class DeleteWindowComponent {
  @ViewChild("template") template: ElementRef;
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  private imageToRemoveUrl: string;
  private imageToRemoveTitle: string;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private modalService: BsModalService) {}

  public open(urlToDelete: string, imageTitle: string) {
    this.imageToRemoveUrl = urlToDelete;
    this.imageToRemoveTitle = imageTitle;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private removeImage() {
    this.notify.emit({
      url: `${this.imageToRemoveUrl}`,
      title: `${this.imageToRemoveTitle}`
    });
    this.modalRef.hide();
  }
}
