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
  private isUploadFinished: boolean;

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.isUploadFinished = false;
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
      .uploadImage(event, galleryTitle, pictureTitle)
      .then((url: string) => {
        this.isUploadFinished = true;
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
