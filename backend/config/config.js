import dotenv from 'dotenv';
import crypto from 'crypto';

// Load environment variables
dotenv.config();

export const port = process.env.PORT || 5000;
export const databaseURL = process.env.DATABASE_URL;

// Generate a secure random JWT secret if not provided in the .env file
export const jwtSecret = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

console.log('🔑 JWT Secret:', jwtSecret);
