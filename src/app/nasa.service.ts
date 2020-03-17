import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NASAService {
  api_key: string = "AEuFemlzD3eAHquMz4vhphthx6oLpSu9QmiOMoex";
  hd: boolean = false;
  date: string = "2020-03-15";

  patent: string = "";
  patent_issued: string = "";
  software: string = "";



  constructor(private http: HttpClient) { }



  getPictureOfTheDay() {
    return this.http.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: this.api_key,
        date: this.date,
        hd: `${this.hd}`
      }
    });
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  getTechTransfer() {
    return this.http.get(`https://api.nasa.gov/techtransfer`, {
      params: {
        api_key: this.api_key,
        patent: this.patent,
        patent_issued: this.patent_issued,
        software: this.software
      }
    })
  }
  getNearEarthObjects() {
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/neo/browse/`, {
      params: {
        api_key: this.api_key
      }
    })
  }

}
