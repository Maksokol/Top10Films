import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card;
  public Name: string ="";
  public Img: string = "";
  public Score: number = 0;
  public About: string = "";
  constructor() { }

  ngOnInit(): void {}
  ChangeAbout( About:string){
    this.card.About=About;
  }
}
