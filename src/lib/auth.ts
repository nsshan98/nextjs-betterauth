import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  session: {
    cookieCache: {
        enabled: true,
        maxAge: 60 * 1 // 1 minute
    }
  },
  plugins: [nextCookies()]
});