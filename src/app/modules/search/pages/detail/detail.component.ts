import { Component } from '@angular/core';
import { SearchService } from '../../search.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  protected anime: any;
  protected safeUrl: any;

  constructor(private searchService: SearchService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    const id = route.snapshot.paramMap.get("id");
    if (id)
      this.searchService.getById(+id).subscribe((response: any) => {
        this.anime = response.data;
        if (response?.data?.trailer?.embed_url)
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.trailer.embed_url);
      })
  }


}
