import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news/news.service";
import { TimeService } from "../../services/time/time.service";
import { PageChangedService } from "../../services/page_changed/page-changed.service";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
  providers: [NewsService, TimeService]
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
      for (let info of news) {
        this.news.push(info[1]);
      }
      this.currentNews = this.news.slice(0, 3);
    });
  }

  private newsPageChanged(event: PageChangedEvent): void {
    this.currentNews = this.pageChangedService.pageChanged(event, this.news);
  }
}
