import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import {CardService} from "./services/card/card.service";

@NgModule({
	declarations: [
		AppComponent,
		CardListComponent,
		CardComponent,
		NewCardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot()
	],
	providers: [CardService],
	bootstrap: [AppComponent],
	entryComponents: [NewCardComponent]
})
export class AppModule {
}
