import { Injectable } from "@angular/core";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Injectable({
  providedIn: "root"
})
export class PageChangedService {
  public pageChanged(
    event: PageChangedEvent,
    items: Object[],
    currentItems: Object[]
  ): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    currentItems = items.slice(startItem, endItem);
  }
}
