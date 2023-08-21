const router = require('epxress').Router();
const connection = require('../connection');

router.get('/', (req, res) => {
	connection.query('SELECT * FROM meet', (err, results) => {
		if (err) {
			res.status(500).send('Error retrieving data from database');
		} else {
			res.json(results);
		}
	});
});