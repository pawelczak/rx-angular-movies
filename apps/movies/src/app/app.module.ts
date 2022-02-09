import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieModule } from '@movies/movie';
import { LetModule } from '@rx-angular/template';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		MovieModule,
		LetModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

