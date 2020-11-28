import { iso6391 } from "../iso6391";
import { Subjects } from "./subjects";

export interface GenreDetectedEvent {
  subject: Subjects.GenreDetected;
  data: {
    tmdbGenreId: string;
    name: string;
    language: iso6391;
    detectedAt: Date;
  };
}
