import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    countries: any;
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
            error: (error) => {
                this.error = true;
                this.isLoading = false;
            }
        })
    }
}
