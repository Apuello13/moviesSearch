import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { GridMoviesComponent } from "./grid-movies/grid.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        HomeComponent,
        GridMoviesComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HomeComponent,
        GridMoviesComponent
    ]
})
export class CoreModule{}