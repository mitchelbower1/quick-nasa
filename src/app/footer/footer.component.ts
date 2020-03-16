import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  //  rsFeed = require("rss-to-json")
  feed: any = {};
  constructor(private service: NASAService) {}

  ngOnInit(): void {
    this.service.getFeed().subscribe(response => {
      this.feed = response;
    });
  }
}
