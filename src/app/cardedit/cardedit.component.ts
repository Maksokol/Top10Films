import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Card} from "../module/card";
import {CardService} from "../card.service";
import {EditGuard} from "../edit.guard";

@Component({
  selector: 'app-cardedit',
  templateUrl: './cardedit.component.html',
  styleUrls: ['./cardedit.component.css'],
  providers: [EditGuard],

})
export class CardeditComponent implements OnInit {
  card: Card = {Id: -1, Name: "", Img: "", ImgL: "", Score: 0, About: ""};

  constructor(private activeRoute: ActivatedRoute,
              private SCard: CardService,
              private Router: Router,
  ) {
    if (this.SCard.Cards != undefined && this.activeRoute.snapshot.params['id'] != undefined)
      Object.assign(this.card, this.SCard.Cards[this.SCard.Cards.findIndex(t => t.Id == this.activeRoute.snapshot.params['id'])])
  }



  edit() {
    this.SCard.edit(this.card);
    this.Router.navigate(['/']);
  }

  gohome() {
    this.Router.navigate(['/']);
  }

  ngOnInit(): void {

  }

}
