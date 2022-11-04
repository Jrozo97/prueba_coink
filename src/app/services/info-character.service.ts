import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AllCharactersResponse, InfoCharacter } from '../interface/info-characters-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoCharacterService {

  private API_SERVER: string = 'https://rickandmortyapi.com/api/character/'
  public searchCharacter: string = ""

  constructor(
    private http: HttpClient
  ) {
   }

   public cargarInfo( search: string ):Observable <any> {    
    this.searchCharacter = search
    return this.http.get(this.API_SERVER + `?name=${search}`)
   }

}
