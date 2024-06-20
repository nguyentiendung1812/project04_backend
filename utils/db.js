const mssql = require("mssql");

// Configuration object for mssql
const config = {
    user: 'sa',
    password: '123456a@',
    server: 'localhost',
    database: 'QuanLyNoiThat',
    options: {
        encrypt: true, // Use encryption if required
        trustServerCertificate: true // Change to true for development / self-signed certs
    }
};

// Create a connection pool
const poolPromise = new mssql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = {
    mssql,
    poolPromise
};
