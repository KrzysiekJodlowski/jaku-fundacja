import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news/news.service";
import { TimeService } from "../services/time/time.service";
import { PageChangedService } from "../services/page_changed/page-changed.service";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  private news: Object[];
  private currentNews: Object[];

  constructor(
    private newsService: NewsService,
    private timeService: TimeService,
    private pageChangedService: PageChangedService
  ) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      Object.values(news).forEach(info => {
        this.addInfo(info);
      });
      this.currentNews = this.news.slice(0, 3);
    });
  }

  private addInfo(info: any) {
    this.news.push({
      date: this.timeService.formatDate(info.date),
      title: info.title,
      content: info.content
    });
  }

  private newsPageChanged(event: PageChangedEvent): void {
    this.currentNews = this.pageChangedService.pageChanged(event, this.news);
  }
}
