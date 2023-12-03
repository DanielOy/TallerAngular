import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStorageService {
  private ids: number[] = [];

  constructor() {
    const data = localStorage.getItem('favorites');
    if (data)
      this.ids = JSON.parse(data);
  }

  add(id: number) {
    if (!this.ids.some(x => x == id)) {
      this.ids.push(id);
      this.saveChanges();
    }
  }

  remove(id: number) {
    if (this.ids.some(x => x == id)) {
      this.ids = this.ids.filter(x => x != id);
      this.saveChanges();
    }
  }

  isAnimeFavorite(id: number) {
    return this.ids.some(x => x == id);
  }

  private saveChanges() {
    localStorage.setItem('favorites', JSON.stringify(this.ids))
  }
}

