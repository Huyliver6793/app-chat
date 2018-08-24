import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MessageService {
  public apiUrl = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  query() {
    return this.http.get('${this.apiUrl}/messages').map(res => {
      return res.json();
    });
  }

  create(message:any) {
    return this.http.post('${this.apiUrl}/messages', message).map(res => {
      return res.json();
    });
  }
}
