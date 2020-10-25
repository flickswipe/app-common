import { Subjects } from "./subjects";

export interface UserUpdatedEmailEvent {
  subject: Subjects.UserUpdatedEmail;
  data: {
    id: string;
    email: string;
    updatedAt: Date;
  };
}
