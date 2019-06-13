import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news/news.service";
import { TimeService } from "../services/time/time.service";
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
    private timeService: TimeService
  ) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      Object.values(news).forEach(info => {
        this.addInfo(info);
      });
      this.currentNews = this.news.slice(0, 10);
    });
  }

  private addInfo(info: any) {
    this.news.push({
      date: this.timeService.formatDate(info.date),
      title: info.title,
      content: info.content
    });
  }

  private pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentNews = this.news.slice(startItem, endItem);
  }
}
