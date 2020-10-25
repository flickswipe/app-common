import { Subjects } from "./subjects";
import { RelationshipType } from "./types/relationship";

export interface RelationshipUpdatedEvent {
  subject: Subjects.RelationshipUpdated;
  data: {
    id: string;
    relationshipType: RelationshipType;
    sourceUserId: string;
    targetUserId: string;
    updatedAt: Date;
  };
}
