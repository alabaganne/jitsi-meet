const { createConnection } = require('mysql');

const connection = createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect((err) => {
	if (err) {
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});

export default connection;