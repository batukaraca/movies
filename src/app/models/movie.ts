export class Movies {
    id!: number;
    title!: string;
    poster_path!: string;
    release_date!: string;
    overview! : string;
    genres!: [{name:string}];
    tagline!: string;
    production_companies!: [{logo_path:string, name:string}];
}