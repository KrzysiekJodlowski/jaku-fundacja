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
import { AngularFireAuthModule } from "@angular/fire/auth";
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
import { SubgalleryComponent } from "./client/gallery/subgallery/subgallery.component";
import { ContactformComponent } from "./client/contact/contactform/contactform.component";
import { NewspreviewComponent } from "./client/home/newspreview/newspreview.component";
import { AboutpreviewComponent } from "./client/home/aboutpreview/aboutpreview.component";
import { GallerypreviewComponent } from "./client/home/gallerypreview/gallerypreview.component";
import { HttpClientModule } from "@angular/common/http";
import { RegulationsComponent } from "./client/footer/regulations/regulations.component";
import { NewsService } from "./services/news/news.service";
import { TimeService } from "../app/services/time/time.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from "./admin-panel/login/login.component";
import { AuthServiceService } from "./services/auth-service/auth-service.service";
import { AuthGuardGuard } from "./services/auth_guard/auth-guard.guard";
import { AdminNavbarComponent } from "./admin-panel/admin-home/admin-navbar/admin-navbar.component";
import { AdminFooterComponent } from "./admin-panel/admin-home/admin-footer/admin-footer.component";
import { GalleryEditorComponent } from "./admin-panel/admin-home/gallery-editor/gallery-editor.component";
import { SubgalleryEditorComponent } from "./admin-panel/admin-home/gallery-editor/subgallery-editor/subgallery-editor.component";
import { NewsEditorComponent } from "./admin-panel/admin-home/news-editor/news-editor.component";
import { AboutEditorComponent } from "./admin-panel/admin-home/about-editor/about-editor.component";
import { ClientComponent } from "./client/client.component";
import { AdminHomeComponent } from "./admin-panel/admin-home/admin-home.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { EditWindowComponent } from "./admin-panel/admin-home/news-editor/edit-window/edit-window.component";
import { DeleteWindowComponent } from "./admin-panel/admin-home/news-editor/delete-window/delete-window.component";
import { ConfirmWindowComponent } from "./admin-panel/admin-home/news-editor/confirm-window/confirm-window.component";
import { EditWindowComponent as AboutEditWindow } from "./admin-panel/admin-home/about-editor/edit-window/edit-window.component";
import { DeleteWindowComponent as AboutDeleteWindow } from "./admin-panel/admin-home/about-editor/delete-window/delete-window.component";
import { ConfirmWindowComponent as AboutConfirmWindow } from "./admin-panel/admin-home/about-editor/confirm-window/confirm-window.component";
import { DeleteWindowComponent as GalleryEditorDeleteWindow } from "./admin-panel/admin-home/gallery-editor/delete-window/delete-window.component";

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
    RegulationsComponent,
    AdminPanelComponent,
    LoginComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    GalleryEditorComponent,
    SubgalleryEditorComponent,
    NewsEditorComponent,
    AboutEditorComponent,
    ClientComponent,
    AdminHomeComponent,
    EditWindowComponent,
    DeleteWindowComponent,
    ConfirmWindowComponent,
    AboutEditWindow,
    AboutDeleteWindow,
    AboutConfirmWindow,
    GalleryEditorDeleteWindow
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [TimeService, NewsService, AuthServiceService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
