import {Component, OnInit} from '@angular/core';
import {MockItunesService} from "../mock-itunes.service";
import {Media, MediaResponse} from "../media-response";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  musicVideos: Media[];
  movies: Media[];

  constructor(private mediaService: MockItunesService) {
  }

  ngOnInit(): void {
    this.mediaService.getMusicVideosByArtist()
      .subscribe((data: MediaResponse) => {
        this.musicVideos = data.results;
      });

    this.mediaService.getMovies()
      .subscribe((data: MediaResponse) => {
        this.movies = data.results;
      });
  }

}
