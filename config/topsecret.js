//comes from index.js and reads the secrets
//i can change the scret in just here

module.exports = {
	pass: process.env.DB_URL,
	jwtSecret: process.env.JWT_SECRET || 'supersecret'
};
