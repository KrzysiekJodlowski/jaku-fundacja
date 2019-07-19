import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { GalleryService } from "src/app/services/gallery/gallery.service";
import { DeleteWindowComponent } from "../delete-window/delete-window.component";
import { ConfirmWindowComponent } from "../../about-editor/confirm-window/confirm-window.component";

@Component({
  selector: "app-subgallery-editor",
  templateUrl: "./subgallery-editor.component.html",
  styleUrls: ["./subgallery-editor.component.scss"]
})
export class SubgalleryEditorComponent implements OnInit {
  @Input() gallery: Object;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  private galleryTitle: string;
  private imageTitles: string[];
  private imageUrls: any[];
  private isSubgalleryUploadStarted: boolean;
  private isSubgalleryUploadFinished: boolean;
  @ViewChild(DeleteWindowComponent) deleteWindow: DeleteWindowComponent;
  @ViewChild(ConfirmWindowComponent) confirmWindow: ConfirmWindowComponent;

  constructor(private galleryService: GalleryService) {
    this.imageTitles = [];
    this.imageUrls = [];
  }

  ngOnInit() {
    this.initializeSubgallery();
  }

  private initializeSubgallery() {
    this.isSubgalleryUploadFinished = false;
    this.isSubgalleryUploadStarted = false;
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
    this.removeUrlAndTitle(urlToDelete, imageTitle);
    this.galleryService
      .removePictureData(urlToDelete, this.galleryTitle, imageTitle)
      .then(() =>
        this.confirmWindow.show(`Pomyślnie usunięto ${imageTitle}!`, true)
      )
      .catch(err =>
        this.confirmWindow.show(
          `Coś poszło nie tak... ${err}! Skontaktuj się z administratorem lub spróbuj później.`,
          false
        )
      );
    if (this.imageUrls.length === 0 && this.imageTitles.length === 0) {
      this.notify.emit(this.gallery);
    }
  }

  private removeUrlAndTitle(urlToDelete: string, imageTitle: string) {
    this.imageUrls = this.imageUrls.filter(url => url !== urlToDelete);
    this.imageTitles = this.imageTitles.filter(title => title !== imageTitle);
  }

  uploadFile(event: any, pictureTitle: string) {
    this.isSubgalleryUploadStarted = true;
    this.galleryService
      .uploadImage(event, this.galleryTitle, pictureTitle)
      .then((url: string) => {
        this.galleryService
          .addImageDataToDatabase(this.galleryTitle, pictureTitle, url)
          .then(data => {
            this.imageTitles.push(data.pictureTitle);
            this.imageUrls.push(data.downloadURL);
          });
      })
      .catch(err => {
        window.alert(err);
      })
      .finally(() => {
        this.isSubgalleryUploadFinished = true;
        this.isSubgalleryUploadStarted = false;
      });
  }

  openDeleteWindow(urlToDelete: string, titleToDelete: string) {
    this.deleteWindow.open(urlToDelete, titleToDelete);
  }
}
