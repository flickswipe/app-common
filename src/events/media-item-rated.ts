import { Subjects } from "./subjects";

export interface MediaItemRatedEvent {
  subject: Subjects.MediaItemRated;
  data: {
    mediaItem: string;
    user: string;
    rating: number;
    updatedAt: Date;
  };
}
