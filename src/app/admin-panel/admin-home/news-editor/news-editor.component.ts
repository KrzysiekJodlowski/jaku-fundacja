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
  private quitWindowValue: string = "";
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

  private askIfWantsToQuit(template: TemplateRef<any>, event: any) {
    this.quitWindowValue = event.toString();
    this.modalRef = this.modalService.show(template, this.config);
  }

  // private askIfWantsToQuit(event: any) {
  //   console.log(event);
  // }
}
