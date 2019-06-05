import { Component, OnInit } from "@angular/core";
import * as emailjs from "emailjs-com";

@Component({
  selector: "app-contactform",
  templateUrl: "./contactform.component.html",
  styleUrls: ["./contactform.component.css"]
})
export class ContactformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  sendMail() {
    const templateParams = {
      from_name: "Jasio",
      message_html: "Jasio"
    };

    emailjs
      .send(
        "gmail",
        "template_gqZQnCzA",
        templateParams,
        "user_ZfJq9Et9cpKuBEA8cjwr9"
      )
      .then(response => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
