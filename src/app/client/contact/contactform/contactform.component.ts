import { Component, OnInit } from "@angular/core";
import * as emailjs from "emailjs-com";

@Component({
  selector: "app-contactform",
  templateUrl: "./contactform.component.html",
  styleUrls: ["./contactform.component.scss"]
})
export class ContactformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(templateForm: any, form: any) {
    const templateParams = {
      from_email: templateForm.email,
      subject: templateForm.subject,
      message: templateForm.message
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
        form.reset();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
