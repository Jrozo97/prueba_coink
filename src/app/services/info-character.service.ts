import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

   public cargarInfo( search: string):Observable <any> {    
      this.searchCharacter = search
    return this.http.get(this.API_SERVER + `?name=${search}`) 
   }

   public nextInfoCharacter ( page: number):Observable <any> {
    return this.http.get(this.API_SERVER + `?page=${page}`)
   }

}
