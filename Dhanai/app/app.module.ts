import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './event/shared/event.service';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { ToastrService } from './common/toastr.service';
import { NewEventComponent } from './event/new-event/new-event.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorGuard } from './event/shared/event-route-activator.guard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent,
    EmployeeComponent,
    NavComponent,
    EventDetailComponent,
    NewEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService, ToastrService, EventRouteActivatorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
