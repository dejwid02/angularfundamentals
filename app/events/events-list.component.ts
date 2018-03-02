import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
selector:'events-list',
templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any[]
    ngOnInit(): void {
        this.events=this.eventService.getEvents(); 
    }

   constructor(private eventService:EventService, private toastrService:ToastrService) {
      
   }
    
   handleClick(name: string){
        this.toastrService.success(name);
   }
}