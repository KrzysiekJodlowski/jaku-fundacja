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
        .subscribe(about => {
          this.getRankedPeople(about).then(newAbout => resolve(newAbout));
        });
    });
  }

  private getRankedPeople(about: Object) {
    return new Promise(resolve => {
      let newAbout: Object = new Object();
      Object.keys(about).forEach(person => {
        newAbout[about[person]["rank"]] = {
          name: person,
          description: about[person]["description"],
          image: about[person]["image"]
        };
      });
      resolve(newAbout);
    });
  }
}
