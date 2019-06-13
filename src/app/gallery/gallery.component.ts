import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../services/gallery/gallery.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  private galleries: Object[];

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.galleryService.getImageObjectsFromDb().then(galleries => {
      Object.entries(galleries).forEach(gallery => {
        this.galleries.push(gallery);
      });
    });
  }
}
