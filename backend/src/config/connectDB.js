import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

console.log('connect to mysql');
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    database: process.env.DATABASE_NAME || '',
});

export default pool