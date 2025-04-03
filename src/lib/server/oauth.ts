import { Google } from "arctic";

export const google = new Google(
  // @ts-expect-error: possible null
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.APPLICATION_URL}/login/google/callback`
);

