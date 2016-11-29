export class Card {
	id: string;
	author: string;
	text: string;

	constructor(data){
		this.id = data.id;
		this.author = data.author || 'Anonymous';
		this.text = data.text || 'New Card';
	}
}
