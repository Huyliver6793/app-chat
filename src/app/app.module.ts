import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2CableModule } from 'ng2-cable';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'room/:id', component: RoomComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoomComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    Ng2CableModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [HttpClient, Ng2CableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
