//MODULES
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
//COMPONETS
import { GridMoviesComponent } from "./grid-movies/grid.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        HomeComponent,
        GridMoviesComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule
    ]
})
export class CoreModule{}