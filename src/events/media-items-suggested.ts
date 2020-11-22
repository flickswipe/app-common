import { Subjects } from "./subjects";

export interface MediaItemsSuggestedEvent {
  subject: Subjects.MediaItemsSuggested;
  data: {
    user: string;
    mediaItems: string[];
    clearExistingSuggestions?: boolean;
  };
}
