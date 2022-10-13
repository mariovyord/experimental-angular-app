export interface Country {
    name: Name;
    capital: string[];
    region: string;
    flag: string;
    population: number;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: NativeName;
}

export interface NativeName {
    isl?: Isl;
}

export interface Isl {
    official?: string;
    common?: string;
}
