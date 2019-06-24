import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      password: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  ngOnInit() {}

  tryLogin(value) {
    console.log(value);
    this.authService.doEmailLogin(value).then(
      res => {
        this.router.navigate(["admin/logged_in"]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
