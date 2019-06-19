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
import { NavbarComponent } from "./client/navbar/navbar.component";
import { FooterComponent } from "./client/footer/footer.component";
import { HomeComponent } from "./client/home/home.component";
import { NewsComponent } from "./client/news/news.component";
import { GalleryComponent } from "./client/gallery/gallery.component";
import { ContactComponent } from "./client/contact/contact.component";
import { AboutComponent } from "./client/about/about.component";
import { SubgalleryComponent } from "./client/subgallery/subgallery.component";
import { ContactformComponent } from "./client/contactform/contactform.component";
import { NewspreviewComponent } from "./client/newspreview/newspreview.component";
import { AboutpreviewComponent } from "./client/aboutpreview/aboutpreview.component";
import { GallerypreviewComponent } from "./client/gallerypreview/gallerypreview.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegulationsComponent } from "./client/regulations/regulations.component";

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
