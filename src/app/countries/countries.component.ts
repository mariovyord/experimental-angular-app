import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from './types';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    countries: Country[] | null;
    isLoading = true;
    error = false;

    constructor(private countriesService: CountriesService) { }

    ngOnInit(): void {
        this.loadCountries();
    }

    loadCountries() {
        this.countriesService.getCountries().subscribe({
            next: data => {
                this.countries = data;
                this.isLoading = false;
            },
            error: () => {
                this.error = true;
                this.isLoading = false;
            }
        })
    }
}
