import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  constructor(
    private http: HttpClient,
    private fbStorage: AngularFireStorage,
    private fbDatabase: AngularFireDatabase
  ) {}

  public getImageObjectsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getPictures")
        .subscribe(galleries => {
          resolve(galleries);
        });
    });
  }

  public removePictureFromDb(
    url: string,
    subgalleryName: string,
    imageTitle: string
  ) {
    let pictureStorageRef = this.fbStorage.storage.refFromURL(url);
    pictureStorageRef
      .delete()
      .then(function() {
        console.log("Successfully removed from storage!");
      })
      .catch(function(error) {
        console.log(error);
      });

    let pictureDatabaseRef = this.fbDatabase.object(
      `gallery/${subgalleryName}/${imageTitle}`
    );
    pictureDatabaseRef
      .remove()
      .then(function() {
        console.log("Sucessfully removed from database!");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  public uploadImage(
    event: any,
    galleryTitle: string,
    pictureTitle: string,
    uploadPercent: Observable<number>,
    downloadURL: Observable<string>
  ) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      let filePath = file.name;

      this.fbStorage
        .ref(file.name)
        .getDownloadURL()
        .toPromise()
        .then(() => {
          filePath = this.makeRandomName(file.name.length, file.name);
        })
        .catch(err => {
          filePath = file.name;
        })
        .finally(() => {
          const fileRef = this.fbStorage.ref(filePath);

          const task = this.fbStorage.upload(filePath, file);

          uploadPercent = task.percentageChanges();

          task.then(() => {
            downloadURL = fileRef.getDownloadURL();
            downloadURL.toPromise().then(url => {
              if (url !== null || url != undefined) {
                resolve(url);
              } else {
                reject("Uploading file failed!");
              }
            });
          });
        });
    });
  }

  private makeRandomName(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  public addImageDataToDatabase(
    galleryTitle: string,
    pictureTitle: string,
    downloadURL: string
  ) {
    this.fbDatabase.database
      .ref(`gallery/${galleryTitle}/${pictureTitle}`)
      .set(downloadURL);
  }
}
