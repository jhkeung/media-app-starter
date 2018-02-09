export class MediaResponse {
  resultCount: number;
  results: Media[];
}

export class Media {
  artistId: number;
  artistName: string;
  kind: string; // music-video, song
  previewUrl: string;
  artworkUrl100: string;
  releaseDate: Date;
  trackPrice: number;
  collectionPrice: number;
  trackName: string;
}
