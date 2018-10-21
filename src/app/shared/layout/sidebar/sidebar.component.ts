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
    statusFlagsObject: any = {}
    id: any
    @Output() dashboardMenuClickEvent = new EventEmitter<boolean>();
    @Output() reportsMenuClickEvent = new EventEmitter<boolean>();
    
    constructor(){}
    ngOnInit(){
        this.setFlags()
    }
    eventEmitterMethod(data){
        this.dashboardMenuClickEvent.emit(data);
    }
    setFlags(){
        this.statusFlagsObject = {
            "dashboardMenu": this.dashboardMenu,
            "reportsMenu": this.reportsMenu,
            "analyticsMenu": this.analyticsMenu,
            "performanceMenu": this.performanceMenu
        }
    }
    menuClick(key: string){
        if(key == "dashboardMenu"){
            this.dashboardMenu = !this.dashboardMenu
            this.reportsMenu = this.analyticsMenu = this.performanceMenu = false
            this.statusFlagsObject["dashboardMenu"] = this.dashboardMenu
        }
        if(key == "reportsMenu") {
            this.reportsMenu = !this.reportsMenu
            this.dashboardMenu = this.analyticsMenu = this.performanceMenu = false
            this.statusFlagsObject["reportsMenu"] = this.reportsMenu
        }
        if(key == "analyticsMenu"){
            this.analyticsMenu = !this.analyticsMenu
            this.reportsMenu = this.dashboardMenu = this.performanceMenu = false
            this.statusFlagsObject["analyticsMenu"] = this.analyticsMenu
        }
        if(key == "performanceMenu"){
            this.performanceMenu = !this.performanceMenu
            this.reportsMenu = this.analyticsMenu = this.dashboardMenu = false
            this.statusFlagsObject["performanceMenu"] = this.performanceMenu
        }
        this.setFlags();
        this.eventEmitterMethod(this.statusFlagsObject);
    }
}