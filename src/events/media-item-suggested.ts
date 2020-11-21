import { Subjects } from "./subjects";

export interface MediaItemSuggestedEvent {
    subject: Subjects.MediaItemSuggested;
    data: {
        user: string;
        mediaItem: string;
    };
}
