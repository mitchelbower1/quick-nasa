import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";

@Component({
  selector: "app-neo",
  templateUrl: "./neo.component.html",
  styleUrls: ["./neo.component.css"]
})
export class NeoComponent implements OnInit {
  nearEarthObjects: any
  constructor(private service: NASAService) { }

  ngOnInit(): void {
    this.getNearEarthObjects();
  }


  getNearEarthObjects() {
    this.service.getNearEarthObjects().subscribe(response => {
      this.nearEarthObjects = response;
    });
  }
}
