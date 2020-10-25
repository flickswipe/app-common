import { Subjects } from "./subjects";

export interface GenreDetectedEvent {
  subject: Subjects.GenreDetected;
  data: {
    id: string;
    name: string;
    language: string;
    detectedAt: Date;
  };
}
