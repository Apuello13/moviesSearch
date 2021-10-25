import { Component, Input } from "@angular/core";
import { Movie } from "../models/movie";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html'
})
export class GridMoviesComponent{
    @Input() movie : Movie = null;
}