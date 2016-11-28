import {Component, OnInit, Input} from '@angular/core';
import {Card} from "../../models/card";

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	@Input()
	card: Card;

}
