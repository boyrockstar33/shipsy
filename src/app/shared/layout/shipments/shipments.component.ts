import { Component } from '@angular/core';
import { ShipmentsService } from '../../services/shipments.service';

@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.scss']
})


export class ShipmentsComponent{
    characterResponse: any
    searchString: string
    
    constructor(private _ShipmentsService: ShipmentsService){}
    ngOnInit(){
        this.getShipments();
    }
    getShipments(){
        this._ShipmentsService.getCharacters()
        .subscribe(response=>{
            this.characterResponse = response
            console.log(this.characterResponse)
        })
    }

    search(nameKey, myArray){
        var tempCharacterResponse = this.characterResponse
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                this.characterResponse[0] = myArray[i]
            }
            // else this.characterResponse = tempCharacterResponse
        }
    }
}