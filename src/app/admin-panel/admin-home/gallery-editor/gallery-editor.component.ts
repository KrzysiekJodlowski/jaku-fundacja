import { Component, OnInit } from "@angular/core";
import { GalleryService } from "src/app/services/gallery/gallery.service";

@Component({
  selector: "app-gallery-editor",
  templateUrl: "./gallery-editor.component.html",
  styleUrls: ["./gallery-editor.component.scss"]
})
export class GalleryEditorComponent implements OnInit {
  private galleries: Object[];
  private currentGalleries: Object[];

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.obtainImagesObjectsFromDatabase();
  }

  private obtainImagesObjectsFromDatabase() {
    this.galleryService.getImageObjectsFromDb().then(galleries => {
      Object.entries(galleries).forEach(gallery => {
        this.galleries.push(gallery);
      });
      this.currentGalleries = this.galleries.slice(0, 2);
    });
  }
}
