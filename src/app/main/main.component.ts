import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";
import {FormControl} from "@angular/forms";
import {Card} from "../module/card";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent implements OnInit {
  search = new FormControl('');
  filtered: Card[];

  getFilteredFilms() {
    this.filtered = this.SCard.Cards.filter(t => t.Name.toLowerCase().includes(this.search.value.toLowerCase()));
  }

  constructor(private SCard: CardService) {

  }

  ngOnInit(): void {
    this.getFilteredFilms();
    this.search.valueChanges.subscribe(value => this.getFilteredFilms());
  }

}
