import { Injectable } from '@angular/core';
import {Card} from "./app.component";
@Injectable({
  providedIn: 'root'
})
export class CardService {
  public data: Card[];
  constructor() { }


  edit(card : Card){
    this.data[this.data.findIndex(t=>t.Id===card.Id)] = card;
  }
}
