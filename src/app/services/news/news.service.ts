import { Injectable } from "@angular/core";
import { TimeService } from "../time/time.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private news: Object;
  constructor(private timeService: TimeService, private http: HttpClient) {
    this.news = [];
    // this.loadNewsFromDb().then(news => {
    //   this.news = news;
    // });
  }

  public loadNewsFromDb() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getNews")
        .subscribe(news => resolve(news));
    });

    // this.fireDb
    //   .list("news")
    //   .snapshotChanges()
    //   .subscribe(dates =>
    //     dates.forEach(date =>
    //       date.payload.forEach(info => {
    //         this.addInfo(date, info);
    //         return false;
    //       })
    //     )
    //   );
  }

  private addInfo(date: any) {
    return this.timeService.formatDate(date.key);
  }

  getNews() {
    return this.news;
  }
}
