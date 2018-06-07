const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

	describe ('calculateStylePoints', () => {
		it('five various notes', () => {
			const actual = calculateStylePoints([1, 2, 3, 4, 5]);
			const expected = 9;
			
			assert.equal(actual, expected);
		});
		
		it('two notes repeat', () => {
			const actual = calculateStylePoints([1, 1, 2.5, 3, 4]);
			const expected = 6.5;
			
			assert.equal(actual, expected);
		});
		it('all notes are the same', () => {
			const actual = calculateStylePoints([3.5, 3.5, 3.5, 3.5, 3.5]);
			const expected = 10.5;
			
			assert.equal(actual, expected);
		});
		
	/*	it('wrong type!', () => {
			const actual = calculateStylePoints(['abc', 3.5, 3.5, 3.5, 3.5]);
			const expected = NaN;
			
			assert.equal(actual, expected);
		});*/
		
	});
	
