"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("./events/index");
var events_app_componet_1 = require("./events-app.componet");
var navbar_component_1 = require("./nav/navbar.component");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
var router_1 = require("@angular/router");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)],
        declarations: [events_app_componet_1.EventsAppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            index_1.EventDetailscomponent,
            index_1.CreateEventComponent,
            _404_component_1.Error404Component],
        bootstrap: [events_app_componet_1.EventsAppComponent],
        providers: [
            index_1.EventService,
            toastr_service_1.ToastrService,
            event_route_activator_service_1.EventRouteActivatorService,
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm("you have not saved your event, do you really want to leave the page?");
    return true;
}
//# sourceMappingURL=app-module.js.map