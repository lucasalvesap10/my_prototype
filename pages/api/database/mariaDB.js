import mariadb from 'mariadb'

require("dotenv").config();

const POOL=mariadb.createPool({
    user:process.env.DB_LOCAL_USER,
    host:process.env.DB_LOCAL_HOST,
    port:process.env.DB_LOCAL_PORT,
    database:process.env.DB_LOCAL_NAME,
    password:process.env.DB_LOCAL_PASSWORD
})