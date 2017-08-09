import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './event/shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent,
    EmployeeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
