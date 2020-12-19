export enum Subjects {
  // auth
  UserCreated = "user:created",
  UserUpdatedEmail = "user:updated:email",
  UserReferred = "user:referred",
  EmailTokenCreated = "email-token:created",

  // ingest
  MediaItemUpdated = "media-item:updated",
  MediaItemDestroyed = "media-item:destroyed",
  GenreUpdated = "genre:updated",

  // notify
  NotificationCreated = "notification:created",
  NotificationUpdated = "notification:updated",

  // survey
  MediaItemRated = "media-item:rated",

  // predict
  MediaItemsSuggested = "media-items:suggested",

  // user
  UserUpdatedSetting = "user:updated:setting",
  RelationshipUpdated = "relationship:updated",
}
