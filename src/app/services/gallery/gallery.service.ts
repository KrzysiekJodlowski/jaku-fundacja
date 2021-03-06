import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  private _downloadURL: Observable<string>;
  private _uploadPercent: Observable<number>;

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

  // public getImagesFromSubgallery(subgalleryName: string) {
  //   let object = this.fbDatabase
  //     .list(`gallery/${subgalleryName}/`)
  //     .snapshotChanges()
  //     .pipe(
  //       map(items => {
  //         return items.map(a => {
  //           const data = a.payload.val();
  //           console.log(data);

  //           const key = a.payload.key;
  //           console.log(key);

  //           return { key, data };
  //         });
  //       })
  //     );
  //   console.log(object);
  // }

  public removePictureData(
    url: string,
    subgalleryName: string,
    imageTitle: string
  ) {
    return new Promise((resolve, reject) => {
      this.removePictureFromStorage(url)
        .then(() => {
          this.removePictureDataFromDatabase(subgalleryName, imageTitle)
            .then(() => resolve())
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  private removePictureDataFromDatabase(
    subgalleryName: string,
    imageTitle: string
  ) {
    return new Promise((resolve, reject) => {
      let pictureDatabaseRef = this.fbDatabase.object(
        `gallery/${subgalleryName}/${imageTitle}`
      );
      pictureDatabaseRef
        .remove()
        .then(function() {
          console.log("Sucessfully removed from database!");
          resolve();
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  }

  public removePictureFromStorage(url: string) {
    return new Promise((resolve, reject) => {
      this.fbStorage.storage
        .refFromURL(url)
        .delete()
        .then(function() {
          console.log("Successfully removed from storage!");
          resolve(true);
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  }

  public uploadImage(event: any, galleryTitle?: string, pictureTitle?: string) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      this.resolveFilePath(file).then(filePath => {
        this.sendImageToStorage(filePath, file, resolve, reject);
      });
    });
  }

  private resolveFilePath(file: any) {
    return new Promise(resolve => {
      this.fbStorage
        .ref(file.name)
        .getDownloadURL()
        .toPromise()
        .then(() => {
          resolve(this.makeRandomName(file.name.length, file.name));
        })
        .catch(err => {
          resolve(file.name);
        });
    });
  }

  private sendImageToStorage(
    filePath: any,
    file: any,
    resolve: (value?: unknown) => void,
    reject: (reason?: any) => void
  ) {
    const fileRef = this.fbStorage.ref(filePath);
    const task = this.fbStorage.upload(filePath, file);
    this._uploadPercent = task.percentageChanges();
    this.getDownloadURL(task, this._downloadURL, fileRef, resolve, reject);
  }

  private getDownloadURL(
    task,
    downloadURL: Observable<string>,
    fileRef,
    resolve: (value?: unknown) => void,
    reject: (reason?: any) => void
  ) {
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
  ): Promise<any> {
    return new Promise(resolve => {
      this.fbDatabase.database
        .ref(`gallery/${galleryTitle}/${pictureTitle}`)
        .set(downloadURL);
      resolve({ pictureTitle: pictureTitle, downloadURL: downloadURL });
    });
  }

  public get downloadUrl() {
    return this._downloadURL;
  }

  public get uploadPercent() {
    return this._uploadPercent;
  }
}
