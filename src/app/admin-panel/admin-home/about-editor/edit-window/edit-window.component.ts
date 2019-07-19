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
  @Output() notifyMe: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private modalService: BsModalService) {}

  public open(person: Object) {
    this.person = person;
    Object.assign(this.personCopy, person);
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  private deleteImage() {
    this.personCopy["image"] = "";
  }

  private clickSave() {
    JSON.stringify(this.person) === JSON.stringify(this.personCopy)
      ? this.modalRef.hide()
      : this.saveOrUpdatePerson();
  }

  private saveOrUpdatePerson() {
    !(this.person["name"].length > 0)
      ? this.savePerson(true)
      : this.savePerson(false);
  }

  private savePerson(isNew: boolean) {
    this.notifyMe.emit({ isNew: isNew, person: this.personCopy });
    this.modalRef.hide();
  }
}
