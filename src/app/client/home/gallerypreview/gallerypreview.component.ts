import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../../../services/gallery/gallery.service";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-gallerypreview",
  templateUrl: "./gallerypreview.component.html",
  styleUrls: ["./gallerypreview.component.scss"]
})
export class GallerypreviewComponent implements OnInit {
  private pictures: string[];

  constructor(private galleryService: GalleryService) {
    this.pictures = [];
  }

  ngOnInit() {
    this.galleryService.getImageObjectsFromDb().then(galleries => {
      Object.entries(galleries).forEach(gallery => {
        this.pictures.push(Object.values(gallery[1])[0].toString());
      });
    });
  }
}
