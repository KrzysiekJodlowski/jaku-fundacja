import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news/news.service";
import { TimeService } from "../../services/time/time.service";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-newspreview",
  templateUrl: "./newspreview.component.html",
  styleUrls: ["./newspreview.component.scss"],
  providers: [NewsService, TimeService]
})
export class NewspreviewComponent implements OnInit {
  private news: Object[];
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
