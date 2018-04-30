import { NgModule } from "@angular/core";
import { BrowserModule} from '@angular/platform-browser';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailscomponent,
    CreateEventComponent
} from './events/index'
import { EventsAppComponent } from "./events-app.componet";
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes"
import { RouterModule } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";

@NgModule({
imports: [BrowserModule,
RouterModule.forRoot(appRoutes)],
declarations: [EventsAppComponent, 
    EventsListComponent, 
    EventThumbnailComponent, 
    NavBarComponent, 
    EventDetailscomponent,
    CreateEventComponent,
    Error404Component],
bootstrap: [EventsAppComponent],
providers:[
    EventService, 
    ToastrService, 
    EventRouteActivatorService,
{
provide:'canDeactivateCreateEvent',
useValue: checkDirtyState
}]
})

export class AppModule {

    
}
function checkDirtyState(component: CreateEventComponent):boolean {
    if (component.isDirty)
        return window.confirm("you have not saved your event, do you really want to leave the page?")
    return true;
}