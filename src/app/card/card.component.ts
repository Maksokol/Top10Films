import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../module/card";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../card.service";

@Component({
  selector: 'ngbd-modal-img',
  template: `
    <button class="card-img m-0 p-0 border-0" (click)="activeModal.dismiss('Cross click')"><img src="{{Img}}" alt=""
                                                                                                class="card-img "/>
    </button>
  `
})
export class NgbdModalImgComponent {
  @Input() Img: string;

  constructor(public activeModal: NgbActiveModal) {
  }
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  public Id: number = -1;
  public Name: string = "";
  public Img: string = "";
  public ImgL: string = "";
  public Score: number = 0;
  public About: string = "";

  constructor(
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    private SCard: CardService
  ) {

  }

  ngOnInit(): void {
    if (this.SCard.Cards != undefined && this.activeRoute.snapshot.params['id'] != undefined)
      this.card = this.SCard.Cards[this.SCard.Cards.findIndex(t => t.Id == this.activeRoute.snapshot.params['id'])];
  }

  edit() {
    this.SCard.edit(this.card);
    this.card = this.SCard.Cards[this.card.Id];
  }

  openImage() {
    const modalRef = this.modalService.open(NgbdModalImgComponent);
    modalRef.componentInstance.Img = this.card.ImgL;
  }
}

