import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimeService {
  constructor() {}

  formatDate(inputDate: string): string {
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

    const date = new Date(inputDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }
}
