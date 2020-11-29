import { Subjects } from "./subjects";

export interface GenreUpdatedEvent {
  subject: Subjects.GenreUpdated;
  data: {
    id: string;
    tmdbGenreId: number;
    name: string;
    updatedAt: Date;
  };
}
