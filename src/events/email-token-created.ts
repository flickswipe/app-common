import { EmailTokenType } from "./types/email-token";
import { Subjects } from "./subjects";

export interface EmailTokenCreatedEvent {
  subject: Subjects.EmailTokenCreated;
  data: {
    id: string;
    emailTokenType: EmailTokenType;
    email: string;
    url: string;
    token: string;
    expiresAt: Date;
  };
}
