import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
}
