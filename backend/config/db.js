import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10),
});


async function connectWithRetry(retries = 15, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      await pool.connect();
      console.log('PostgreSQL connected ✅');
      return;
    } catch (err) {
      console.error(`PostgreSQL connection failed (attempt ${i + 1}/${retries})`, err.code || err.message);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  console.error('Could not connect to PostgreSQL after multiple attempts ❌');
  process.exit(1); 
}

connectWithRetry();

export default pool;
