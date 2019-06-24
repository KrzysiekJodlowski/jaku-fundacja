import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  readonly authState$: Observable<firebase.User | null> = this.afAuth.authState;

  constructor(public afAuth: AngularFireAuth) {}

  doEmailLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  get authenticated(): boolean {
    return this.authState$ !== null;
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
