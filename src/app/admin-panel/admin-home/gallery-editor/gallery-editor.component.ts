import { Component, OnInit, ViewChild, Input, ElementRef } from "@angular/core";
import { GalleryService } from "src/app/services/gallery/gallery.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-gallery-editor",
  templateUrl: "./gallery-editor.component.html",
  styleUrls: ["./gallery-editor.component.scss"]
})
export class GalleryEditorComponent implements OnInit {
  private galleries: Object[];
  private isGalleryUploadFinished: boolean;
  private isGalleryUploadStarted: boolean;
  @ViewChild("pictureTitle", { read: ElementRef })
  pictureTitleInput: ElementRef;
  @ViewChild("subgalleryName", { read: ElementRef })
  galleryNameInput: ElementRef;
  @ViewChild("file", { read: ElementRef }) fileInput: ElementRef;

  constructor(private galleryService: GalleryService) {
    this.galleries = [];
  }

  ngOnInit() {
    this.isGalleryUploadFinished = false;
    this.isGalleryUploadStarted = false;
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

  createNewGallery(event: any, galleryTitle: string, pictureTitle: string) {
    this.checkIfGalleryExists(galleryTitle)
      .then(() => {
        this.isGalleryUploadStarted = true;
        this.isGalleryUploadFinished = false;
        this.galleryService
          .uploadImage(event, galleryTitle, pictureTitle)
          .then((url: string) => {
            this.isGalleryUploadFinished = true;
            this.galleryService.addImageDataToDatabase(
              galleryTitle,
              pictureTitle,
              url
            );
            this.addNewGalleryToGalleries(galleryTitle, pictureTitle, url);
          })
          .catch(err => {
            window.alert(err);
          });
      })
      .catch(message => {
        window.alert(message);
      })
      .finally(() => {
        setTimeout(() => (this.isGalleryUploadStarted = false), 2000);

        this.resetInputs();
      });
  }

  private resetInputs() {
    this.galleryNameInput.nativeElement.value = "";
    this.pictureTitleInput.nativeElement.value = "";
    this.fileInput.nativeElement.value = "";
  }

  private addNewGalleryToGalleries(
    galleryTitle: string,
    pictureTitle: string,
    url: string
  ) {
    this.galleries.push([
      galleryTitle,
      {
        [pictureTitle]: `${url}`
      }
    ]);
  }

  checkIfGalleryExists(galleryName: string) {
    return new Promise((resolve, reject) => {
      this.galleries.forEach(gallery => {
        Object.values(gallery).forEach(galleryParameter => {
          if (typeof galleryParameter === "string") {
            if (galleryName === galleryParameter) {
              reject("Galeria aktualnie istnieje! Spróbuj innej nazwy...");
            }
          }
        });
      });
      resolve();
    });
  }

  removeGallery(galleryToRemove: Object) {
    this.galleries = this.galleries.filter(
      gallery => gallery !== galleryToRemove
    );
  }
}
