import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-plan',
  templateUrl: './store-plan.component.html',
  styleUrls: ['./store-plan.component.css']
})
export class StorePlanComponent implements OnInit {
  data:Data;
  constructor(private http: HttpClient) { }
  routeToVR(){
    console.log("routeToVR");
  }
  ngOnInit() {
    this.http.get("assets/data.json").subscribe(
      (data:Data) => {
        this.data=data;
        document.getElementById('full_store').style.width=this.data.width;
        document.getElementById('full_store').style.height=this.data.height;
      }
      );
    }
    
  }
  export interface Data {
    width?: string,
    height?: string
  }
  