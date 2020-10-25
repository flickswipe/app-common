export enum Subjects {
  // auth
  UserCreated = "user:created",
  UserUpdatedEmail = "user:updated:email",
  EmailTokenCreated = "email-token:created",

  // catalog
  MediaItemJudged = "media-item:categorixed",
  MediaItemRated = "media-item:rated",

  // ingest
  MediaItemUpdated = "media-item:updated",
  MediaItemDestroyed = "media-item:destroyed",
  GenreDetected = "genre:detected",

  // notify
  NotificationCreated = "notification:created",
  NotificationUpdated = "notification:updated",

  // predict-rating
  UserMediaItemRatingPredicted = "user:media-item:rating:predicted",

  // social
  RelationshipCreated = "relationship:created",
  RelationshipUpdated = "relationship:updated",
  RelationshipDestroyed = "relationship:destroyed",

  // user
  UserUpdatedSetting = "user:updated:setting",
}
