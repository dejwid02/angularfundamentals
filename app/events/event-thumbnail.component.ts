import { Component, Input } from '@angular/core'

@Component({
selector: 'event-thumbnail',
templateUrl: 'app/events/event-thumbnail.component.html',
styles: [`
.padLeft {left-margin: 10px; }
.well div {color: #bbb; }
.thumbnail {min-height: 210px ;}
.green {color: #003300 !important; }
.bold {font-weight: bold; }
`]
})
export class EventThumbnailComponent {
@Input() event: any
getStartTimeClass(){
    const isEarly = this.event && this.event.time==='8:00 am';
    return {green: isEarly, bold: isEarly}
}
}