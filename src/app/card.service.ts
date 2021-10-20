import {Injectable} from '@angular/core';
import {Card} from "./module/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public Cards: Card[] = [
    {
      Id: 1,
      Name: "Джентльмены",
      Img: "./../assets/01s.webp",
      ImgL: "./../assets/01l.jpg",
      Score: 8,
      About: "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням"
    },
    {
      Id: 2,
      Name: "Операция «Колибри»",
      Img: "./../assets/02s.jpg",
      ImgL: "./../assets/02l.jpg",
      Score: 6,
      About: "Братья тянут кабель между биржами, чтобы заработать миллионы. Остроумный триллер с блестящим актерским дуэтом"
    },
    {
      Id: 3,
      Name: "Достать ножи",
      Img: "./../assets/03s.webp",
      ImgL: "./../assets/03l.jpg",
      Score: 8,
      About: "Частный детектив ведет запутанное дело о смерти известного писателя. Криминальная комедия с Дэниэлом Крэйгом"
    },
    {
      Id: 4,
      Name: "Последний министр",
      Img: "./../assets/04s.webp",
      ImgL: "./../assets/04l.jpg",
      Score: 7,
      About: "Глава вымышленного министерства делает как лучше, а выходит как всегда. Комедия абсурда Романа Волобуева"
    },
    {
      Id: 5,
      Name: "Поступь хаоса ",
      Img: "./../assets/05s.jpg",
      ImgL: "./../assets/05l.jpg",
      Score: 6,
      About: "На этой планете чужие мысли видны, словно ожившие картинки. Фантастический боевик с Томом Холландом"
    },
    {
      Id: 6,
      Name: "Зеленая книга",
      Img: "./../assets/06s.jpg",
      ImgL: "./../assets/06l.jpg",
      Score: 8,
      About: "Путешествие итальянца-вышибалы и чернокожего пианиста. Комедия-лауреат премии «Оскар» за лучший фильм"
    },
    {
      Id: 7,
      Name: "Гнев человеческий",
      Img: "./../assets/07s.png",
      ImgL: "./../assets/07l.jpg",
      Score: 7,
      About: "Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе"
    },
    {
      Id: 8,
      Name: "Топи",
      Img: "./../assets/08s.jpg",
      ImgL: "./../assets/08l.jpg",
      Score: 7,
      About: "Молодые москвичи бегут от своих проблем в русскую глушь. Мистическая утопия Дмитрия Глуховского"
    },
    {
      Id: 9,
      Name: "Варкрафт",
      Img: "./../assets/09s.jpg",
      ImgL: "./../assets/09l.jpg",
      Score: 7,
      About: "Альянс и орда схлестнулись в зрелищных боях за Азерот. Сын Дэвида Боуи экранизировал культовую онлайн-игру"
    },
    {
      Id: 10,
      Name: "Бегущий по лезвию 2049",
      Img: "./../assets/10s.jpg",
      ImgL: "./../assets/10l.jpg",
      Score: 7,
      About: "Коп-репликант ищет Рика Декарда, пропавшего 30 лет назад. Красивый сиквел культового сай-фая от Дени Вильнёва"
    }
  ];

  constructor() {
  }

  edit(card: Card) {
    this.Cards[this.Cards.findIndex(t => t.Id === card.Id)] = card;
  }

  isExist(id: number) {
    let i = this.Cards.findIndex(t => t.Id == id);
    return (i != -1);
  }
}
