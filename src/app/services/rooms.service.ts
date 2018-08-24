import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RoomService {

  constructor(private http: Http) {
  }

  query(id) {
    return this.http.get('http://localhost:81/chat_rooms/' + id).map(res => {
      return res.json();
    });
  }
}
