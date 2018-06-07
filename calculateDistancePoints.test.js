const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe ('calculateDistancePoints', () => {	
	it('normal - more then kPoint', () => {
		const actual = calculateDistancePoints(92, 'normal', 90);
		const expected = 64;
			
		assert.equal(actual, expected);
	});
	it('normal - less then kPoint', () => {
		const actual = calculateDistancePoints(85, 'normal', 90);
		const expected = 50;
			
		assert.equal(actual, expected);
	});
	it('large - more then kPoint', () => {
		const actual = calculateDistancePoints(134, 'large', 120);
		const expected = 85.2;
			
		assert.equal(actual, expected);
	});
	it('mammoth - exactly kPoint', () => {
		const actual = calculateDistancePoints(200, 'mammoth', 200);
		const expected = 120;
			
		assert.equal(actual, expected);
	});
});