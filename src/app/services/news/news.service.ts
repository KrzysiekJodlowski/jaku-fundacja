import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(
    private http: HttpClient,
    private dataBase: AngularFireDatabase
  ) {}

  public getNewsObjectsFromDb(): Promise<any[][]> {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://us-central1-fir-7d0a4.cloudfunctions.net/getNews")
        .subscribe(news => {
          this.loadNews(news).then(sortedNews => {
            resolve(sortedNews);
          });
        });
    });
  }

  private loadNews(dbNews: Object): Promise<any[][]> {
    return new Promise((resolve, reject) => {
      let sortednews: any[][] = [];
      Object.entries(dbNews).forEach(news => {
        sortednews.push([Object.values(news)[0], Object.values(news)[1]]);
      });
      resolve(sortednews);
    });
  }

  public removeNewsFromDb(newsTag: string): void {
    const newsReference = this.dataBase.object(`news/${newsTag}`);
    newsReference.remove();
  }

  public updateNews(infoKey: string, updatedInfo: Object): void {
    const itemsRef = this.dataBase.list("news");
    itemsRef.update(infoKey, updatedInfo);
  }

  public saveNews(info: Object): Promise<any> {
    const itemsRef = this.dataBase.list("news");

    return new Promise((resolve, reject) => {
      itemsRef
        .push(info)
        .then(data => resolve(data))
        .catch(err => {
          reject(err);
        });
    });
  }

  public sortNewsByDates(news: Object[]): Object[] {
    let sortedNews: Object[] = [];
    let sortedNewsKeys: string[] = [];

    news.sort(this.compareNewsDates);
    return news;
  }

  private compareNewsDates(news1: Object, news2: Object): number {
    if (new Date(news1["date"]) > new Date(news2["date"])) return 1;
    if (new Date(news1["date"]) < new Date(news2["date"])) return -1;
    return 0;
  }
}
