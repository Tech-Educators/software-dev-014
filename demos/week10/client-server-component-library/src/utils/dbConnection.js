import pg from "pg";

export function connect() {
  const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
  const db = new pg.Pool({
    connectionString: connectionString,
  });
  return db;
}

export const db = connect();
