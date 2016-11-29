import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card/card.service";
import {Card} from "../../models/card";
import {CardComponent} from "../card/card.component";

@Component({
	selector: 'card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.css'],
	providers: [CardService],
	entryComponents: [CardComponent]
})
export class CardListComponent implements OnInit {

	constructor(private cardService: CardService) {
	}

	ngOnInit() {
		this.getCardList();
	}

	getCardList(){
		this.cardService.getCardList().then(cards => this.cards = cards);
	}

	public cards: Array<Card> = [];


}
