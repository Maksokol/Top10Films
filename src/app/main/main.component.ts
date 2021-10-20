import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {
  search = new FormControl('');

  getFilteredFilms() {
    return this.SCard.Cards.filter(t => t.Name.toLowerCase().includes(this.search.value.toLowerCase()));
  }

  constructor(private SCard: CardService) {
  }

  ngOnInit(): void {

  }

}
