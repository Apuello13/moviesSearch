import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function HandleHttpError(error : HttpErrorResponse){
    return throwError('Upps, se ha presentando un incoveniente :c');
}