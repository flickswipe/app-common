import { Subjects } from "./subjects";
import { RelationshipType } from "./types/relationship";

export interface RelationshipCreatedEvent {
  subject: Subjects.RelationshipCreated;
  data: {
    id: string;
    relationshipType: RelationshipType;
    sourceUserId: string;
    targetUserId: string;
  };
}
