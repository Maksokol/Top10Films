import { Component } from '@angular/core';
import {FilmListComponent} from "./film-list/film-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Top10Films';
  List = new FilmListComponent();




}


