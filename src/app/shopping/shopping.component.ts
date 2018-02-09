import {Component, OnInit} from '@angular/core';
import {MockItunesService} from "../mock-itunes.service";
import {Media, MediaResponse} from "../media-response";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  media: Media[];
  totalCount: number;

  constructor(private mediaService: MockItunesService) {

  }

  ngOnInit(): void {
    this.mediaService.getMusicVideosByArtist()
      .subscribe((data: MediaResponse) => {
        this.media = data.results;
        this.totalCount = data.resultCount;
      });
  }

}
