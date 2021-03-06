import { Routes } from "@angular/router"
import { 
    EventsListComponent,
    EventDetailscomponent,
    CreateEventComponent,
    EventRouteActivatorService } from "./events/index";

import { Error404Component } from "./errors/404.component";


export const appRoutes: Routes = [
    { path:'events', component: EventsListComponent },
    {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events/:id', component:EventDetailscomponent, canActivate:[EventRouteActivatorService]},
    {path:'404', component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'user', loadChildren: 'app/user/user.module#UserModule'}
]