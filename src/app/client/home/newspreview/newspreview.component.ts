import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/news/news.service";
import { TimeService } from "../../../services/time/time.service";
import { CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-newspreview",
  templateUrl: "./newspreview.component.html",
  styleUrls: ["./newspreview.component.scss"],
  providers: [NewsService, TimeService]
})
export class NewspreviewComponent implements OnInit {
  private news: Object[];
  constructor(private newsService: NewsService) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      for (let info of news) {
        this.news.push(info[1]);
      }
    });
  }
}
