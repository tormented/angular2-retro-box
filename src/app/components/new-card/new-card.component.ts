import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {CardService} from "../../services/card/card.service";
import {Card} from "../../models/card";

@Component({
	selector: 'new-card',
	templateUrl: './new-card.component.html',
	styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<NewCardComponent>, public cardService: CardService) {
	}

	ngOnInit() {
	}

	isAnonymous: boolean = false;
	author: string;
	text: string;


	postCard(){
		this.cardService.addNewCard(new Card({id: '5', author: this.isAnonymous ? null : this.author, text: this.text}))
		this.dialogRef.close('yes');
	}
}
