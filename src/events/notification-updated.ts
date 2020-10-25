import { Subjects } from "./subjects";

export interface NotificationUpdatedEvent {
  subject: Subjects.NotificationUpdated;
  data: {
    id: string;
    read: true;
  };
}
