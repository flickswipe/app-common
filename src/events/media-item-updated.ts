import { Subjects } from "./subjects";

export interface MediaItemUpdatedEvent {
  subject: Subjects.MediaItemUpdated;
  data: {
    id: string;
    tmdbMovieId: number;
    imdbId: string;
    title: string;
    genres: string[];
    images: {
      poster: string;
      backdrop: string;
    };
    rating: {
      average: number;
      count: number;
      popularity: number;
    };
    audioLanguage: string;
    releaseDate: Date;
    runtime: number;
    plot: string;
    streamLocations: {
      [key: string]: {
        id: string;
        name: string;
        url: string;
      }[];
    };
    updatedAt: Date;
  };
}
