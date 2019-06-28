import { Component, OnInit } from "@angular/core";
import { GalleryService } from "src/app/services/gallery/gallery.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-gallery-editor",
  templateUrl: "./gallery-editor.component.html",
  styleUrls: ["./gallery-editor.component.scss"]
})
export class GalleryEditorComponent implements OnInit {
  private galleries: Object[];

  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.obtainImagesObjectsFromDatabase();
  }

  private obtainImagesObjectsFromDatabase() {
    this.galleryService.getImageObjectsFromDb().then(galleries => {
      if (galleries !== null) {
        Object.entries(galleries).forEach(gallery => {
          this.galleries.push(gallery);
        });
      }
    });
  }

  uploadFile(event: any, galleryTitle: string, pictureTitle: string) {
    this.galleryService
      .uploadImage(
        event,
        galleryTitle,
        pictureTitle,
        this.uploadPercent,
        this.downloadUrl
      )
      .then((url: string) => {
        this.galleryService.addImageDataToDatabase(
          galleryTitle,
          pictureTitle,
          url
        );
      })
      .catch(err => {
        window.alert(err);
      })
      .finally(() => {
        this.obtainImagesObjectsFromDatabase();
      });
  }
}
