export enum NotificationType {
  // Non-interrupting informational notification
  Message = "message",

  // Important, interrupting notification
  Alert = "alert",

  // User has categorized a media item as "interested"
  // which one or more of their relationships have also
  // categorized as "interested"
  Match = "match",
}
