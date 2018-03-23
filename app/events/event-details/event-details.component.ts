import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "/app/events/event-details/event-details.component.html",
    styles: [`
        .container { padding-left:20px; padding-right:20px;  }
        .event-image { height: 100px; }
        `]
})
export class EventDetailscomponent implements OnInit {
    event: any
    constructor(private enentService: EventService, private route: ActivatedRoute) {
        
        
    }
    ngOnInit(): void {
        var id : number  = +this.route.snapshot.params['id'];

       this.event = this.enentService.getEvent(id)
    }
}