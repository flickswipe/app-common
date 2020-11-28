import { iso6391 } from "../iso6391";
import { Subjects } from "./subjects";

export interface GenreDetectedEvent {
  subject: Subjects.GenreDetected;
  data: {
    tmdbGenreId: number;
    name: string;
    language: iso6391;
    detectedAt: Date;
  };
}
