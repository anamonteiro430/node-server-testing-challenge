/* const Flowers = require('./model.js');
 */
const router = require('express').Router();

router.get('/', (req, res) => {
	console.log(process.env.DB_URL);
	res.status(200).json({ flowers: 'lots' });
});

module.exports = router;
