import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  private news: any[];
  constructor(private fireDb: AngularFireDatabase) {
    this.news = [];
  }

  ngOnInit() {
    this.fireDb
      .list("news")
      .snapshotChanges()
      .subscribe(dates =>
        dates.forEach(date =>
          date.payload.forEach(info => {
            this.news.push({
              date: this.formatDate(date.key),
              title: info.key,
              content: info.val()
            });
            return false;
          })
        )
      );
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
