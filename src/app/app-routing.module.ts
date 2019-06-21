import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./client/contact/contact.component";
import { GalleryComponent } from "./client/gallery/gallery.component";
import { HomeComponent } from "./client/home/home.component";
import { NewsComponent } from "./client/news/news.component";
import { AboutComponent } from "./client/about/about.component";
import { RegulationsComponent } from "./client/footer/regulations/regulations.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardGuard } from "./auth-guard.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "regulations", component: RegulationsComponent },
  { path: "admin", redirectTo: "admin/login", pathMatch: "full" },
  {
    path: "admin/login",
    component: LoginComponent
  },
  {
    path: "admin/admin_panel",
    component: AdminPanelComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
