import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "../../../services/news/news.service";
import { TimeService } from "../../../services/time/time.service";
import { DeleteWindowComponent } from "./delete-window/delete-window.component";
import { EditWindowComponent } from "./edit-window/edit-window.component";
import { ConfirmWindowComponent } from "./confirm-window/confirm-window.component";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.scss"]
})
export class NewsEditorComponent implements OnInit {
  private news: any[][];
  private deleteWindowValue: string = undefined;
  private newsToRemoveIndex: number = undefined;

  @ViewChild(DeleteWindowComponent)
  deleteWindow: DeleteWindowComponent;

  @ViewChild(EditWindowComponent)
  editWindow: EditWindowComponent;

  @ViewChild(ConfirmWindowComponent)
  confirmWindow: ConfirmWindowComponent;

  constructor(
    private newsService: NewsService,
    private timeService: TimeService
  ) {
    this.news = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      for (let info of news) {
        this.news.push(info);
      }
    });
  }

  private askIfWantsToDelete(event: any, index: number) {
    this.deleteWindowValue = event.toString();
    this.newsToRemoveIndex = index;
    this.deleteWindow.open();
  }

  private removeNews = () => {
    const newsTag = this.news[this.newsToRemoveIndex][0];
    this.news.splice(this.newsToRemoveIndex, 1);
    this.newsService.removeNewsFromDb(newsTag);
    this.showConfirmWindow();
  };

  private saveNews = (info: Object, infoIndex: number) => {
    infoIndex >= 0 ? this.updateNews(info, infoIndex) : this.saveNewInfo(info);
    this.showConfirmWindow();
  };

  private updateNews(updatedInfo: Object, updatedInfoIndex: number) {
    const updatedInfoKey = this.news[updatedInfoIndex][0];

    for (let property of Object.keys(updatedInfo)) {
      this.news[updatedInfoIndex][1][property] = updatedInfo[property];
    }
    this.newsService.updateNews(updatedInfoKey, updatedInfo);
  }

  private saveNewInfo(newInfo: Object) {
    this.newsService.saveNews(newInfo).then(data => {
      this.news.unshift([data.path.pieces_[1], newInfo]);
    });
  }

  private showEditWindow(
    date = this.timeService.formatDateAsInputValue(new Date()),
    title = "",
    content = "",
    index = -1
  ) {
    this.editWindow.open(date, title, content, index);
  }

  private showConfirmWindow = () => {
    this.confirmWindow.show();
  };
}
