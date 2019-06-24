import { Component, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-admin-footer",
  templateUrl: "./admin-footer.component.html",
  styleUrls: ["./admin-footer.component.scss"]
})
export class AdminFooterComponent {
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
