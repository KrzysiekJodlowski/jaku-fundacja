import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNewsObjectsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getNews")
        .subscribe(news => resolve(news));
    });
  }
}
