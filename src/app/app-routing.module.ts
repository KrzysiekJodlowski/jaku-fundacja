import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";
import { RegulationsComponent } from "./regulations/regulations.component";
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
