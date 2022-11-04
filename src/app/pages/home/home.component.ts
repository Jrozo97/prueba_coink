import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  public search: string = "";

  constructor(
    private route: Router,
    private _infoCharacter: InfoCharacterService
  ) {}

  ngOnInit(): void {
    this._infoCharacter.cargarInfo(this.search).subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nextPage() {
    this.page +=5;
  }

  prevPage() {
    if( this.page > 0)
      this.page -=5;
  }
  onSearchCharacters( search: string ){
    this.page = 0;
    this.search = search;
  }
}
