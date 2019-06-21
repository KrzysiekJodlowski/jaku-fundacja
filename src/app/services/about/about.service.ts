import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AboutService {
  constructor(private http: HttpClient) {}

  public getAboutObjectsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getAbout")
        .subscribe(about => resolve(about));
    });
  }
}
