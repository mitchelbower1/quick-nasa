import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showNav: boolean = true;
  show: any;

  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.showNav = !this.showNav;
  }
}
