import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GalleryService } from "../gallery/gallery.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { reject } from "q";

@Injectable({
  providedIn: "root"
})
export class AboutService {
  constructor(
    private http: HttpClient,
    private galleryService: GalleryService,
    private fbDatabase: AngularFireDatabase
  ) {}

  public getAboutObjectsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getAbout")
        .subscribe(about => {
          this.getRankedPeople(about).then(newAbout =>
            this.sortPeopleByRank(newAbout).then(sortedAbout => {
              resolve(sortedAbout);
            })
          );
        });
    });
  }

  private getRankedPeople(about: Object) {
    return new Promise(resolve => {
      let newAbout: Object[] = [];
      Object.keys(about).forEach(person => {
        newAbout.push({
          name: person,
          description: about[person]["description"],
          image: about[person]["image"],
          rank: about[person]["rank"],
          position: about[person]["position"]
        });
      });
      resolve(newAbout);
    });
  }

  public removePersonData(person: Object) {
    return new Promise((resolve, reject) => {
      this.removePersonImageFromStorage(person)
        .then(() => {
          this.fbDatabase.database
            .ref(`about/${person["name"]}`)
            .remove()
            .then(() => resolve())
            .catch(() =>
              reject(
                "Nie udało się usunąć z bazy danych tej osoby! Spróbuj ponownie później lub skontaktuj się z administratorem."
              )
            );
        })
        .catch(() => {
          reject(
            "Nie udało się usunąć zdjęcia z Firebase Storage! Spróbuj ponownie później lub skontaktuj się z administratorem."
          );
        });
    });
  }

  private removePersonImageFromStorage(person: Object) {
    return new Promise((resolve, reject) => {
      this.galleryService
        .removePictureFromStorage(person["image"])
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  }

  private sortPeopleByRank(newAbout: any): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      resolve(
        newAbout.sort((a, b) => {
          return a["rank"] - b["rank"];
        })
      );
    });
  }
}
