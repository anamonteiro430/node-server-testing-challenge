const Flowers = require('./model.js');

const router = require('express').Router();

router.get('/', (req, res) => {
	Flowers.all()
		.then(flowers => {
			res.status(200).json(flowers);
		})
		.catch(({ name, message, stack, code }) => {
			console.log({ name, message, stack, code });
			res.status(500).json({ name, message, stack, code });
		});
});

module.exports = router;
