import { Component } from '@angular/core';

export interface Card{
  Id:number;
  Name:string;
  Img:string;
  ImgL:string;
  Score:number;
  About:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Top10Films';








}


