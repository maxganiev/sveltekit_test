import mysql from 'mysql2/promise';

export const mysqlconn = await mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'elcomspb',
	keepAliveInitialDelay: 1000000,
	enableKeepAlive: true,
});
