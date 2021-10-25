import { Component } from "@angular/core";
import { Movie } from "../models/movie";
import { MovieService } from "../services/movie.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent{
    name : string = "";
    movie : Movie = null;
    constructor(private _movie : MovieService){}

    search(){
        const name = this.name.replace(' ', '+');
        this._movie.getMovieByName(name)
            .subscribe(response => {
                this.movie = response;
            }, badRequest => {
                console.log(badRequest);
            })
    }
}