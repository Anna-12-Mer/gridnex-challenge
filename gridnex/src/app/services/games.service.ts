import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public basedUrl = "https://gamecatalogapi.azurewebsites.net/api/";
  public basedUrl_ = "https://backendcoreservice.azurewebsites.net/"

  constructor(private http: HttpClient) { }

  // ** Get All Games **//
  getAllGames() {
    return this.http.get(this.basedUrl + 'Game/GetAllGames');
  }
  // ** Get Game Details **//
  getGameDetails() {
    return this.http.get(this.basedUrl + 'Game/GetGamesDetails');
  }
  // ** Get Game ALL Details By ID **//
  getGameDetailsById(id) {
    return this.http.get(this.basedUrl + 'Game/GetGame_ALLDetails/' + id);
  }
  // ** Get All the Categories **//
  getAllCategories() {
    return this.http.get(this.basedUrl + 'Category/GettheCategories')
  }
  // ** Get A Category with Games By ID **//
  getACategorywithGames(id) {
    return this.http.get(this.basedUrl + 'Category/GetACategorywithGames/' + id);
  }
  //*** LOGIN  ***//
  logi(email, password) {
    return this.http.post(this.basedUrl_ + '/api/Login/Login', { email, password });
  }
  //*** ADD Games ***/
  addGames(body) {
    return this.http.post(this.basedUrl + 'Game/addnewGame', body);
  }
}
