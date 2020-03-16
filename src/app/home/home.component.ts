import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  pictureOfTheDay: any;
  constructor(private service: NASAService) {}

  ngOnInit(): void {
    this.getPictureOfTheDay();
  }

  getPictureOfTheDay() {
    this.service.getPictureOfTheDay().subscribe(response => {
      console.log(response);
      this.pictureOfTheDay = response;
    });
  }
}
