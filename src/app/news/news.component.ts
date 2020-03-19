import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  feed: any = {};
  constructor(private service: NASAService) {}

  ngOnInit(): void {
    this.service.getFeed().subscribe(response => {
      this.feed = response;
    });
  }
}
