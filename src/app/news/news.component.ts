import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { loadInternal } from "@angular/core/src/render3/util";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  private news: any[];
  private dbTitles: any[];
  private titles: string[];
  constructor(private fireDb: AngularFireDatabase) {
    this.titles = [];
    this.dbTitles = [];
  }

  ngOnInit() {
    this.fireDb
      .list("/news")
      .snapshotChanges()
      .subscribe(dbTitles => {
        this.dbTitles = dbTitles;
        this.dbTitles.forEach(title => {
          this.titles.push(title.key);
        });
        console.log(this.titles);
      });
    this.fireDb
      .list("/news")
      .valueChanges()
      .subscribe(news => {
        this.news = news;
        console.log(this.news);
      });
  }
}
