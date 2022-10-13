import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from "rxjs/operators";
import { Country } from './types';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    _countries: Country[] | null = null;

    constructor(private http: HttpClient) { }

    getCountries() {
        if (this._countries === null) {
            return this.http.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,capital,region,flag,population,currency')
                .pipe(tap(data => this._countries = data));
        } else {
            return of(this._countries);
        }
    }
}
