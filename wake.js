require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

async function wakeDB() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`SELECT version()`;
    console.log("Neon DB is awake:", result[0].version);
  } catch (err) {
    console.error("Error waking database:", err);
  }
}

wakeDB();
