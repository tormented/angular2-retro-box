import {Component} from '@angular/core';
import {CardListComponent} from "./components/card-list/card-list.component";
import {MdDialogRef, MdDialog} from "@angular/material";
import {NewCardComponent} from "./components/new-card/new-card.component";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	entryComponents: [CardListComponent, NewCardComponent]
})
export class AppComponent {
	dialogRef: MdDialogRef<NewCardComponent>;
	constructor(public dialog: MdDialog){}

	openDialog() {
		this.dialogRef = this.dialog.open(NewCardComponent, {
			disableClose: false
		});

		this.dialogRef.afterClosed().subscribe(result => {
			console.log('result: ' + result);
			this.dialogRef = null;
		});
	}
}
