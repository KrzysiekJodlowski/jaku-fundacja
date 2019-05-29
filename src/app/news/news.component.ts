import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  private news: any[];
  constructor(private newsService: NewsService) {
    this.news = [];
  }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

  formatDate(longDate: string) {
    var monthNames = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ];

    const date = new Date(Number(longDate));
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }
}
