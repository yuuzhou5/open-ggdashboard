import { defineConfig } from "drizzle-kit";

import { env } from "@/lib/env";

export default defineConfig({
  casing: "camelCase",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: "postgresql",
  out: "./src/server/database/migrations",
  schema: "./src/server/database/schemas/*.schema.ts",
});
