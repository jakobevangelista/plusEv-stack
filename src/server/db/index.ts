import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env.mjs";
import * as schema from "./schema";

const client = new Client({
  url: env.DATABASE_URL,
});

export const db = drizzle(client, { schema });

// export const db = drizzle(
//   new Client({
//     url: env.DATABASE_URL,
//   }).connection(),
//   { schema },
// );
