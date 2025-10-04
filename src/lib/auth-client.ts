import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://just-pd-backend-api-v1.onrender.com/api",

  endpoints: {
    signIn: {
      email: "/login",
    },
  },
});

export const { signIn } = authClient
