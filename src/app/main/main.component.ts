import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {


  getFilteredFilms(search: string) {
    return this.SCard.Cards.filter(t => t.Name.toLowerCase().includes(search));
  }

  getFilmIndex(id: number) {
    return this.SCard.Cards.findIndex(t => t.Id == id)
  }

  constructor(private SCard: CardService) {
  }

  ngOnInit(): void {

  }

}
