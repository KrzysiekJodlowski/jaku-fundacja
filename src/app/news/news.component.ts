import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news/news.service";
import { TimeService } from "../services/time/time.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  private news: any[];

  constructor(
    private newsService: NewsService,
    private timeService: TimeService
  ) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.loadNewsFromDb().then(news => {
      Object.entries(news).forEach(date => {
        let time,
          content = [...date];
        this.addInfo(time, content);
      });
    });
    console.log(this.news);
  }

  private addInfo(date: any, content: any) {
    this.news.push({
      date: date,
      content: content
    });
  }
}
