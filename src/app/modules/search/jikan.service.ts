import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Anime } from 'src/app/shared/models/anime.model';
import { FavoriteStorageService } from './favorite-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  private baseUrl: string = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient,
    private favoriteService: FavoriteStorageService) { }

  search(name: string): Observable<Anime[]> {
    const fixedName = name.replace(' ', '%20');
    return this.http.get<Anime[]>(`${this.baseUrl}/anime?q=${fixedName}&sfw=true&page=1`).pipe(
      map((response: any) => {
        if (response && response.data) {
          return response.data.map((item: any) => {
            const is_favorite = this.favoriteService.isAnimeFavorite(item.mal_id);
            return {
              mal_id: item.mal_id,
              title: item.title,
              synopsis: item.synopsis,
              image: item?.images?.jpg?.image_url,
              trailer: item?.trailer?.embed_url,
              year: item.year,
              type: item.type,
              is_favorite
            }
          })
        }
        return [];
      })
    );
  }

  getById(id: number): Observable<Anime> {
    return this.http.get<Anime>(`${this.baseUrl}/anime/${id}`).pipe(
      map((item: any) => {
        const is_favorite = this.favoriteService.isAnimeFavorite(item.data.mal_id);
        return {
          mal_id: item.data.mal_id,
          title: item.data.title,
          synopsis: item.data.synopsis,
          image: item.data?.images?.jpg?.image_url,
          trailer: item.data?.trailer?.embed_url,
          year: item.data.year,
          type: item.data.type,
          is_favorite
        }
      })
    );
  }
}
