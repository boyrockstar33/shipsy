import { Component } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent{
    dashboardMenu: any
    recieveDashboardClickEvent($event){
        this.dashboardMenu = $event
        console.log(this.dashboardMenu)
    }
}