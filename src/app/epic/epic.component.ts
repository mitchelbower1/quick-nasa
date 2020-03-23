import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";

@Component({
  selector: "app-epic",
  templateUrl: "./epic.component.html",
  styleUrls: ["./epic.component.css"]
})
export class EpicComponent implements OnInit {
  epic: any;
  constructor(private service: NASAService) {}

  ngOnInit(): void {
    this.getEpic();
  }

  getEpic() {
    this.service.getEpic().subscribe(response => {
      this.epic = response;
      console.log(response);
    });
  }
}
