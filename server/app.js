require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const { json } = require('body-parser');

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});