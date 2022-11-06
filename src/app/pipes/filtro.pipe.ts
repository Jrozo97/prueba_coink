import { Pipe, PipeTransform } from '@angular/core';
import { InfoCharacter } from '../interface/info-characters-interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(characters: InfoCharacter[], page: number = 0, search: string = ""): InfoCharacter[] {
    
    if ( search.length === 0) {
      return characters.slice(page, page + 7);   
    
  }
  const filteredCharacters = characters.filter( character => character.name.includes (search) || character.type.includes(search) );
  return filteredCharacters.slice(page, page + 7);
}
}