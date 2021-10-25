import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
//ENVIROMENTS
import { environment } from '../../../environments/environment';
//MODEL
import { Movie } from "../models/movie";
//ERROR
import { HandleHttpError } from "../utils/HandleHttpError";

@Injectable({ providedIn: 'root' })
export class MovieService{
    constructor(private http : HttpClient){}

    getMovieByName(name : string){
        return this.http.get<Movie>(`${environment.apiUrl}t=${name}&apikey=${environment.apiKey}`)
            .pipe(catchError(HandleHttpError));
    }
}