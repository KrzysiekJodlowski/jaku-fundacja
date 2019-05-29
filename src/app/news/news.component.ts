import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  private news: any[];
  constructor(private newsService: NewsService) {
    this.news = [];
  }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }
}
