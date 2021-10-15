import { Component } from '@angular/core';
import {CardComponent} from "./card/card.component";

export interface Card{
  Name:string;
  Img:string;
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
  TCards : Card[]=  [
    {Name: "Джентльмены",Img: "./../assets/01s.webp",Score: 8.5,About: "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням"},
      {Name:"Операция «Колибри»",Img:"./../assets/02s.jpg",Score:6.5,About:"Братья тянут кабель между биржами, чтобы заработать миллионы. Остроумный триллер с блестящим актерским дуэтом"},
      {Name:"Достать ножи",Img:"./../assets/03s.webp",Score:8.0,About:"Частный детектив ведет запутанное дело о смерти известного писателя. Криминальная комедия с Дэниэлом Крэйгом"},
      {Name:"Последний министр",Img:"./../assets/04s.webp",Score:7.3,About:"Глава вымышленного министерства делает как лучше, а выходит как всегда. Комедия абсурда Романа Волобуева"},
      {Name:"Поступь хаоса ",Img:"./../assets/05s.jpg",Score:6.5,About:"На этой планете чужие мысли видны, словно ожившие картинки. Фантастический боевик с Томом Холландом"},
      {Name:"Зеленая книга",Img:"./../assets/06s.jpg",Score:8.4,About:"Путешествие итальянца-вышибалы и чернокожего пианиста. Комедия-лауреат премии «Оскар» за лучший фильм"},
      {Name:"Гнев человеческий",Img:"./../assets/07s.png",Score:7.7,About:"Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе"},
      {Name:"Топи",Img:"./../assets/08s.jpg",Score:7.0,About:"Молодые москвичи бегут от своих проблем в русскую глушь. Мистическая утопия Дмитрия Глуховского"},
      {Name:"Варкрафт",Img:"./../assets/09s.jpg",Score:7.6,About:"Альянс и орда схлестнулись в зрелищных боях за Азерот. Сын Дэвида Боуи экранизировал культовую онлайн-игру"},
      {Name:"Бегущий по лезвию 2049",Img:"./../assets/10s.jpg",Score:7.7,About:"Коп-репликант ищет Рика Декарда, пропавшего 30 лет назад. Красивый сиквел культового сай-фая от Дени Вильнёва"}
  ];
  //Cards : Array<CardComponent> =[];

  getFilteredFilms(search:string) {
    return this.TCards;//.filter(this.TCards.filter(t => t.Name.includes(search)));
  }








}


