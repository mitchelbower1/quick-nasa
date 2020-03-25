import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";
import { NgForm } from "@angular/forms";
import { PathLocationStrategy } from "@angular/common";

@Component({
  selector: "app-rover",
  templateUrl: "./rover.component.html",
  styleUrls: ["./rover.component.css"]
})
export class RoverComponent implements OnInit {
  roverImages: any;

  constructor(private service: NASAService) {}

  ngOnInit(): void {}

  getRoverImage(form: NgForm) {
    console.log(form.value);
    this.service
      .getRoverImage(form.value.date, form.value.rover)
      .subscribe(response => {
        let test: any = response;
        this.roverImages = test.photos;
        console.log(response);
      });
  }
}
