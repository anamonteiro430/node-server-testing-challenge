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

router.post('/', (req, res) => {
	const body = req.body;
	console.log('body', req.body);

	Flowers.add(body)
		.then(flowers => {
			console.log('flowers', flowers);
			res.status(201).json(flowers);
		})
		.catch(({ name, message, stack, code }) => {
			console.log({ name, message, stack, code });
			res.status(500).json({ name, message, stack, code });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Flowers.remove(id)
		.then(removed => {
			console.log(removed);
			res.status(200).json(removed);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				message: 'Error deleting flower'
			});
		});
});

module.exports = router;
