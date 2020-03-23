import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { EpicComponent } from "./epic/epic.component";
import { NewsComponent } from "./news/news.component";
import { PlanetsComponent } from "./planets/planets.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "head", component: HeaderComponent },
  { path: "news", component: NewsComponent },
  { path: "epic", component: EpicComponent },
  { path: "footer", component: FooterComponent },
  { path: "planets", component: PlanetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
