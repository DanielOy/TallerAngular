import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private baseUrl: string = 'https://api.jikan.moe/v4';

    constructor(private http: HttpClient) { }

    search(name: string) {
        name = name.replace(' ', '%20');
        return this.http.get(this.baseUrl + '/anime?sfw=true&page=1&q=' + name);
    }

    getById(id: number){
        return this.http.get(`${this.baseUrl}/anime/${id}`)
    }
}