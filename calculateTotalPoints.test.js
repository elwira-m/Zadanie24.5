const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe ('calculateTotalPoints', () => {
	it('mammoth - S.Freund', () => {
		const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7).toFixed(1);
		const expected = 208.3;
			
		assert.equal(actual, expected);
	});
	it('mammoth - M.Glasder', () => {
		const actual = calculateTotalPoints(168, 'mammoth', 200, [16.5, 15.5, 15, 16, 15], -1.7, 0).toFixed(1); 
		const expected = 126.4;
			
		assert.equal(actual, expected);
	});
	it('large - K.Stoch', () => {
		const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], -5.4, 0).toFixed(1); 
		const expected = 137.3;
			
		assert.equal(actual, expected);
	});
	it('normal - S.Hula', () => {
		const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], -14.4, 3.2).toFixed(1);
		const expected = 131.8;
			
		assert.equal(actual, expected);
	});
	it('normal(distance equals kPoint) - R.Koudelka', () => {
		const actual = calculateTotalPoints(98, 'normal', 98, [17, 17, 17.5, 18, 17.5], -8.5, 0).toFixed(1);
		const expected = 103.5;
			
		assert.equal(actual, expected);
	});
});