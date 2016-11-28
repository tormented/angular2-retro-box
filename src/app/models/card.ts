export class Card {
	id: number;
	author: string;
	text: string;

	constructor(data){
		this.id = data.id;
		this.author = data.author || 'Anonymous';
		this.text = data.text || 'New Card';
	}
}
