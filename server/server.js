const dotenv = require('dotenv');
const express = require('express');
const { sequelize } = require('./src/models');

dotenv.config();
const app = express();
app.use(express.json());

const shoppingListRouter = require('./src/routes/shoppingListRoutes');
app.use('/shoppinglist', shoppingListRouter);

const port = process.env.SERVER_PORT || 4000;

app.listen({ port: port }, async () => {
	console.log('Runnin on port', port);
	try {
		await sequelize.authenticate();
		console.log('Connected to Database successfully');
	} catch (err) {
		console.error('Connection to Database failed', err);
	}
});
