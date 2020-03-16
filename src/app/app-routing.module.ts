import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NeoComponent } from "./neo/neo.component";
import { NewsComponent } from "./news/news.component";
import { TechTransferComponent } from "./tech-transfer/tech-transfer.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "head", component: HeaderComponent },
  { path: "news", component: NewsComponent },
  { path: "near-earth-objects", component: NeoComponent },
  { path: "tech-transfer", component: TechTransferComponent },
  { path: "footer", component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
