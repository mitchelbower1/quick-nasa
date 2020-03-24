import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";

@Component({
  selector: "app-epic",
  templateUrl: "./epic.component.html",
  styleUrls: ["./epic.component.css"]
})
export class EpicComponent implements OnInit {
  images: any;
  constructor(private service: NASAService) {}

  ngOnInit(): void {
    this.getEpic();
  }

  makeImages(array: any) {
    this.images.forEach(image => {
      let date = image.date.split("-");
      let year: number = date[0].substr(0, 4);
      let month: number = date[1].substr(0, 2);
      let day: number = date[2].substr(0, 2);
      image.url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image.image}.jpg`;
    });
  }

  getEpic() {
    this.service.getEpic().subscribe(response => {
      this.images = response;
      this.makeImages(this.images);
      console.log(this.images)
    });
  }
}
