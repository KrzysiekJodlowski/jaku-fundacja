import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "../../../services/news/news.service";
import { TimeService } from "../../../services/time/time.service";
import { DeleteWindowComponent } from "./delete-window/delete-window.component";
import { EditWindowComponent } from "./edit-window/edit-window.component";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.scss"]
})
export class NewsEditorComponent implements OnInit {
  private news: Object[];
  private newsIndex: string[];
  private newsDates: string[];
  private deleteWindowValue: string = undefined;
  private newsToRemoveIndex: number = undefined;

  @ViewChild(DeleteWindowComponent)
  deleteWindow: DeleteWindowComponent;

  @ViewChild(EditWindowComponent)
  editWindow: EditWindowComponent;

  constructor(
    private newsService: NewsService,
    private timeService: TimeService
  ) {
    this.news = [];
    this.newsIndex = [];
    this.newsDates = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      Object.values(news).forEach(info => {
        this.addInfo(info);
        this.newsDates.push(info.date);
      });
      Object.keys(news).forEach(indexKey => {
        this.newsIndex.push(indexKey);
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

  private askIfWantsToDelete(event: any, index: number) {
    this.deleteWindowValue = event.toString();
    this.newsToRemoveIndex = index;
    this.deleteWindow.open();
  }

  private removeNews = () => {
    const newsTag = this.newsIndex[this.newsToRemoveIndex];
    this.news.splice(this.newsToRemoveIndex, 1);
    this.newsIndex.splice(this.newsToRemoveIndex, 1);
    this.newsService.removeNewsFromDb(newsTag);
  };

  private saveNews = (updatedInfo: Object, updatedInfoIndex: number) => {
    console.log(updatedInfo + " with id " + updatedInfoIndex + " saved");
  };

  private showEditWindow(
    date: string,
    title: string,
    content: string,
    index: number
  ) {
    this.editWindow.open(date, title, content, index);
  }
}
