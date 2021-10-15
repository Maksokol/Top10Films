import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component'
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngbd-modal-img',
  template: `
    <button class="card-img m-0 p-0 border-0" (click)="activeModal.dismiss('Cross click')"><img src="{{Img}}" alt="" class="card-img "/></button>
  `
})
export class NgbdModalImgComponent {
  @Input() Img:string;
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card;
  public Name: string ="";
  public Img: string = "";
  public ImgL: string = "";
  public Score: number = 0;
  public About: string = "";
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {}
  ChangeAbout( About:string){
    this.card.About=About;
  }
  openImage(){
    const modalRef = this.modalService.open(NgbdModalImgComponent);
    modalRef.componentInstance.Img = this.card.ImgL;
  }
}
