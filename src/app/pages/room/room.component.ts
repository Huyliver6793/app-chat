import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable';
import { HttpClient } from '@angular/common/http';
import { RoomService } from '../../services/rooms.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})
export class RoomComponent implements OnInit {

  id: string;
  cable:any;
  public currentSender: any;
  public messages: any[] = [];
  public message: any = {};

  constructor(private ng2cable: Ng2Cable, private broadcaster: Broadcaster, private http: HttpClient,
    private roomService: RoomService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    this.ng2cable.subscribe('http://localhost:3000/cable', 'RoomChannel', {
      room: this.id
    })

    this.loadMessages();
    this.initEvents();
  }

  initEvents() {
    this.broadcaster.on<string>('RoomChannel').subscribe(
      message => {
        this.messages.push(message);
      }
    );
  }

  loadMessages() {
    this.roomService.query(this.id).subscribe(
      (messages) => {
        this.messages = messages.data;
      }
    );
  };

  createMessage() {
    debugger;
    this.ng2cable.subscription.perform('send_message', this.message)
  };
}
