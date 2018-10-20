import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent{
    dashboardMenu: boolean = false
    reportsMenu: boolean = false
    analyticsMenu: boolean = false
    performanceMenu: boolean = false

    @Output() dashboardMenuClickEvent = new EventEmitter<boolean>();
    @Output() reportsMenuClickEvent = new EventEmitter<boolean>();

    constructor(){}
    ngOnInit(){}
    
    dashboardMenuClicked(){
        this.dashboardMenu = !this.dashboardMenu ;
        this.dashboardMenuClickEvent.emit(this.dashboardMenu);
    }

    reportsMenuClicked(){
        this.reportsMenu = !this.reportsMenu ;
        this.reportsMenuClickEvent.emit(this.reportsMenu);
    }

    analyticsMenuClicked(){
        this.analyticsMenu = !this.analyticsMenu ;
    }

    performanceMenuClicked(){
        this.performanceMenu = !this.performanceMenu ;
    }
}