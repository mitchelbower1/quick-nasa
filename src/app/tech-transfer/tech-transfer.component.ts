import { Component, OnInit } from "@angular/core";
import { NASAService } from "../nasa.service";
// import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tech-transfer",
  templateUrl: "./tech-transfer.component.html",
  styleUrls: ["./tech-transfer.component.css"]
})
export class TechTransferComponent implements OnInit {
  constructor(private service: NASAService) { }

  ngOnInit(): void {
    this.getTechTransfer();
  }
  getTechTransfer() {
    this.service.getTechTransfer().subscribe(response => {
      console.log(response);
    });

  }
  // getTech (form: NgForm ) {

  // }
} 
