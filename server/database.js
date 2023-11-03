import mysql2 from "mysql2"

const database = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "numeron",
})

export {database};