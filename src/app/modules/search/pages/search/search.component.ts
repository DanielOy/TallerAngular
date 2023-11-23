import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  protected info: any;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    const json = localStorage.getItem("lastResults");
    if (json)
      this.info = JSON.parse(json);
  }

  search() {
    if (this.searchInput) {
      const name = this.searchInput.nativeElement.value;
      this.searchService.search(name).subscribe(response => {
        this.info = response;
        localStorage.setItem("lastResults", JSON.stringify(response))
      });
    }
  }
}
