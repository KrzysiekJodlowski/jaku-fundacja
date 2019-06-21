import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./client/contact/contact.component";
import { GalleryComponent } from "./client/gallery/gallery.component";
import { HomeComponent } from "./client/home/home.component";
import { NewsComponent } from "./client/news/news.component";
import { AboutComponent } from "./client/about/about.component";
import { RegulationsComponent } from "./client/footer/regulations/regulations.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from "./admin-panel/login/login.component";
import { AuthGuardGuard } from "./services/auth_guard/auth-guard.guard";
import { ClientComponent } from "./client/client.component";
import { AdminHomeComponent } from "./admin-panel/admin-home/admin-home.component";
import { GalleryEditorComponent } from "./admin-panel/admin-home/gallery-editor/gallery-editor.component";
import { NewsEditorComponent } from "./admin-panel/admin-home/news-editor/news-editor.component";
import { AboutEditorComponent } from "./admin-panel/admin-home/about-editor/about-editor.component";

const routes: Routes = [
  { path: "", redirectTo: "client/home", pathMatch: "full" },
  { path: "admin", redirectTo: "admin/login", pathMatch: "full" },
  {
    path: "client",
    component: ClientComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "news", component: NewsComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "contact", component: ContactComponent },
      { path: "about", component: AboutComponent },
      { path: "regulations", component: RegulationsComponent }
    ]
  },
  {
    path: "admin",
    component: AdminPanelComponent,
    children: [
      { path: "login", component: LoginComponent },
      {
        path: "logged_in",
        component: AdminHomeComponent,
        canActivate: [AuthGuardGuard],
        children: [
          { path: "gallery_editor", component: GalleryEditorComponent },
          { path: "news_editor", component: NewsEditorComponent },
          { path: "about_editor", component: AboutEditorComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
