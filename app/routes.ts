import { Routes } from "@angular/router"
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailscomponent } from "./events/event-details/event-details.component";

export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent },
    {path:'events/:id', component:EventDetailscomponent},
    {path:'', redirectTo:'/events', pathMatch:'full'}
]