import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    _countries: any = null;

    constructor(private http: HttpClient) { }

    getCountries() {
        if (this._countries === null) {
            return this.http.get('https://restcountries.com/v3.1/all?fields=name,capital,region,flag,population,currency')
                .pipe(tap(data => this._countries = data));
        } else {
            return of(this._countries);
        }
    }
}
