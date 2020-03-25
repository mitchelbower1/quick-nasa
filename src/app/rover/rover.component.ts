import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-rover",
  templateUrl: "./rover.component.html",
  styleUrls: ["./rover.component.css"]
})
export class RoverComponent implements OnInit {
  roverImage: any;

  constructor(private service: NASAService) {}

  ngOnInit(): void {}

  getRoverImage(form: NgForm) {
    this.service
      .getRoverImage(form.value.rover, form.value.date)
      .subscribe(response => {
        this.roverImage = response;
        console.log(response)
      });
  }
}
