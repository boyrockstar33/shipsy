import { Component } from '@angular/core';
import { ShipmentsService } from '../../services/shipments.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.scss']
})


export class ShipmentsComponent{
    characterResponse: any
    characterResponseForSearch: any
    searchString: string
    date: Date
    
    constructor(private _ShipmentsService: ShipmentsService){}
    ngOnInit(){
        this.getShipments();
    }
    getShipments(){
        this._ShipmentsService.getCharacters()
        .subscribe(response=>{
            this.characterResponse = response
            this.characterResponseForSearch = this.characterResponse
        })
    }
    onDateChange(){
        this.searchString = this.date.toString()
        console.log(this.searchString)
    }
    search(text) {
        console.log(text)
        this.characterResponse = [];
        var key = _.lowerCase(text).replace(/[\s]/g, "");
        if(key.length){
            this.characterResponseForSearch.filter(elem => {
                if (
                    _.lowerCase(elem.name)
                    .replace(/[\s]/g, "")
                    .includes(key)
                    ){
                        this.characterResponse.push(elem);
                    }
                    else if (
                        _.lowerCase(elem.actor)
                        .replace(/[\s]/g, "")
                        .includes(key)
                        ){
                            this.characterResponse.push(elem);
                        }
                        else if (
                            _.lowerCase(elem.house)
                            .replace(/[\s]/g, "")
                            .includes(key)
                            ){
                                this.characterResponse.push(elem);
                            }
                            else if (
                                _.lowerCase(elem.dateOfBirth)
                                .replace(/[\s]/g, "")
                                .includes(key)
                                ){
                                    this.characterResponse.push(elem);
                                }
                        });
                    } else {
                        this.characterResponse = this.characterResponseForSearch;
                    }
                }
            }