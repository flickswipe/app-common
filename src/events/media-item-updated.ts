import { Subjects } from "./subjects";

export interface MediaItemUpdatedEvent {
  subject: Subjects.MediaItemUpdated;
  data: {
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
