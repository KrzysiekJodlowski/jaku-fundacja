import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AlertModule } from "ngx-bootstrap/alert";
import { PaginationModule } from "ngx-bootstrap/pagination";

// imports below will be used in admin panel
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "src/environments/environment";

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
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegulationsComponent } from "./regulations/regulations.component";

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
    GallerypreviewComponent,
    RegulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
