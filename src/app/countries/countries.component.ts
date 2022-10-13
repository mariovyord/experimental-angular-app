import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountriesService } from './countries.service';
import { Country, NormalizedCountry } from './types';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    countries: NormalizedCountry[] | undefined = undefined;
    isLoading = true;
    error = false;
    displayedColumns: string[] = ['flag', 'name', 'capital', 'region', 'population'];
    dataSource: any;

    constructor(private countriesService: CountriesService) { }

    ngOnInit(): void {
        this.loadCountries();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    loadCountries() {
        this.countriesService.getCountries().subscribe({
            next: data => {
                this.countries = data;
                this.dataSource = new MatTableDataSource(this.countries);
                console.log(this.countries);
                this.isLoading = false;
            },
            error: () => {
                this.error = true;
                this.isLoading = false;
            }
        })
    }
}
