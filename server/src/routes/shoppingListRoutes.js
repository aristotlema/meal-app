const express = require('express');
const router = express.Router();
const { ShoppingList } = require('../models');

router.get('/', async (req, res) => {
	res.send('Welcome to the route');
});

// POST - CREATE
router.post('/', async (req, res) => {
	const { title, date_start, date_end } = req.body;
	try {
		const shoppingList = await ShoppingList.create({
			title: title,
			date_start: date_start,
			date_end: date_end,
		});
		res.status(201).json(shoppingList);
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});

module.exports = router;
