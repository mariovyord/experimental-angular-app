import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { Country, NormalizedCountry } from './types';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    _countries: NormalizedCountry[] | undefined = undefined;

    constructor(private http: HttpClient) { }

    getCountries() {
        if (this._countries === undefined) {
            return this.http.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,capital,region,flag,population')
                .pipe(map(data => {
                    return data.map(country => ({
                        flag: country.flag,
                        name: country.name.common,
                        capital: country.capital.join(', '),
                        region: country.region,
                        population: country.population,
                    })).sort((a, b) => a.name.localeCompare(b.name)) as NormalizedCountry[]
                }),
                    tap(data => this._countries = data));
        } else {
            return of(this._countries);
        }
    }
}
