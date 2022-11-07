import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoCharacterService } from 'src/app/services/info-character.service';
import { InfoCharacter } from '../../interface/info-characters-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public characters: InfoCharacter[] = [];
  empty: string = 'No aplica';
  public page: number = 0;
  public searchTerm: string = '';
  public hide: boolean = false;

  constructor(
    private route: Router,
    private _infoCharacter: InfoCharacterService
  ) {}

  ngOnInit(): void {
    this._infoCharacter.cargarInfo(this.searchTerm).subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nextPage() {
    this.page += 7;
  }

  prevPage() {
    if (this.page > 0) this.page -= 7;
  }
  onSearchCharacters(search: string) {
    this.page = 0;
    this.searchTerm = search;
    console.log(search);
  }

  showData() {
    return (this.hide = true);
  }
  hideData() {
    return (this.hide = false);
  }
}
