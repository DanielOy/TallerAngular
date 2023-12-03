import { Component, OnInit } from '@angular/core';
import { JikanService } from '../../jikan.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Anime } from 'src/app/shared/models/anime.model';
import { FavoriteStorageService } from '../../favorite-storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  protected anime?: Anime;
  protected secureUrl?: any;

  constructor(private searchService: JikanService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private favoriteService: FavoriteStorageService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.searchService.getById(+id).subscribe(anime => {
        this.anime = anime;
        this.sanitizeUrl(anime.trailer)
      });
  }

  sanitizeUrl(url?: string) {
    if (url)
      this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleFavorites() {
    if (this.anime) {
      this.anime.is_favorite = !this.anime.is_favorite;

      if (this.anime.is_favorite)
        this.favoriteService.add(this.anime.mal_id);
      else
        this.favoriteService.remove(this.anime.mal_id);
    }
  }
}
