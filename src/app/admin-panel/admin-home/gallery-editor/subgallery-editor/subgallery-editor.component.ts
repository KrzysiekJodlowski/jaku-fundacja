import { Component, OnInit, Input } from "@angular/core";
import { GalleryService } from "src/app/services/gallery/gallery.service";

@Component({
  selector: "app-subgallery-editor",
  templateUrl: "./subgallery-editor.component.html",
  styleUrls: ["./subgallery-editor.component.scss"]
})
export class SubgalleryEditorComponent implements OnInit {
  @Input() gallery: Object;
  private galleryTitle: string;
  private imageTitles: string[];
  private imageUrls: any[];
  private isUploadFinished: boolean;

  constructor(private galleryService: GalleryService) {
    this.imageTitles = [];
    this.imageUrls = [];
  }

  ngOnInit() {
    this.isUploadFinished = false;
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

  deleteImage(urlToDelete: string, imageTitle: string) {
    console.log(urlToDelete);
    this.imageUrls = this.imageUrls.filter(url => url !== urlToDelete);
    this.galleryService.removePictureFromDb(
      urlToDelete,
      this.galleryTitle,
      imageTitle
    );
    window.location.reload();
  }

  uploadFile(event: any, pictureTitle: string) {
    this.galleryService
      .uploadImage(event, this.galleryTitle, pictureTitle)
      .then((url: string) => {
        this.isUploadFinished = true;
        this.galleryService.addImageDataToDatabase(
          this.galleryTitle,
          pictureTitle,
          url
        );
      })
      .catch(err => {
        window.alert(err);
      })
      .finally(() => {
        window.location.reload();
      });
  }
}
