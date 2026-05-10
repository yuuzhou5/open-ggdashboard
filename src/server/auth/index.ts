import { apiKey } from "@better-auth/api-key";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env } from "../../lib/env";
import { db, schema } from "../database";

export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_URL,

  cookie: {
    sameSite: "none",
    secure: true,
  },

  database: drizzleAdapter(db, {
    camelCase: true,
    provider: "pg",
    schema,
    usePlural: true,
  }),

  plugins: [
    apiKey({
      rateLimit: {
        enabled: false,
      },
    }),
  ],

  secret: env.BETTER_AUTH_SECRET,

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
  },

  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },

  trustedOrigins: [
    "http://localhost:3000",
    "https://dashboard.yuudev.com.br",
    "https://ggmax.com.br",
    env.BETTER_AUTH_URL,
  ],

  user: {
    additionalFields: {},
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
