import { Injectable } from "@angular/core";
import { TimeService } from "../time/time.service";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private news: any[];
  constructor(
    private timeService: TimeService,
    private fireDb: AngularFireDatabase
  ) {
    this.news = [];
    this.loadNewsFromDb();
  }

  private loadNewsFromDb() {
    this.fireDb
      .list("news")
      .snapshotChanges()
      .subscribe(dates =>
        dates.forEach(date =>
          date.payload.forEach(info => {
            this.addInfo(date, info);
            return false;
          })
        )
      );
  }

  private addInfo(date: any, info: any) {
    this.news.push({
      date: this.timeService.formatDate(date.key),
      title: info.key,
      content: info.val()
    });
  }

  getNews() {
    return this.news;
  }
}
