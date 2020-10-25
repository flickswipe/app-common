import { Subjects } from "./subjects";

export interface NotificationCreatedEvent {
  subject: Subjects.NotificationCreated;
  data: {
    id: string;
    user: string;
    mesage: string;
    createdOn: Date;
  };
}
