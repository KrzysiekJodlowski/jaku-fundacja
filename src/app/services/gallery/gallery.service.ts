import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  public getImageObjectsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getPictures")
        .subscribe(galleries => {
          resolve(galleries);
        });
    });
  }
}
