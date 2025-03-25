export interface Dog {
    id: string;
    img: string;
    name: string;
    age: number;
    zip_code: string;
    breed: string;
}

export interface SearchFields {
    ageMin?: number | string,
    ageMax?: number | string,
    zipCodes?: number | string,
    breeds?: string[]
}

export enum SortType {
    ASC_BREED = 'ASC_BREED',
    DESC_BREED = 'DESC_BREED',
    ASC_AGE = 'ASC_AGE',
    DESC_AGE = 'DESC_AGE',
    ASC_NAME = 'ASC_NAME',
    DESC_NAME = 'DESC_NAME',
}