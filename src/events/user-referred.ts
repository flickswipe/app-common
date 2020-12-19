import { Subjects } from './subjects';

export interface UserReferredEvent {
  subject: Subjects.UserReferred;
  data: {
    id: string;
    referredById: string;
  };
}
