import { Component } from '@angular/core';
import { MovieService } from '@movies/movie';
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'movies-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	providers: [
		RxState
	]
})
export class AppComponent {

	movies$ = this.state.select('results');

	constructor(private readonly movieService: MovieService,
				private readonly state: RxState<any>) {
		this.state.connect('results', this.movieService.getMovies())
	}


}
