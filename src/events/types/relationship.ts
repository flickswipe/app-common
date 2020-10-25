export enum RelationshipType {
  // User has requested relationship, but target has not accepted
  Pending = "pending",

  // User has requested relationship, and target has accepted
  Accepted = "accepted",

  // User has blocked target
  Blocked = "blocked",
}
