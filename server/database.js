import mysql2 from "mysql2"

const database = mysql2.createConnection({
    host: "localhost",
    user: "8ReTid8",
    database: "numeron",
})

export {database};