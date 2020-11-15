import { Subjects } from "./subjects";
import { RelationshipUpdateType } from "./types/relationship";

export interface RelationshipUpdatedEvent {
    subject: Subjects.RelationshipUpdated;
    data: {
        relationshipUpdateType: RelationshipUpdateType;
        sourceUserId: string;
        targetUserId: string;
        updatedAt: Date;
    };
}
