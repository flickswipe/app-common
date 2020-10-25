import { Subjects } from "./subjects";

export interface UserMediaItemRatingPredictedEvent {
  subject: Subjects.UserMediaItemRatingPredicted;
  data: {
    user: string;
    mediaItem: string;
    predictedRating: number;
    certainty: number;
    updatedAt: Date;
  };
}
