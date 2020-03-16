import { Component, OnInit } from '@angular/core';
import { NASAService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: NASAService) { }

  ngOnInit(): void {

  }


  getData(): any {

    this.service.getData().subscribe(response => {

      console.log(response);

    },

      (error) => { console.log(error); })

  }



}

