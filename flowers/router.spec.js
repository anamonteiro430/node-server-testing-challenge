const request = require('supertest');
const server = require('./../api/server.js');

describe('flowers router', function() {
	it('test are running', function() {
		expect(true).toBe(true);
	});

	describe('GET /api/flowers', function() {
		it('should return status 200 OK', function() {
			return request(server)
				.get('/api/flowers')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return flowers as the router value', function() {
			return request(server)
				.get('/api/flowers')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/flowers')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of flowers(async version)', async function() {
			const res = await request(server).get('/api/flowers');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});
