import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate {
    /**
     *
     */
    constructor(private eventService: EventService, private router:Router) {
      
        
    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
       var exists:boolean =  !!this.eventService.getEvent(+route.params['id'])
       if(!exists)
        this.router.navigate(['/404'])
        return exists;
    }
}