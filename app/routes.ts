import { Routes } from "@angular/router"
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailscomponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent },
    {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events/:id', component:EventDetailscomponent, canActivate:[EventRouteActivatorService]},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'}
]