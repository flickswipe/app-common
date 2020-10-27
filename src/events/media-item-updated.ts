import { Subjects } from "./subjects";

export interface MediaItemUpdatedEvent {
  subject: Subjects.MediaItemUpdated;
  data: {
    id: string;
    tmdbMovieId: number;
    imdbId: string;
    title: string;
    images: { poster: string; backdrop: string };
    rating: {
      average: number;
      count: number;
      popularity: number;
    };
    language: string;
    releaseDate: Date;
    runtime: number;
    plot: string;
    streamLocations: {
      [key: string]: {
        name: string;
        url: string;
      }[];
    };
    updatedAt: Date;
  };
}
