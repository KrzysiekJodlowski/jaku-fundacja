import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "news", component: NewsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
