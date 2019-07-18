import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
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
  private _personToRemove: Object;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private modalService: BsModalService) {}

  public open(personToRemove: Object) {
    this._personToRemove = personToRemove;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private removeOnePerson() {
    this.notify.emit(this._personToRemove);
    this.modalRef.hide();
  }
}
