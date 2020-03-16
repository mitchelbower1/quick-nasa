import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class NASAService {
  api_key: string = "AEuFemlzD3eAHquMz4vhphthx6oLpSu9QmiOMoex";
  hd: boolean = false;
  date: string = "2020-03-15"
  constructor(private http: HttpClient) { }



  getPictureOfTheDay() {
    return this.http.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: this.api_key,
        date: this.date,
        hd: `${this.hd}`
      }
    })
  }

}


