export class Tvs {
    id: number | undefined;
    name: string | undefined;
    poster_path: string | undefined;
    first_air_date: string | undefined;
    overview! : string;
    genres!: [{name:string}];
    tagline!: string;
    production_companies!: [{logo_path:string, name:string}];
}