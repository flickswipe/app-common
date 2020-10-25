import { Subjects } from "./subjects";

export interface RelationshipDestroyedEvent {
  subject: Subjects.RelationshipDestroyed;
  data: {
    id: string;
  };
}
