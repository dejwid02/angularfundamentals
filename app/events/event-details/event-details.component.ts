import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: "/app/events/event-details/event-details.component.html",
    styles: [`
        .container { padding-left:20px; padding-right:20px;  }
        .event-image { height: 100px; }
        `]
})
export class EventDetailscomponent implements OnInit {
    event: any
    constructor(private enentService: EventService) {
        
        
    }
    ngOnInit(): void {
       this.event = this.enentService.getEvent(1)
    }
}