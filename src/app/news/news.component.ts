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
  private news: Object[];
  private readonly NESTED_OBJECT_VALUE_INDEX: number = 1;

  constructor(
    private newsService: NewsService,
    private timeService: TimeService
  ) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      Object.entries(news).forEach(info => {
        this.addInfo(info[this.NESTED_OBJECT_VALUE_INDEX]);
      });
    });
  }

  private addInfo(info: any) {
    this.news.push({
      date: this.timeService.formatDate(info.date),
      title: info.title,
      content: info.content
    });
  }
}
