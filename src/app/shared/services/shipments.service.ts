import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ShipmentsService {

  private _httpHeaders;

  apiUrl:string= 'http://hp-api.herokuapp.com/api/'

  constructor(private http:HttpClient) { 
    // if(!environment.isServer){
    //     this._httpHeaders = {
    //         headers: new HttpHeaders({
    //             // 'x-auth-token': JSON.parse(sessionStorage.getItem('schoolBotAdminUser')).id_token
    //             'Authorization': 'Bearer' + ' ' + JSON.parse(sessionStorage.getItem('schoolBotAdminUser')).id_token
    //         }),
    //         observe: 'response' as 'response'
    //     };
    // }
  }

  getCharacters(){
    return this.http.get(this.apiUrl + 'characters');
  }
}
