import { Subjects } from "./subjects";
import { InterestType } from "./types/interest";

export interface MediaItemJudgedEvent {
  subject: Subjects.MediaItemJudged;
  data: {
    mediaItem: string;
    user: string;
    interestType: InterestType;
    updatedAt: Date;
  };
}
