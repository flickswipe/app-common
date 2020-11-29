import { Subjects } from "./subjects";
import { iso6391 } from "../iso6391";

export interface MediaItemUpdatedEvent {
  subject: Subjects.MediaItemUpdated;
  data: {
    id: string;
    tmdbMovieId: number;
    imdbId: string;
    title: string;
    genres: number[];
    images: {
      poster: string;
      backdrop: string;
    };
    rating: {
      average: number;
      count: number;
      popularity: number;
    };
    audioLanguage: iso6391;
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
