import { Subjects } from "./subjects";
import { InterestType } from "./types/interest";

export interface MediaItemRatedEvent {
  subject: Subjects.MediaItemRated;
  data: {
    id: string;
    user: string;
    interestType: InterestType;
    rating: number;
    updatedAt: Date;
  };
}
