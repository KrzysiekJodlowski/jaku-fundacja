import { Component, OnInit, TemplateRef } from "@angular/core";
import { NewsService } from "../../../services/news/news.service";
import { TimeService } from "../../../services/time/time.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.scss"]
})
export class NewsEditorComponent implements OnInit {
  private news: Object[];
  private newsIndex: string[];
  private quitWindowValue: string = undefined;
  private newsToRemoveIndex: number = undefined;
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  constructor(
    private newsService: NewsService,
    private timeService: TimeService,
    private modalService: BsModalService
  ) {
    this.news = [];
    this.newsIndex = [];
  }

  ngOnInit() {
    this.newsService.getNewsObjectsFromDb().then(news => {
      Object.values(news).forEach(info => {
        this.addInfo(info);
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

  private askIfWantsToQuit(
    template: TemplateRef<any>,
    event: any,
    index: number
  ) {
    this.quitWindowValue = event.toString();
    this.newsToRemoveIndex = index;
    this.modalRef = this.modalService.show(template, this.config);
  }

  private removeNews() {
    this.modalRef.hide();

    const newsTag = this.newsIndex[this.newsToRemoveIndex];

    this.news.splice(this.newsToRemoveIndex, 1);
    this.newsIndex.splice(this.newsToRemoveIndex, 1);

    this.newsService.removeNewsFromDb(newsTag);
  }
}
