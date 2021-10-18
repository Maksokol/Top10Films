import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../app.component";
import {CardService} from "../card.service";
@Component({
  selector: 'app-cardedit',
  templateUrl: './cardedit.component.html',
  styleUrls: ['./cardedit.component.css'],

})
export class CardeditComponent implements OnInit {
  card : Card =  {Id: -1, Name: "",Img: "", ImgL: "",Score: 0,About: ""};

  constructor(private activeRoute: ActivatedRoute,
              private SCard:CardService,
              private Router:Router,
              ) {
    if (this.SCard.data != undefined && this.activeRoute.snapshot.params['id'] != undefined)
      this.card=this.SCard.data[this.SCard.data.findIndex(t=>t.Id==this.activeRoute.snapshot.params['id'])];
  }
  edit(Ab:string){
    this.card.About=Ab;
    this.SCard.edit(this.card);
  }
  get(name:any){
    name.value = this.card.Name;
  }
  gohome(){
    this.Router.navigate(['/']);
  }
  ngOnInit(): void {

  }

}
