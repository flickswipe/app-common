export enum Subjects {
  // auth
  UserCreated = "user:created",
  UserUpdatedEmail = "user:updated:email",
  EmailTokenCreated = "email-token:created",

  // ingest
  MediaItemUpdated = "media-item:updated",
  MediaItemDestroyed = "media-item:destroyed",
  GenreDetected = "genre:detected",

  // notify
  NotificationCreated = "notification:created",
  NotificationUpdated = "notification:updated",

  // user
  UserUpdatedSetting = "user:updated:setting",
  RelationshipUpdated = "relationship:updated"
}
