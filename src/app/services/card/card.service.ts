import {Injectable} from '@angular/core';
import {Card} from "../../models/card";

@Injectable()
export class CardService {

	constructor() {
	}

	private list: Array<Card> = [
		new Card({id: 1, author: 'test1', text: 'test text'}),
		new Card({id: 2, author: 'Tormented', text: 'Everything is fine'}),
		new Card({id: 3})
	];

	getCardList(){
		return this.list;
	}

}
