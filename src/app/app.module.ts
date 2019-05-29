import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { PeopleComponent } from "./people/people.component";
import { EventComponent } from "./event/event.component";
import { SubgalleryComponent } from "./subgallery/subgallery.component";
import { ContactformComponent } from "./contactform/contactform.component";
import { NewspreviewComponent } from "./newspreview/newspreview.component";
import { AboutpreviewComponent } from "./aboutpreview/aboutpreview.component";
import { GallerypreviewComponent } from "./gallerypreview/gallerypreview.component";
import { NewsService } from "./services/news/news.service";
import { TimeService } from "../app/services/time/time.service";
import { WebstorageService } from "./services/webstorage/webstorage.service";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    PeopleComponent,
    EventComponent,
    SubgalleryComponent,
    ContactformComponent,
    NewspreviewComponent,
    AboutpreviewComponent,
    GallerypreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [TimeService, NewsService, WebstorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
