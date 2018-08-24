import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public rooms: any;

  constructor(private http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
  }

  private getData (){
    this.http.get('api/v1/rooms')
      .subscribe((room: any) => {
        debugger;
        this.rooms = room.data;
      });
  }

}
