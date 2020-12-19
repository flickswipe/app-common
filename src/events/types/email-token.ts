export enum EmailTokenType {
  // Token validates a sign-in attempt
  SignIn = "sign-in",

  // Token validates an email change attempt
  AddEmail = "add-email",

  // Token validates an invite
  Invite = "invite",
}
