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
          rank: about[person]["rank"]
        });
      });
      resolve(newAbout);
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
