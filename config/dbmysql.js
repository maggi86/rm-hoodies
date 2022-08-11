const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbDatabasename,
    port: process.env.bdPort,
    multipleStatements: true
})

connection.connect((err) => {
    if(err) throw err
    console.log(`Getting data from database`)
})

module.exports = connection