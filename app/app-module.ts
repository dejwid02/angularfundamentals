import { NgModule } from "@angular/core";
import { BrowserModule} from '@angular/platform-browser';
import { EventsAppComponent } from "./events-app.componet";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailscomponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes"
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
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