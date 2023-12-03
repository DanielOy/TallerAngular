import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JikanService } from '../../jikan.service';
import { Anime } from 'src/app/shared/models/anime.model';
import { FavoriteStorageService } from '../../favorite-storage.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild("searchInput", { static: false }) searchInput!: ElementRef;
  protected results: Anime[] = [];

  constructor(private searchService: JikanService,
    private favoriteService: FavoriteStorageService) {
  }

  ngOnInit(): void {
    const previousSearch = localStorage.getItem('lastSearch');
    if (previousSearch) {
      this.results = JSON.parse(previousSearch);
      this.results = this.results.map(x => {
        const is_favorite = this.favoriteService.isAnimeFavorite(x.mal_id);
        return { ...x, is_favorite }
      })
    }
  }

  search() {
    const name = this.searchInput.nativeElement.value;
    this.searchService.search(name).subscribe(results => {
      this.results = results;
      localStorage.setItem('lastSearch', JSON.stringify(this.results));
    });
  }
}
