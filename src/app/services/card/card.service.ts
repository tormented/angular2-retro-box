import {Injectable} from '@angular/core';
import {Card} from "../../models/card";

@Injectable()
export class CardService {

	constructor() {}

	private list: Array<Card> = [
		new Card({id: '1', author: 'test1', text: 'test text'}),
		new Card({id: '2', author: 'Tormented', text: 'Everything is fine'}),
		new Card({id: '3', text: 'Lorem impsum'}),
		new Card({id: '4'})
	];

	getCardList(): Promise<Card[]>{
		return Promise.resolve(this.list);
	}

	addNewCard(card: Card){
		this.list.push(card);
		console.log(this.list);

	}

}
