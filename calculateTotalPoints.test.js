const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe ('calculateTotalPoints', () => {
	it('mammoth - S.Freund', () => {
		const actual = calculateTotalPoints(153, ([18, 18.5, 17.5, 18.5, 18.5]), -8.4, 8.7)
		const expected = 208.3;
			
		assert.equal(actual, expected);
	});
	it('mammoth - M.Glasder', () => {
		const actual = calculateTotalPoints(81.6, 46.5, -1.7, 0)
		const expected = 126.4;
			
		assert.equal(actual, expected);
	});
	it('large - K.Stoch', () => {
		const actual = calculateTotalPoints(85.2, 57.5, -5.4, 0)
		const expected = 137.3;
			
		assert.equal(actual, expected);
	});
	it('normal - S.Hula', () => {
		const actual = calculateTotalPoints(86, 57, -14.4, 3.2)
		const expected = 131.8;
			
		assert.equal(actual, expected);
	});
});

/* calculateTotalPoints
    1) mammoth - S.Freund
    2) mammoth - M.Glasder
    3) large - K.Stoch
    4) normal - S.Hula

  0 passing (15ms)
  4 failing

  1) calculateTotalPoints
       mammoth - S.Freund:
     TypeError: CreateListFromArrayLike called on non-object
      at calculateStylePoints (calculateStylePoints.js:3:21)
      at calculateTotalPoints (calculateTotalPoints.js:6:23)
      at Context.it (calculateTotalPoints.test.js:6:18)*/
