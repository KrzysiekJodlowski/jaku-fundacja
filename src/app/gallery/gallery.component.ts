import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../services/gallery/gallery.service";
import { PageChangedService } from "../services/page_changed/page-changed.service";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  private galleries: Object[];
  private currentGalleries: Object[];

  constructor(
    private galleryService: GalleryService,
    private pageChangedService: PageChangedService
  ) {
    this.galleries = [];
  }

  ngOnInit() {
    this.galleryService.getImageObjectsFromDb().then(galleries => {
      Object.entries(galleries).forEach(gallery => {
        this.galleries.push(gallery);
      });
      this.currentGalleries = this.galleries.slice(0, 2);
    });
  }

  private galleryPageChanged(event: PageChangedEvent): void {
    this.currentGalleries = this.pageChangedService.pageChanged(
      event,
      this.galleries
    );
  }
}
