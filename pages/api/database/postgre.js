import pg from "pg"

const pool =new pg.Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL
})


export default pool;