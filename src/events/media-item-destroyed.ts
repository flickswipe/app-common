import { Subjects } from "./subjects";

export interface MediaItemDestroyedEvent {
  subject: Subjects.MediaItemDestroyed;
  data: {
    id: string;
  };
}
