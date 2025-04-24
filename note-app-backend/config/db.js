import { neon } from '@neondatabase/serverless'
import dotevn from 'dotenv'

dotevn.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

const sql = neon(
    // create sql connection using .evn variables
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// the function we export allows us to write SQL queries safely

export default sql