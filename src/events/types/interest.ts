export enum InterestType {
  // User is interested in consuming the media item in the future
  Interested = "interested",

  // User is not interested in consuming the media item right now
  Uninterested = "uninterested",

  // User has already consumed the media item
  Consumed = "consumed",

  // User never wants to see this media item again
  Never = "never",
}
