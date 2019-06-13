import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-subgallery",
  templateUrl: "./subgallery.component.html",
  styleUrls: ["./subgallery.component.scss"]
})
export class SubgalleryComponent implements OnInit {
  @Input() gallery: Object;
  private galleryTitle: string;
  private imageTitles: string[];
  private imageUrls: any[];

  constructor() {
    this.imageTitles = [];
    this.imageUrls = [];
  }

  ngOnInit() {
    Object.values(this.gallery).forEach(galleryParameter => {
      if (typeof galleryParameter === "object") {
        this.addImages(galleryParameter);
      } else if (typeof galleryParameter === "string") {
        this.galleryTitle = galleryParameter;
      }
    });
  }

  private addImages(galleryParameter: any) {
    for (let [key, val] of Object.entries(galleryParameter)) {
      this.imageTitles.push(key);
      this.imageUrls.push(val);
    }
  }
}
