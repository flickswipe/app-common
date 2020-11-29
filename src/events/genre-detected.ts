import { iso6391 } from "../iso6391";
import { Subjects } from "./subjects";

export interface GenreUpdatedEvent {
  subject: Subjects.GenreUpdated;
  data: {
    tmdbGenreId: number;
    name: string;
    language: iso6391;
    detectedAt: Date;
  };
}
