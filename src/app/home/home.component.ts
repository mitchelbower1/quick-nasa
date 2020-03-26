import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";
import { HeaderComponent } from "../header/header.component";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  pictureOfTheDay: any;
  safeURL: any;
  constructor(private service: NASAService, private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getPictureOfTheDay();
  }

  getPictureOfTheDay() {
    this.service.getPictureOfTheDay().subscribe(response => {
      console.log(response);
      this.pictureOfTheDay = response;
    });
  }
  getSafeUrl() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      this.pictureOfTheDay?.url
    );
  }
}
